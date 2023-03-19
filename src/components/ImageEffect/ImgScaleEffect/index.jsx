import React from 'react';
import styles from './ImgScaleEffect.module.scss'

import TwoTypeFlow from '../../FlowText/TwoTypeFlow';

const ImgScaleEffect = ({imgURL, title}) => {
  return (
    <li className={styles.lists} key={title}>
      <div className={styles.floatImg}>
        <img src={require(`../../../assets${imgURL}`)} alt={title} />
      </div>
      <div className={styles.textBox}>
        <TwoTypeFlow tit={`${title}.`} em={`${title}.`} />
      </div>
      <span className={styles.thumb}>
        <img src={require(`../../../assets${imgURL}`)} alt={title} />
      </span>
    </li>
  )
};

export default ImgScaleEffect;