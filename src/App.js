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
import Connectivity from './components/Menu/Inmersion/Styles/Dynamics/backgrounds/Connectivity';
import Login from './components/Login/Login';
import Export from './components/Export/Export';
import ReactDOMServer from 'react-dom/server';
import { createReactEditorJS } from 'react-editor-js';
import useSound from 'use-sound';
import twfk from './assets/audio/keys/tw1k.wav';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ReactEditorJS = createReactEditorJS();

function App(props) {
  const [color, setColor] = useState('#FDFDFD');

  const [backColor, setBackColor] = useState('');

  const [navColor, setNavColor] = useState('#FDFDFD80');

  const [font, setFont] = useState('Lexend Deca');
  const [sound, setSound] = useState('Modo Silencio');

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

  const [showSounds, setShowSounds] = useState(false);

  const createPDF = async () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    var datemilseg = Date.now();
    const data = await html2canvas(document.querySelector('#pdf'), {
      scale: '5',
    }).then((canvas) => {
      console.log('Capturando');
      var imgFile = canvas.toDataURL('image/png');
      pdf.addImage(imgFile, 'JPEG', 5, 5, 600, 600);
      pdf.save('iwriter_' + `${datemilseg.toString()}` + '.pdf');
    });
  };

  const html = ReactDOMServer.renderToString(<ReactEditorJS />);
  const exportHtml = html.toString();
  const [keySound, setKeySound] = useState('Typewriter 1');

  const [keytoplay, setKeytoplay] = useState(twfk);

  const [other, setOther] = useState(twfk);
  const [space, setSpace] = useState();
  const [enter, setEnter] = useState();
  const [playkey] = useSound(other);

  const [editorClicked, setEditorClicked] = useState(false);

  function toggleEditorClick() {
    setEditorClicked(!editorClicked);
  }
  return (
    <FullScreen handle={handle}>
      <div className='App' style={{ backgroundColor: backColor }}>
        <Title navColor={navColor} />
        <Login navColor={navColor} />
        <Export
          setColor={setColor}
          navColor={navColor}
          exportHtml={exportHtml}
          createPDF={createPDF}
        />
        <Menu
          navColor={navColor}
          isClickedFS={isClickedFS}
          toggleClickFS={toggleClickFS}
          isOpen={isOpen}
          toggleView={toggleView}
          isFocus={isFocus}
          toggleFocus={toggleFocus}
        />
        <Editor
          font={font}
          color={color}
          isFocus={isFocus}
          setOther={setOther}
          playkey={playkey}
          editorClicked={editorClicked}
          toggleEditorClick={toggleEditorClick}
        />
        {isOpen && (
          <Dashboard
            font={font}
            color={color}
            backColor={backColor}
            setFont={setFont}
            sound={sound}
            setSound={setSound}
            setColor={setColor}
            setNavColor={setNavColor}
            setBackColor={setBackColor}
            showSounds={showSounds}
            setShowSounds={setShowSounds}
            setStarry={setStarry}
            setMoon={setMoon}
            setHall={setHall}
            setVoyage={setVoyage}
            setForest={setForest}
            setConnectivity={setConnectivity}
            setOther={setOther}
            setKeySound={setKeySound}
            keySound={keySound}
          />
        )}
        {starry && <StarryNights />}
        {moon && <NearMoon />}
        {hall && <HallOfTime />}
        {voyage && <EndlessVoyage />}
        {forest && <BewitchedForest />}
        {connectivity && <Connectivity />}
      </div>
    </FullScreen>
  );
}

export default App;
