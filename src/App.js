
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='editor-container'>
        <div className="tool-bar">
          <h2 className="window-name">Editor</h2>
          <button className="window-action">Button</button>
        </div>
        <textarea id="editor"></textarea>
      </div>
      <div className='preview-container'>
        <div className="tool-bar">
          <h2 className="window-name">Previewer</h2>
          <button className="window-action">Button</button>
        </div>
        <div id="preview"></div>
      </div>
    </div>
  );
}

export default App;
