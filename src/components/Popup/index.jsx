import React from 'react';
import BadgeIcon from '../IconItems/BadgeIcon';
import styles from './popup.module.scss'

const Popup = ({ images, title, stringArr, tags, date, client, mainImg, mainAlt, setIsPopup}) => {
  
  // const stringArr = desc.split('.')
  const closePopup = (e) => setIsPopup(false)

  return (
  <aside className={styles.popupLayer}>
    <div className={styles.popupContainer}>
      <h3 className={styles.toptitle}>{title}</h3>
      <div className={styles.scrollWrap}>
        <div className={styles.topImage}>
          <span className={styles.thumb}>
            <img src={process.env.PUBLIC_URL + mainImg} alt={mainAlt} />
          </span>
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>Creative <br />I Stand</span>
            <p className={styles.desc}>
            { stringArr.map((sentence, index) => (
              <span key={index}>{sentence}.</span>
            ))}
            </p>
          </div>
          <div className={styles.right}>
            <dl className={styles.log}>
              <dt>CLIENT :</dt>
              <dd>{client}</dd>
              <dt>DATE :</dt>
              <dd>{date}</dd>
              <dt>SKILL :</dt>
              <dd className={styles.tag}>
                { tags.map( item => <BadgeIcon key={item} iconName={item} />) }
              </dd>
            </dl>
          </div>
          <div className={styles.projectImages}>
              {images.map( img => (
                <img src={require(`../../assets/images${img}`)} alt={mainAlt} />
              ))}
            </div>
        </div>
      </div>
    </div>
    <button className={styles.btnClose} onClick={closePopup}><span>close</span></button>
    <div className={styles.dimme} onClick={closePopup}></div>
  </aside>
  )
};

export default Popup;