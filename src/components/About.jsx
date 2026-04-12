function About({ isDark }) {
  return (
    <section id="about" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '16px', color: isDark ? '#fff' : '#111' }}>About me</h2>
      <p style={{ fontSize: '16px', color: isDark ? '#aaa' : '#555', lineHeight: '1.8', marginBottom: '32px' }}>
        Hey! I'm Aditya, a first year Computer Engineering student at Mumbai University.
        I love building things for the web and I'm currently learning React.
        When I'm not coding, you'll find me playing cricket or watching F1.
      </p>
      <h3 style={{ fontSize: '20px', marginBottom: '16px', color: isDark ? '#fff' : '#111' }}>Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map((skill) => (
          <span key={skill} style={{
            backgroundColor: isDark ? '#222' : '#f0f0f0',
            color: isDark ? '#fff' : '#111',
            padding: '8px 20px',
            borderRadius: '999px',
            fontSize: '14px',
          }}>{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default About