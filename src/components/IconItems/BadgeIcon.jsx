import React from 'react';
import styles from './BadgeIcon.module.scss'

const BadgeIcon = ({iconName}) => {
  let bkColor 
  switch (iconName){
    case 'REACT' :
      bkColor = "#09e9cb";
      break;
    case 'VUE' :
      bkColor = "#1fb310";
      break;
    case 'SCSS' :
      bkColor = "#fa1458";
      break;
    case 'CSS' :
      bkColor = "#4c44c6";
      break;
    case 'JAVASCRIPT' :
      bkColor = "#edc00b";
      break;
    case 'YARN' :
      bkColor = "#0b8eed";
      break;
    case 'HTML' :
      bkColor = "#ed650b";
      break;
    case 'GIT' :
      bkColor = "#1f9214";
      break;
    default : 
      bkColor = "#868686";
      break;
    };

  return  (
    <i className={styles.icon} 
    style={{backgroundColor: `${bkColor}`}}
    >{iconName}</i>
  )

};

export default BadgeIcon;