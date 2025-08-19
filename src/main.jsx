import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import GoldenBoxes from './GoldenBoxes.jsx'
// import { readFromFile } from './utils/fileUtils'

// const constAboutMe = readFromFile("/aboutMe.txt");

function Root(){
  
  const underConstruction = () => {
    alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
  };

  function NewMain(){
    const pics = {
        transform: "rotate(-15deg) scale(0.767)",
        width: "auto",
        // height: "100%",
        height: "calc(100% / (0.56 + 0.2588) * 0.975)", // This is ratio (0.56) plus the sign of 15 degrees
        padding: 0
    };

    // Next way to level this up is to use object-fit: cover or contain and aspect-ratio
    const paper = {
        // transform: "rotate(15deg) scale(0.767)",
        // height: "calc(100% / (0.77 + 0.2588) * 0.975)",
        maxHeight: "100%",
        width: "auto",
        padding: 0,
        margin: "auto",
        aspectRatio: 0.77
    }

    const pen = {
        height: "50%",
        width: "auto",
        position: "absolute",
        zIndex: 1,
        transform: "rotate(-60deg) translate(-65%, 55%)",
        bottom: 0,
        left: 0,
        aspectRatio: 0.2458
    }

    const buttons = {
        position: "absolute",
        zIndex: 2,
        top: "calc(40% + 30px)",
        left: "25%",
        cursor: "pointer"
    }

    const button_portfolio = {
        position: "absolute",
        zIndex: 2,
        top: "40%",
        left: "25%",
        cursor: "pointer"
    }

    const rotated = {
      transform: "rotate(15deg) translateY(10%)",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "81.65%", // 1/(Sin(15deg) + Cos(15deg)) * 100
      width: "81.65%",
      boxSizing: "border-box"
    }

    return(
        <GoldenBoxes 
        topL={<h1 style={{margin:0, color:"#A14584", alignSelf:"center", transform: "translateY(1rem)", marginLeft: "auto", fontSize: "2 rem !important"}}>Jacinth Boggess</h1>}
        bottomL={<img src="./images/Phone.png" style={pics} />}
        Right={
            <div style={rotated}>
              <button style={button_portfolio} onClick={underConstruction}>Portfolio</button>
              <button style={buttons} onClick={underConstruction}>About Me</button>
              <img src="./images/Pen.png" style={pen}/>
              <img src="./images/Paper2.png" style={paper}/>
            </div> 
        }
        />
    );
  }

  return(
    <>
      <Router basename='/'>
        <NewMain />
      </Router>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
