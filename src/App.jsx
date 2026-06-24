import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('pt')

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Timeline lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}

export default App;

