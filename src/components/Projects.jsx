import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with React and Vite.',
    tech: ['React', 'CSS', 'Vite'],
  },
  {
    title: 'Weather App',
    description: 'Shows real-time weather for any city using a public API.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Todo List',
    description: 'A simple task manager with add and delete functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]

function Projects() {
  return (
    <section id="projects" style={{
      padding: '80px 40px',
      backgroundColor: '#f9f9f9',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects