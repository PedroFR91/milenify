import React, { useState } from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import HtmlIcon from '@mui/icons-material/Html';
import { auth } from '../../firebase';

import './Export.css';

function Export(props) {
  const user = auth.currentUser;
  const [isHovering, setIsHovering] = useState(false);
  const isHoverExport = (e) => {
    e.preventDefault();
    setIsHovering(!isHovering);
  };
  return (
    <div
      className='export'
      onMouseEnter={isHoverExport}
      onMouseLeave={isHoverExport}
      style={{ color: props.navColor }}
    >
      <div
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '3%',
          display: 'flex',
          cursor: 'pointer',
          color: props.color,
          zIndex: 10,
        }}
      >
        <div style={{ marginRight: '15px' }}>Export</div>
        <div>
          <SystemUpdateAltIcon />
        </div>
      </div>
      {isHovering && user && (
        <div
          style={{
            position: 'fixed',
            bottom: '15%',
            right: '3%',
            marginTop: '15px',
            display: 'flex',
            cursor: 'pointer',
            color: props.color,
            zIndex: 10,
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '180px',
              justifyContent: 'space-between',
            }}
            onClick={() => console.log(props.exportHtml)}
          >
            <div>EXPORT TO HTML</div>
            <div>
              <HtmlIcon />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '180px',
              justifyContent: 'space-between',
            }}
            onClick={() => props.createPDF}
          >
            <div>EXPORT TO PDF</div>
            <div>
              <PictureAsPdfIcon />
            </div>
          </div>
        </div>
      )}
      {isHovering && !user && (
        <div
          style={{
            position: 'fixed',
            bottom: '15%',
            right: '3%',
            marginTop: '15px',
            display: 'flex',
            cursor: 'pointer',
            color: props.color,
            zIndex: 10,
            flexDirection: 'column',
          }}
        >
          Registrese para poder exportar
        </div>
      )}
    </div>
  );
}

export default Export;
