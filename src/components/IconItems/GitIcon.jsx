import React from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const GitIcon = (props) => {
   return (
     <div className={styles.iconBox}>
      <Link to="https://github.com/gem91" target={'_blank'}>
      <i className={styles.git}>
        <FontAwesomeIcon icon={faSquareGithub} />
        <span className='irHidden'>깃허브</span>
      </i>
    </Link>
  </div>
  )
};

export default GitIcon;