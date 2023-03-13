import React from 'react';
import styles from './BreadCrumbs.module.scss'

const BreadCrumbs = ({text}) => {
  return (
    <h2 className={styles.subject}>&lt;{text} /&gt;</h2>
  );
};

export default BreadCrumbs;