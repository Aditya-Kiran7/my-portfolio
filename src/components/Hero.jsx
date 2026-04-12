function Hero({ isDark }) {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px',
      backgroundColor: isDark ? '#111' : '#f9f9f9',
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px', color: isDark ? '#fff' : '#111' }}>
        Hi, I'm Aditya 👋
      </h1>
      <p style={{ fontSize: '18px', color: isDark ? '#aaa' : '#666', maxWidth: '500px', marginBottom: '32px' }}>
        First year Computer Engineering student who loves building things for the web.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="#projects" style={{
          backgroundColor: isDark ? '#fff' : 'black',
          color: isDark ? '#111' : 'white',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}>See my work</a>
        <a href="#contact" style={{
          border: `1px solid ${isDark ? '#fff' : 'black'}`,
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          color: isDark ? '#fff' : 'black',
        }}>Contact me</a>
      </div>
    </section>
  )
}

export default Hero