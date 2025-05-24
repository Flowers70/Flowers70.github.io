import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const underConstruction = () => {
  alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
};

function Navbar(){
  return(
    <>
      <div className='navbar'>
        <div className='decorLine'></div>
        <a><h1>Jacinth Boggess</h1></a>
        <div className='navLinks'>
          <a onClick={underConstruction}>Portfolio</a>
          <a onClick={underConstruction}>Articles</a>
          <a onClick={underConstruction}>Recipes</a>
        </div>
      </div>
    </>
  );
}

function RecentCard({background = "#ffffff", section = "Portfolio", title = "Take Action!", description = ""}){
  return(
    <a onClick={underConstruction}>
      <div className='recentCard'>
        <a>{section}</a>
        <div style={{backgroundColor: background}} className='info'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='body'>
        <div className='colA'>
          <h2>Recent</h2>
          <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
          <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" description="May 23, 2025" />
          <RecentCard background="#FCC183" section="Recipes" title="Arepas" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
        <div className='colB'>
          <div>
            <h2>About Me</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum eros in sollicitudin pellentesque. Aenean sollicitudin tellus sed dolor pretium feugiat. Suspendisse tincidunt est faucibus velit iaculis, et tincidunt dolor auctor. Aenean turpis mi, elementum ac eros eu, posuere viverra ex. Nam vitae velit vel odio aliquam lobortis. Vestibulum nulla nisl, tempor vel nisi eu, hendrerit luctus dui. Maecenas porttitor convallis ex, sed iaculis enim vestibulum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce lobortis fringilla tempor. Suspendisse a diam nec lectus pellentesque consequat. Nam egestas iaculis turpis sed bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </div>         
        </div>
        <div className='colC'>
          <img src="/Jacinth-JBU-Grad-wDecor.png"></img>
        </div>
      </div>
      <div className='rowB'>
        <h2>Find me on:</h2>
        <a href="https://www.linkedin.com/in/jacinth-boggess" target="_blank"><img src="/LinkedIn-Logo.png"></img></a>
        <a href="https://github.com/Flowers70" target="_blank"><img src="/GitHub-Logo.png"></img></a>
        <a href="https://www.youtube.com/@Jacinth-Boggess" target="_blank"><img src="/YouTube-Logo.png"></img></a>
      </div>
    </>
  )
}

export default App
