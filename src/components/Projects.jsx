import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Blood Bank Management System',
    desc: 'End-to-end blood bank platform with RESTful API endpoints, real-time admin dashboard, donor/patient request workflows, and a multi-environment database schema for blood inventory tracking.',
    stack: ['Django','Python','SQLite','REST API','Bootstrap'],
    github: 'https://github.com/PalaBhargav37/Blood-Bank-Management-Django',
    color: '#ff6b9d',
    icon: '🩸',
    featured: true,
  },
  {
    title: 'Library Management System',
    desc: 'Full-stack library system with role-based access (Admin, Teacher, Student), CRUD operations, automated loan & fine calculation, and a responsive Bootstrap UI.',
    stack: ['Django','Python','SQLite','Bootstrap','RBAC'],
    github: 'https://github.com/PalaBhargav37/Library_management_system/tree/master',
    color: '#6c63ff',
    icon: '📚',
    featured: true,
  },
  {
    title: 'Neural Chirps',
    desc: 'Bird species identification from audio using Multilayer Perceptron (ANN). Signal processing pipeline extracts spectral features; NumPy/SciPy power the preprocessing and model.',
    stack: ['Python','ANN/MLP','NumPy','SciPy','Signal Processing'],
    github: 'https://github.com/PalaBhargav37/Bird-Species-Identification',
    color: '#00d4ff',
    icon: '🐦',
    featured: true,
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(800px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateY(-6px)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className={`project-card glass reveal delay-${(index + 1) * 100} ${project.featured ? 'featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--accent': project.color }}
    >
      <div className="project-shimmer" />
      <div className="project-top">
        <span className="project-icon">{project.icon}</span>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>
      {project.featured && <span className="featured-badge">Featured</span>}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-stack">
        {project.stack.map(s => <span key={s} className="pill">{s}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={ref}>
        <div className="reveal">
          <p className="section-label">🚀 What I've built</p>
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
        <div className="projects-cta reveal delay-400">
          <a href="https://github.com/PalaBhargav37" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            See all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
