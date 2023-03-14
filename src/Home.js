import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';

import { gsap } from 'gsap'

// components
import Header from "./components/Header";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Secret from './pages/Secret';
import ToyProject from './pages/ToyProject';
import ContactIcon from './components/IconItems/ContactIcon';

function Home() {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [cursorStyle, setCursorStyle] = useState(null)
  const cursorBasicStyle =  {
    width: '20px',
    height: '20px',
    background: '#c7a6a6'
  }
  const cursorRef = useRef(null)

  let isMobile = winWidth <= 768
  let isTablet = winWidth <= 1024
  let isPc = winWidth > 1024

  const handleResize = () => setWinWidth(window.innerWidth)
  

  const onMouseMove = ((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(cursorRef.current, {
      duration: 0.5,
      x: mouseX,
      y: mouseY,
    });
  })
  
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} style={cursorStyle}></div>
      <div className={styles.wrap}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* HEADER */}
          <Header isMobile={isMobile} isPc={isPc} />
          <Routes>
            <Route path="/" exact element={
              <Main isMobile={isMobile} isPc={isPc} />}>
            </Route>
            <Route path="/web" element={
              <Portfolio />}>
            </Route>
             <Route path="/toy" element={
              <ToyProject />}>
            </Route>
            <Route path="/contact" element={
              <Contact isMobile={isMobile} />}>
            </Route>
            <Route path="/secret" element={
              <Secret/>}>
            </Route>
            <Route path="*" element={
              <NotFound /> }>
            </Route>
          </Routes>
           {/* CONTACT BTN */}
          <ContactIcon setCursorStyle={setCursorStyle} cursorBasic={cursorBasicStyle} />
           {/* FOOTER */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default Home;
