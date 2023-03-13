import React from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const InstaIcon = (props) => {
  return (
    <div className={styles.iconBox}>
       <Link to="/secret">
        <i className={styles.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
          <span className='irHidden'>인스타그램</span>
        </i>
      </Link>
    </div>
  )
};

export default InstaIcon;