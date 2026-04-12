function Footer({ isDark }) {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '32px',
      borderTop: `1px solid ${isDark ? '#333' : '#eee'}`,
      color: isDark ? '#666' : '#888',
      fontSize: '14px',
    }}>
      <p>Built with React by Aditya K. · 2025</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px' }}>
        <a href="https://github.com" target="_blank" style={{ color: isDark ? '#666' : '#888', textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" style={{ color: isDark ? '#666' : '#888', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer