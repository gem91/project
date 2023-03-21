import React from 'react';
import styles from './PageNav.module.scss'
import bgImg from 'assets/images/bg-texture.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const PageNav = ({prevLink = null, nextLink = null, prevName = null, nextName = null}) => {
  return (
    <div className={styles.pageLinkWrap}>
        <div className={styles.container}>
          <Link to={prevLink}>
            { prevLink && 
              <span className={styles.prev}>
                <FontAwesomeIcon icon={faChevronLeft} />
                {prevName}
              </span>
            }
          </Link>
          <Link to={nextLink}>
          { nextLink &&
            <span className={styles.next}>
              {nextName}
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          }
        </Link>
      </div>
      <img src={bgImg} alt="bg" />
    </div>
  )
};

      
 
export default PageNav;