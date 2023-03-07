import React from 'react';

const ThumbImage = ({imgSrc, imgAlt, width, height}) => (
  <div className='thumb' style={{width: `${width}%`, height: `${height}%`}}>
    <img src={imgSrc} alt={imgAlt}  />
  </div>
  );

export default ThumbImage;