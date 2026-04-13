import { useState } from 'react'

function Navbar({ isDark, setIsDark, cursorGlow, setCursorGlow }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navBtnStyle = {
    color: isDark ? '#ccc' : '#111',
    padding: '8px 16px',
    borderRadius: '8px',
    border: `1px solid ${isDark ? '#555' : '#ddd'}`,
    backgroundColor: 'transparent',
    fontSize: '14px',
    cursor: 'pointer',
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        height: '60px',
        borderBottom: `1px solid ${isDark ? '#333' : '#eee'}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isDark ? '#111' : 'white',
      }}>
        <h2
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ color: isDark ? '#fff' : '#111', cursor: 'pointer' }}
        >
          My Portfolio
        </h2>

        {/* Desktop nav links */}
        <div className="nav-links">
          <button className="nav" onClick={() => scrollTo('about')} style={navBtnStyle}>About</button>
          <button className="nav" onClick={() => scrollTo('projects')} style={navBtnStyle}>Projects</button>
          <button className="nav" onClick={() => scrollTo('contact')} style={navBtnStyle}>Contact</button>

          <button
            className="navbar-switch-gradient"
            onClick={() => setIsDark(!isDark)}
            style={{
              backgroundColor: isDark ? 'rgba(87,83,83,0.3)' : 'rgba(105,100,100,0.3)',
              backdropFilter: 'blur(10px)',
              color: isDark ? 'rgba(112,104,104,1)' : '#0b0b0bff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {isDark ? '☀️ Switch Light' : '🌙 Switch Dark'}
          </button>

          <button
            onClick={() => setCursorGlow(!cursorGlow)}
            style={{
              backgroundColor: cursorGlow ? '#6c63ff' : 'transparent',
              color: cursorGlow ? '#fff' : isDark ? '#ccc' : '#111',
              border: '1px solid #6c63ff',
              padding: '8px 16px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {cursorGlow ? '🔦 Torch On' : '🔦 Torch Off'}
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ backgroundColor: isDark ? '#fff' : '#111', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ backgroundColor: isDark ? '#fff' : '#111', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ backgroundColor: isDark ? '#fff' : '#111', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{
          backgroundColor: isDark ? '#111' : '#fff',
          borderBottomColor: isDark ? '#333' : '#eee',
          position: 'sticky',
          top: '60px',
          zIndex: 99,
        }}
      >
        <button className="nav" onClick={() => scrollTo('about')} style={navBtnStyle}>About</button>
        <button className="nav" onClick={() => scrollTo('projects')} style={navBtnStyle}>Projects</button>
        <button className="nav" onClick={() => scrollTo('contact')} style={navBtnStyle}>Contact</button>

        <button
          className="navbar-switch-gradient"
          onClick={() => { setIsDark(!isDark); setMenuOpen(false) }}
          style={{
            backgroundColor: isDark ? 'rgba(87,83,83,0.3)' : 'rgba(105,100,100,0.3)',
            backdropFilter: 'blur(10px)',
            color: isDark ? 'rgba(112,104,104,1)' : '#0b0b0bff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
            textAlign: 'left',
          }}
        >
          {isDark ? '☀️ Switch Light' : '🌙 Switch Dark'}
        </button>

        <button
          onClick={() => { setCursorGlow(!cursorGlow); setMenuOpen(false) }}
          style={{
            backgroundColor: cursorGlow ? '#6c63ff' : 'transparent',
            color: cursorGlow ? '#fff' : isDark ? '#ccc' : '#111',
            border: '1px solid #6c63ff',
            padding: '8px 16px',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
            textAlign: 'left',
          }}
        >
          {cursorGlow ? '🔦 Torch On' : '🔦 Torch Off'}
        </button>
      </div>
    </>
  )
}

export default Navbar