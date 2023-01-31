import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = (props) => (
  <header>
    <div className='process-bar'></div>
    <div className='container'>
      <h1 className='logo'>
        <Link to="/"><img src={`http://placeimg.com/120/50/any`} alt="logo" /></Link>
      </h1>
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

);

export default Header;