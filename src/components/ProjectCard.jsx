function ProjectCard({ title, description, tech, isDark }) {
  return (
    <div className="project-card" style={{
      border: `1px solid ${isDark ? '#333' : '#eee'}`,
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: isDark ? '#1a1a1a' : 'white',
      transition: 'background-color 0.6s ease',
    }}>
      <h3 style={{ fontSize: '20px', marginBottom: '8px', color: isDark ? '#fff' : '#111' }}>{title}</h3>
      <p style={{ color: isDark ? '#aaa' : '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tech.map((t) => (
          <span key={t} style={{
            backgroundColor: isDark ? '#222' : '#f0f0f0',
            color: isDark ? '#fff' : '#111',
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