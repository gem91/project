import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LineFlow from '../FlowText/LineFlow';
import Logo from '../Logo';
import styles from './header.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import InstaIcon from '../IconItems/InstaIcon';
import KakaoIcon from '../IconItems/KakaoIcon';
import MessageIcon from '../IconItems/MessageIcon';

const Header = ({isMobile, isPc}) => {
  let [processBar, setProcessBar] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [prevY, setPrevY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevY]); // useEffect

  const handleScroll = () => {
    let currY = window.scrollY     // 현재 스크롤 위치값
    const windowH = window.innerHeight   // 윈도우 화면 높이값
    const isScrollUp = currY < prevY;

    ScrollNavBar(currY, windowH) // 가로 스크롤 네비바 기능 221026
    toggleHeader(isScrollUp);

    setPrevY(currY) // prevY에 현재 스크롤 삽입
  };


  const onHamburger = (e) => setIsOpen(!isOpen)

  const toggleHeader = (isToggleOn) => {    
    isToggleOn
    ? setIsHidden(false)
    : setIsHidden(true)
  }

  const ScrollNavBar = (currrentY, windowH) => {
    const totalHeight = document.querySelector('body').getBoundingClientRect().height  //컨텐츠 전체 높이
    let scrollPercent = Math.floor((currrentY / (totalHeight - windowH)) * 100);
    
    setProcessBar(scrollPercent)
  }
  return (
    <header className={`${isHidden ? styles.isHidden : ''}`}>
      { !isOpen && <div className={styles.processBar} style={{width: processBar + '%'}}  ></div> }
      <div className={styles.container}>
        <nav>
          <Logo src={'/'} />
          { !isMobile && 
            <ul className={styles.gnb}>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Web Site</Link>  
              </li>
              <li>
                <Link to="/toy">Toy Project</Link>  
              </li>
              <li>
                <Link to="/contact">Contact</Link>  
              </li>
          </ul>
        }
        { isPc && 
          <ul className={styles.sns}>
            <li><InstaIcon /></li>
            <li><KakaoIcon /></li>
            <li><MessageIcon /></li>
          </ul>
        }
        </nav>
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