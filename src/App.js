import React, { useState, useEffect } from 'react';
import InputPane from './components/InputPane';
import PreviewPane from './components/PreviewPane';

function App() {

  const [input, setInput] = useState('This is _Markdown_.')
  return (
    <div className="container">
      <div className="columns is-mobile is-centered">
        <InputPane onChange={setInput} />
        <PreviewPane markdown={input} />
      </div>
    </div>
  )
}

export default App;
