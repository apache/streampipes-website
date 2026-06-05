import React from 'react';
import styles from './docs.module.css';

type FeatureItem = {
  title: string;
  text: string;
  example?: string;
};

type FeatureListProps = {
  items: FeatureItem[];
};

const FeatureList = ({ items }: FeatureListProps) => {
  return (
    <div className={styles.featureList}>
      {items.map((item, index) => (
        <div className={styles.featureItem} key={`${item.title}-${index}`}>
          <h3 className={styles.featureTitle}>{item.title}</h3>
          <p className={styles.featureText}>{item.text}</p>
          {item.example ? (
            <p className={styles.featureExample}>
              <strong>Example:</strong> {item.example}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
