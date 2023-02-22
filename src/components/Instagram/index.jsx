import React from 'react';
import styles from './Instagram.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Instagram = (props) => (
  <div className={styles.profile}>
    <div className={styles.thumb}>
      <img src={`http://placeimg.com/600/700/any`} alt='민정이 사진' />
    </div>
    <div className={styles.contents}>
      <div className={styles.utils}>
        <div className={styles.sns}>
          <Link to="/secret"><i className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /><span className='ir-hidden'>인스타그램</span></i></Link>
          <Link to="https://open.kakao.com/o/sxXcRZ2e" target='_blank'>
             <i className={styles.kakao}><img src={require('../../assets/images/icons/ico-kakao.png')} alt='test' /><span className='ir-hidden'>카카오톡</span></i>
          </Link>
          {/* <a href='https://open.kakao.com/o/sxXcRZ2e'>
           
          </a> */}
        </div>
        <div className={styles.ux}>
        <Link to='/contact'>
          <i className={styles.message}><FontAwesomeIcon icon={faEnvelope} /><span className='ir-hidden'>연락하기</span></i>
        </Link>
        <button type="button">
          <i className={styles.like}><FontAwesomeIcon icon={faHeart} /><span className='ir-hidden'>좋아요</span></i>
        </button>
        </div>					
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eius architecto rem delectus! Suscipit, fuga eum eligendi placeat nemo vel!
      </p>
    </div>
  </div>
  );

export default Instagram;