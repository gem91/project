import React from 'react';
import styles from './Button.module.scss'


const DefaultButton = ({type = 'button', role = 'basic', setIsToggle} ) => {

   const handleToggle = (e) => {
      setIsToggle(true)
    }
    const test = (e) => {
      console.log('test');
    }
  return (
    <>
    { setIsToggle && 
      <button className={`${styles.defaultButton} ${styles[role]}`} onClick={handleToggle}>{type}</button>
    }
    { !setIsToggle &&
      <button className={`${styles.defaultButton} ${styles[role]}`} onClick={test}>{type}</button>
    }
  </>
  )
};

export default DefaultButton;