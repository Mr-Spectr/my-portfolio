import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function ContactSection({ profile, onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Research Collaboration', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    onToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onToast('Message sent successfully! Lab coordinator will respond shortly.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Research Collaboration', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="tag">Get In Touch</span>
          <h2>Research Inquiries & Collaborations</h2>
          <p>Interested in joining the lab, pursuing joint research proposals, or inviting Dr. Rivera for a keynote lecture?</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-card glass-card">
            <h3 className="info-card-title">Laboratory Coordinates</h3>
            <p className="info-card-desc">
              We welcome prospective PhD students, postdoctoral fellows, and visiting industry scholars.
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
                  <div className="info-label">Office Location</div>
                  <div className="info-val">Gates Computer Science Bldg, Stanford, CA</div>
                </div>
              </div>
            </div>

            <div className="social-connect-box">
              <div className="connect-title">Academic & Social Profiles</div>
              <div className="connect-buttons">
                <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="connect-btn">Scholar</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="connect-btn">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="connect-btn">LinkedIn</a>
                <a href={profile.twitter} target="_blank" rel="noreferrer" className="connect-btn">X / Twitter</a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Prof. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input select-input"
                >
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Keynote / Talk Invitation">Keynote / Talk Invitation</option>
                  <option value="PhD / Postdoc Application">PhD / Postdoc Application</option>
                  <option value="Press / Media Inquiry">Press / Media Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message Summary</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Provide a brief summary of your proposal or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input textarea-input"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                {submitted ? (
                  <>
                    <Check size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Research Inquiry</span>
                  </>
                )}
              </button>
            </form>
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
          padding: 2.2rem;
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
          border-radius: var(--radius-md);
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
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
        }
        .info-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
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
          pt-2;
          border-top: 1px solid var(--border-glass);
          padding-top: 1.5rem;
        }
        .connect-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .connect-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .connect-btn {
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .connect-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary-glow);
        }

        /* Form */
        .contact-form-card {
          padding: 2.2rem;
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
          color: var(--text-muted);
        }
        .form-input {
          padding: 12px 14px;
          background: rgba(9, 13, 22, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.92rem;
          outline: none;
          transition: var(--transition-fast);
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
