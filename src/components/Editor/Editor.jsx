import React, { useEffect, useRef, useState } from 'react';
import './Editor.css';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

import twfk from '../../assets/audio/keys/tw1k.wav';
import twfs from '../../assets/audio/keys/tw1s.wav';
import twfe from '../../assets/audio/keys/tw1e.wav';
import twsk from '../../assets/audio/keys/tw2k.wav';
import twss from '../../assets/audio/keys/tw2s.wav';
import twse from '../../assets/audio/keys/tw2e.wav';
import rt1k from '../../assets/audio/keys/rt1k.wav';
import rt1s from '../../assets/audio/keys/rt1s.wav';
import rt1e from '../../assets/audio/keys/rt1e.wav';
import rk1k from '../../assets/audio/keys/rk1k.wav';
import rk1s from '../../assets/audio/keys/rk1s.wav';
import rk1e from '../../assets/audio/keys/rk1e.mp3';
import m1 from '../../assets/audio/keys/m1.wav';
import m2 from '../../assets/audio/keys/m2.wav';
import d2 from '../../assets/audio/keys/d2.aiff';
import d3 from '../../assets/audio/keys/d3.wav';
import d1k from '../../assets/audio/keys/d1k.wav';
import d1s from '../../assets/audio/keys/d1s.wav';
import d1e from '../../assets/audio/keys/d1e.wav';
import silence from '../../assets/audio/keys/silence.mp3';

const ReactEditorJS = createReactEditorJS();

function Editor(props) {
  function soundkey() {
    props.playkey();
  }
  const editorCore = React.useRef(null);

  const initialData = {
    blocks: [
      { type: 'header', data: { text: 'Título', level: 1 } },
      {
        type: 'paragraph',
        data: { text: 'Empieza a escribir aquí con o sín título' },
      },
    ],
  };

  const [data, setData] = useState(initialData);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    setData(savedData);
    console.log(data.blocks[1].data.text);
    console.log(savedData);
  }, []);

  return (
    <div
      className={`editor ${
        props.isFocus && props.editorClicked ? 'focuseditor' : props.color
      }`}
      style={{
        fontFamily: props.font,
        color: props.color,
        padding: '30px',
      }}
      onClick={(e) => {
        props.toggleEditorClick();
        handleSave();
      }}
      onKeyDown={(e) => {
        e.code === 'Space'
          ? props.setKeytoplay(twfs)
          : e.code === 'Enter'
          ? props.setKeytoplay(twfe)
          : props.setOther(twfk);
        soundkey();
      }}
      id='pdf'
    >
      <ReactEditorJS
        editorCore={editorCore}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={initialData}
      />
    </div>
  );
}

export default Editor;
