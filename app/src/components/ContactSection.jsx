import React, { useState } from 'react';
import { Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection({ profile, onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Collaboration or opportunity', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    onToast('Email address copied to clipboard.');
    window.setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${formData.subject} — ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name}\nReply-to: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    onToast('Opening an email draft with your message.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="tag">Get in touch</span>
          <h2>Let’s build something useful.</h2>
          <p>I welcome conversations about applied AI, data-driven products, research collaborations, and engineering opportunities.</p>
        </div>

        <div className="contact-grid">
          <aside className="contact-info-card glass-card">
            <h3 className="info-card-title">Contact details</h3>
            <p className="info-card-desc">The fastest route is email. You can also find my work and professional updates through the profiles below.</p>
            <div className="info-list">
              <div className="info-row">
                <div className="info-icon"><Mail size={18} /></div>
                <div className="info-content"><div className="info-label">Email</div><div className="email-copy-row"><a className="info-val" href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={handleCopyEmail} className="email-copy-btn" aria-label="Copy email address">{copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}</button></div></div>
              </div>
              <div className="info-row">
                <div className="info-icon"><MapPin size={18} /></div>
                <div className="info-content"><div className="info-label">Based in</div><div className="info-val">{profile.location}</div></div>
              </div>
            </div>
            <div className="social-connect-box">
              <div className="connect-title">Profiles</div>
              <div className="connect-buttons">
                <a href={profile.github} target="_blank" rel="noreferrer" className="connect-btn"><GithubIcon size={14} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="connect-btn"><LinkedinIcon size={14} /> LinkedIn</a>
                <a href={profile.credly} target="_blank" rel="noreferrer" className="connect-btn">Credly</a>
              </div>
            </div>
          </aside>

          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group"><label htmlFor="contact-name" className="form-label">Your name</label><input id="contact-name" type="text" required placeholder="Your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="form-input" /></div>
              <div className="form-group"><label htmlFor="contact-email" className="form-label">Email address</label><input id="contact-email" type="email" required placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="form-input" /></div>
              <div className="form-group"><label htmlFor="contact-subject" className="form-label">Reason for reaching out</label><select id="contact-subject" value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} className="form-input select-input"><option>Collaboration or opportunity</option><option>Applied AI or data project</option><option>Research discussion</option><option>General introduction</option></select></div>
              <div className="form-group"><label htmlFor="contact-message" className="form-label">Message</label><textarea id="contact-message" required rows="4" placeholder="Tell me a little about the opportunity or idea…" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="form-input textarea-input" /></div>
              <button type="submit" className="btn-primary form-submit-btn"><Send size={18} /><span>Open email draft</span></button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section { padding: 5rem 2rem; position: relative; }
        .contact-container { max-width: 1180px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 2.5rem; }
        .contact-grid > * { min-width: 0; }
        .contact-info-card, .contact-form-card { padding: 2.2rem; }
        .contact-info-card { display: flex; flex-direction: column; }
        .info-card-title { font-size: 1.35rem; margin-bottom: .6rem; }
        .info-card-desc { color: var(--text-muted); font-size: .92rem; line-height: 1.65; margin-bottom: 2rem; }
        .info-list { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }
        .info-row { display: flex; gap: 1rem; }
        .info-icon { width: 42px; height: 42px; border-radius: var(--radius-md); background: var(--primary-light); border: 1px solid var(--primary-glow); color: var(--primary); display: grid; place-items: center; flex-shrink: 0; }
        .info-label, .connect-title { color: var(--text-dim); font-size: .78rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
        .info-label { margin-bottom: 3px; }
        .info-val { color: var(--text-main); font-size: .94rem; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
        .info-val:hover { color: var(--primary); }
        .email-copy-row, .connect-buttons { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .email-copy-btn { border: 0; background: none; color: var(--text-dim); cursor: pointer; }
        .email-copy-btn:hover { color: var(--primary); }
        .social-connect-box { margin-top: auto; border-top: 1px solid var(--border-glass); padding-top: 1.5rem; }
        .connect-title { margin-bottom: .8rem; }
        .connect-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: var(--text-muted); font-size: .82rem; font-weight: 600; text-decoration: none; transition: var(--transition-fast); }
        .connect-btn:hover { background: var(--primary-light); color: var(--primary); border-color: var(--primary-glow); }
        .contact-form { display: flex; flex-direction: column; gap: 1.2rem; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label { color: var(--text-muted); font-size: .85rem; font-weight: 600; }
        .form-input { padding: 12px 14px; border: 1px solid var(--border-glass); border-radius: var(--radius-md); outline: none; background: rgba(9,13,22,.6); color: var(--text-main); font: inherit; font-size: .92rem; }
        .form-input:focus { border-color: var(--primary); box-shadow: 0 0 12px var(--primary-glow); }
        .select-input { cursor: pointer; }
        .textarea-input { resize: vertical; }
        .form-submit-btn { width: 100%; padding: 14px; margin-top: .5rem; }
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
