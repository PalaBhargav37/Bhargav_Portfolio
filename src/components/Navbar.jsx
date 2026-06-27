import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about','skills','experience','projects','contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">PB</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={active === l.href.slice(1) ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Bhargav_Pala_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Resume ↗
          </a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-inner">
          <a href="#hero" className="nav-logo drawer-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-bracket">&lt;</span>PB<span className="logo-bracket">/&gt;</span>
          </a>
          <ul className="drawer-links">
            {links.map((l, i) => (
              <li key={l.label} style={{ animationDelay: `${i * 0.07}s` }}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  <span className="drawer-num">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Bhargav_Pala_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-violet drawer-cta"
            onClick={() => setMenuOpen(false)}
          >
            View Resume ↗
          </a>
        </div>
      </div>
    </>
  );
}
