import React, { ReactNode } from 'react';
import styles from './docs.module.css';

type ScreenshotFigureProps = {
  src: string;
  alt: string;
  title?: string;
  caption?: ReactNode;
  eyebrow?: string;
  badge?: string;
  href?: string;
  size?: 'full' | 'compact' | 'narrow';
};

const ScreenshotFigure = ({
  src,
  alt,
  title,
  caption,
  eyebrow,
  badge,
  href,
  size = 'full',
}: ScreenshotFigureProps) => {
  const image = <img className={styles.screenshotImage} src={src} alt={alt} />;
  const mediaClassName = `${styles.screenshotMedia} ${
    size === 'compact'
      ? styles.screenshotMediaCompact
      : size === 'narrow'
        ? styles.screenshotMediaNarrow
        : ''
  }`;

  return (
    <figure className={styles.screenshotFrame}>
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
      <div className={mediaClassName}>
        {href ? (
          <a className={styles.screenshotMediaLink} href={href}>
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      {caption ? <figcaption className={styles.screenshotCaption}>{caption}</figcaption> : null}
    </figure>
  );
};

export default ScreenshotFigure;
