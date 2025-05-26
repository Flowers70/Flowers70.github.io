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
    <App aboutMe='As an aspiring Computer Scientist with experience in full stack development, I am eager to help others through the application of my knowledge. I enjoy the required challenge of continuous learning accompanied by rapidly evolving technologies. Having graduated from John Brown University in December 2024 and three months of experience in my first corporate job I am excited to explore the many doors that open as I grow in expertise. Due to a recent elimination of my position, I have been laid off, however, I look forward to seeing how God will use this moment to bless others. As of now, I am looking for an opportunity to apply my technical skills and gain invaluable insights from experienced individuals. I appreciate the time you have taken to read this and hope you have a great day! '/>
    <Footer />
  </StrictMode>,
)
