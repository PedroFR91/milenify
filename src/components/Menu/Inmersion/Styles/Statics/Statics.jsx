import React from 'react';
import './Statics.css';
function Statics(props) {
  return (
    <div className='statics'>
      <div style={{ marginBottom: '10px' }}>Estilos estáticos</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '10px',
        }}
      >
        {/*STANDAR */}
        <div
          onClick={(e) => {
            props.setColor('#5B5C65');
            props.setNavColor('#5B5C6580');
            props.setBackColor('#FDFDFD');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#FDFDFD',
          }}
        ></div>
        {/*PRIMARY LIGHT */}
        <div
          onClick={(e) => {
            props.setColor('#D37F68');
            props.setNavColor('#D37F6880');
            props.setBackColor('#FEE8D3');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#fee8d3',
          }}
        ></div>
        {/*SECONDARY LIGHT */}
        <div
          onClick={(e) => {
            props.setColor('#9EA49F');
            props.setNavColor('#9EA49F80');
            props.setBackColor('#f2f2f7');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#f2f2f7',
          }}
        ></div>
        {/*GARDEN LIGHT */}
        <div
          onClick={(e) => {
            props.setColor('#11571F');
            props.setNavColor('#11571F80');
            props.setBackColor('#D7F7C6');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#D7F7C6',
          }}
        ></div>
        {/*AGUAMARINA LIGHT */}
        <div
          onClick={(e) => {
            props.setColor('#1D7685');
            props.setNavColor('#1D768580');
            props.setBackColor('#D8FBEE');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#D8FBEE',
          }}
        ></div>
        {/*AMARILLO LIGHT */}
        <div
          onClick={(e) => {
            props.setColor('#D4980E');
            props.setNavColor('#D4980E80');
            props.setBackColor('#FEF7CF');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#FEF7CF',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '10px',
        }}
      >
        {/*DARK */}
        <div
          onClick={(e) => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('#5B5C65');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#5b5c65',
          }}
        ></div>
        {/*PRIMARY DARK */}
        <div
          onClick={(e) => {
            props.setColor('#FEE8D3');
            props.setNavColor('#FEE8D380');
            props.setBackColor('#d37f68');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#d37f68',
          }}
        ></div>
        {/*SECONDARY DARK */}
        <div
          onClick={(e) => {
            props.setColor('#F2F2F7');
            props.setNavColor('#F2F2F780');
            props.setBackColor('#9ea49f');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#9ea49f',
          }}
        ></div>
        {/*GARDEN DARK */}
        <div
          onClick={(e) => {
            props.setColor('#D7F7C6');
            props.setNavColor('#D7F7C680');
            props.setBackColor('#469C42');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#469C42',
          }}
        ></div>
        {/*AGUAMARINA DARK */}
        <div
          onClick={(e) => {
            props.setColor('#D8FBEE');
            props.setNavColor('#D8FBEE80');
            props.setBackColor('#3AB9B5');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#3AB9B5',
          }}
        ></div>
        {/*AMARILLO DARK */}
        <div
          onClick={(e) => {
            props.setColor('#FEF7CF');
            props.setNavColor('#FEF7CF80');
            props.setBackColor('#F8B90A');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#F8B90A',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Statics;
