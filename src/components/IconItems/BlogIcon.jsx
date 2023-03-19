import React from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faT} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const BlogIcon = (props) => {
   return (
     <div className={styles.iconBox}>
      <Link to="https://chlolisher.tistory.com/" target={'_blank'}>
      <i className={styles.blog}>
        <FontAwesomeIcon icon={faT} />
        <span className='irHidden'>티스토리 블로그</span>
      </i>
    </Link>
  </div>
  )
};

export default BlogIcon;