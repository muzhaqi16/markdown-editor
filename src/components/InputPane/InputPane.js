import React from 'react'
import './style.css';

function InputPane(props) {
    return (
        <div className="control column is-half">

            <textarea id="editor" type="text" onChange={e => props.onChange(e.target.value)} className="textarea has-fixed-size" spellCheck="false" defaultValue={props.default}>

            </textarea>
        </div>
    )
}

export default InputPane
