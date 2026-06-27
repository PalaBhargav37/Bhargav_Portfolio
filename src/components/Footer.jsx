import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          <span style={{ color: 'var(--violet)' }}>&lt;</span>
          PB
          <span style={{ color: 'var(--violet)' }}>/&gt;</span>
        </a>
        <p className="footer-copy">
          Designed &amp; built by{' '}
          <a href="https://github.com/PalaBhargav37" target="_blank" rel="noreferrer">
            Pala Bhargav
          </a>{' '}
           · 2025
        </p>
        <a href="#hero" className="back-top" aria-label="Back to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
