import React from 'react';
import AmbientSound from './AmbientSound/AmbientSound';
import './Dashboard.css';
import Fonts from './Fonts/Fonts';
import KeySound from './KeySounds/KeySound';
import Statics from './Styles/Statics/Statics';
import Dynamics from './Styles/Dynamics/Dynamics';
function Dashboard(props) {
  return (
    <div className='dashboard'>
      <Fonts font={props.font} setFont={props.setFont} />
      <KeySound setKeytoplay={props.setKeytoplay} />
      <AmbientSound
        showSounds={props.showSounds}
        setShowSounds={props.setShowSounds}
        sound={props.sound}
        setSound={props.setSound}
        play={props.play}
        stop={props.stop}
      />
      <Statics
        setColor={props.setColor}
        setBackColor={props.setBackColor}
        setNavColor={props.setNavColor}
        setStarry={props.setStarry}
        setMoon={props.setMoon}
        setHall={props.setHall}
        setVoyage={props.setVoyage}
        setForest={props.setForest}
        setConnectivity={props.setConnectivity}
      />
      <Dynamics
        setColor={props.setColor}
        setBackColor={props.setBackColor}
        setNavColor={props.setNavColor}
        setStarry={props.setStarry}
        setMoon={props.setMoon}
        setHall={props.setHall}
        setVoyage={props.setVoyage}
        setForest={props.setForest}
        setConnectivity={props.setConnectivity}
      />
    </div>
  );
}

export default Dashboard;
