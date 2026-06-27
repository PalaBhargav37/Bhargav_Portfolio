import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const ROLES = [
  'Full-Stack Developer',
  'Java & Django Engineer',
  'Problem Solver',
  'SDE Intern @ Infosys',
  'Open to Work 🚀',
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  /* ── Trigger entrance after mount ── */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── Rich starfield + meteor canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Stars */
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.2,
      a: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.006 + 0.002,
      color: Math.random() > 0.65
        ? '#8b5cf6'
        : Math.random() > 0.5
        ? '#06b6d4'
        : '#ffffff',
      twinkle: Math.random() * 0.5 + 0.3,
    }));

    /* Meteors */
    const meteors = [];
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 100 + 60,
        speed: Math.random() * 8 + 5,
        life: 1,
        decay: Math.random() * 0.015 + 0.01,
        color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4',
      });
    };
    const meteorTimer = setInterval(spawnMeteor, 2200);

    /* Nebula blobs */
    const drawNebula = () => {
      const blobs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2, r: 280, c: 'rgba(139,92,246,0.055)' },
        { x: canvas.width * 0.8,  y: canvas.height * 0.7, r: 240, c: 'rgba(6,182,212,0.045)' },
        { x: canvas.width * 0.5,  y: canvas.height * 0.5, r: 320, c: 'rgba(139,92,246,0.03)' },
        { x: canvas.width * 0.9,  y: canvas.height * 0.1, r: 180, c: 'rgba(236,72,153,0.035)' },
      ];
      blobs.forEach(b => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();

      /* Stars */
      stars.forEach(s => {
        s.a += s.speed;
        const opacity = Math.sin(s.a) * s.twinkle + (1 - s.twinkle);
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* Meteors */
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        ctx.globalAlpha = m.life * 0.8;
        const g = ctx.createLinearGradient(m.x, m.y, m.x - m.len, m.y + m.len);
        g.addColorStop(0, m.color);
        g.addColorStop(1, 'transparent');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len * 0.7, m.y + m.len * 0.7);
        ctx.stroke();
        m.x -= m.speed;
        m.y += m.speed;
        m.life -= m.decay;
        if (m.life <= 0) meteors.splice(i, 1);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(meteorTimer);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className={`hero-content container ${loaded ? 'loaded' : ''}`}>

        {/* Open to Work badge */}
        <div className="otw-badge">
          <span className="otw-pulse-ring" />
          <span className="otw-dot" />
          <span className="otw-text">Open to Work</span>
          <span className="otw-arrow">→</span>
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-full-name">Pala Bhargav</span>
        </h1>

        {/* Typewriter */}
        <div className="hero-typewriter">
          <span className="tw-prefix">{'< '}</span>
          <span className="tw-text">{displayed}</span>
          <span className="tw-cursor">|</span>
          <span className="tw-suffix">{' />'}</span>
        </div>

        {/* Desc */}
        <p className="hero-desc">
          B.Tech CSE graduate building <span className="hl-v">scalable web apps</span>,
          {' '}<span className="hl-c">REST APIs</span>, and{' '}
          <span className="hl-p">AI-powered systems</span>.
          Currently at <span className="hl-v">Infosys</span>, mastering Java & algorithms.
        </p>

        {/* CTA row */}
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-violet">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Connect
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="https://leetcode.com/u/Bhargavpala/" target="_blank" rel="noreferrer" className="btn btn-lc">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.786 5.866L5.152 11.5a.75.75 0 000 1.061l5.634 5.634a.75.75 0 101.06-1.06l-5.103-5.104 5.103-5.104a.75.75 0 00-1.06-1.06zM13.214 5.866a.75.75 0 011.06 0l5.634 5.634a.75.75 0 010 1.061l-5.634 5.634a.75.75 0 01-1.06-1.06l5.103-5.104-5.103-5.104a.75.75 0 010-1.061z"/>
            </svg>
            LeetCode
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            // { num: '8.38', label: 'CGPA', unit: '/10' },
            // { num: '12+', label: 'Projects', unit: '' },
            // { num: '2', label: 'Internships', unit: '' },
            // { num: '100+', label: 'DSA Solved', unit: '' },
             {num: "2", label: "Internships",unit: '' },
             { num: "15+", label: " Projects",unit: '' },
             { num: "14+", label: "Tech Stack",unit: '' },
             {  num: "3", label: "Certifications",unit: '' },
          ].map(s => (
            <div key={s.label} className="stat">
              <span className="stat-num grad-text">{s.num}<span className="stat-unit">{s.unit}</span></span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
          <circle className="scroll-ball" cx="10" cy="9" r="3" fill="#8b5cf6"/>
        </svg>
        <span>scroll</span>
      </div>
    </section>
  );
}
