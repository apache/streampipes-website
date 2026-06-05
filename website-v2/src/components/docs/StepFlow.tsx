import React from 'react';
import styles from './docs.module.css';

type StepItem = {
  title: string;
  body: string;
  eyebrow?: string;
};

type StepFlowProps = {
  steps: StepItem[];
};

const StepFlow = ({ steps }: StepFlowProps) => {
  return (
    <div className={styles.stepFlow}>
      {steps.map((step, index) => (
        <div className={styles.stepCard} key={`${step.title}-${index}`}>
          <div className={styles.stepHeader}>
            <span className={styles.stepIndex}>{index + 1}</span>
            <div>
              {step.eyebrow ? (
                <span className={styles.stepEyebrow}>{step.eyebrow}</span>
              ) : null}
              <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>
          </div>
          <p className={styles.stepBody}>{step.body}</p>
        </div>
      ))}
    </div>
  );
};

export default StepFlow;
