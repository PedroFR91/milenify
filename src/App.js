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
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createReactEditorJS } from 'react-editor-js';
import useSound from 'use-sound';
import twfk from './assets/audio/keys/tw1k.wav';

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
    const data = await html2canvas(document.querySelector('#pdf'));
    const img = data.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth - 30, pdfHeight - 30);
    pdf.save('iwriter.pdf');
    console.log('Hola desde createpdf');
  };
  const html = ReactDOMServer.renderToString(<ReactEditorJS />);
  const exportHtml = html.toString();

  const [keytoplay, setKeytoplay] = useState(twfk);
  const [playkey] = useSound(keytoplay);

  return (
    <FullScreen handle={handle}>
      <div className='App' style={{ backgroundColor: backColor }}>
        <Title navColor={navColor} />
        <Login navColor={navColor} />
        <Export
          navColor={navColor}
          createPDF={createPDF}
          exportHtml={exportHtml}
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
        <Editor font={font} color={color} isFocus={isFocus} playkey={playkey} />
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
            setKeytoplay={setKeytoplay}
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
