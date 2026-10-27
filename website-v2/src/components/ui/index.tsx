/**
 * StreamPipes UI component library.
 * Small, composable building blocks for marketing and landing pages (homepage, use cases, integrations).
 * Styling lives in ui.module.css; colors and type come from the --sp-* tokens in src/css/customTheme.css.
 */
import React, {useRef} from 'react';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import s from './ui.module.css';

type Tone = 'light' | 'tint' | 'dark';

/* ---------- Layout ---------- */

export function Section({id, tone = 'light', bordered = false, className, children, ...rest}: React.HTMLAttributes<HTMLElement> & {id?: string; tone?: Tone; bordered?: boolean}) {
  return <section id={id} className={clsx(s.section, s[tone], bordered && s.bordered, className)} {...rest}>{children}</section>;
}

export function Container({narrow = false, center = false, className, children}: {narrow?: boolean; center?: boolean; className?: string; children: React.ReactNode}) {
  return <div className={clsx(s.container, narrow && s.narrow, center && s.center, className)}>{children}</div>;
}

export function SectionHead({eyebrow, title, lead, action}: {eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; action?: React.ReactNode}) {
  return <div className={s.sectionHead}>
    <div>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<Headline level={2}>{title}</Headline></div>
    <div>{lead && <p className={s.lead}>{lead}</p>}{action && <div style={{marginTop: 20}}>{action}</div>}</div>
  </div>;
}

/* ---------- Typography ---------- */

export function Eyebrow({children}: {children: React.ReactNode}) {
  return <span className={s.eyebrow}>{children}</span>;
}

export function Badge({children, to}: {children: React.ReactNode; to?: string}) {
  return to ? <Link className={s.badge} to={to}>{children}</Link> : <span className={s.badge}>{children}</span>;
}

export function Headline({level = 2, children, className}: {level?: 1 | 2 | 3; children: React.ReactNode; className?: string}) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';
  return <Tag className={clsx(s.headline, s[`h${level}`], className)}>{children}</Tag>;
}

export function Accent({children}: {children: React.ReactNode}) {
  return <span className={s.accent}>{children}</span>;
}

export function Lead({children, className}: {children: React.ReactNode; className?: string}) {
  return <p className={clsx(s.lead, className)}>{children}</p>;
}

/* ---------- Actions ---------- */

export function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Button({to, href, variant = 'primary', size, children, className, arrow = true, ...rest}: {to?: string; href?: string; variant?: 'primary' | 'secondary' | 'secondaryLight' | 'ghost'; size?: 'large'; children: React.ReactNode; className?: string; arrow?: boolean} & Record<string, unknown>) {
  const cls = clsx(s.button, s[variant], size && s[size], className);
  const content = <>{children}{arrow && <Arrow />}</>;
  if (to) return <Link className={cls} to={to} {...rest}>{content}</Link>;
  return <a className={cls} href={href} {...rest}>{content}</a>;
}

export function Actions({children, className}: {children: React.ReactNode; className?: string}) {
  return <div className={clsx(s.actions, className)}>{children}</div>;
}

/* ---------- Cards ---------- */

export function Card({to, href, title, children, icon, media, link, span, className}: {to?: string; href?: string; title?: React.ReactNode; children?: React.ReactNode; icon?: React.ReactNode; media?: {src: string; alt: string}; link?: string; span?: 2 | 3 | 4 | 6; className?: string}) {
  const cls = clsx(s.card, span && s[`span${span}`], className);
  const body = <>
    {media && <div className={s.cardMedia}><img src={media.src} alt={media.alt} loading="lazy" decoding="async" /></div>}
    {icon && <span className={s.iconBox} aria-hidden="true">{icon}</span>}
    {title && <div className={s.cardTitle}>{title}</div>}
    {children && <div className={s.cardText}>{children}</div>}
    {link && <span className={s.cardLink}>{link}<Arrow /></span>}
  </>;
  if (to) return <Link className={cls} to={to}>{body}</Link>;
  if (href) return <a className={cls} href={href}>{body}</a>;
  return <div className={cls}>{body}</div>;
}

export function Bento({children, className}: {children: React.ReactNode; className?: string}) {
  return <div className={clsx(s.bento, className)}>{children}</div>;
}

/* ---------- Feature list ---------- */

