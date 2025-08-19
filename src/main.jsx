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
        transform: "rotate(15deg) scale(0.767)",
        height: "100%",
        width: "auto",
        padding: 0,
        margin: "auto"
    }

    const pen = {
        height: "45%",
        width: "auto",
        position: "absolute",
        zIndex: 1,
        transform: "rotate(-45deg)",
        bottom: 0
    }

    const buttons = {
        position: "absolute",
        transform: "rotate(15deg) translate(-50%, -50%)",
        zIndex: 2,
        top: "55%",
        left: "50%",
        cursor: "pointer"
    }

    const button_portfolio = {
        position: "absolute",
        transform: "rotate(15deg) translate(-50%, -50%)",
        zIndex: 2,
        top: "50%",
        left: "50%",
        cursor: "pointer"
    }

    return(
        <GoldenBoxes 
        topL={<h1 style={{margin:0, color:"#A14584", alignSelf:"center", transform: "translateY(1rem)", marginLeft: "auto", fontSize: "2 rem !important"}}>Jacinth Boggess</h1>}
        bottomL={<img src="./images/Phone.png" style={pics} />}
        Right={
            <div style={{position:"relative"}}>
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
