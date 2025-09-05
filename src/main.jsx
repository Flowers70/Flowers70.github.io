import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './newStyle.css'
import App from './App.jsx'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function Root(){
  return(
    <>
      <Router basename='/'>
        <App />
      </Router>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
