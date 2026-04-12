function ProjectCard({ title, description, tech }) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: 'white',
    }}>
      <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tech.map((t) => (
          <span key={t} style={{
            backgroundColor: '#f0f0f0',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '12px',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard