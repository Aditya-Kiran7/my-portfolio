function Contact({ isDark }) {
  return (
    <section id="contact" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '8px', color: isDark ? '#fff' : '#111' }}>Contact me</h2>
      <p style={{ color: isDark ? '#aaa' : '#666', marginBottom: '32px' }}>
        Feel free to reach out for collaborations or just a chat!
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <input type="text" placeholder="Your name" style={{
            flex: 1, padding: '12px 16px', borderRadius: '8px',
            border: `1px solid ${isDark ? '#333' : '#ddd'}`,
            backgroundColor: isDark ? '#1a1a1a' : '#fff',
            color: isDark ? '#fff' : '#111',
            fontSize: '14px',
          }} />
          <input type="email" placeholder="Your email" style={{
            flex: 1, padding: '12px 16px', borderRadius: '8px',
            border: `1px solid ${isDark ? '#333' : '#ddd'}`,
            backgroundColor: isDark ? '#1a1a1a' : '#fff',
            color: isDark ? '#fff' : '#111',
            fontSize: '14px',
          }} />
        </div>
        <textarea placeholder="Your message" rows={5} style={{
          padding: '12px 16px', borderRadius: '8px',
          border: `1px solid ${isDark ? '#333' : '#ddd'}`,
          backgroundColor: isDark ? '#1a1a1a' : '#fff',
          color: isDark ? '#fff' : '#111',
          fontSize: '14px', resize: 'none',
        }} />
        <button style={{
          backgroundColor: isDark ? '#fff' : 'black',
          color: isDark ? '#111' : 'white',
          padding: '14px', borderRadius: '8px',
          border: 'none', fontSize: '16px', cursor: 'pointer',
        }}>Send message</button>
      </div>
    </section>
  )
}

export default Contact