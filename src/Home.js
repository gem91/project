// import logo from './logo.svg';
import './Home.scss';
import Header from "./components/Header";
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Portfolio from './components/Portfolio';

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<NotFound /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
