import React, { useState } from 'react';
import './AmbientSound.css';

import useSound from 'use-sound';
import mysprite from '../../../../assets/audio/ambient/sprite.mp3';

function AmbientSound(props) {
  const [showSounds, setShowSounds] = useState(false);

  function viewSounds() {
    setShowSounds(true);
  }

  const [play, { stop }] = useSound(mysprite, {
    sprite: {
      white: [0, 284000],
      pink: [284000, 416000],
      brown: [418000, 426000],
      binaural: [426000, 564000],
      rain: [564000, 595000],
      candela: [595000, 668000],
      jazz: [668000, 716000],
      slow: [716000, 787000],
      garden: [787000, 873000],
      waves: [873000, 1019000],
      firefly: [1019000, 1046000],
      apocalyptic: [1046000, 1279000],
    },
  });
  return (
    <div className='ambientsound'>
      <div>Ambientación</div>
      <div onClick={viewSounds}>{props.sound}</div>
      {showSounds && (
        <div className='sounds-container'>
          <ul>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Sin Sonido');
                setShowSounds(false);
              }}
            >
              Sin Sonido
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('White Noise');
                setShowSounds(false);
                play({ id: 'white' });
              }}
            >
              White Noise
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Pink Sound');
                setShowSounds(false);
                play({ id: 'pink' });
              }}
            >
              Pink Sound
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Brown Sound');
                setShowSounds(false);
                play({ id: 'brown' });
              }}
            >
              Brown Sound
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Binaural Sound');
                setShowSounds(false);
                play({ id: 'binaural' });
              }}
            >
              Binaural Sound
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Rain on Windows');
                setShowSounds(false);
                play({ id: 'rain' });
              }}
            >
              Rain on Windows
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Candela');
                setShowSounds(false);
                play({ id: 'candela' });
              }}
            >
              Candela
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Jazz Piano');
                setShowSounds(false);
                play({ id: 'jazz' });
              }}
            >
              Jazz Piano
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Slow Piano');
                setShowSounds(false);
                play({ id: 'slow' });
              }}
            >
              Slow Piano
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Garden');
                setShowSounds(false);
                play({ id: 'garden' });
              }}
            >
              Garden
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Mediterranean Waves');
                setShowSounds(false);
                play({ id: 'waves' });
              }}
            >
              Mediterranean Waves
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Firefly Night');
                setShowSounds(false);
                play({ id: 'firefly' });
              }}
            >
              Firefly Night
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                stop();
                props.setSound('Apocalyptic Ambience');
                setShowSounds(false);
                play({ id: 'apocalyptic' });
              }}
            >
              Apocalyptic Ambience
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AmbientSound;
