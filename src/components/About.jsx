function About({ isDark }) {
  return (
    <section id="about" className="about-section" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '16px', color: isDark ? '#fff' : '#616974ff' }}>
        About me
      </h2>
      <p style={{
        fontSize: '16px',
        color: isDark ? '#aaa' : '#373434ff',
        lineHeight: '1.8',
        marginBottom: '32px',
      }}>
        Hey! I'm Aditya, a first year Civil Engineering student at IIT Bombay.
        I love building things for the web and I'm currently learning React.
        When I'm not coding, you'll find me playing chess or listening to music!
      </p>
      <h3 style={{ fontSize: '20px', marginBottom: '16px', color: isDark ? '#fff' : '#111' }}>
        Skills
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map((skill) => (
          <span key={skill} style={{
            backgroundColor: isDark ? '#69697fff' : '#f0f0f0',
            color: isDark ? '#fff' : '#111',
            padding: '8px 20px',
            borderRadius: '999px',
            fontSize: '14px',
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About