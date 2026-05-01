import './App.css';
import './Desktop.css';
import Education from './Components/Hero/Education';
import Experiences from './Components/Hero/Experiences';
import TechSkills from './Components/Hero/Tech-Skills';
import Projects from './Components/Hero/Projects';
import Presentation from './Components/Hero/Presentation';
import Introduction from './Components/Hero/Introduction';
import Header from './Components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // useEffect - To make it responsive should they resize the viewport
  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);

    // When the component mounts
    window.addEventListener('resize', handleResize);

    // Unhook once done
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // 768 px - Typical breakpoint between mobile and desktop

  return deviceWidth < 1232 ? 
  (
    <div className="App">
      <Header/>
      <Presentation/>

      <div className="page-container profile-picture-container">
        <img src="PXL_20241119_200918417.PORTRAIT~2.jpg" alt="" />
      </div>

      <div className="adjustment-box">
        <Introduction/>
        <Projects/>
        <TechSkills/>
        <Experiences/>
        <Education/>
      </div>

    </div>
  ) :
  (
    <div className="App">
      <div className='parent-column'>
        <Header/>
        <div className='flex-row'>
          <div className='left'>
            <TechSkills/>
            <Education/>
          </div>
          <div className='middle'>
            <Presentation/>

            <div className="page-container profile-picture-container">
              <img src="PXL_20241119_200918417.PORTRAIT~2.jpg" alt="" />
            </div>

            <div className="adjustment-box">
              <Introduction/>
              <Projects/>
              <Experiences/>
            </div>
          </div> 
          <div className='right'>

            <h2>Achievements</h2>
            <ul>
              <li>GitHub Stats</li>
              <li>Use line icons to make the visual weight of the side bars balanced</li>
              <li>Something</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
