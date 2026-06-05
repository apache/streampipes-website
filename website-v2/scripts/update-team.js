#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const https = require('https');

const websiteRoot = path.resolve(__dirname, '..');
const defaultRepoPath = path.resolve(websiteRoot, '..', '..', 'streampipes');
const repoPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultRepoPath;

const sourcePath = path.join(websiteRoot, 'src', 'team', 'team-source.js');
const targetPath = path.join(websiteRoot, 'src', 'team', 'team.js');
const avatarDirectory = path.join(websiteRoot, 'static', 'img', 'team', 'github');

const teamSource = require(sourcePath);

function normalize(value) {
  return String(value || '')
    .trim()
    .toLowerCase();
}

function shellOutGit(args) {
  return execFileSync('git', ['-C', repoPath, ...args], { encoding: 'utf8' });
}

function getGitShortlog() {
  const output = shellOutGit(['shortlog', '-sne', 'HEAD']);
  return output
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const match = line.match(/^(\d+)\s+(.+?)\s+<(.+)>$/);
      if (!match) {
        return null;
      }

      const [, commits, authorName, authorEmail] = match;
      return {
        commits: Number(commits),
        authorName,
        authorEmail,
        normalizedName: normalize(authorName),
        normalizedEmail: normalize(authorEmail),
        emailLocalPart: normalize(authorEmail.split('@')[0])
      };
    })
    .filter(Boolean);
}

function buildMatchers(member) {
  const aliases = new Set([
    normalize(member.name),
    normalize(member.github),
    ...((member.aliases || []).map(normalize))
  ]);

  return {
    aliases,
    matches(entry) {
      if (aliases.has(entry.normalizedName)) {
        return true;
      }

      if (aliases.has(entry.emailLocalPart)) {
        return true;
      }

      return false;
    }
  };
}

function buildTeamData() {
  const shortlogEntries = getGitShortlog();

  const members = teamSource.map(member => {
    const matcher = buildMatchers(member);
    const contributions = shortlogEntries
      .filter(entry => matcher.matches(entry))
      .reduce((sum, entry) => sum + entry.commits, 0);

    return {
      name: member.name,
      github: member.github,
      pmc: member.pmc,
      contributions,
      imageSrc: `/img/team/github/${member.github}.png`
    };
  });

  return members.sort((left, right) => {
    if (right.contributions !== left.contributions) {
      return right.contributions - left.contributions;
    }

    return left.name.localeCompare(right.name);
  });
}

function writeTeamFile(teamData) {
  const content = `module.exports = ${JSON.stringify(teamData, null, 2)};\n`;
  fs.writeFileSync(targetPath, content, 'utf8');
}

function downloadFile(url, targetFile) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(targetFile);

    const request = https.get(url, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(targetFile);
        return resolve(downloadFile(response.headers.location, targetFile));
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(targetFile);
        return reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    });

    request.on('error', error => {
      file.close();
      if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
      }
      reject(error);
    });
  });
}

async function cacheAvatars(teamData) {
  fs.mkdirSync(avatarDirectory, { recursive: true });

  for (const member of teamData) {
    const avatarPath = path.join(avatarDirectory, `${member.github}.png`);
    const avatarUrl = `https://github.com/${member.github}.png?size=240`;
    await downloadFile(avatarUrl, avatarPath);
  }
}

async function main() {
  if (!fs.existsSync(repoPath)) {
    throw new Error(`StreamPipes repository not found: ${repoPath}`);
  }

  const teamData = buildTeamData();
  await cacheAvatars(teamData);
  writeTeamFile(teamData);
  process.stdout.write(`Updated ${path.relative(websiteRoot, targetPath)} from ${repoPath}\n`);
}

main().catch(error => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
