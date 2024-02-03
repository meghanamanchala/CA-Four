import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import questions from './questions'
import img from './images/logo.png'

function App() {

const[dark,setTheme] = useState(true);
const[themeName,setThemeName] = useState("dark")

useEffect(()=>{
  if(dark){
    setThemeName("Dark")
  }else{
    setThemeName("Light")
  }

},[dark])
const handleBackgroundColor =()=>{
  setTheme(!dark)
}
const styleTheme ={
  backgroundColor:dark?"grey":"white",
}

  const logo = {
    width:"15rem",
    height:"auto"
  }

  return (
    <div className="body" style={styleTheme}>
      <div className="header">
      <h1>KALVIUM</h1> 
      <img src={img} style={logo} alt="noth" />
      <button className="theme" onClick={handleBackgroundColor}>{themeName}</button>
      </div>
      <div>
       <QuestionBox props={questions} />
      </div>
    </div>
  );
}

export default App;