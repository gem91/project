
import React, { useEffect, useRef } from 'react';
import styles from './ToyProject.module.scss'


// data
import toyData from '../../db/toyData.json'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import BadgeIcon from '../../components/IconItems/BadgeIcon';
import PageNav from '../../components/PageNav';
import ArticleTemplete from './ArticleTemplete';


const ToyProject = (props) => {
  const panelsRef = useRef(null)
  const containRef = useRef(null)

  useEffect(() => {     
    gsap.registerPlugin(ScrollTrigger);
    const panels = gsap.utils.toArray(".panel");
    
    /* Panels */
    const content = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + containRef.current.offsetWidth - panels.innerWidth,
        markers: true
      }
    })
    return () => content.revert();
  }, []);

  return (
    <div className={styles.toyProject}>
      <section className={styles.intro}>
        <h1>Hero</h1>
      </section>


      <section ref={panelsRef} className={styles.panels}>
        <div ref={containRef} className={styles.panelPath} style={{width: '500%'}}>
        { toyData.map(({id, title, desc, imgURL, tags})=> (
            <ArticleTemplete id={id} title={title} desc={desc} imgURL={imgURL} tags={tags} />
          ))}
        </div>
      </section>

      <section className={styles.extra}>
        <h1>Another section</h1>
      </section>
      <PageNav nextName={'contact'} nextLink={'/contact'} prevLink={'/web'} prevName={'web site'} />
    </div>
  )
};

export default ToyProject;