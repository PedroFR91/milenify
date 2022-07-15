import './App.css';
import { useState } from 'react';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App(props) {
  const [color, setColor] = useState('red');
  const [backColor, setBackColor] = useState('white');
  const [navColor, setNavColor] = useState('blue');
  const [font, setFont] = useState('Lexend Deca');

  const handle = useFullScreenHandle();

  const [isClicked, setIsClicked] = useState(false);

  function toggleClick(e) {
    e.preventDefault();
    console.log('Hola');
    setIsClicked(!isClicked);
    if (!isClicked) {
      handle.enter();
    } else {
      handle.exit();
    }
  }

  return (
    <FullScreen handle={handle}>
      <div className='App' style={{ backgroundColor: backColor }}>
        <Title font={font} navColor={navColor} />
        <Menu font={font} navColor={navColor} toggleClick={toggleClick} />
      </div>
    </FullScreen>
  );
}

export default App;
