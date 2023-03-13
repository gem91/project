import React, { useState } from 'react';
import styles from './Icons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const LikeIcon = (props) => {
  const [ count, setCount ] = useState(0)
  const getLikstCount = () => {
    setCount(count + 1)
    console.log(count);
  }

  return (
    <>
        <button type="button" onClick={getLikstCount}>
            <i className={styles.like}><FontAwesomeIcon icon={faHeart} />
            <span className='irHidden'>좋아요</span>
            </i>
          </button>
          <div className={styles.likeEffect}>
            <i className={styles.like}><FontAwesomeIcon icon={faHeart} />
            <span>{count}</span>
            </i>
          </div>
    </>
  )
};

export default LikeIcon;