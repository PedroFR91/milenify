import React from 'react';
import './NearMoon.css';
function NearMoon() {
  return (
    <>
      <div className='nearmoon'>
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png'
          height={'500px'}
          top={'-30px'}
          right={'-30px'}
          alt=''
        />
        <div className='starsm'></div>
        <div className='twinkling'></div>
        <div className='clouds'></div>
      </div>
    </>
  );
}

export default NearMoon;
