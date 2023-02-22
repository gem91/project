import React from 'react';
import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';

const Portfolio = (props) => (
    <div className={styles.portfolio}>
      <div class={styles.container}>
         <BreadCrumbs text={'Project'}></BreadCrumbs>
        <p className="title">
        </p>
      </div>
    </div>
  );

export default Portfolio;