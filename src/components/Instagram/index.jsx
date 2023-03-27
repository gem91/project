import React from 'react';
import styles from './Instagram.module.scss';

import myProfile from 'assets/images/profile.jpg'

//components
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
        디자이너 감각으로 UX·UI 고려하는 #Technician!<br />
        클라이언트 입장에서 편리하고 만족할 서비스가 어떤건지 상상하는 나는야 아이디어 뱅크! <br />
        나는 오늘도 어제보다 더 성장했다..!
        <br />
      </p>
    </div>
  </div>
  )
};

export default Instagram;