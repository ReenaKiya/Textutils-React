import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
  }



  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }


  const [text, setText] = useState('')
  // text = "set new text"; //wrong way to change the state
  // setText = ("set new text"); //Correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary  mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary  mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary  mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary  mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary  mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
