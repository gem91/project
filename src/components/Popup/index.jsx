import React from 'react';
import BadgeIcon from '../IconItems/BadgeIcon';
import styles from './popup.module.scss'

const Popup = ({imgs, title, desc, mainImg, mainAlt, isToggle, setIsToggle}) => {
  const closePopup = (e) => {
    setIsToggle(false)
  }
  return (
  <aside className={styles.popupLayer}>
    <div className={styles.popupContent}>
      <h3 className={styles.toptitle}>{title}</h3>
      <div className={styles.scrollWrap}>
        <div className={styles.topImage}>
          <span className={styles.thumb}><img src={mainImg} alt={mainAlt} /></span>
        </div>
        <div className={styles.textWrap}>
          <div className={styles.textLeft}>
            <span className={styles.subTitle}>Creative <br />I Stand</span>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.textRight}>
            <dl className={styles.log}>
              <dt>CLIENT :</dt>
              <dd>HYUNDAI</dd>
              <dt>SKILL :</dt>
              <dd>
                <BadgeIcon iconName={'REACT'} />
                <BadgeIcon iconName={'SCSS'} />
                <BadgeIcon iconName={'HTML'} />
              </dd>
              <dt>DATE :</dt>
              <dd>22.05 ~ing</dd>
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