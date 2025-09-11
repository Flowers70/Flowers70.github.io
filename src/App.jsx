// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home, NewMain } from './pages/home'
import { readFromFile } from './utils/fileUtils'
import { useState } from 'react'
import { Portfolio } from './pages/portfolio'
import { Articles } from './pages/articles'
import { Recipes } from './pages/recipes'

import { Take_Action } from './pages/portfolio/take_action'
import { Tic_Tac_Toe } from './pages/portfolio/tic_tac_toe'
import { Arepas } from './pages/recipes/arepas'
import AboutMe from './pages/aboutMe'

const underConstruction = () => {
  alert("This site is still undergoing construction. I appreciate your patience and hope you have a great day! ❤️");
};

function App() {
  const [aboutMeContent, setAboutMeContent] = useState("");

  readFromFile('/data/aboutMe.txt', setAboutMeContent);

  return (
    <>
      <Routes>
      <Route path="/" element={<NewMain />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/recipes" element={<Recipes />} />

      {/* Portfolio */}
      <Route path="/take-action" element={<Take_Action />} />
      <Route path="/tic-tac-toe" element={<Tic_Tac_Toe />} />

      {/* Recipes */}
      <Route path="/arepa" element={<Arepas />} />

      {/* About Me */}
      <Route path="/aboutMe" element={<AboutMe />} />

    </Routes>
    </>
      
  );
}

export default App
