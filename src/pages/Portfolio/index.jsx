import React from 'react';

import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import BlogCard from '../../components/BlogCard';
import LightTextEffect from '../../components/LightTextEffect';
import PageNav from '../../components/PageNav';

const Portfolio = (props) => {
 
  const imgs = [
    { id: 0,
      srcURL : 'https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80',
      alt: '현대닷컴 홈페이지 유지보수',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Hyundai.com - Vue / AEM / SVN / GIT',
      desc: '첫번째 desc 내용이다용 Lorem ipsum, dmi enim ea rem iusto eum nesciunt autem minima et accusamus sint!',
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
  
  return (
    <div className={styles.portfolio}>
      <section className={styles.topContent}>
        <LightTextEffect title={'What I Did'} 
          text1={'그 동안 유지보수 해왔던 사이트 모음입니다.'} 
          text2={'Vaniila Javascritpt 이용하여 만든 로또 번호추첨, 여러 종류의 미니 프로젝트와 리엑트로 구축한 양복점 홈페이지 입니다.'}
          text3={'test'} />
      </section>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.breadCrumbsBox}>
            <BreadCrumbs text={'Web Site'}></BreadCrumbs>
          </div>
          <div className={styles.projectBox}>
            <BlogCard imgData={imgs} />
          </div>
        </div>
      </div>
      <PageNav nextName={'toy project'} nextLink={'/toy'} prevLink={'/'} prevName={'about me'} />
    </div>
  )
};

export default Portfolio;