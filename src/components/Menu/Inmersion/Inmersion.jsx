import React from 'react';
import './Inmersion.css';
import ComputerIcon from '@mui/icons-material/Computer';
function Inmersion(props) {
  return (
    <div
      className={`inmersion ${props.isOpen ? 'activeinm' : props.navColor}`}
      onClick={props.toggleView}
    >
      <div style={{ marginRight: '15px' }}>
        <ComputerIcon />
      </div>
      <div>INMERSIÓN</div>
    </div>
  );
}

export default Inmersion;
