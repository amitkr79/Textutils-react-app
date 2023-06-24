import React from 'react'

export default function About(props) {

    // const[mystyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let mystyle = {
        color: props.mode==='dark'?'white':'#0c2143',
        backgroundColor: props.mode==='dark'?'#0c2143':'white',

    }

  return (
    <div className='container' style={mystyle}>
        <h2>About us</h2>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Textutils gives you a way to analyze your text quickly and efficently. Be it word count, character count or
                </div>
                </div>
            </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Textutil is a free character counter tool that provides instant character count & word count statistics for given text. Textutils reports the number of word and characters. Thus it is suitable for writing text with word / character limits.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong> Brouser Compatible </strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                This is counter software works in any web browser such as chrome, firefox, Internet explorer, safari , opera....It suits to count to chatacter in facebook, blog, excel docemnt, pdf document, essay, etc...
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
         <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
        </div> */}
    </div>
  )
}
