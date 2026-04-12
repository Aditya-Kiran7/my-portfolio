import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'
function App() {
  const [isDark, setIsDark] = useState(false)
  return (
     <div style={{
  backgroundColor: isDark ? '#111' : '#fff',
  color: isDark ? '#fff' : '#111',
  minHeight: '100vh',
  transition: 'background-color 0.3s ease, color 0.3s ease',
}}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App