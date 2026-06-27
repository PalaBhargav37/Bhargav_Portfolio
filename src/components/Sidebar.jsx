import { useEffect, useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className={`sidebar sidebar-left ${visible ? 'visible' : ''}`}>
        {[
          { href: 'https://github.com/PalaBhargav37', label: 'GitHub', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
          { href: 'https://www.linkedin.com/in/bhargav-pala-52b498235', label: 'LinkedIn', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
          { href: 'https://leetcode.com/u/Bhargavpala/', label: 'LeetCode', d: 'M10.786 5.866L5.152 11.5a.75.75 0 000 1.061l5.634 5.634a.75.75 0 101.06-1.06l-5.103-5.104 5.103-5.104a.75.75 0 00-1.06-1.06zM13.214 5.866a.75.75 0 011.06 0l5.634 5.634a.75.75 0 010 1.061l-5.634 5.634a.75.75 0 01-1.06-1.06l5.103-5.104-5.103-5.104a.75.75 0 010-1.061z' },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sb-link" aria-label={s.label}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d={s.d} />
            </svg>
          </a>
        ))}
        <div className="sb-line" />
      </div>
      <div className={`sidebar sidebar-right ${visible ? 'visible' : ''}`}>
        <a href="mailto:bhargavpala370@gmail.com" className="sb-email">
          bhargavpala370@gmail.com
        </a>
        <div className="sb-line" />
      </div>
    </>
  );
}
