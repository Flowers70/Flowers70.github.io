import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
        <a><h1>Jacinth Boggess</h1></a>
        <div className='navLinks'>
          <a onClick={underConstruction}>Portfolio</a>
          <a onClick={underConstruction}>Articles</a>
          <a onClick={underConstruction}>Recipes</a>
        </div>
      </div>

      <div className='navbar mobile'>
        <a><h1>Jacinth Boggess</h1></a>
        <div className='decorLine'>
          <a onClick={toggleDisplay}>Navigation</a>
          <div style={{display: isVisible ? 'grid' : 'none'}} className='navLinks'>
            <a onClick={underConstruction}>Portfolio</a>
            <a onClick={underConstruction}>Articles</a>
            <a onClick={underConstruction}>Recipes</a>
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
      <a href="https://www.linkedin.com/in/jacinth-boggess" target="_blank"><img src="/LinkedIn-Logo.png"></img></a>
      <a href="https://github.com/Flowers70" target="_blank"><img src="/GitHub-Logo.png"></img></a>
      <a href="https://www.youtube.com/@Jacinth-Boggess" target="_blank"><img src="/YouTube-Logo.png"></img></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)
