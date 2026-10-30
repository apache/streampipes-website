import React from 'react';
import Link from '@docusaurus/Link';
import {Button, NumberedList} from '../ui';
import styles from './download.module.css';

type Props = {version: string; releaseDate: string; showMoreInfo?: boolean};

/** Source release download plus the steps to a running instance. Used on the download page. */
export default function DownloadSection({version, releaseDate, showMoreInfo = false}: Props) {
  const archive = `apache-streampipes-${version}-source-release.zip`;
  const mirror = `https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/${version}/${archive}`;
  const dist = `https://downloads.apache.org/streampipes/${version}/${archive}`;
  return <section className={styles.section}>
    <div className={styles.release}>
      <div className={styles.releaseHead}>
        <div><span className={styles.eyebrow}>Latest release</span><h3>Apache StreamPipes {version}</h3><p>Source release, {releaseDate}. Includes the installer with Docker Compose and Kubernetes presets.</p></div>
        <Button href={mirror} arrow={false}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>Download ZIP</Button>
      </div>
      <dl className={styles.meta}>
        <div><dt>File</dt><dd><a href={mirror}>{archive}</a></dd></div>
        <div><dt>Verify</dt><dd><a href={`${dist}.sha512`}>SHA512</a> · <a href={`${dist}.asc`}>PGP signature</a> · <a href="https://downloads.apache.org/streampipes/KEYS">KEYS</a></dd></div>
        <div><dt>Notes</dt><dd><a href="https://github.com/apache/streampipes/blob/dev/RELEASE_NOTES.md">Release notes</a> · <a href="https://www.apache.org/dyn/closer.cgi#verify" target="_blank" rel="noreferrer">How to verify</a></dd></div>
      </dl>
    </div>
    <NumberedList items={[
      {title: 'Start the installer', children: <><p>Extract the archive, open <code>installer/compose/</code> and run <code>docker compose up -d</code>. The legacy <code>docker-compose</code> binary works as well.</p><p>For Kubernetes, distributed OT/IT setups or another broker, continue with the <Link to="/docs/configure-operate-deployment/">deployment documentation</Link>.</p></>},
      {title: 'Open the web interface', children: <p>Open <code>http://localhost:80</code>, or the host name of the server running StreamPipes, and complete the setup flow. The default login is <code>admin@streampipes.apache.org</code> with password <code>admin</code>.</p>},
      ...(showMoreInfo ? [{title: 'Build your first workflow', children: <p>The <Link to="/docs/quick-start-guide/">quickstart</Link> takes you from a first data source to a dataset, a chart and a dashboard in a few minutes.</p>}] : []),
    ]} />
  </section>;
}
