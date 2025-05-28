import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import { readFromFile } from './utils/fileUtils'

// const constAboutMe = readFromFile("/aboutMe.txt");

function Root(){
  
  const underConstruction = () => {
    alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
  };
  
  function Navbar(){
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleDisplay = () => {
      setIsVisible(!isVisible);
    };
  
    return(
      <>
        <div className='navbar desktop'>
          <div className='decorLine'></div>
          <Link to="/"><h1>Jacinth Boggess</h1></Link>
          <div className='navLinks'>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/recipes">Recipes</Link>
          </div>
        </div>
  
        <div className='navbar mobile'>
        <Link to="/"><h1>Jacinth Boggess</h1></Link>
          <div className='decorLine'>
            <a onClick={toggleDisplay}>Navigation</a>
            <div style={{display: isVisible ? 'grid' : 'none'}} className='navLinks'>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/recipes">Recipes</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  function Footer(){
    return(
      <div className='footer'>
        <h2>Find me on:</h2>
        <a href="https://www.linkedin.com/in/jacinth-boggess" target="_blank"><img src="/images/LinkedIn-Logo.png"></img></a>
        <a href="https://github.com/Flowers70" target="_blank"><img src="/images/GitHub-Logo.png"></img></a>
        <a href="https://www.youtube.com/@Jacinth-Boggess" target="_blank"><img src="/images/YouTube-Logo.png"></img></a>
      </div>
    );
  }

  return(
    <>
      <Router basename='/'>
        <Navbar />
        <App/>
        <Footer />
      </Router>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
