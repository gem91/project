import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './Home.module.scss';

import Header from "./components/Header";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Secret from './pages/Secret';
import LineFlow from './components/FlowText/LineFlow';
import { useEffect, useState } from 'react';

function Home() {

  const [winWidth, setWinWidth] = useState(0)

  let isMobile = winWidth <= 768
  let isTablet = winWidth <= 1024
  let isPc = winWidth > 1024
  const handleResize = () => {
    setWinWidth(window.innerWidth)
  }


  useEffect(()=>{
    window.addEventListener('resize', handleResize)
   
  }, [])

  return (
    <>
      <div className={styles.wrap}>
        <BrowserRouter>
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