export function FeatureList({items}: {items: Array<{icon: React.ReactNode; title: string; text: string; to?: string}>}) {
  return <div className={s.featureList}>{items.map(item => {
    const body = <><span className={s.iconBox} aria-hidden="true">{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></>;
    return item.to ? <Link key={item.title} className={s.featureRow} to={item.to}>{body}</Link> : <div key={item.title} className={s.featureRow}>{body}</div>;
  })}</div>;
}

/* ---------- Stats ---------- */

export function Stats({children}: {children: React.ReactNode}) {
  return <div className={s.stats}>{children}</div>;
}

export function Stat({value, label, note, to}: {value: React.ReactNode; label: string; note?: string; to?: string}) {
  const body = <><span className={s.statValue}>{value}</span><span className={s.statLabel}>{label}</span>{note && <span className={s.statNote}>{note}</span>}</>;
  return to ? <Link className={s.stat} to={to}>{body}</Link> : <div className={s.stat}>{body}</div>;
}

/* ---------- Logo wall ---------- */

export type Logo = {name: string; src: string; to?: string};

export function LogoWall({logos, scroll = false, label}: {logos: Logo[]; scroll?: boolean; label?: string}) {
  const chip = (logo: Logo) => {
    const inner = <><img src={logo.src} alt="" loading="lazy" decoding="async" />{logo.name}</>;
    return logo.to ? <Link key={logo.name} className={s.logoChip} to={logo.to}>{inner}</Link> : <span key={logo.name} className={s.logoChip}>{inner}</span>;
  };
  if (!scroll) return <div className={s.logoStatic} aria-label={label}>{logos.map(chip)}</div>;
  return <div className={s.logoWall} aria-label={label}><div className={s.logoTrack}>{logos.map(chip)}</div></div>;
}

/* ---------- Tabs ---------- */

export function Tabs({id, label, items, selected, onSelect, className}: {id: string; label: string; items: string[]; selected: number; onSelect: (index: number) => void; className?: string}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  return <div className={clsx(s.tabs, className)} role="tablist" aria-label={label}>
    {items.map((item, index) => <button
      key={item} ref={el => { refs.current[index] = el; }} className={s.tab}
      id={`${id}-tab-${index}`} role="tab" type="button" aria-selected={selected === index} aria-controls={`${id}-panel`}
      tabIndex={selected === index ? 0 : -1} onClick={() => onSelect(index)}
      onKeyDown={event => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % items.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = items.length - 1;
        else return;
        event.preventDefault(); onSelect(next); refs.current[next]?.focus();
      }}
    >{item}</button>)}
  </div>;
}

export function TabPanel({id, selected, className, children}: {id: string; selected: number; className?: string; children: React.ReactNode}) {
  return <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0} className={className}>{children}</div>;
}

/* ---------- Code panel ---------- */

export function CodePanel({title, language, code, wrap = false, meta}: {title: string; language: string; code: string; wrap?: boolean; meta?: string}) {
  return <div className={clsx(s.codePanel, wrap && s.wrap)}>
    <div className={s.codeHead}><span>{title}</span><span>{meta ?? language}</span></div>
    <CodeBlock language={language}>{code}</CodeBlock>
  </div>;
}

/* ---------- Screenshot frame ---------- */

export function ScreenshotFrame({src, alt, caption, width, height, priority = false, className}: {src: string; alt: string; caption?: React.ReactNode; width?: number; height?: number; priority?: boolean; className?: string}) {
  return <figure className={s.figure}>
    <div className={clsx(s.frame, className)}>
      <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} decoding="async" {...(priority ? {fetchPriority: 'high'} : {})} />
    </div>
    {caption && <figcaption className={s.frameCaption}>{caption}</figcaption>}
  </figure>;
}

/* ---------- Steps ---------- */

