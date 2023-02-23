import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFoundWrap}>
      <div className={styles.container}>
         <p>
          Oooppss..!
          <span>404 No Found Page</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;