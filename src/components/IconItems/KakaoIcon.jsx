import React from 'react';
import styles from './Icons.module.scss';
import icon from '../../assets/images/icons/ico-kakao.png'

import { Link } from 'react-router-dom';


const KakaoIcon = (props) => {
  return (
    <Link to="https://open.kakao.com/o/sxXcRZ2e" target='_blank'>
      <i className={styles.kakao}>
        <img src={icon} alt='test' /><span className='irHidden'>카카오톡</span>
      </i>
    </Link>
  )
};

export default KakaoIcon;