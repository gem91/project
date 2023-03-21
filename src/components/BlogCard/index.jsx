import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import BlogCardLists from './BlogCardLists';
import Mbutton from '../Button/Mbutton';
import Popup from '../Popup';

import styles from './BlogImage.module.scss';

const BlogCard = ({data, isMobile}) => {
  const fullImgRef = useRef(null)
  const fullTitleRef = useRef(null)
  const fullDescRef = useRef(null)
  const linkRef = useRef(null)

  const [ mainImg, setMainImg ] = useState(data[0].imgURL);
  const [ mainAlt, setMainAlt ] = useState(data[0].alt)
  const [ title, setTitle ] = useState(data[0].title)
  const [ desc, setDesc ] = useState(data[0].desc)
  const [ link , setLink ] = useState(data[0].link)
  const [ tags , setTags ] = useState(data[0].skill)
  const [ client , setClient ] = useState(data[0].client)
  const [ date , setDate ] = useState(data[0].date)
  const [ isPopup, setIsPopup] = useState(false);
  
 const openPopup = (e) => {
  setIsPopup(true)
 }

  return (
  <>
  <div className={styles.blogWrap}>
    { !isMobile && 
      <button className={styles.mainImg} onClick={openPopup}><img ref={fullImgRef} src={mainImg} alt={mainAlt} /></button>
    }
    <div className={styles.blogContent}>
      <div className={styles.btnWrap}>
        <Mbutton onClick={openPopup} innerText={'More Detail'} setIsPopup={setIsPopup} />
        <Link ref={linkRef} to={link} target="_blank">Go To Site</Link>
      </div>
      <div className={styles.textBox}>
        <h3 ref={fullTitleRef} className={styles.title}>{title}</h3>
        <p ref={fullDescRef} className={styles.desc}>{desc}</p>
      </div>
      <BlogCardLists
        imgData={data}
        setMainImg={setMainImg}
        mainImg={mainImg}
        setMainAlt={setMainAlt}
        fullImgRef={fullImgRef}
        setTitle={setTitle}
        setDesc={setDesc}
        setLink={setLink}
        onPopup={openPopup}
        isMobile={isMobile}
       />
    </div>
  </div>
  {/* popup */}
  { isPopup &&
    <Popup 
      title={title} 
      desc={desc} 
      mainImg={mainImg} 
      mainAlt={mainAlt} 
      tags={tags}
      client={client}
      date={date}
      setIsPopup={setIsPopup}
    />
  }
  </>
  )
};

export default BlogCard;