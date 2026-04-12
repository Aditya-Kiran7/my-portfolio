function Navbar({ isDark, setIsDark }) {
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

  <button class="nav" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>About</button>

<button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} class="nav" style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>Projects</button>

<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} class="nav" style={{
  color: isDark ? '#ccc' : '#111',
  padding: '8px 16px',
  borderRadius: '8px',
  border: `1px solid ${isDark ? '#555' : '#ddd'}`,
  backgroundColor: 'transparent',
  fontSize: '14px',
  cursor: 'pointer',
}}>Contact</button>
        <button class="navbar-switch-gradient"
          onClick={() => setIsDark(!isDark)}
          
          style={{
            
            backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
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
      </div>
    </nav>
  )
}

export default Navbar