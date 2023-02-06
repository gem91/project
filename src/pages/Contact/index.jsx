import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Instagram from '../../components/Instagram';

import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <BreadCrumbs text={'Contact'}></BreadCrumbs>
        <div className={styles.content}>
          <div className={styles.leftCont}>
            <h3 className={styles.title}>Hello</h3>
            <p>
              I can help design and build you next website. Let me know what you need by filling in this quick 
            </p>
            <form>
              <input className={styles.formEmail} type="email" placeholder='abc@gmail.com' />
              <textarea className={styles.formContext} cols="50" rows="10"></textarea>
              <div className={styles.btnArea}>
                <button className={styles.btnSend} type='button'>Send</button>
              </div>
            </form>       
          </div>
          <div className={styles.rightCont}>
            <Instagram></Instagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;