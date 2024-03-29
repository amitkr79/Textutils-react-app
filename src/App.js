// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light');
   const [alert , setAlert] = useState(null);

   const showAlert = (message , type)=>{
          
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
     setAlert(null);
    }, 2000)
   }


  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode ('dark');
      document.body.style.backgroundColor = '#0c2143';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtil - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtil - Install Now';
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtil - Now';
        
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled", "success");
    }
  }
  return (
    <> 
        {/* <Navbar title="TextUtils" aboutText="About"/> */}
        {/* <Navbar/> */}
 
      <Router>


        <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>

        <div className="container my-3">
          <Routes>
              <Route path="/about" element= {<About mode = {mode} />}/>
              {/* <Route exact path="/about" element= {<About mode = {mode}/>}/> */}
              <Route path="/" element= {<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Remove extra spaces" mode = {mode}/>}/>

             </Routes>
        </div>

      </Router> 
      {/* <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/> */}
    
    </>
  )
  
}

export default App;