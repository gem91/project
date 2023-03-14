import React from 'react';
import styles from './ImgScaleEffect.module.scss'

import TwoTypeFlow from '../../FlowText/TwoTypeFlow';

const ImgScaleEffect = ({data}) => {
  return (
    <ul className={styles.imgScaleLists}>
      {
        data.map(({imgURL, title}, idx) =>(
          <li key={idx}>
            <div className={styles.floatImg}>
              <img src={imgURL} alt={title} />
            </div>
            <div className={styles.textBox}>
              <TwoTypeFlow tit={`${title}.`} em={`${title}.`} />
            </div>
            <span className={styles.thumb}>
              <img src={imgURL} alt={title} />
            </span>
          </li>
        ))
      }
    </ul>
  )
};

export default ImgScaleEffect;