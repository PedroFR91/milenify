import React from 'react';
import './Editor.css';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

const ReactEditorJS = createReactEditorJS();

function Editor(props) {
  return (
    <div
      className={`editor ${props.isFocus ? 'focuseditor' : props.color}`}
      style={{ fontFamily: props.font, color: props.color }}
      onKeyDown={props.playkey}
    >
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

export default Editor;
