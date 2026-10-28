import type { FC } from 'react';
import React from 'react';
import Link from '@docusaurus/Link';
import style from './styles.module.scss';

const pythonDocs = 'https://streampipes.apache.org/docs/docs/python/dev/';

const groups = [
  {
    title: 'Platform',
    links: [
      ['Features', '/features/'],
      ['Use cases', '/use-cases/'],
      ['Integrations', '/integrations/'],
      ['Connectivity', '/docs/use-connect/'],
      ['Data management', '/docs/use-datasets/'],
      ['Assets & sites', '/docs/use-assets/'],
      ['Pipelines', '/docs/use-pipelines/'],
      ['Charts & dashboards', '/docs/use-dashboards/'],
      ['Architecture', '/architecture/'],
      ['Enterprise readiness', '/enterprise/'],
      ['Deployment', '/docs/configure-operate-deployment/'],
    ],
  },
  {
    title: 'Build & learn',
    links: [
      ['Documentation', '/docs/user-guide-introduction/'],
      ['Quickstart', '/docs/quick-start-guide/'],
      ['Download', '/download/'],
      ['Python client', pythonDocs],
      ['Java client & APIs', '/docs/use-programmatic-access/'],
      ['Extension SDK', '/docs/extend-setup/'],
      ['Blog', '/blog/'],
      ['Blog RSS feed', 'pathname:///blog/rss.xml'],
    ],
  },
  {
    title: 'Community',
    links: [
      ['Get involved', '/community/get-involved/'],
      ['Mailing lists', '/community/mailing-lists/'],
      ['Team', '/community/team/'],
      ['GitHub', 'https://github.com/apache/streampipes'],
      ['Discussions', 'https://github.com/apache/streampipes/discussions'],
      ['Report an issue', 'https://github.com/apache/streampipes/issues'],
      ['LinkedIn', 'https://www.linkedin.com/company/apache-streampipes'],
      ['X', 'https://x.com/StreamPipes'],
    ],
  },
  {
    title: 'Apache',
    links: [
      ['Foundation', 'https://www.apache.org/'],
      ['License', 'https://www.apache.org/licenses/'],
      ['Events', 'https://www.apache.org/events/'],
      ['Security', 'https://www.apache.org/security/'],
      ['Sponsorship', 'https://www.apache.org/foundation/sponsorship.html'],
      ['Thanks', 'https://www.apache.org/foundation/thanks.html'],
      ['Privacy', 'https://privacy.apache.org/policies/privacy-policy-public.html'],
    ],
  },
];

const Footer: FC = () => (
  <footer className={style.footer}>
    <div className={style.container}>
      <div className={style.top}>
        <Link to="/" aria-label="Apache StreamPipes home">
          <img src="/img/sp-logo-color.png" width="210" height="44" alt="Apache StreamPipes" loading="lazy" />
        </Link>
        <p>Built in the open,<br />by its community.</p>
      </div>
      <div className={style.links}>
        {groups.map(group => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={label}><Link to={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={style.legal}>
        <a href="https://www.apache.org/"><img src="/img/asf_logo_wide.svg" width="174" height="31" alt="The Apache Software Foundation" loading="lazy" /></a>
        <p>
          Copyright © 2019–{new Date().getFullYear()} The Apache Software Foundation. Apache StreamPipes, Apache, the Apache feather logo,
          and the Apache StreamPipes project logo are either registered trademarks or trademarks of The Apache Software Foundation.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
