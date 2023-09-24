import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

import './index.css';

function App() {
  const [text, setText] = useState('');
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const editorWindowSizeHandler = () => {
    setIsEditorVisible(isEditorVisible);
    setIsPreviewVisible(!isPreviewVisible);
  };

  const previewWindowSizeHandler = () => {
    setIsEditorVisible(!isEditorVisible);
    setIsPreviewVisible(isPreviewVisible);
  };

  return (
    <div className="App">
      <div className={isEditorVisible ? 'editor-container' : 'hidden'}>
        <div className="tool-bar">
          <h2 className="window-name">Editor</h2>
          <button className="window-action" onClick={editorWindowSizeHandler}>
            <FontAwesomeIcon
              style={{ fontSize: '1.1rem', width: '30px' }}
              icon={
                isEditorVisible === isPreviewVisible
                  ? faUpRightAndDownLeftFromCenter
                  : faDownLeftAndUpRightToCenter
              }
            />
          </button>
        </div>
        <textarea id="editor" onChange={textChangeHandler}>{text}</textarea>
      </div>
      <div className={isPreviewVisible ? 'preview-container' : 'hidden'}>
        <div className="tool-bar">
          <h2 className="window-name">Previewer</h2>
          <button className="window-action" onClick={previewWindowSizeHandler}>
            <FontAwesomeIcon
              style={{ fontSize: '1.1rem', width: '30px' }}
              icon={
                isEditorVisible === isPreviewVisible
                  ? faUpRightAndDownLeftFromCenter
                  : faDownLeftAndUpRightToCenter
              }
            />
          </button>
        </div>
        <div id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
