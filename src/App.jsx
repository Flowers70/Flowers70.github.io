import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar(){
  return(
    <>
      <div className='navbar'>
        <div className='decorLine'></div>
        <h1>Jacinth Boggess</h1>
        <div className='navLinks'>
          <a>Portfolio</a>
          <a>Articles</a>
          <a>Recipes</a>
        </div>
      </div>
    </>
  );
}

function RecentCard(){
  return(
    <>
      <div className='recentCard'>
        <a>Portfolio</a>
        <div className='info'>
          <h3>Take Action!</h3>
          <p>A to-do app developed using Angular & Express JS</p>
        </div>
      </div>
    </>
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
          <RecentCard />
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
          <img src="/decorBorder.png" className='decorBorder'></img>
          <img src="/jacinth-jbu-grad.jpg"></img>
          <img src="/decorBorder.png" className='decorBorder'></img>
        </div>
      </div>
    </>
  )
}

export default App
