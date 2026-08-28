import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, GraduationCap } from 'lucide-react';

export default function ContactSection({ profile, onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Project Collaboration', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      onToast('Email address copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
      onToast('Opening your email client…');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${formData.subject} — ${formData.name}`;
    const body = `Hello Abhay,\n\n${formData.message}\n\nRegards,\n${formData.name}\n${formData.email}`;
    setSubmitted(true);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onToast('Your email client is ready with the message.');
    setTimeout(() => setSubmitted(false), 1800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="tag">Get In Touch</span>
          <h2>Let’s Build Something Meaningful</h2>
          <p>Reach out for AI/ML collaborations, full-stack projects, internship opportunities, or a thoughtful technical conversation.</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-card hacker-modal-content">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_INFO [CONTACT_COORDINATES]</div>
            </div>
            <div className="info-body" style={{ padding: '2.2rem' }}>
              <h3 className="info-card-title" style={{ fontFamily: 'var(--font-mono)' }}>Professional Coordinates</h3>
              <p className="info-card-desc">
                <span className="cli-prompt">&gt;</span> I am currently open to building practical, well-engineered AI and software products with ambitious teams.
              </p>

              <div className="info-list">
                <div className="info-row">
                  <div className="info-icon"><Mail size={18} /></div>
                  <div className="info-content">
                    <div className="info-label">Direct Email</div>
                    <div className="email-copy-row">
                      <span className="info-val">{profile.email}</span>
                      <button onClick={handleCopyEmail} className="email-copy-btn">
                        {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon"><GraduationCap size={18} /></div>
                  <div className="info-content">
                    <div className="info-label">Affiliation</div>
                    <div className="info-val">{profile.institution}</div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon"><MapPin size={18} /></div>
                  <div className="info-content">
                    <div className="info-label">Location</div>
                    <div className="info-val">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="social-connect-box">
                <div className="connect-title">Verified Profiles</div>
                <div className="connect-buttons">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="connect-btn">GitHub</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="connect-btn">LinkedIn</a>
                  <a href={profile.credly} target="_blank" rel="noreferrer" className="connect-btn">Credly</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-card hacker-modal-content">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_INPUT [SECURE_TRANSMISSION]</div>
              <div className="terminal-buttons">
                <span className="t-btn t-red"></span>
                <span className="t-btn t-yellow"></span>
                <span className="t-btn t-green"></span>
              </div>
            </div>
            
            <div className="form-body" style={{ padding: '2.2rem' }}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">_Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">_Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">_Inquiry Type</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input select-input"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="AI/ML or Software Role">AI/ML or Software Role</option>
                    <option value="Freelance / Contract Work">Freelance / Contract Work</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">_Message Summary</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Share a little context about your idea or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input textarea-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn hacker-cta-btn">
                  {submitted ? (
                    <>
                      <Check size={18} />
                      <span>[TRANSMISSION_SUCCESSFUL]</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>[TRANSMIT_INQUIRY]</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .contact-container {
          max-width: 1180px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }
        .contact-info-card {
          display: flex;
          flex-direction: column;
        }
        .info-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .info-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-family: var(--font-mono);
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .info-row {
          display: flex;
          gap: 1rem;
        }
        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
          font-family: var(--font-mono);
        }
        .info-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          font-family: var(--font-mono);
        }
        .email-copy-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .email-copy-btn {
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .email-copy-btn:hover { color: var(--primary); }

        .social-connect-box {
          margin-top: auto;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }
        .connect-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          font-family: var(--font-mono);
        }
        .connect-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .connect-btn {
          padding: 6px 14px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
          font-family: var(--font-mono);
        }
        .connect-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-color: var(--primary-glow);
        }

        /* Form */
        .contact-form-card {
          display: flex;
          flex-direction: column;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          font-family: var(--font-mono);
        }
        .form-input {
          padding: 12px 14px;
          background: rgba(10, 10, 10, 0.9);
          border: 1px solid var(--border-glass);
          border-radius: 0;
          color: var(--text-main);
          font-size: 0.92rem;
          outline: none;
          transition: var(--transition-fast);
          font-family: var(--font-mono);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 12px var(--primary-glow);
        }
        .select-input {
          cursor: pointer;
        }
        .textarea-input {
          resize: vertical;
        }
        .form-submit-btn {
          width: 100%;
          padding: 14px;
          margin-top: 0.5rem;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
