import React from 'react';
import './Focus.css';

import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

function Focus(props) {
  return (
    <div
      className={`focus ${props.isFocus ? 'activefc' : props.navColor}`}
      onClick={(e) => {
        props.toggleFocus();
        console.log('focus');
      }}
    >
      <div className='marginRight'>
        <CenterFocusStrongIcon />
      </div>
      <div>FOCUS</div>
    </div>
  );
}

export default Focus;
