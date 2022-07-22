import React, { useState } from 'react';
import './KeySound.css';

import twfk from '../../../../assets/audio/keys/tw1s.wav';
import twfs from '../../../../assets/audio/keys/tw1s.wav';
import twfe from '../../../../assets/audio/keys/tw1e.wav';
import twsk from '../../../../assets/audio/keys/tw2k.wav';
import twss from '../../../../assets/audio/keys/tw2s.wav';
import twse from '../../../../assets/audio/keys/tw2e.wav';
import rt1k from '../../../../assets/audio/keys/rt1k.wav';
import rt1s from '../../../../assets/audio/keys/rt1s.wav';
import rt1e from '../../../../assets/audio/keys/rt1e.wav';
import rk1k from '../../../../assets/audio/keys/rk1k.wav';
import rk1s from '../../../../assets/audio/keys/rk1s.wav';
import rk1e from '../../../../assets/audio/keys/rk1e.mp3';
import m1 from '../../../../assets/audio/keys/m1.wav';
import m2 from '../../../../assets/audio/keys/m2.wav';
import d2 from '../../../../assets/audio/keys/d2.aiff';
import d3 from '../../../../assets/audio/keys/d3.wav';
import d1k from '../../../../assets/audio/keys/d1k.wav';
import d1s from '../../../../assets/audio/keys/d1s.wav';
import d1e from '../../../../assets/audio/keys/d1e.wav';
import silence from '../../../../assets/audio/keys/silence.mp3';

function KeySound(props) {
  const [showKeys, setShowKeys] = useState(false);

  function viewKeys() {
    setShowKeys(true);
  }

  return (
    <div className='keysound'>
      <div>Sonido de teclas</div>
      <div onClick={viewKeys}>{props.keySound}</div>
      {showKeys && (
        <div className='fonts-container'>
          <ul>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(silence);
                props.setKeySound('Sin sonido');
                setShowKeys(false);
              }}
            >
              Sin Sonido
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={(e) => {
                props.setOther(twfk);
                props.setKeySound('Typewriter 1');
                setShowKeys(false);
              }}
            >
              Typewriter 1
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(twsk);
                props.setKeySound('Typewriter 2');
                setShowKeys(false);
              }}
            >
              Typewriter 2
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(rt1k);
                props.setKeySound('Rusty Typewriter');
                setShowKeys(false);
              }}
            >
              Rusty Typewriter
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(rk1k);
                props.setKeySound('Rusty Keyboard');
                setShowKeys(false);
              }}
            >
              Rusty Keyboard
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(d1k);
                props.setKeySound('Digital 1');
                setShowKeys(false);
              }}
            >
              Digital 1
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(d2);
                props.setKeySound('Digital 2');
                setShowKeys(false);
              }}
            >
              Digital 2
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(d3);
                props.setKeySound('Digital 3');
                setShowKeys(false);
              }}
            >
              Digital 3
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(m1);
                props.setKeySound('Mobile 1');
                setShowKeys(false);
              }}
            >
              Mobile 1
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setOther(m2);
                props.setKeySound('Mobile 2');
                setShowKeys(false);
              }}
            >
              Mobile 2
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default KeySound;
