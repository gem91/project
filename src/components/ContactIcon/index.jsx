import React from 'react';
import styles from './ContactIcon.module.scss'

import { Link } from 'react-router-dom';

const ContactIcon = (props) => {
  return (
    <div className={styles.contactIcon}>
      <Link to="/contact">
        <span class={styles.text}>CONTACT</span>
        <svg className={styles.circle} viewBox="0 0 200 200">
          <circle class={styles.path} cx="100" cy="100" r="100"></circle>
        </svg>
      </Link>
    </div>
  )
};

export default ContactIcon;