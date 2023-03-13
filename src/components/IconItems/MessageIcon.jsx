import React from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const MessageIcon = (props) => {
  return (
    <Link to='/contact'>
      <i className={styles.message}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className='irHidden'>연락하기</span>
      </i>
    </Link>
  )
};

export default MessageIcon;