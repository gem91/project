import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import BlogCardLists from './BlogCardLists';
import Mbutton from '../Button/Mbutton';
import Popup from '../Popup';

import styles from './BlogImage.module.scss';

const BlogCard = ({imgData}) => {
  const fullImgRef = useRef(null)
  const fullTitleRef = useRef(null)
  const fullDescRef = useRef(null)
  const linkRef = useRef(null)

  const [ mainImg, setMainImg ] = useState(imgData[0].srcURL);
  const [ mainAlt, setMainAlt ] = useState(imgData[0].alt)
  const [ title, setTitle ] = useState(imgData[0].title)
  const [ desc, setDesc ] = useState(imgData[0].desc)
  const [ link , setLink ] = useState(imgData[0].site)
  const [ isToggle, setIsToggle] = useState(false);

 const openPopup = (e) => {
  setIsToggle(true)
 }

  return (
  <>
  <div className={styles.blogWrap}>
    <button className={styles.mainImg} onClick={openPopup}><img ref={fullImgRef} src={mainImg} alt={mainAlt} /></button>
    <div className={styles.blogContent}>
      <div className={styles.btnWrap}>
        <Mbutton onClick={openPopup} innerText={'More Detail'} setIsToggle={setIsToggle} />
        <Link ref={linkRef} to={link} target="_blank">Go To Site</Link>
      </div>
      <div className={styles.textBox}>
        <h3 ref={fullTitleRef} className={styles.title}>{title}</h3>
        <p ref={fullDescRef} className={styles.desc}>{desc}</p>
      </div>
      <BlogCardLists
        imgData={imgData}
        setMainImg={setMainImg}
        mainImg={mainImg}
        setMainAlt={setMainAlt}
        fullImgRef={fullImgRef}
        setTitle={setTitle}
        setDesc={setDesc}
        setLink={setLink}
        onPopup={openPopup}
       />
    </div>
  </div>
  {/* popup */}
  { isToggle &&
    <Popup 
      imgs={imgData}
      title={title} 
      desc={desc} 
      mainImg={mainImg} 
      mainAlt={mainAlt} 
      isToggle={isToggle}
      setIsToggle={setIsToggle}
    />
  }
  </>
  )
};

export default BlogCard;