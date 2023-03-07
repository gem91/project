import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap'

import styles from './Home.module.scss';

import Header from "./components/Header";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Secret from './pages/Secret';
import LineFlow from './components/FlowText/LineFlow';
import { useEffect, useRef, useState } from 'react';

function Home() {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const cursorRef = useRef(null)

  let isMobile = winWidth <= 768
  let isTablet = winWidth <= 1024
  let isPc = winWidth > 1024

  const handleResize = () => {
    setWinWidth(window.innerWidth)
  }
  
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
      <div ref={cursorRef} className={styles.cursor}></div>
      <div className={styles.wrap}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header isMobile={isMobile} />
          <LineFlow />
          <Routes>
            <Route path="/" exact element={<Main isMobile={isMobile} />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact isMobile={isMobile} />}></Route>
            <Route path="/secret" element={<Secret/>}></Route>
            <Route path="*" element={<NotFound /> }></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default Home;
