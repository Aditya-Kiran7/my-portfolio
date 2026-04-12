import { useState, useEffect } from 'react'

function Hero({ isDark }) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = 'Aditya'

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        } else {
          // finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // deleting
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1))
        } else {
          // finished deleting, start typing again
          setIsDeleting(false)
        }
      }
    }, isDeleting ? 80 : 150)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting])

  return (
    <section  style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px',
      backgroundColor: isDark ? '#000000' : '#f9f9f9',

    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px', color: isDark ? '#f9f9f9' : '#000000' }}>
        Hi, I'm{' '}
        <span style={{ color: '#7e68b3ff' }}>{displayText}</span>
        <span style={{
          borderRight: '3px solid #2c25b7ff',
          marginLeft: '2px',
          animation: 'blink 0.7s step-end infinite',
        }}></span>
      </h1>
      <p style={{ fontSize: '18px', color: isDark ? '#aaa' : '#666', maxWidth: '500px', marginBottom: '32px' }}>
        First year Civil Engineering student who loves building things.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="#projects" className="hero" style={{
          backgroundColor: isDark ? '#fff' : 'black',
          color: isDark ? '#111' : 'white',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}>See my work</a>
        <a href="#contact" className="hero" style={{
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