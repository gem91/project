import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss'

const Logo = ({src}) => {
  return (
   <h1 className={styles.logo}>
      { src ? ( <Link to={src}>Chloe.K</Link>) : (<span>Chloe.K</span>) }
   </h1>
  );
};

export default Logo;