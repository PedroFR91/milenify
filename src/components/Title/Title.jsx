import React from 'react';
import './Title.css';
function Title(props) {
  return (
    <div
      className='title'
      style={{ color: props.navColor, fontFamily: props.font }}
    >
      i-Writer
    </div>
  );
}

export default Title;
