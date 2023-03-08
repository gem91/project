import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineFlow from '../FlowText/LineFlow';
import Logo from '../Logo';
import styles from './header.module.scss'

const Header = ({isMobile}) => {
  let [processBar, setProcessBar] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
  const onHamburger = (e) => {
    setIsOpen(!isOpen)
  }

  const ScrollNavBar = (currrentY, windowH) => {
    const totalHeight = document.querySelector('body').getBoundingClientRect().height  //컨텐츠 전체 높이
    let scrollPercent = Math.floor((currrentY / (totalHeight - windowH)) * 100);
    setProcessBar(processBar + scrollPercent)
  }
  return (
    <header>
      
      { !isOpen && <div className={styles.processBar} style={{width: processBar + '%'}} onScroll={handleScroll} ></div> }
      <div className={styles.container}>
        <Logo src={'/'} />
        { !isMobile && 
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Web Site</Link>  
            </li>
            <li>
              <Link to="/portfolio">Toy Project</Link>  
            </li>
            <li>
              <Link to="/portfolio">JavaScript</Link>  
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>  
            </li> */}
        </ul>
      }
      </div>
      { isMobile && 
        <button className={ isOpen ? `${styles.hamburger} ${styles.isOpen}` :  `${styles.hamburger}`} type='button' onClick={onHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      }
      { isOpen &&
        <div className={styles.fullMenus}>
          <ul>
            <li>
              <Link to="/" onClick={onHamburger}>About</Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={onHamburger}>Project</Link>  
            </li>
            <li>
              <Link to="/contact" onClick={onHamburger}>Contact</Link>  
            </li>
          </ul>
        </div>
      }
      <LineFlow />
    </header>
  )
};

export default Header;