import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

/*
  ═══════════════════════════════════════════════════════════
  EMAILJS SETUP (takes 5 minutes — completely free):
  1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
  2. Add Email Service → Gmail → connect your Gmail
  3. Create Email Template — use these variables:
       {{from_name}}  {{from_email}}  {{subject}}  {{message}}
  4. Replace the 3 constants below with your IDs from EmailJS dashboard
  ═══════════════════════════════════════════════════════════
*/
const EMAILJS_SERVICE_ID  = 'service_wq3f8zj';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_345etlm';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'AFe69FwxGb9NdN5A0';   // e.g. 'AbCdEfGhIjKlMnOp'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/PalaBhargav37', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', color: '#6c63ff' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhargav-pala-52b498235', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', color: '#00d4ff' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Bhargavpala/', icon: 'M10.786 5.866L5.152 11.5a.75.75 0 000 1.061l5.634 5.634a.75.75 0 101.06-1.06l-5.103-5.104 5.103-5.104a.75.75 0 00-1.06-1.06zM13.214 5.866a.75.75 0 011.06 0l5.634 5.634a.75.75 0 010 1.061l-5.634 5.634a.75.75 0 01-1.06-1.06l5.103-5.104-5.103-5.104a.75.75 0 010-1.061z', color: '#ffb347' },
  { label: 'Email', href: 'mailto:bhargavpala370@gmail.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', color: '#ff6b9d' },
];

export default function Contact() {
  const formRef = useRef(null);
  const ref = useReveal();
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = 'Name is required';
    if (!form.from_email.trim()) e.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) e.from_email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'At least 20 characters please';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const fields = [
    { name: 'from_name', label: 'Full name', type: 'text', placeholder: 'e.g. Pala Bhargav', icon: '👤' },
    { name: 'from_email', label: 'Email address', type: 'email', placeholder: 'bhargavpala370@gmail.com', icon: '✉️' },
    { name: 'subject', label: 'Subject (optional)', type: 'text', placeholder: 'Opportunity / Collaboration', icon: '📌' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={ref}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>📬 Get in touch</p>
          <h2 className="section-heading" style={{ marginBottom: '0.5rem' }}>
            Let's <span className="grad-text">build something</span> together
          </h2>
          <p className="contact-sub">
            I'm actively looking for new opportunities. Whether it's a role, a freelance project,
            or just a hello — my inbox is always open.
          </p>
        </div>

        <div className="contact-layout">
          {/* LEFT: Info */}
          <div className="contact-info reveal delay-200">
            <div className="info-card glass">
              <div className="info-glow" />
              <h3 className="info-title">Reach out directly</h3>
              <div className="info-rows">
                <div className="info-row">
                  <span className="info-icon">📧</span>
                  <div>
                    <p className="info-label">Email</p>
                    <a href="mailto:bhargavpala370@gmail.com" className="info-value">bhargavpala370@gmail.com</a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="info-label">Phone</p>
                    <a href="tel:8073277523" className="info-value">+91 8073277523</a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon">📍</span>
                  <div>
                    <p className="info-label">Location</p>
                    <p className="info-value">India · Open to work</p>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon">⚡</span>
                  <div>
                    <p className="info-label">Response time</p>
                    <p className="info-value">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="social-grid">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="social-card"
                    style={{ '--sc': s.color }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      {s.icon.includes('M22 6') ? (
                        <>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </>
                      ) : (
                        <path d={s.icon} />
                      )}
                    </svg>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="contact-form-wrap reveal delay-300">
            <div className="form-card glass">
              {status === 'success' ? (
                <div className="success-state">
                  <div className="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out, {form.from_name || 'there'}. I'll get back to you soon.</p>
                  <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h3>Send a message</h3>
                    <p>Fill in the form and I'll respond within 24 hours.</p>
                  </div>
                  <div className="form-grid">
                    {fields.map(f => (
                      <div key={f.name} className={`field-group ${f.name === 'from_name' || f.name === 'from_email' ? '' : 'full-width'} ${errors[f.name] ? 'has-error' : ''} ${focusedField === f.name ? 'focused' : ''}`}>
                        <label htmlFor={f.name}>
                          <span className="field-icon">{f.icon}</span>
                          {f.label}
                        </label>
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          value={form[f.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(f.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={f.placeholder}
                          autoComplete={f.type === 'email' ? 'email' : 'off'}
                        />
                        {errors[f.name] && <span className="field-error">{errors[f.name]}</span>}
                      </div>
                    ))}
                    <div className={`field-group full-width ${errors.message ? 'has-error' : ''} ${focusedField === 'message' ? 'focused' : ''}`}>
                      <label htmlFor="message">
                        <span className="field-icon">💬</span>
                        Message
                        <span className="char-count">{form.message.length}/500</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about the opportunity, project, or just say hello..."
                        maxLength={500}
                      />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="send-error">
                      ⚠️ Something went wrong. Please email me directly at{' '}
                      <a href="mailto:bhargavpala370@gmail.com">bhargavpala370@gmail.com</a>
                    </div>
                  )}

                  <div className="form-footer">
                    <p className="form-note">
                      <span>🔒</span> Your info is never shared or stored beyond EmailJS.
                    </p>
                    <button
                      type="submit"
                      className="btn btn-violet send-btn"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <><span className="spinner" /> Sending…</>
                      ) : (
                        <>Send message <span className="send-arrow">→</span></>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
