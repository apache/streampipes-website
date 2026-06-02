import React, { ReactNode } from 'react';
import styles from './docs.module.css';

type ScreenshotComparisonItem = {
  src: string;
  alt: string;
  title: string;
  caption?: ReactNode;
};

type ScreenshotComparisonProps = {
  items: ScreenshotComparisonItem[];
  title?: string;
  eyebrow?: string;
  badge?: string;
  summary?: ReactNode;
  layout?: 'two-column' | 'stacked';
};

const ScreenshotComparison = ({
  items,
  title,
  eyebrow = 'Comparison',
  badge,
  summary,
  layout = 'two-column',
}: ScreenshotComparisonProps) => {
  return (
    <section className={styles.screenshotFrame}>
      {(title || eyebrow || badge) ? (
        <div className={styles.screenshotHeader}>
          <div className={styles.screenshotHeaderMain}>
            {eyebrow ? (
              <span className={styles.screenshotEyebrow}>{eyebrow}</span>
            ) : null}
            {title ? <h3 className={styles.screenshotTitle}>{title}</h3> : null}
          </div>
          {badge ? <span className={styles.screenshotBadge}>{badge}</span> : null}
        </div>
      ) : null}
      <div
        className={`${styles.comparisonGrid} ${
          layout === 'stacked' ? styles.comparisonStacked : ''
        }`}
      >
        {items.map((item, index) => (
          <article className={styles.comparisonItem} key={`${item.title}-${index}`}>
            <div className={styles.comparisonItemHeader}>
              <h4 className={styles.comparisonItemTitle}>{item.title}</h4>
              {item.caption ? (
                <div className={styles.comparisonItemCaption}>{item.caption}</div>
              ) : null}
            </div>
            <div className={styles.screenshotMedia}>
              <img className={styles.screenshotImage} src={item.src} alt={item.alt} />
            </div>
          </article>
        ))}
      </div>
      {summary ? <div className={styles.comparisonSummary}>{summary}</div> : null}
    </section>
  );
};

export default ScreenshotComparison;
