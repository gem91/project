import React, { useState, useRef } from 'react';
import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import BlogCard from '../../components/BlogCard';

import { Link } from 'react-router-dom';
import DefaultButton from '../../components/Button/DefaultButton';

const Portfolio = (props) => {
 
  const imgs = [
    { id: 0,
      srcURL : 'https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80',
      alt: '테스트 이미지1',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: '첫번째 컨텐츠 스타일',
      desc: '첫번째 desc 내용이다용 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores enim esse veniam pariatur inventore excepturi iste consequuntur illum mollitia placeat est exercitationem error optio, sint voluptates, commodi vitae blanditiis cumque obcaecati suscipit autem natus dignissimos. Inventore hic similique labore odit ex nostrum explicabo incidunt. Corrupti sint commodi voluptas saepe, magni non itaque voluptate corporis fuga fugiat iusto consectetur, dolorem aliquid et sit facilis est culpa delectus consequatur nisi illum velit dignissimos. Similique veniam, perspiciatis numquam aspernatur saepe dolorem vel id nulla. Sed, aut voluptatibus. Iure error rerum accusantium! Animi enim ea rem iusto eum nesciunt autem minima et accusamus sint!'
    },
    { id: 1,
      srcURL : 'https://images.unsplash.com/photo-1594884592479-1f5bad0b696d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80',
      alt: '테스트 이미지2',
      site: 'https://kids.hyundai.com/index.kids',
      title: '룰루랄라 2 키즈현대',
      desc: 'dolor 2번째 sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    { id: 2,
      srcURL : 'https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: '테스트 이미지3',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: '333 consectetur adipisicing elit. Natus, incidunt?',
      desc: '3번쨰 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    { id: 3,
      srcURL : 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',
      alt: '테스트 이미지1',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Natus, incidunt?',
      desc: 'Lorem 4번째 ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    { id: 4,
      srcURL : 'https://images.unsplash.com/photo-1505144566083-38fb92594b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODY0MzY5OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60',
      alt: '테스트 이미지2',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Outdoor Experience',
      desc: 'dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    { id: 5,
      srcURL : 'https://media.istockphoto.com/id/1338769639/photo/gazing-into-the-milkyway.jpg?b=1&s=170667a&w=0&k=20&c=5Vyvr7V9UM0Zg9vszz7fnhJV5KIzu35Hi5_4u3yq9fs=',
      alt: '테스트 이미지3',
      site: 'https://www.hyundai.com/kr/ko/e',
      title: 'Natus, incidunt?',
      desc: 'amet consectetur adipisicing elit.'
    }
  ]

  const fullImgRef = useRef(null)
  const fullTitleRef = useRef(null)
  const fullDescRef = useRef(null)
  const linkRef = useRef(null)

  const [ mainImg, setMainImg ] = useState(imgs[0].srcURL);
  const [ mainAlt, setMainAlt ] = useState(imgs[0].alt)
  const [ title, setTitle ] = useState(imgs[0].title)
  const [ desc, setDesc ] = useState(imgs[0].desc)
  const [ link , setLink ] = useState(imgs[0].site)
 const [ isToggle, setIsToggle] = useState(false);

 const openPopup = (e) => {
  setIsToggle(true)
 }
  const closePopup = (e) => {
    setIsToggle(false)
 }

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
         <BreadCrumbs text={'Project'}></BreadCrumbs>
         <div className={styles.blogWrap}>
            <button className={styles.mainImg} onClick={openPopup}><img ref={fullImgRef} src={mainImg} alt={mainAlt} /></button>
            <div className={styles.blogContent}>
              <div className={styles.btnWrap}>
                <DefaultButton onClick={openPopup} type={'More Detail'} setIsToggle={setIsToggle} />
                <Link ref={linkRef} to={link} target="_blank">Go To Site</Link>
              </div>
              <div className={styles.textBox}>
                <h3 ref={fullTitleRef} className={styles.title}>{title}</h3>
                <p ref={fullDescRef} className={styles.desc}>{desc}</p>
              </div>
              <BlogCard imgData={imgs} setMainImg={setMainImg} mainImg={mainImg} setMainAlt={setMainAlt} fullImgRef={fullImgRef} setTitle={setTitle} setDesc={setDesc} setLink={setLink} />
            </div>
          </div>
          {/* popup */}
          { isToggle &&
            <div className={styles.popupLayer}>
              <div className={styles.popupContent}>
                <h3 ref={fullTitleRef} className={styles.title}>{title}</h3>
                <div className={styles.scrollWrap}>
                  <div className={styles.topImage}>
                    <span className={styles.thumb}><img ref={fullImgRef} src={mainImg} alt={mainAlt} /></span>
                  </div>
                  <div className={styles.textWrap}>
                    <div className={styles.textLeft}>
                      <span>Creative We Stand</span>
                      <p ref={fullDescRef} className={styles.desc}>{desc}</p>
                    </div>
                    <div className={styles.textright}>
                      <dl>
                        <dt>CLIENT:</dt>
                        <dd>NBCUNIVERSAL</dd>
                        <dt>ROLES:</dt>
                        <dd>CONCEPT, CREATIVE DIRECTION, ART DIRECTION</dd>
                        <dt>AGENCY:</dt>
                        <dd>72ANDSUNNY</dd>
                      </dl>
                    </div>
                    {/* <p className={styles.subName}>My Project Contents</p> */}
                  </div>
                </div>
              
              </div>
              <button className={styles.btnClose} onClick={closePopup}><span>close</span></button>
            </div>
          }
      </div>
    </div>
  )
};

export default Portfolio;