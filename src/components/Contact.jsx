function Contact({ isDark }) {
  const inputStyle = {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1px solid ${isDark ? '#333' : '#ddd'}`,
    backgroundColor: isDark ? '#1a1a1a' : '#fff',
    color: isDark ? '#fff' : '#111',
    fontSize: '14px',
    width: '100%',
  }

  return (
    <section id="contact" className="contact-section" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '8px', color: isDark ? '#fff' : '#111' }}>
        Contact me
      </h2>
      <p style={{ color: isDark ? '#aaa' : '#666', marginBottom: '32px' }}>
        Feel free to reach out for collaborations or just a chat!
      </p>

      <div className="contact-row">
        {/* Name + Email row — stacks on mobile via CSS */}
        <div className="contact-name-email">
          <input type="text" placeholder="Your name" style={inputStyle} />
          <input type="email" placeholder="Your email" style={inputStyle} />
        </div>

        <textarea
          placeholder="Your message"
          rows={5}
          style={{
            ...inputStyle,
            resize: 'none',
            flex: 'unset',
          }}
        />

        <button style={{
          backgroundColor: isDark ? '#fff' : 'black',
          color: isDark ? '#111' : 'white',
          padding: '14px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%',
        }}>
          Send message
        </button>
      </div>
    </section>
  )
}

export default Contact