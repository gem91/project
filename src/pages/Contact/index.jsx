import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//components
import BreadCrumbs from '../../components/BreadCrumbs';
import DefaultButton from '../../components/Button/DefaultButton';
import Instagram from '../../components/Instagram';

import styles from './Contact.module.scss'
import PageNav from '../../components/PageNav';

const Contact = ({isMobile}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init('MOQEomqQUcZoJSbJ_');
    let templateParams  = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }
    emailjs.send('service_mjkim', 'template_p2gz5y8', templateParams).then(function(response){
        alert(`안녕하세요,\n${templateParams.name}님, 메일이 저에게 잘 전달 되었습니다.\n감사합니다.`)
    }, function(error){
        console.log(error);
    })
  }

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <BreadCrumbs text={'Contact'} />
        <div className={styles.content}>
          <div className={styles.leftCont}>
            <h3 className={styles.title}>Hello</h3>
            <p>
              I can help design and build you next website. Let me know what you need by filling in this quick 
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <input  className={styles.formText} id="name" type="text" placeholder='이름' />
              <input className={styles.formText} id="email" type="text" placeholder='abc@gmail.com' />
              <textarea className={styles.formTextarea} id="message" cols="50" rows="10" placeholder='Enter Your Message'></textarea>
              <div className={styles.btnArea}>
                <DefaultButton innerText={'Re-Write'} role={'cancel'} />
                 <button type="submit" value="send">send</button>
              </div>
            </form>       
          </div>
          { !isMobile &&  
            <div className={styles.rightCont}>
              <Instagram></Instagram>
            </div>
          }
        </div>
      </div>
      <PageNav nextName={''} nextLink={''} prevLink={'/toy'} prevName={'toy project'} />
    </div>
  );
};

export default Contact;