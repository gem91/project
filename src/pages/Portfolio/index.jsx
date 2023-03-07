import React, { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import BlogCard from '../../components/BlogCard';
import LightTextEffect from '../../components/LightTextEffect';

const Portfolio = (props) => {
 
  const imgs = [
    { id: 0,
      srcURL : 'https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80',
      alt: '현대닷컴 홈페이지 유지보수',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Hyundai.com - Vue / AEM / SVN / GIT',
      desc: '첫번째 desc 내용이다용 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores enim esse veniam pariatur inventore excepturi iste consequuntur illum mollitia placeat est exercitationem error optio, sint voluptates, commodi vitae blanditiis cumque obcaecati suscipit autem natus dignissimos. Inventore hic similique labore odit ex nostrum explicabo incidunt. Corrupti sint commodi voluptas saepe, magni non itaque voluptate corporis fuga fugiat iusto consectetur, dolorem aliquid et sit facilis est culpa delectus consequatur nisi illum velit dignissimos. Similique veniam, perspiciatis numquam aspernatur saepe dolorem vel id nulla. Sed, aut voluptatibus. Iure error rerum accusantium! Animi enim ea rem iusto eum nesciunt autem minima et accusamus sint!',
      client: 'Hyundai',
      date: '22-03 ~ ing',
      skill:[
        {
          vue: true,
          react: false,
          js: true,
          git: true,
          svn: true,
          yarn: true,
          AEM: true,
          html: true,
          css: true,
          scss: true,
        },
      ]
    },
    { id: 1,
      srcURL : 'https://images.unsplash.com/photo-1594884592479-1f5bad0b696d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80',
      alt: '리액트를 이용한 로또 어플리케이션',
      site: 'https://kids.hyundai.com/index.kids',
      title: 'Escape from labor - Lotto JSX',
      desc: 'dolor 2번째 sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      client: 'Toy Project',
      date: '22-08 ~ 22-09',
      skill: {
        vue: false,
        react: true,
        js: true,
        git: true,
        svn: false,
        yarn: true,
        AEM: false,
        html: true,
        css: true,
        scss: false,
      },
    },
    { id: 2,
      srcURL : 'https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: '테스트 이미지3',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Calcuator - REACT',
      desc: '3번쨰 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      client: 'Toy Project',
      date: '22-03 ~ ing',
      skill: {
        vue: false,
        react: true,
        js: true,
        git: true,
        svn: false,
        yarn: true,
        AEM: false,
        html: true,
        css: true,
        scss: false,
      }
    },
    { id: 3,
      srcURL : 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',
      alt: '테스트 이미지1',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Natus, incidunt?',
      desc: 'Lorem 4번째 ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      client: 'Hyundai',
      date: '22-03 ~ ing',
      skill: {
        vue: true,
        react: false,
        js: true,
        git: true,
        svn: true,
        yarn: true,
        AEM: true,
        html: true,
        css: true,
        scss: true,
      }
    },
    { id: 4,
      srcURL : 'https://images.unsplash.com/photo-1505144566083-38fb92594b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODY0MzY5OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60',
      alt: '테스트 이미지2',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Outdoor Experience',
      desc: 'dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      client: 'Hyundai',
      date: '22-03 ~ ing',
      skill: {
        vue: true,
        react: false,
        js: true,
        git: true,
        svn: true,
        yarn: true,
        AEM: true,
        html: true,
        css: true,
        scss: true,
      }
    },
    { id: 5,
      srcURL : 'https://media.istockphoto.com/id/1338769639/photo/gazing-into-the-milkyway.jpg?b=1&s=170667a&w=0&k=20&c=5Vyvr7V9UM0Zg9vszz7fnhJV5KIzu35Hi5_4u3yq9fs=',
      alt: '테스트 이미지3',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Natus, incidunt?',
      desc: 'amet consectetur adipisicing elit.',
      client: 'Hyundai',
      date: '22-03 ~ ing',
      skill: {
        vue: true,
        react: false,
        js: true,
        git: true,
        svn: true,
        yarn: true,
        AEM: true,
        html: true,
        css: true,
        scss: true,
      }
    }
  ]

  const myRef = useRef(null)

 
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(myRef.current, {
      scrollTrigger: {
        trigger: myRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      x: 100,
    });
}, []);

  
 

  
  return (
    <div className={styles.portfolio}>
      <section className={styles.content}>
        <LightTextEffect title={'My Works'} 
          text1={'자바스크립트를 이용하여 만든 작업물 입니다.'} 
          text2={'Vaniila Javascritpt 이용하여 만든 로또 번호추첨, 여러 종류의 미니 프로젝트와 리엑트로 구축한 양복점 홈페이지 입니다.'}
          text3={'test'} />
      </section>
      <div className={styles.container}>
      <h1 ref={myRef}>Hello GSAP</h1>
        <BreadCrumbs text={'Project'}></BreadCrumbs>
        <h2>Website</h2>
        <BlogCard imgData={imgs} />
        <h2>js</h2>
        <BlogCard imgData={imgs} />
      </div>
    </div>
  )
};

export default Portfolio;