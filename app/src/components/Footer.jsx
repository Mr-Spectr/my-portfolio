import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Sparkles size={20} className="logo-sparkle" />
              <span>{profile.name}</span>
            </div>
            <p className="footer-tagline">{profile.title}</p>
            <p className="footer-inst">{profile.institution}</p>
          </div>

          <div className="footer-nav">
            <a href="#research" className="footer-link">Research</a>
            <a href="#graph" className="footer-link">Knowledge Graph</a>
            <a href="#publications" className="footer-link">Project Dossiers</a>
            <a href="#projects" className="footer-link">Selected Work</a>
            <a href="#timeline" className="footer-link">Timeline</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} {profile.name}. Built with curiosity and care.
          </div>

          <div className="footer-badges">
            <span className="footer-badge">NMIT · IIT Madras</span>
            <span className="footer-badge">AI · Data · Systems</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 4rem 2rem 2.5rem;
          border-top: 1px solid var(--border-glass);
          background: rgba(6, 9, 17, 0.9);
          position: relative;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-glass);
          flex-wrap: wrap;
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          margin-bottom: 4px;
        }
        .logo-sparkle { color: var(--primary); }
        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer-inst {
          font-size: 0.82rem;
          color: var(--text-dim);
        }
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .back-to-top-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .back-to-top-btn:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-3px);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.8rem;
          font-size: 0.85rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-badges {
          display: flex;
          gap: 10px;
        }
        .footer-badge {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 0.78rem;
        }
      `}</style>
    </footer>
  );
}
