import React from 'react';
import styles from './Button.module.scss'


const Mbutton = ({innerText = 'button', type = 'button', role, setIsPopup} ) => {

   const handleToggle = (e) => {
      setIsPopup(true)
    }
    const test = (e) => {
      console.log('test');
    }
  return (
    <>
    { setIsPopup && 
      <button 
        className={`${styles.mButton} ${styles[role]}`} 
        type={type} 
        onClick={handleToggle}
      >
        {innerText}
      </button>
    }
    { !setIsPopup &&
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