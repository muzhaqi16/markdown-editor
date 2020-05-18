import React from 'react'
import marked from 'marked';
import './style.css';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
}
//this is necesarry to add the appropriate bulma heading classes
renderer.heading = function (text, level) {
    return `
            <h${level} class="title is-${level}">
              ${text}
            </h${level}>`;
};

marked.setOptions({
    renderer: renderer,
    // highlight: function (code, language) {
    //     console.log(code, language)
    //     const hljs = require('highlight.js');
    //     const validLanguage = hljs.getLanguage(language) ? language : 'markdown';
    //     return hljs.highlight(validLanguage, code).value;
    // },
    // pedantic: false,
    gfm: true,
    // tables: true,
    breaks: true,
    // smartLists: true,
    // smartypants: false,
    // xhtml: false
});
function PreviewPane(props) {
    const getMarkdownText = () => {
        var rawMarkup = marked(props.markdown);
        return { __html: rawMarkup };
    }
    return (
        <div id="preview" className="column is-half" dangerouslySetInnerHTML={getMarkdownText()} />
    );
}

export default PreviewPane
