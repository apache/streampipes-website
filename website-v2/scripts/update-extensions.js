/**
 * Builds src/data/extensions.json from the extensions reference in sidebars.json and the docs/pe/*.md pages.
 * Run with `npm run update-extensions` after the reference docs change (they are generated from the main repository).
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sidebars = require(path.join(root, 'sidebars.json'));
const docsDir = path.resolve(root, '..', 'docs', 'pe');
const iconDir = path.join(root, 'static', 'img', 'pipeline-elements');

const reference = sidebars.documentation.find(entry => typeof entry?.label === 'string' && entry.label.endsWith('Extensions Reference'));
const types = {Adapters: 'adapter', 'Data Processors': 'processor', 'Data Sinks': 'sink'};

function readDoc(id) {
  const file = path.join(docsDir, `${id}.md`);
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, 'utf8');
  const fm = /^---\n([\s\S]*?)\n---/.exec(text);
  const get = key => (new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, 'm').exec(fm ? fm[1] : '') || [])[1];
  const body = text.slice(fm ? fm[0].length : 0).replace(/<!--[\s\S]*?-->/g, '');
  const section = /##\s*Description\s*\n([\s\S]*?)(?:\n##|\n\*\*\*|$)/i.exec(body);
  const paragraph = (section ? section[1] : body)
    .split(/\n\s*\n/).map(p => p.trim())
    .find(p => p && !p.startsWith('<') && !p.startsWith('#') && !p.startsWith('![') && !p.startsWith('import ') && !p.startsWith('|'));
  const description = (paragraph || '').replace(/\s+/g, ' ').replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').slice(0, 220);
  return {title: get('title') || get('sidebar_label') || id, description};
}

function categoryOf(id, type) {
  if (type !== 'adapter') {
    if (/geo\.|latlong|jts/.test(id)) return 'Geo';
    if (/textmining|chunker|tokenizer|namefinder|sentencedetection|partofspeech/.test(id)) return 'Text';
    if (/imageclassification|image-|qrcode/.test(id)) return 'Image';
    if (/llm|multimodel/.test(id)) return 'AI';
    if (/siddhi|changedetection|welford|sdt|movingaverage|trigonometry|math|expression|jseval|limits|valuechange|changed-value|increase|topk/.test(id)) return 'Analytics';
    if (/filters\.jvm|threshold|numericalfilter|textfilter|booleanfilter|project|merge|compose|schema|limit|throughput/.test(id)) return 'Filter and route';
    if (/sinks\.notifications/.test(id)) return 'Notifications';
    if (/sinks\.databases|datalake/.test(id)) return 'Databases and storage';
    if (/sinks\.brokers|websocket|rest|bufferrest/.test(id)) return 'Brokers and APIs';
    return 'Transformation';
  }
  if (/plc4x|opcua|oi4|wincc|ros|iolink|modbus|s7|ads|bacnet|knx|profinet|open-protocol|eip|iec/.test(id)) return 'Industrial protocols';
  if (/kafka|pulsar|rocketmq|tubemq|nats|mqtt/.test(id)) return 'Message brokers';
  if (/influxdb|mssql|cdc/.test(id)) return 'Databases';
  if (/file|http|httpserver/.test(id)) return 'Files and HTTP';
  return 'Simulators and other';
}

const seen = new Set();
const items = [];
for (const category of reference.items) {
  const type = types[category.label];
  if (!type) continue;
  for (const entry of category.items) {
    const id = entry.replace(/^pe\//, '');
    if (seen.has(id)) continue;
    seen.add(id);
    const doc = readDoc(id);
    if (!doc) continue;
    items.push({
      id, type, name: doc.title, description: doc.description,
      category: categoryOf(id, type),
      icon: fs.existsSync(path.join(iconDir, id, 'icon.png')) ? `/img/pipeline-elements/${id}/icon.png` : null,
      docs: `/docs/pe/${id}/`,
    });
  }
}
items.sort((a, b) => a.name.localeCompare(b.name));
const out = path.join(root, 'src', 'data', 'extensions.json');
fs.mkdirSync(path.dirname(out), {recursive: true});
fs.writeFileSync(out, JSON.stringify(items, null, 2) + '\n');
console.log(`wrote ${items.length} extensions to ${path.relative(root, out)}`);
