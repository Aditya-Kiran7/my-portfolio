function About() {
  return (
    <section id="about" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>About me</h2>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
        Hey! I'm Aditya Kiran Parasa, a first year Civil Engineering student at IITB.
        I love building things for the web and I'm currently learning React.
        When I'm not coding, you'll find me playing cricket or watching F1.
      </p>

      <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map((skill) => (
          <span key={skill} style={{
            backgroundColor: '#f0f0f0',
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