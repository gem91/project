import React from 'react';
import styles from './ContactIcon.module.scss'

import { Link } from 'react-router-dom';

const ContactIcon = ({setCursorStyle, cursorBasic}) => {

  const onMouseEnter = () => {
    const hoverStyle = {
      width: '40px',
      height: '40px',
      background: 'red'
    };
    setCursorStyle(hoverStyle)
  }
  
  const onMouseLeave = () => {
    setCursorStyle(cursorBasic)
  }
 
  return (
    <div className={styles.contactIcon}>
      <Link to="/contact" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
      >
        <span className={styles.text}>CONTACT</span>
        <svg className={styles.circle} viewBox="0 0 200 200">
          <circle className={styles.path} cx="100" cy="100" r="100"></circle>
        </svg>
      </Link>
    </div>
  )
};

export default ContactIcon;