function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px',
      backgroundColor: '#f9f9f9',
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
        Hi, I'm Aditya Kiran 👋
      </h1>
      <p style={{ fontSize: '18px', color: '#666', maxWidth: '500px', marginBottom: '32px' }}>
        First year Civil Engineering student who loves building things.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="#projects" style={{
          backgroundColor: 'blueviolet',
          color: 'white',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}>See my work</a>
        <a href="#contact" style={{
          border: '1px solid black',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          color: 'black',
        }}>Contact me</a>
      </div>
    </section>
  )
}

export default Hero