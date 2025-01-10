import React ,{useState}from 'react'
export default function Textsform(props) {

    // onclick function for button click change text 
    const handleupclick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();  //create new variable to update setText
        setText(newText)
        props.showAlert("Convered to uppercase!", "success");
    }
    const handleLoclick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();  //create new variable to update setText
        setText(newText)
        props.showAlert("Convered to lowerrcase!", "success");
    }

    // clear all text
    const handleClearclick=()=>{
        let newText =' ';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    
    // onchange function use to write (without onchange function i can write in textarea)
    const handleOnChange=()=>{
        // console.log("On Change");
        setText(event.target.value)  //to write the text and update in textarea
    }


    const[text,setText]=useState('');
    // setText("New text")  correct way to change state 

    // Remove extra spaces 
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    // clear all text
    
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{background:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Conver to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Conver to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Youe Text Summary</h1>
            {/* calculate words and characters  */}
            <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p> 
            <h2>How much time to read</h2>
            {/* calculate read time  */}
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
