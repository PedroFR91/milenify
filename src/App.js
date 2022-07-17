import './App.css';
import { useState } from 'react';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Editor from './components/Editor/Editor';
import Dashboard from './components/Menu/Inmersion/Dashboard';
import StarryNights from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/StarryNights';
import NearMoon from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/NearMoon';
import HallOfTime from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/HallOfTime';
import EndlessVoyage from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/EndlessVoyage';
import BewitchedForest from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/BewitchedForest';
import Opacity from './components/Menu/Focus/Opacity';
import Connectivity from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/Connectivity';

function App(props) {
  const [color, setColor] = useState('black');

  const [backColor, setBackColor] = useState('transparent');

  const [navColor, setNavColor] = useState('gray');

  const [font, setFont] = useState('Lexend Deca');

  const handle = useFullScreenHandle();

  const [isClickedFS, setIsClickedFS] = useState(false);

  function toggleClickFS(e) {
    e.preventDefault();
    setIsClickedFS(!isClickedFS);
    if (!isClickedFS) {
      handle.enter();
    } else {
      handle.exit();
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  function toggleView() {
    setIsOpen(!isOpen);
  }

  const [isFocus, setIsFocus] = useState(false);

  function toggleFocus() {
    setIsFocus(!isFocus);
  }

  const [starry, setStarry] = useState(true);

  const [moon, setMoon] = useState(false);

  const [hall, setHall] = useState(false);

  const [voyage, setVoyage] = useState(false);

  const [forest, setForest] = useState(false);

  const [connectivity, setConnectivity] = useState(false);

  return (
    <FullScreen handle={handle}>
      <div className='App' style={{ backgroundColor: backColor }}>
        <Title navColor={navColor} />
        <Menu
          navColor={navColor}
          isClickedFS={isClickedFS}
          toggleClickFS={toggleClickFS}
          isOpen={isOpen}
          toggleView={toggleView}
          isFocus={isFocus}
          toggleFocus={toggleFocus}
        />
        <Editor font={font} color={color} isFocus={isFocus} />
        {isOpen && (
          <Dashboard
            font={font}
            setFont={setFont}
            setColor={setColor}
            setNavColor={setNavColor}
            setBackColor={setBackColor}
            setStarry={setStarry}
            setMoon={setMoon}
            setHall={setHall}
            setVoyage={setVoyage}
            setForest={setForest}
            setConnectivity={setConnectivity}
          />
        )}
        {starry && <StarryNights />}
        {moon && <NearMoon />}
        {hall && <HallOfTime />}
        {voyage && <EndlessVoyage />}
        {forest && <BewitchedForest />}
        {connectivity && <Connectivity />}
        {isFocus && <Opacity />}
      </div>
    </FullScreen>
  );
}

export default App;
