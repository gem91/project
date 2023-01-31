import React from 'react';
import './ListCards.scss'

const ListCards = (props) => (
  <ul className='list-cards'>
    <li>
      <span className='thumb'>
        <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
      </span>
      <p className='list-title'>
        Challenge
      </p>
    </li>
    <li>
      <span className='thumb'>
        <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
      </span>
      <p className='list-title'>
      Consistent
      </p>
    </li>
    <li>
      <span className='thumb'>
        <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
      </span>
      <p className='list-title'>
      Propulsive
      </p>
    </li>
    <li>
      <span className='thumb'>
        <img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" />
      </span>
      <p className='list-title'>
      Inquisitive
      </p>
    </li>
  </ul>
 
  );

export default ListCards;