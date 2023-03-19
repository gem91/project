import React from 'react';
import styles from './Instagram.module.scss';

import myProfile from '../../assets/images/profile.jpg'

import InstaIcon from '../IconItems/InstaIcon';
import KakaoIcon from '../IconItems/KakaoIcon';
import MessageIcon from '../IconItems/MessageIcon';
import LikeIcon from '../IconItems/LikeIcon';

const Instagram = (props) => {
  
  return (
    <div className={styles.profile}>
    <div className={styles.thumb}>
      <img src={myProfile} alt='민정이 사진' />
    </div>
    <div className={styles.contents}>
      <div className={styles.utils}>
        <div className={styles.sns}>
          <InstaIcon />
          <KakaoIcon />
        </div>
        <div className={styles.ux}>
          <MessageIcon />
          <LikeIcon />
        </div>					
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eius architecto rem delectus! Suscipit, fuga eum eligendi placeat nemo vel!
      </p>
    </div>
  </div>
  )
};

export default Instagram;