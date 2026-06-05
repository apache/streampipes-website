#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const websiteRoot = path.resolve(__dirname, '..');
const defaultRepoPath = path.resolve(websiteRoot, '..', '..', 'streampipes');
const repoPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultRepoPath;

const sourcePath = path.join(websiteRoot, 'src', 'team', 'team-source.js');
const targetPath = path.join(websiteRoot, 'src', 'team', 'team.js');

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
      imageSrc: `https://github.com/${member.github}.png?size=240`
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

function main() {
  if (!fs.existsSync(repoPath)) {
    throw new Error(`StreamPipes repository not found: ${repoPath}`);
  }

  const teamData = buildTeamData();
  writeTeamFile(teamData);
  process.stdout.write(`Updated ${path.relative(websiteRoot, targetPath)} from ${repoPath}\n`);
}

main();
