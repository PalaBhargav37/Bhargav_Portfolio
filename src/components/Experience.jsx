import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

const JOBS = [
  {
    id: 'infosys',
    company: 'Infosys Limited',
    role: 'Software Development Engineer Intern',
    period: 'July 2025 – Present',
    type: 'Industry',
    color: '#6c63ff',
    points: [
      'Working on Java-based development, implementing efficient data structures and algorithms for production project modules.',
      'Developing and optimizing algorithms to measurably improve code performance and system reliability.',
      'Collaborating in Agile sprints to analyze requirements and deliver robust, maintainable solutions.',
      'Hands-on experience in enterprise-scale debugging, code reviews, and real-time problem-solving.',
    ],
  },
  {
    id: 'apssdc',
    company: 'APSSDC',
    role: 'Django Framework Intern',
    period: 'May 2024 – August 2024',
    type: 'Internship',
    color: '#00d4ff',
    points: [
      'Independently designed and developed a full-featured Library Management System using Django, Python, and SQLite from scratch.',
      'Built responsive frontend interfaces with HTML, CSS, JavaScript, and Bootstrap for seamless UX across devices.',
      'Implemented role-based authentication, authorization, and session management for multiple user types.',
      'Engineered automated due-date notification system and overdue alert workflows for book management.',
      'Created optimized database schema and complex queries for inventory tracking and reporting.',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState('infosys');
  const ref = useReveal();
  const job = JOBS.find(j => j.id === active);

  return (
    <section id="experience" className="exp-section">
      <div className="container" ref={ref}>
        <div className="reveal">
          <p className="section-label">💼 Where I've worked</p>
          <h2 className="section-heading">Experience</h2>
        </div>
        <div className="exp-layout reveal delay-200">
          {/* Tab list */}
          <div className="exp-tab-list">
            {JOBS.map(j => (
              <button
                key={j.id}
                className={`exp-tab ${active === j.id ? 'active' : ''}`}
                onClick={() => setActive(j.id)}
                style={{ '--tab-color': j.color }}
              >
                <span className="tab-company">{j.company}</span>
                <span className="tab-type">{j.type}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content glass" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-company" style={{ color: job.color }}>@ {job.company}</p>
              </div>
              <span className="exp-period">{job.period}</span>
            </div>
            <ul className="exp-points">
              {job.points.map((pt, i) => (
                <li key={i} className="exp-point" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="point-dot" style={{ background: job.color }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education timeline */}
        <div className="edu-section reveal delay-300">
          <p className="section-label" style={{ marginTop: '3rem' }}>🎓 Academic background</p>
          <div className="edu-timeline">
            {[
              { degree: 'B.Tech, Computer Science & Engineering', institution: 'Godavari Institute of Engineering and Technology', period: '2020 – 2024', score: 'CGPA 8.38' },
              { degree: 'Intermediate (MPC)', institution: 'Narayana Junior College', period: '2018 – 2020', score: 'CGPA 9.79' },
              { degree: '10th Class', institution: 'Viswa Santhi High School', period: '2017 – 2018', score: 'CGPA 9.20' },
            ].map((e, i) => (
              <div key={i} className="edu-item">
                <div className="edu-dot" />
                <div className="edu-card glass">
                  <div className="edu-top">
                    <div>
                      <p className="edu-degree">{e.degree}</p>
                      <p className="edu-inst">{e.institution}</p>
                    </div>
                    <div className="edu-right">
                      <span className="edu-period">{e.period}</span>
                      <span className="edu-score grad-text">{e.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
