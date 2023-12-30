import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');//whether Dark mode is Enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - dark mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amaiging dark mode'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils bad dark mode'
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - light mode'

    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Navbar title="TextUtils" aboutText=" About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />} /> */}
        {/* <Route exact path="about" element={<About />} /> */}
        {/* </Routes> */}
      </div>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
