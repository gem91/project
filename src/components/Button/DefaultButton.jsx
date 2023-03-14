import React from 'react';
import styles from './Button.module.scss'


const DefaultButton = ({innerText = 'button', role = 'button', setIsToggle} ) => {

   const handleToggle = (e) => {
      setIsToggle(true)
    }
    const test = (e) => {
      console.log('test');
    }
  return (
    <>
    { setIsToggle && 
      <button 
        className={`${styles.defaultButton} ${styles[role]}`} 
        type={role} 
        onClick={handleToggle}
      >
          {innerText}
      </button>
    }
    { !setIsToggle &&
      <button 
        className={`${styles.defaultButton} ${styles[role]}`} 
        type={role} 
        onClick={test}
      >
        {innerText}
      </button>
    }
  </>
  )
};

export default DefaultButton;