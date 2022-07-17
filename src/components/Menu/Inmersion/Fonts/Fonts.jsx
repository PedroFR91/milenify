import React, { useState } from 'react';
import './Fonts.css';

function Fonts(props) {
  const [showFonts, setShowFonts] = useState(false);

  function viewFonts() {
    setShowFonts(true);
  }

  return (
    <div className='fonts'>
      <div>Fuente</div>
      <div onClick={viewFonts}>{props.font}</div>
      {showFonts && (
        <div className='fonts-container'>
          <ul>
            <li
              style={{
                fontFamily: 'Lora',
              }}
              onClick={() => {
                props.setFont('Lora');
                setShowFonts(false);
              }}
            >
              Lora
            </li>
            <li
              style={{
                fontFamily: 'Domine',
              }}
              onClick={() => {
                props.setFont('Domine');
                setShowFonts(false);
              }}
            >
              Domine
            </li>
            <li
              style={{
                fontFamily: 'EB Garamond',
              }}
              onClick={() => {
                props.setFont('EB Garamond');
                setShowFonts(false);
              }}
            >
              EB Garamond
            </li>
            <li
              style={{
                fontFamily: 'Alegreya',
              }}
              onClick={() => {
                props.setFont('Alegreya');
                setShowFonts(false);
              }}
            >
              Alegreya
            </li>
            <li
              style={{
                fontFamily: 'Libre Bodoni',
              }}
              onClick={() => {
                props.setFont('Libre Bodoni');
                setShowFonts(false);
              }}
            >
              Libre Bodoni
            </li>
            <li
              style={{
                fontFamily: 'Rokkitt',
              }}
              onClick={() => {
                props.setFont('Rokkitt');
                setShowFonts(false);
              }}
            >
              Rokkitt
            </li>
            <li
              style={{
                fontFamily: 'Literata',
              }}
              onClick={() => {
                props.setFont('Literata');
                setShowFonts(false);
              }}
            >
              Literata
            </li>
            <li
              style={{
                fontFamily: 'Sora',
              }}
              onClick={() => {
                props.setFont('Sora');
                setShowFonts(false);
              }}
            >
              Sora
            </li>
            <li
              style={{
                fontFamily: 'Work Sans',
              }}
              onClick={() => {
                props.setFont('Work Sans');
                setShowFonts(false);
              }}
            >
              Work Sans
            </li>
            <li
              style={{
                fontFamily: 'Rubik',
              }}
              onClick={() => {
                props.setFont('Rubik');
                setShowFonts(false);
              }}
            >
              Rubik
            </li>
            <li
              style={{
                fontFamily: 'Josefin Sans',
              }}
              onClick={() => {
                props.setFont('Josefin Sans');
                setShowFonts(false);
              }}
            >
              Josefin Sans
            </li>

            <li
              style={{
                fontFamily: 'Arimo',
              }}
              onClick={() => {
                props.setFont('Arimo');
                setShowFonts(false);
              }}
            >
              Arimo
            </li>
            <li
              style={{
                fontFamily: 'Lexend Deca',
              }}
              onClick={() => {
                props.setFont('Lexend Deca');
                setShowFonts(false);
              }}
            >
              Lexend Deca
            </li>
            <li
              style={{
                fontFamily: 'Anybody',
              }}
              onClick={() => {
                props.setFont('Anybody');
                setShowFonts(false);
              }}
            >
              Anybody
            </li>
            <li
              style={{
                fontFamily: 'Space Grotesk',
              }}
              onClick={() => {
                props.setFont('Space Grotesk');
                setShowFonts(false);
              }}
            >
              Space Grotesk
            </li>
            <li
              style={{
                fontFamily: 'Space Mono',
              }}
              onClick={() => {
                props.setFont('Space Mono');
                setShowFonts(false);
              }}
            >
              Space Mono
            </li>
            <li
              style={{
                fontFamily: 'Space Sans Mono',
              }}
              onClick={() => {
                props.setFont('Spline Sans Mono');
                setShowFonts(false);
              }}
            >
              Spline Sans Mono
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Fonts;
