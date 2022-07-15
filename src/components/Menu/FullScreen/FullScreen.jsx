import React from 'react';
import './FullScreen.css';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
function FullScreen(props) {
  return (
    <div className='fullscreen' onClick={props.toggleClick}>
      <div className='marginRight'>
        <OpenInFullIcon />
      </div>
      <div> F11</div>
    </div>
  );
}

export default FullScreen;
