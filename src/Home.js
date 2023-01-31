// import logo from './logo.svg';
import './Home.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Main from './components/Main';
import NotFound from './components/NotFound';
import Portfolio from './components/Portfolio';

function Home() {
  return (
    <div className='wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<NotFound /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
