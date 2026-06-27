import { useReveal } from '../hooks/useReveal';
import './About.css';

const TECH = [
  {name:'Java',icon:'☕'},
  {name:'Python',icon:'🐍'},
  {name:'Django',icon:'🎯'},
  {name:'JavaScript',icon:'⚡'},
  {name:'React',icon:'⚛️'},
  {name:'SQLite',icon:'💾'},
  {name:'AWS',icon:'☁️'},
  {name:'Git & GitHub',icon:'🔀'}
];

const CERTS = [
  {
    title: 'Microsoft · Python Programming',
    url: 'https://www.credly.com/badges/a4b8f7f4-aaf8-45e8-a0fa-5d6e669eccdc/public_url'
  },
  {
    title: 'APSSDC · Web Dev with Django',
    url: 'https://drive.google.com/file/d/106yXD3LsXUUmlFKVTCIBJHgBvSKzlAwg/view'
  },
  {
    title: 'APSSDC · AWS Cloud Computing',
    url: 'https://www.credly.com/badges/1920145c-456a-4b53-93c6-ccae71bd5b0c/public_url'
  }
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="about-section">
      <div className="container" ref={ref}>
        <div className="reveal">
          <p className="section-label">👤 Who I am</p>
          <h2 className="section-heading">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-left">
            <div className="reveal delay-100">
              <div className="reveal">
  <p>
    Hello! I'm <strong className="hl">Pala Bhargav</strong> — a Computer Science engineer who enjoys turning complex problems into elegant, efficient software. I graduated from <strong className="hl">GIET</strong> with a CGPA of 8.38 and am currently sharpening my skills as an <strong className="hl">SDE Intern at Infosys</strong>.
  </p>
</div>

<div className="reveal delay-200">
  <p>
    Before joining <strong className="hl">Infosys</strong>, I interned at <strong className="hl">APSSDC</strong>, where I built production-grade web applications with multi-user authentication, RESTful APIs, and automated notification workflows using <strong className="hl">Django</strong>. I also developed a deep learning pipeline to classify bird species from audio using <strong className="hl">Artificial Neural Networks (ANNs)</strong>.
  </p>
</div>

<div className="reveal delay-300">
  <p>
    I'm passionate about building <strong className="hl">scalable applications</strong> and delivering seamless user experiences. I enjoy developing full-stack solutions using <strong className="hl">Java, Spring Boot, React, SQL, and REST APIs</strong> while writing clean, maintainable code. I'm always eager to learn new technologies, solve challenging real-world problems, and contribute to impactful software projects.
  </p>
</div>
            </div>
            <div className="tech-wrap reveal delay-400">
              <p className="tech-label">⚙️ technologies I work with</p>
              <div className="tech-grid">
                {TECH.map(t => (
                  <span key={t.name} className="tech-item"><span className="tech-icon">{t.icon}</span>{t.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-right reveal delay-200">
  <div className="about-card glass">

    <div className="card-glow" />

    {/* Profile Header */}

    <div className="profile-header">

      <div className="avatar-wrap">

        <div className="about-avatar">

          <div className="avatar-ring-inner" />

          <div className="avatar-core">
            <span className="avatar-initials">PB</span>
          </div>

        </div>

      </div>

      <h3 className="profile-name">
        Pala Bhargav
      </h3>

      <p className="profile-role">
        Software Development Engineer Intern
      </p>

      <div className="card-otw">
        <span className="card-otw-dot" />
        Open to Work • Full-Time / Internship
      </div>

    </div>

    {/* Profile Information */}

    <div className="about-meta">

      <div className="meta-row">
        <span className="meta-icon">📍</span>
        <span>Hyderabad, India</span>
      </div>

      <div className="meta-row">
        <span className="meta-icon">🏢</span>
        <span>Infosys Limited · SDE Intern</span>
      </div>

      <div className="meta-row">
        <span className="meta-icon">🎓</span>
        <span>B.Tech Computer Science · CGPA 8.38</span>
      </div>

      <div className="meta-row">
        <span className="meta-icon">📞</span>

        <a href="tel:8073277523">
          +91 8073277523
        </a>

      </div>

      <div className="meta-row">
        <span className="meta-icon">📧</span>

        <a href="mailto:bhargavpala370@gmail.com">
          bhargavpala370@gmail.com
        </a>

      </div>

    </div>

    <div className="divider" />

    {/* Certifications */}

    <div className="cert-section">

      <h4 className="certs-title">
        📜 Certifications
      </h4>

      <div className="about-certs">

        {CERTS.map((cert) => (

          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-pill"
            title="View Certificate"
          >

            <div className="cert-left">

              <span className="cert-check">
                ✓
              </span>

              <span>{cert.title}</span>

            </div>

            <span className="cert-arrow">
              ↗
            </span>

          </a>

        ))}

      </div>

    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}
