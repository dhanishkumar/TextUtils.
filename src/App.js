import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textsform from './components/Textsform';
import Alert from './components/Alert';

// import router 
import { BrowserRouter, Route, Routes, link } from "react-router-dom";



import React, { use, useState } from 'react'

function App() {
  // enable dark mode 
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'Textutils-Dark mode';  //  to change the title 
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'Textutils-Light mode';   //  to change the title 
    }
  }

  // show alert 
  const [alert, setAlert] = useState(null);  //alert is a object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Textsform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<Textsform showAlert={showAlert} heading="TextUtils - word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;





