import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './Home.module.scss';

import Header from "./components/Header";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FlowText from './components/FlowText';
import Secret from './pages/Secret';

function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <FlowText></FlowText>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/secret" element={<Secret/>}></Route>
            <Route path="*" element={<NotFound /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
);
}

export default Home;
