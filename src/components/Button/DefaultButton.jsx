import React from 'react';
import styles from './Button.module.scss'


const DefaultButton = ({type = 'button', role = 'basic'}) => {
  return (
    <button className={`${styles.defaultButton} ${styles[role]}`}>{type}</button>
  )
};

export default DefaultButton;