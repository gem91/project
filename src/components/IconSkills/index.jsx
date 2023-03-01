import React from 'react';
import styles from './IconSkills.module.scss'

const IconSkills = ({iconName}) => {
  let bkColor 
  switch (iconName){
    case 'REACT' :
      bkColor = "#09e9cb";
      break;
    case 'Vue' :
      bkColor = "#29d84c";
      break;
    case 'SCSS' :
      bkColor = "#ec0f6b";
      break;
    case 'CSS' :
      bkColor = "#4c44c6";
      break;
    case 'HTML' :
      bkColor = "#ed650b";
      break;
    case 'GIT' :
      bkColor = "#1ce52a";
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

export default IconSkills;