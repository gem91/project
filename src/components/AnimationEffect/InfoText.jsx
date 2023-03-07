import React from 'react';

const InfoText = ({title, tag, small}) => (
  <div className='info'>
    <h4 className='info-tagline'>{tag}</h4>
    <h2 className='info-title'>{title}</h2>
    <h5 className='info-view'><span className='line'></span>{small}</h5>
  </div>
  );

export default InfoText;