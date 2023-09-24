import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

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
      <div className='editor-container'>
        <div className="tool-bar">
          <h2 className="window-name">Editor</h2>
          <button className="window-action" onClick={editorWindowSizeHandler}>Button</button>
        </div>
        <textarea id="editor" onChange={textChangeHandler}>{text}</textarea>
      </div>
      <div className='preview-container'>
        <div className="tool-bar">
          <h2 className="window-name">Previewer</h2>
          <button className="window-action" onClick={previewWindowSizeHandler}>Button</button>
        </div>
        <div id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
