
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!" , "success")
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted tolowercase!" , "success")
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText =(" ");
        setText(newText);
        props.showAlert("Textarea has been cleared!" , "success")
    }
    const handleCopyClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        // let text = document.getElementById("myBox")
        // text.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied" , "success")
    }
    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra space has been removed!" , "success")
    }
    // const handleReverseClick = ()=>{
    //     // console.log("Uppercase was clicked" + text);
    //     let newText = str.split(" ").map(word => word.split("").reverse().join(""));;
    //     setText(newText);
    // }
    const handleOnChange = (event)=>{
        // console.log("Uppercase was clicked");
        setText(event.target.value);    
    }
    const [text, setText] = useState(' ');
    // setText("new text");
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#183762 ':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove Xtra space</button>
            {/* <button className="btn-primary mx-1" onClick={handleReverseClick}>Reverse</button> */}

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split(" ").filter((word)=>{return word.length!==0}).length} character</p>

            <p>{0.008 * text.split(" ").filter((time)=>{return time.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>

            <p>{text.split(" ").filter((char)=>{return char.length!==0}).length>0?text:"Nothing to preview "}</p>

        </div>
        </>
  )
}

