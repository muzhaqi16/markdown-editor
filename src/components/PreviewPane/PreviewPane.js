import React from 'react'
import marked from 'marked';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

function PreviewPane(props) {
    const getMarkdownText = () => {
        var rawMarkup = marked(props.markdown);
        return { __html: rawMarkup };
    }
    return (
        <div className="column is-half" dangerouslySetInnerHTML={getMarkdownText()} />
    );
}

export default PreviewPane
