#!/usr/bin/env node
/**
 * Adds a `description` front matter field to pipeline element docs
 * (docs/pe/*.md and versioned_docs/version-<last release>/pe/*.md) that do
 * not have one yet.
 *
 * Why: the pipeline element docs start with the ASF license header as an
 * HTML comment. Docusaurus derives the meta description from the first
 * paragraph, so without an explicit description Google shows "<!--" as the
 * search snippet. The description is derived from the first paragraph of the
 * "## Description" section (or the first real paragraph if there is none).
 *
 * The pe docs are synced from the main apache/streampipes repository, so this
 * script is idempotent and meant to be re-run after every sync:
 *
 *   node scripts/add-pe-descriptions.js            # apply
 *   node scripts/add-pe-descriptions.js --dry-run  # print what would change
 *   node scripts/add-pe-descriptions.js <dir>...   # custom directories
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_DIRS = [
  path.join(ROOT, '..', 'docs', 'pe'),
  path.join(ROOT, 'versioned_docs', 'version-0.98.0', 'pe'),
];
const MAX_LENGTH = 160;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const dirs = args.filter((a) => !a.startsWith('--'));
const targetDirs = dirs.length ? dirs.map((d) => path.resolve(d)) : DEFAULT_DIRS;

function splitFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return null;
  }
  return { frontMatter: match[1], body: source.slice(match[0].length), raw: match[0] };
}

function cleanBody(body) {
  return body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '');
}

function firstParagraph(text) {
  const lines = text.split(/\r?\n/);
  const paragraph = [];
  for (const rawLine of lines) {
    const line = rawLine.trim();
    const isNoise =
      line === '' ||
      /^#{1,6}\s/.test(line) ||
      /^(\*{3,}|-{3,}|_{3,})$/.test(line) ||
      /^\|/.test(line) ||
      /^```/.test(line) ||
      /^:::/.test(line);
    if (isNoise) {
      if (paragraph.length) {
        break;
      }
      continue;
    }
    paragraph.push(line);
  }
  return paragraph.join(' ');
}

function descriptionSource(body) {
  const cleaned = cleanBody(body);
  const sectionMatch = cleaned.match(/^##\s+Description\s*$([\s\S]*?)(?=^##\s|\Z)/m);
  const section = sectionMatch ? sectionMatch[1] : cleaned;
  const paragraph = firstParagraph(section);
  return paragraph || firstParagraph(cleaned);
}

function stripMarkdown(text) {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text) {
  if (text.length <= MAX_LENGTH) {
    return text;
  }
  // Prefer a sentence boundary, then a word boundary.
  const sentenceEnd = text.lastIndexOf('. ', MAX_LENGTH);
  if (sentenceEnd > 60) {
    return text.slice(0, sentenceEnd + 1);
  }
  const cut = text.slice(0, MAX_LENGTH - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

function elementKind(id) {
  if (/\.sinks?\./.test(id) || /\.sink$/.test(id)) {
    return 'data sink';
  }
  if (/\.processors?\./.test(id)) {
    return 'data processor';
  }
  return 'adapter';
}

function polish(text, title, id) {
  let result = text.charAt(0).toUpperCase() + text.slice(1);
  if (!/[.!?…]$/.test(result)) {
    result += '.';
  }
  // Very short summaries ("Stores events in TsFile.") get context so the
  // snippet names the element and the product.
  if (result.length < 90 && title && !/StreamPipes/i.test(result)) {
    result = `${title} ${elementKind(id)} for Apache StreamPipes: ${result}`;
  }
  return result;
}

function yamlQuote(text) {
  return `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

let changed = 0;
let skipped = 0;
let failed = 0;

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    console.warn(`skip missing dir ${dir}`);
    continue;
  }
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const filePath = path.join(dir, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const parts = splitFrontMatter(source);
    if (!parts) {
      console.warn(`no front matter: ${filePath}`);
      failed += 1;
      continue;
    }
    if (/^description:/m.test(parts.frontMatter)) {
      skipped += 1;
      continue;
    }
    const title = (parts.frontMatter.match(/^title:\s*(.+)$/m) || [])[1]?.trim().replace(/^["']|["']$/g, '');
    const id = (parts.frontMatter.match(/^id:\s*(.+)$/m) || [, file.replace(/\.md$/, '')])[1].trim();
    const raw = stripMarkdown(descriptionSource(parts.body));
    const description = raw ? truncate(polish(raw, title, id)) : '';
    if (!description) {
      console.warn(`no description derivable: ${filePath}`);
      failed += 1;
      continue;
    }
    const line = `description: ${yamlQuote(description)}`;
    const newFrontMatter = /^title:.*$/m.test(parts.frontMatter)
      ? parts.frontMatter.replace(/^(title:.*)$/m, `$1\n${line}`)
      : `${parts.frontMatter}\n${line}`;
    changed += 1;
    if (dryRun) {
      console.log(`${path.relative(ROOT, filePath)}\n  ${description}`);
      continue;
    }
    fs.writeFileSync(filePath, `---\n${newFrontMatter}\n---\n${parts.body}`);
  }
}

console.log(`${dryRun ? 'would change' : 'changed'} ${changed}, skipped ${skipped}, failed ${failed}`);
process.exit(failed ? 1 : 0);
