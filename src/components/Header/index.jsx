import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './header.module.scss'

const Header = (props) => {
  let [processBar, setProcessBar] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(setProcessBar);
    
  }, []); // useEffect
  const handleScroll = () => {
    let currY = window.scrollY     // 현재 스크롤 위치값
    const windowH = window.innerHeight   // 윈도우 화면 높이값
    ScrollNavBar(currY, windowH) // 가로 스크롤 네비바 기능 221026
    
    
    // const header = document.querySelector('header')
    // if(currY > 100){
    //   header.style.background = 'rgb(255 255 255 / 90%)'
    // }else{
    //   header.style.background = 'transparent'
    // }
  };

  const ScrollNavBar = (currrentY, windowH) => {
    const totalHeight = document.querySelector('body').getBoundingClientRect().height  //컨텐츠 전체 높이
    let scrollPercent = Math.floor((currrentY / (totalHeight - windowH)) * 100);
    setProcessBar(processBar + scrollPercent)
  }
  return (
    <header>
    <div className={styles.processBar} style={{width: processBar + '%'}} onScroll={handleScroll} ></div>
    <div className={styles.container}>
     <Logo src={'./'} />
      <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Project</Link>  
          </li>
          <li>
            <Link to="/Contact">Contact</Link>  
          </li>
      </ul>
    </div>
  </header>
  )
};

export default Header;