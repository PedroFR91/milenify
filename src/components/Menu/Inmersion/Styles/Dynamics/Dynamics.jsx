import React from 'react';
import './Dynamics.css';
import StarryNightsImg from '../../../../../assets/images/StarryNights.jpg';
import HallOfTimeImg from '../../../../../assets/images/HallOfTime.jpg';
import NearMoonImg from '../../../../../assets/images/NearMoon.jpg';
import BeWitchedForestImg from '../../../../../assets/images/BeWitchedForest.jpg';
import EndlessVoyageImg from '../../../../../assets/images/EndlessVoyage.jpg';
function Dynamics(props) {
  return (
    <div className='dynamics'>
      <div>Estilos dinámicos</div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div
          onClick={(e) => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(true);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${StarryNightsImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          onClick={() => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(false);
            props.setMoon(true);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${NearMoonImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          onClick={() => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(true);
            props.setVoyage(false);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${HallOfTimeImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          onClick={() => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(true);
            props.setForest(false);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${EndlessVoyageImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          onClick={() => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(true);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${BeWitchedForestImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          onClick={() => {
            props.setColor('#FDFDFD');
            props.setNavColor('#FDFDFD80');
            props.setBackColor('transparent');
            props.setStarry(false);
            props.setMoon(false);
            props.setHall(false);
            props.setVoyage(false);
            props.setForest(false);
            props.setConnectivity(true);
          }}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundImage: `url(${BeWitchedForestImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Dynamics;
