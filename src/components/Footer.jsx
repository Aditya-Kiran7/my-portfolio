import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer({ isDark }) {
  return (
    <footer className="footer-section" style={{
      textAlign: 'center',
      padding: '32px',
      borderTop: `1px solid ${isDark ? '#333' : '#eee'}`,
      color: isDark ? '#666' : '#888',
      fontSize: '14px',
    }}>
      <p>Built with React by Aditya Kiran Parasa · April 2026</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px' }}>
        <a
          href="https://github.com/Aditya-Kiran7"
          target="_blank"
          rel="noreferrer"
          style={{ color: isDark ? '#aaa' : '#555', textDecoration: 'none', fontSize: '28px' }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/aditya-kiran-parasa"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0077b5', textDecoration: 'none', fontSize: '28px' }}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer