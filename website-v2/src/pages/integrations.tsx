import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import extensions from '../data/extensions.json';
import {Button, Container, PageIntro, Section} from '../components/ui';
import styles from './integrations.module.css';

type Extension = {id: string; type: 'adapter' | 'processor' | 'sink'; name: string; description: string; category: string; icon: string | null; docs: string};
const all = extensions as Extension[];
const typeLabels: Record<string, string> = {adapter: 'Adapters', processor: 'Data processors', sink: 'Data sinks'};
const typeSingular: Record<string, string> = {adapter: 'Adapter', processor: 'Processor', sink: 'Sink'};
const typeIntro: Record<string, string> = {
  adapter: 'Bring data in from industrial protocols, message brokers, databases, files and HTTP.',
  processor: 'Filter, transform, enrich and analyze live events inside pipelines.',
  sink: 'Send results to databases, brokers, APIs and notification channels.',
};
const counts = {adapter: all.filter(e => e.type === 'adapter').length, processor: all.filter(e => e.type === 'processor').length, sink: all.filter(e => e.type === 'sink').length};

export default function Integrations() {
  const [type, setType] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => Array.from(new Set(all.filter(e => type === 'all' || e.type === type).map(e => e.category))).sort(), [type]);
  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter(e => (type === 'all' || e.type === type) && (category === 'all' || e.category === category) && (!q || e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.id.includes(q)));
  }, [type, category, query]);

  return <Layout title="Integrations" description={`Browse all ${all.length} Apache StreamPipes extensions: ${counts.adapter} adapters for OPC UA, Siemens S7, Modbus, MQTT, Kafka and more, ${counts.processor} data processors and ${counts.sink} data sinks.`}>
    <PageIntro eyebrow="Integrations" title="Everything StreamPipes connects to." lead={`${counts.adapter} adapters, ${counts.processor} data processors and ${counts.sink} data sinks ship with the platform and install at runtime. This list reflects the upcoming release. Need something else? Build it with the SDK.`} actions={<><Button to="/docs/extend-setup/" variant="secondary">Build your own extension</Button><Button to="/docs/configure-operate-extensions/" variant="ghost">How to install extensions</Button></>} />
    <Section tone="light" className={styles.catalog}>
      <Container>
        <div className={styles.toolbar}>
          <div className={styles.types} role="tablist" aria-label="Extension type">
            {[['all', `All (${all.length})`], ['adapter', `${typeLabels.adapter} (${counts.adapter})`], ['processor', `${typeLabels.processor} (${counts.processor})`], ['sink', `${typeLabels.sink} (${counts.sink})`]].map(([value, label]) => (
              <button key={value} type="button" role="tab" aria-selected={type === value} className={styles.typeButton} onClick={() => { setType(value); setCategory('all'); }}>{label}</button>
            ))}
          </div>
          <label className={styles.search}><span className={styles.srOnly}>Search extensions</span><input type="search" placeholder="Search by name, protocol or keyword" value={query} onChange={e => setQuery(e.target.value)} /></label>
        </div>
        {type !== 'all' && <p className={styles.intro}>{typeIntro[type]}</p>}
        <div className={styles.chips} aria-label="Category">
          <button type="button" className={styles.chip} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>All categories</button>
          {categories.map(c => <button key={c} type="button" className={styles.chip} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}
        </div>
        <p className={styles.count} aria-live="polite">{items.length} {items.length === 1 ? 'extension' : 'extensions'}</p>
        <ul className={styles.grid}>
          {items.map(e => <li key={e.id}>
            <Link to={e.docs} className={styles.card}>
              <span className={styles.icon}>{e.icon ? <img src={e.icon} alt="" loading="lazy" decoding="async" /> : <span>{e.name.slice(0, 1)}</span>}</span>
              <span className={styles.body}>
                <span className={styles.name}>{e.name}</span>
                <span className={styles.meta}>{typeSingular[e.type]} · {e.category}</span>
                <span className={styles.text}>{e.description}</span>
              </span>
            </Link>
          </li>)}
        </ul>
        {items.length === 0 && <p className={styles.empty}>Nothing matches. Try another term, or <Link to="/docs/extend-setup/">build the extension you need</Link>.</p>}
      </Container>
    </Section>
  </Layout>;
}
