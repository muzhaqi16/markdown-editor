import React from 'react'

function InputPane(props) {
    return (
        <div className="control column is-half">
            <textarea id="markdown" onChange={e => props.onChange(e.target.value)} className="textarea has-fixed-size" spellCheck="false" defaultValue="This is _Markdown_.">

            </textarea>
        </div>
    )
}

export default InputPane
