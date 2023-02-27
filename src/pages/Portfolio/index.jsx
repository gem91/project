import React, { useState, useRef } from 'react';
import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import BlogCard from '../../components/BlogCard';

import { Link } from 'react-router-dom';
import DefaultButton from '../../components/Button/DefaultButton';

const Portfolio = (props) => {
 
  const imgs = [
    { id: 0,
      src : 'https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80',
      alt: '테스트 이미지1',
      site: 'https://www.hyundai.com/kr/ko/e'
    },
    { id: 1,
      src : 'https://images.unsplash.com/photo-1594884592479-1f5bad0b696d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80',
      alt: '테스트 이미지2',
      site: 'https://www.hyundai.com/kr/ko/e'
    },
    { id: 2,
      src : 'https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: '테스트 이미지3',
      site: 'https://www.hyundai.com/kr/ko/e'
    }
  ]

  const fullImgRef = useRef(null)
  const [mainImg, setMainImg] = useState('https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  const [mainAlt, setMainAlt] = useState('Unsplash')

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
         <BreadCrumbs text={'Project'}></BreadCrumbs>
         <div className={styles.blogWrap}>
            <div className={styles.mainImg}>
              <img ref={fullImgRef} src={mainImg} alt={mainAlt} />
            </div>
            <div className={styles.blogContent}>
              <div className={styles.btnWrap}>
                <DefaultButton type={'More Detail'} />
                <Link to={''} target="_blank">Go To Site</Link>
              </div>
              <div className={styles.textBox}>
                <h3 className={styles.title}>Outdoor Experience</h3>
                <p>It’s windy. The cool breeze of the lake. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
              </div>
              <BlogCard imgData={imgs} setMainImg={setMainImg} mainImg={mainImg} setMainAlt={setMainAlt} fullImgRef={fullImgRef} />
            </div>
          </div>
           {/* <div className={styles.cardContent}>
                {
                  isMore && 
                  <div>
                    { imgs.map(({src}, idx) => (
                        <div key={idx}>test</div>
                    ))}
                  </div> 
                }
            
            </div> */}
      </div>
    </div>
  )
};

export default Portfolio;