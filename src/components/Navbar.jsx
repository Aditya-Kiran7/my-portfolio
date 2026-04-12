function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      height: '60px',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
    }}>
      <h2>Aditya Kiran</h2>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar