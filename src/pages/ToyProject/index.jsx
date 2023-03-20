
import React, { useEffect, useRef, useState } from 'react';
import styles from './ToyProject.module.scss'

// data
import toyData from '../../db/toyData.json'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PageNav from '../../components/PageNav';
import ArticleTemplete from './ArticleTemplete';
import BreadCrumbs from '../../components/BreadCrumbs';
import ScrollSign from '../../components/ScrollSign';


const ToyProject = (props) => {
  const panelsRef = useRef(null)
  const containRef = useRef(null)

  const topTitleRef = useRef(null)
  const topTextRef1 = useRef(null)
  const topTextRef2 = useRef(null)
  const bottomTitleRef = useRef(null)
  const botomTextRef = useRef(null)

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
      }
    })
    return () => content.revert();
  }, []);

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(topTitleRef.current, {
      scrollTrigger: {
       trigger: topTitleRef.current,
        start: 'top 80%',
       toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 1,
      x: 0,
    });
    gsap.to(topTextRef1.current, {
      scrollTrigger: {
      trigger: topTextRef1.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 1,
      delay: .5,
      x: 0,
    });
    gsap.to(topTextRef2.current, {
      scrollTrigger: {
      trigger: topTextRef2.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 1,
      delay: 1,
      x: 0,
    });

    gsap.to(bottomTitleRef.current, {
      scrollTrigger: {
       trigger: bottomTitleRef.current,
        start: 'top 70%',
       end: 'bottom 90%',
       toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 1,
      x: 0,
    });
    gsap.to(botomTextRef.current, {
      scrollTrigger: {
      trigger: botomTextRef.current,
        start: 'top 50%',
      end: 'bottom 100%',
      toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 1,
      x: 0,
    });
  })

  return (
    <div className={styles.toyProject}>
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.breadCrumbsBox}>
            <BreadCrumbs text={'Toy Project'}></BreadCrumbs>
          </div>
          <h2 ref={topTitleRef} className={styles.title}>MY TOY BABIES..❤️</h2>
          <p ref={topTextRef1}>여기는 저의 &lt; Personal Playground &gt; 입니다.</p>
          <p ref={topTextRef2}>그 동안 Front-End D 공부하면서 만들었던 작업물들을 모아놨으니 구경하세요.</p>
        </div>
      </section>

      <section ref={panelsRef} className={styles.panels}>
        <div ref={containRef} className={styles.panelPath} style={{width: `${toyData.length}00%`}}>
        { toyData.map((data)=> (
            <ArticleTemplete data={data} />
          ))}
        </div>
      </section>

      <section className={styles.extra}>
        <div className={styles.container}>
          <h2 ref={bottomTitleRef} className={styles.title}>Why Don't You DO With Me?</h2>
          <p ref={botomTextRef}>Feel FREE To Text Me Anytime 😍!!</p>
        </div>
      </section>
      <PageNav nextName={'contact'} nextLink={'/contact'} prevLink={'/web'} prevName={'web site'} />
      <ScrollSign />
    </div>
  )
};

export default ToyProject;