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
      <h2 style={{ color: isDark ? '#fff' : '#111' }}>Aditya K.</h2>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="#about" style={{ color: isDark ? '#ccc' : '#111' }}>About</a>
        <a href="#projects" style={{ color: isDark ? '#ccc' : '#111' }}>Projects</a>
        <a href="#contact" style={{ color: isDark ? '#ccc' : '#111' }}>Contact</a>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            backgroundColor: isDark ? '#fff' : '#111',
            color: isDark ? '#111' : '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar