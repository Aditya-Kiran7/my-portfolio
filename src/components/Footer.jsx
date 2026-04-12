function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '32px',
      borderTop: '1px solid #eee',
      color: '#888',
      fontSize: '14px',
    }}>
      <p>Built with React by Aditya K. · 2026</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px' }}>
        <a href="https://github.com" target="_blank" style={{ color: '#888', textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com/in/aditya-kiran-parasa/" target="_blank" style={{ color: '#888', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer