import styles from './Home.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Portfolio" element={<Portfolio />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default Home;
