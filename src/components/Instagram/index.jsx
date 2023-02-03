import React from 'react';
import './Instagram.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Instagram = (props) => (
  <div className='insta-profile'>
    <div className='thumb'>
      <img src={`http://placeimg.com/600/700/any`} alt='민정이 사진' />
    </div>
    <div className='contents'>
      <div className='utils'>
        <div className='sns'>
          <a href='#'>
            <i className='instagram'><FontAwesomeIcon icon={faInstagram} /><span className='ir-hidden'>인스타그램</span></i>
          </a>
          <a href='#'>
            <i className='kakao'><img src={require('../../assets/images/icons/ico-kakao.png')} alt='test' /><span className='ir-hidden'>카카오톡</span></i>
          </a>
        </div>
        <div className='ux'>
        <Link to='/Contact'>
          <i className='contact'><FontAwesomeIcon icon={faEnvelope} /><span className='ir-hidden'>연락하기</span></i>
        </Link>
        <button type="button">
          <i className='like'><FontAwesomeIcon icon={faHeart} /><span className='ir-hidden'>좋아요</span></i>
        </button>
        </div>					
      </div>
      <p className='text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eius architecto rem delectus! Suscipit, fuga eum eligendi placeat nemo vel!
      </p>
    </div>
  </div>
  );

export default Instagram;