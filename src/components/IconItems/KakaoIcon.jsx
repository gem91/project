import React from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faKickstarter} from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom';


const KakaoIcon = (props) => {
  return (
    <div className={styles.iconBox}>
      <Link to="https://open.kakao.com/o/sxXcRZ2e" target='_blank'>
        <i className={styles.kakao}>
          <FontAwesomeIcon icon={faKickstarter} />
          <span className='irHidden'>인스타그램</span>
        </i>
      </Link>
    </div>
  )
};

export default KakaoIcon;