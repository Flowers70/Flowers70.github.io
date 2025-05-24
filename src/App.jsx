import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecentCard } from './components/RecentCard/RecentCard'

const underConstruction = () => {
  alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body body-desktop'>
        <div>
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

      <div className='body body-mobile'>
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
        <div>
          <h2>Recent</h2>
          <RecentCard background="#DC566C" description="A to-do app developed using Angular & Express JS" />
          <RecentCard background="#F7926E" section="Articles" title="The Difference Between Agile and Kanban" description="May 23, 2025" />
          <RecentCard background="#FCC183" section="Recipes" title="Arepas" description="A mouthwatering Columbian food that is a family favorite" />
        </div>
      </div>
    </>
  )
}

export default App
