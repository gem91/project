import React from 'react';
import BadgeIcon from '../IconItems/BadgeIcon';
import styles from './popup.module.scss'

const Popup = ({title, desc, mainImg, mainAlt, setIsPopup, tags, date, client}) => {
  const closePopup = (e) => {
    setIsPopup(false)
  }
console.log(tags);
  return (
  <aside className={styles.popupLayer}>
    <div className={styles.popupContainer}>
      <h3 className={styles.toptitle}>{title}</h3>
      <div className={styles.scrollWrap}>
        <div className={styles.topImage}>
          <span className={styles.thumb}>
            <img src={mainImg} alt={mainAlt} />
          </span>
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>Creative <br />I Stand</span>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.right}>
            <dl className={styles.log}>
              <dt>CLIENT :</dt>
              <dd>{client}</dd>
              <dt>DATE :</dt>
              <dd>{date}</dd>
              <dt>SKILL :</dt>
              <dd>
                { tags.map( item => <BadgeIcon iconName={item} />) }
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <button className={styles.btnClose} onClick={closePopup}><span>close</span></button>
  </aside>
  )
};

export default Popup;