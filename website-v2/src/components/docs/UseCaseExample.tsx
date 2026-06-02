import React, { ReactNode } from 'react';
import styles from './docs.module.css';

type UseCaseExampleProps = {
  title: string;
  children: ReactNode;
};

const UseCaseExample = ({ title, children }: UseCaseExampleProps) => {
  return (
    <div className={styles.exampleBox}>
      <span className={styles.exampleLabel}>Use Case</span>
      <h3 className={styles.exampleTitle}>{title}</h3>
      <div className={styles.exampleBody}>{children}</div>
    </div>
  );
};

export default UseCaseExample;