export function Steps({items}: {items: Array<{title: string; text: string}>}) {
  return <ol className={s.steps}>{items.map((item, i) => <li key={item.title} className={s.step}><div className={s.stepNum}>{String(i + 1).padStart(2, '0')}</div><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>;
}

/* ---------- Flow diagram ---------- */

/** "Machine signal to insight" diagram: numbered nodes connected by arrows. Pure SVG; a list replaces it on narrow screens. */
export function FlowDiagram({nodes}: {nodes: Array<{label: string; sub: string}>}) {
  const W = 1040, H = 120, nodeW = 176, nodeH = 70, y = 25;
  const gap = (W - nodes.length * nodeW) / (nodes.length - 1);
  const xs = nodes.map((_, i) => i * (nodeW + gap));
  return <>
    <ol className={s.flowList} aria-label="Data flow">{nodes.map((n, i) => <li key={n.label} className={s.flowItem}><i>{String(i + 1).padStart(2, '0')}</i><span><strong>{n.label}</strong><small>{n.sub}</small></span></li>)}</ol>
    <svg className={s.flow} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={nodes.map(n => n.label).join(', then ')}>
      <defs><marker id="flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path className={s.flowArrow} d="M0 0 8 4 0 8Z" /></marker></defs>
      {xs.slice(0, -1).map((x, i) => <line key={i} className={s.flowLine} x1={x + nodeW + 2} y1={y + nodeH / 2} x2={xs[i + 1] - 3} y2={y + nodeH / 2} markerEnd="url(#flow-arrow)" />)}
      {nodes.map((n, i) => <g key={n.label} transform={`translate(${xs[i]} ${y})`}>
        <rect className={i === 0 || i === nodes.length - 1 ? s.flowNode : s.flowNodeActive} width={nodeW} height={nodeH} rx="8" />
        <text className={s.flowIndex} x="16" y="22">{String(i + 1).padStart(2, '0')}</text>
        <text className={s.flowLabel} x="16" y="42">{n.label}</text>
        <text className={s.flowSub} x="16" y="58">{n.sub}</text>
      </g>)}
    </svg>
  </>;
}

/* ---------- Deployment diagram ---------- */

/** OT/IT deployment: edge extension services in plant networks connect outbound to the broker and core in IT. Pure SVG; a list replaces it on narrow screens. */
export function DeploymentDiagram() {
  const Box = ({x, y, w, h, title, sub, strong = false}: {x: number; y: number; w: number; h: number; title: string; sub?: string; strong?: boolean}) => <g transform={`translate(${x} ${y})`}>
    <rect className={strong ? s.dpBoxStrong : s.dpBox} width={w} height={h} rx="8" />
    <text className={s.dpTitle} x="14" y={sub ? h / 2 - 2 : h / 2 + 5}>{title}</text>
    {sub && <text className={s.dpSub} x="14" y={h / 2 + 16}>{sub}</text>}
  </g>;
  const Site = ({y, name}: {y: number; name: string}) => <g>
    <rect className={s.dpSite} x="40" y={y} width="470" height="200" rx="10" />
    <text className={s.dpZoneLabel} x="56" y={y + 24}>{name}</text>
    <Box x={56} y={y + 40} w={130} h={46} title="PLC" sub="Siemens S7, Modbus" />
    <Box x={198} y={y + 40} w={140} h={46} title="OPC UA server" sub="Machines, lines" />
    <Box x={350} y={y + 40} w={144} h={46} title="Sensors, brokers" sub="MQTT, files, HTTP" />
    {[121, 268, 422].map(x => <line key={x} className={s.dpLine} x1={x} y1={y + 86} x2={x} y2={y + 110} markerEnd="url(#dp-arrow)" />)}
    <Box x={56} y={y + 114} w={438} h={62} title="Extension service at the edge" sub="Adapters and Functions, deployed with Docker next to the machines" strong />
  </g>;
  return <>
    <ol className={s.flowList} aria-label="Deployment">
      <li className={s.flowItem}><i>OT</i><span><strong>Plant network</strong><small>PLCs, OPC UA servers and sensors feed an edge extension service with adapters and Functions</small></span></li>
      <li className={s.flowItem}><i>FW</i><span><strong>Firewall</strong><small>Edge services connect outbound to the broker; no inbound ports on the OT side</small></span></li>
      <li className={s.flowItem}><i>IT</i><span><strong>Data center or cloud</strong><small>Message broker, core with UI and APIs, time-series storage, processors and sinks</small></span></li>
    </ol>
    <svg className={s.flow} viewBox="0 0 1100 480" role="img" aria-label="Deployment: in each plant network, PLCs, OPC UA servers and sensors feed an edge extension service. Edge services connect outbound through the firewall to a message broker in IT, which links the core with UI and APIs, time-series storage and IT extension services with processors and sinks.">
      <defs><marker id="dp-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path className={s.dpArrow} d="M0 0 8 4 0 8Z" /></marker></defs>
      <rect className={s.dpZone} x="20" y="20" width="510" height="440" rx="12" />
      <text className={s.dpZoneTitle} x="40" y="46">OT</text><text className={s.dpZoneSub} x="68" y="46">Plant networks</text>
      <Site y={60} name="Plant A" />
      <Site y={262} name="Plant B" />
      <line className={s.dpBoundary} x1="555" y1="86" x2="555" y2="460" />
      <rect className={s.dpTag} x="518" y="28" width="74" height="30" rx="6" />
      <text className={s.dpTagText} x="555" y="47" textAnchor="middle">Firewall</text>
      <rect className={s.dpZone} x="580" y="20" width="500" height="440" rx="12" />
      <text className={s.dpZoneTitle} x="600" y="46">IT</text><text className={s.dpZoneSub} x="620" y="46">Data center or cloud</text>
      <Box x={600} y={180} w={150} h={120} title="Message broker" sub="NATS or Kafka" strong />
      <path className={s.dpLineAccent} d="M494 205 H530 C 565 205, 565 226, 600 226" markerEnd="url(#dp-arrow)" />
      <path className={s.dpLineAccent} d="M494 421 H530 C 565 421, 565 254, 600 254" markerEnd="url(#dp-arrow)" />
      <text className={s.dpNote} x="555" y="76" textAnchor="middle">outbound only, TLS</text>
      <Box x={790} y={60} w={250} h={78} title="Core" sub="UI, management, monitoring, APIs" strong />
      <Box x={790} y={162} w={250} h={60} title="Time-series storage" sub="Datasets, retention, export" />
      <Box x={790} y={246} w={250} h={78} title="Extension services in IT" sub="Processors and sinks" strong />
      <Box x={790} y={348} w={250} h={60} title="Clients and third-party systems" sub="Python, Java, REST, databases, brokers" />
      <line className={s.dpLine} x1="750" y1="240" x2="770" y2="240" /><line className={s.dpLine} x1="770" y1="99" x2="770" y2="285" />
      <line className={s.dpLine} x1="770" y1="99" x2="790" y2="99" markerEnd="url(#dp-arrow)" />
      <line className={s.dpLine} x1="770" y1="285" x2="790" y2="285" markerEnd="url(#dp-arrow)" />
      <line className={s.dpLine} x1="915" y1="138" x2="915" y2="162" markerEnd="url(#dp-arrow)" />
      <line className={s.dpLine} x1="915" y1="246" x2="915" y2="222" markerEnd="url(#dp-arrow)" />
      <line className={s.dpLine} x1="915" y1="324" x2="915" y2="348" markerEnd="url(#dp-arrow)" />
      <path className={s.dpLine} d="M1040 99 H1060 V378 H1046" markerEnd="url(#dp-arrow)" />
    </svg>
  </>;
}

/* ---------- Page intro (sub-page header) ---------- */

export function PageIntro({eyebrow, title, lead, actions}: {eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; actions?: React.ReactNode}) {
  return <Section tone="light" className={s.pageIntro}>
    <Container>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Headline level={1} className={s.pageTitle}>{title}</Headline>
      {lead && <Lead>{lead}</Lead>}
      {actions && <Actions className={s.pageActions}>{actions}</Actions>}
    </Container>
  </Section>;
}

/* ---------- Table ---------- */

export function Table({head, rows, caption}: {head: string[]; rows: React.ReactNode[][]; caption?: string}) {
  return <div className={s.tableWrap}><table className={s.table}>
    {caption && <caption className={s.tableCaption}>{caption}</caption>}
    <thead><tr>{head.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead>
    <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}

/* ---------- Numbered list (procedures) ---------- */

export function NumberedList({items}: {items: Array<{title: string; children: React.ReactNode}>}) {
  return <ol className={s.numbered}>{items.map((item, i) => <li key={item.title}><span className={s.numberedIndex}>{i + 1}</span><div><h3>{item.title}</h3><div className={s.numberedBody}>{item.children}</div></div></li>)}</ol>;
}
