import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//components
import BreadCrumbs from '../../components/BreadCrumbs';
import Mbutton from '../../components/Button/Mbutton';
import Instagram from '../../components/Instagram';

import styles from './Contact.module.scss'
import PageNav from '../../components/PageNav';

const Contact = ({isMobile}) => {
  const formRef = useRef();
  const textArea = useRef();

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


  // const onChange = (e) => {
  //   let text = e.target.value
  //   setMail(text)
  //   if(mail.indexOf('@') === -1) // 'Bye'라는 문자가 없을때
  //   {
  //     alert('@메일주소가 있어야합니다.')
  //   }
  // }

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
            <form ref={formRef} onSubmit={sendEmail}>
              <input  className={styles.formText} id="name" type="text" placeholder='이름' />
              <input ref={textArea} className={styles.formText} id="email" type="text" placeholder='abc@gmail.com' />
              <textarea className={styles.formTextarea} id="message" cols="50" rows="10" placeholder='Enter Your Message'></textarea>
              <div className={styles.btnArea}>
                <Mbutton innerText={'Re-Write'} type={'button'} role={'cancel'} />
                <Mbutton innerText={'Send'} type={'submit'} role={'send'} />
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