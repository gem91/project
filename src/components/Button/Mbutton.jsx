import React from 'react';
import styles from './Button.module.scss'


const Mbutton = ({innerText = 'button', type = 'button', role, setIsToggle} ) => {

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
        className={`${styles.mButton} ${styles[role]}`} 
        type={type} 
        onClick={handleToggle}
      >
        {innerText}
      </button>
    }
    { !setIsToggle &&
      <button 
        className={`${styles.mButton} ${styles[role]}`} 
        type={type} 
        onClick={test}
      >
        {innerText}
      </button>
    }
  </>
  )
};

export default Mbutton;