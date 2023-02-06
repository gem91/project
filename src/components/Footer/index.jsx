import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Footer.module.scss'

const Footer = () => {
  const thisYear = new Date().getFullYear()  
  console.log(thisYear);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo />
          <p className={styles.send}>
            Are U Interested In My Work? =&gt;
            <a href="/Contact">Contact Me!</a>
          </p>
          <p className={styles.copy}>©{thisYear} Chloe-Kim. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;