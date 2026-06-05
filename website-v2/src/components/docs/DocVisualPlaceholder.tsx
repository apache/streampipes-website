import React from 'react';
import styles from './docs.module.css';

type DocVisualPlaceholderProps = {
  title: string;
  purpose?: string;
};

const DocVisualPlaceholder = ({
  title,
  purpose,
}: DocVisualPlaceholderProps) => {
  return (
    <div className={styles.visualPlaceholder}>
      <div className={styles.visualHeader}>
        <span className={styles.visualIcon}>UI</span>
        <h3 className={styles.visualTitle}>{title}</h3>
      </div>
      <div className={styles.visualBody}>
        Place a screenshot or diagram here.
        {purpose ? (
          <span className={styles.visualPurpose}>
            <strong>Purpose:</strong> {purpose}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default DocVisualPlaceholder;
