import React from 'react';
import marked from 'marked';
function App() {
  const getMarkdownText = () => {
    var rawMarkup = marked('This is _Markdown_.', { sanitize: true });
    return { __html: rawMarkup };
  }
  return (
    <div dangerouslySetInnerHTML={getMarkdownText()} />
  );
}

export default App;
