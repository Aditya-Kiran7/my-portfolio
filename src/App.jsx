import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [cursorGlow, setCursorGlow] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={{
      backgroundColor: isDark ? '#111' : '#fff',
      color: isDark ? '#fff' : '#111',
      minHeight: '100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      position: 'relative',

    }}>

      {/* cursor glow */}
      {cursorGlow && <div style={{
        position: 'fixed',
        left: cursor.x -400,
        top: cursor.y -400,
        width: '800px',
        height: '800px',
        borderRadius: '100%',
        background: isDark
          ? 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%)'
          : 'radial-gradient(circle, rgba(244, 144, 211, 0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'left 0.005ms ease, top 0.005ms ease',
      }} />}

      <Navbar isDark={isDark} setIsDark={setIsDark} cursorGlow={cursorGlow} setCursorGlow={setCursorGlow} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App