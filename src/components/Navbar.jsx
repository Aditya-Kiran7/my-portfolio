function Navbar({ isDark, setIsDark, cursorGlow, setCursorGlow }) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      height: '60px',
      borderBottom: `1px solid ${isDark ? '#333' : '#eee'}`,
      position: 'sticky',
      top: 0,
      backgroundColor: isDark ? '#111' : 'white',

    }}>
      <h2  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: isDark ? '#fff' : '#111' }} >My Portfolio</h2>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>

  <button className="nav" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>About</button>

<button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="nav" style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>Projects</button>

<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="nav" style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>Contact</button>
        <button className="navbar-switch-gradient"
          onClick={() => setIsDark(!isDark)}
          
          style={{
            
            backgroundColor: isDark ? 'rgba(87, 83, 83, 0.3)' : 'rgba(105, 100, 100, 0.3)',
backdropFilter: 'blur(10px)',
            color: isDark ? 'rgba(112, 104, 104, 1)' : '#0b0b0bff',
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
    </nav>
  )
}

export default Navbar