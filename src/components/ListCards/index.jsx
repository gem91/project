import React from 'react';
import styles from './ListCards.module.scss'

const ListCards = (props) => (
  <ul className={styles.listCards}>
    <li>
      <div className={styles.imgBox}>
        <span className={styles.thumb}>
          <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
        </span>
      </div>
      <p className={styles.listTitle}>
        Challenge
      </p>
    </li>
    <li>
      <div className={styles.imgBox}>
        <span className={styles.thumb}>
          <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
        </span>
      </div>
      <p className={styles.listTitle}>
        Consistent
      </p>
    </li>
    <li>
      <div className={styles.imgBox}>
        <span className={styles.thumb}>
          <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
        </span>
      </div>
        <p className={styles.listTitle}>
        Propulsive
        </p>
    </li>
    <li>
      <div className={styles.imgBox}>
        <span className={styles.thumb}>
          <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
        </span>
      </div>
        <p className={styles.listTitle}>
        Inquisitive
        </p>
    </li>
  </ul>
 
  );

export default ListCards;