import React from 'react';
import styles from './Portfolio.module.scss';

// data
import webData from 'db/webData.json'

import BreadCrumbs from 'components/BreadCrumbs';
import BlogCard from 'components/BlogCard';
import PageNav from 'components/PageNav';

const Portfolio = ({isMobile}) => {
 
 
  return (
    <div className={styles.portfolio}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.breadCrumbsBox}>
            <BreadCrumbs text={'Web Site'}></BreadCrumbs>
          </div>
          <div className={styles.projectBox}>
            <BlogCard data={webData} isMobile={isMobile} />
          </div>
        </div>
      </div>
      <PageNav nextName={'toy project'} nextLink={'/toy'} prevLink={'/'} prevName={'about me'} />
    </div>
  )
};

export default Portfolio;