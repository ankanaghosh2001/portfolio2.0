import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
      <Work/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
