import React from 'react';
import styles from './ToyProject.module.scss'
import BadgeIcon from '../../components/IconItems/BadgeIcon';
import { Link } from 'react-router-dom';

const ArticleTemplete = ({data}) => {
  return(
  <article key={data.id} className={`${styles.panel} panel`}>
    <div className={styles.itemContent}>
      <div className={styles.itemImage}>
        <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
      </div>
      <div className={styles.itemBody}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.desc}>{data.desc}</p>
        <ul className={styles.tags}>
          { data.tags.map((tag, idx) => (
            <li key={tag}><BadgeIcon iconName={tag} /></li>
          )) }
        </ul>
        <div className={styles.btnWrap}>
          { data.url && 
            <Link to={`${data.url}`} target={'_blank'}>Show Demo</Link>
          }
        </div>
      </div>
    </div>
  </article>
  )
};

export default ArticleTemplete;