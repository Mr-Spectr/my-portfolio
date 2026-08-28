import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail
} from 'lucide-react';

export default function Hero({ profile, onOpenCv }) {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Status Badge */}
        <div className="hero-top-badge">
          <span className="badge-pill">
            <span className="badge-glow-dot"></span>
            {profile.coverBadge}
          </span>
        </div>

        <div className="hero-grid">
          {/* Left Column: Text & Meta */}
          <div className="hero-content hacker-terminal">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_QUERY [USER_PROFILE]</div>
              <div className="terminal-buttons">
                <span class="t-btn t-red"></span>
                <span class="t-btn t-yellow"></span>
                <span class="t-btn t-green"></span>
              </div>
            </div>
            
            <div className="hacker-body">
              <pre className="ascii-hero" aria-label="Abhay Rawat">
{`   ___   __   __                
  / _ | / /  / /  ___ _ __ __
 / __ |/ _ \\/ _ \\/ _ \`/ // /
/_/ |_/_.__/_//_/\\_,_/\\_, / 
                     /___/  `}
              </pre>
              
              <h1 className="hero-name" style={{ display: 'none' }}>
                Hello, I'm <span className="gradient-text">{profile.name}</span>
              </h1>
              
              <p className="hacker-subtitle">
                <span className="cli-prompt">&gt;</span> ROLE: {profile.title}<span className="blinking-cursor">_</span>
              </p>
              
              <div className="hero-institution hacker-line">
                <span className="cli-prompt">&gt;</span> <GraduationCap size={16} className="institution-icon" style={{marginRight: '8px'}} />
                <span>{profile.institution}</span>
              </div>

              <p className="hero-bio hacker-line">
                <span className="cli-prompt">&gt;</span> {profile.tagline}
              </p>

              {/* Quick details */}
              <div className="hero-meta-row hacker-line">
                <div className="meta-item">
                  <span className="cli-prompt">&gt;</span> <MapPin size={15} style={{marginRight: '6px'}} />
                  <span>{profile.location}</span>
                </div>
                <div className="meta-item">
                  <Mail size={15} style={{marginRight: '6px'}} />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-group hacker-line" style={{marginTop: '2rem'}}>
                <a href="#projects" className="hacker-cta-btn btn-primary">
                  <span>[EXPLORE_PROJECTS]</span>
                </a>
                <button onClick={onOpenCv} className="hacker-cta-btn btn-secondary">
                  <span>[VIEW_CV]</span>
                </button>
                <a href="#contact" className="hacker-cta-btn btn-secondary">
                  <span>[START_CONVERSATION]</span>
                </a>
              </div>

              {/* Scholar & Code Badges */}
              <div className="hero-social-row hacker-line">
                <a href={profile.credly} target="_blank" rel="noreferrer" className="scholar-btn">
                  <span>CREDLY_CERTS</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="scholar-btn">
                  <span>GITHUB</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="scholar-btn">
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Researcher Profile Avatar Card */}
          <div className="hero-avatar-wrapper">
            <div className="hero-large-image-container">
              <img 
                src={`${import.meta.env.BASE_URL}abhay-avatar.jpg`}
                alt={profile.name} 
                className="hero-large-image" 
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 8.5rem 2rem 5rem;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.25;
        }
        .orb-1 {
          width: 450px;
          height: 450px;
          background: var(--primary);
          top: -100px;
          left: -100px;
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: var(--accent);
          bottom: 0;
          right: -50px;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.5;
        }
        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .hero-top-badge {
          margin-bottom: 1.5rem;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hacker-terminal {
          background: rgba(10, 10, 10, 0.85);
          border: 1px solid var(--border-glass);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }
        .hacker-body {
          padding: 2rem;
          font-family: var(--font-mono);
        }
        .ascii-hero {
          color: var(--primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.2;
          white-space: pre-wrap;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 10px var(--primary-glow);
        }
        .hacker-subtitle {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-family: var(--font-mono);
        }
        .hacker-line {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .hero-meta-row,
        .hero-cta-group,
        .hero-social-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-meta-row {
          gap: 0.75rem 1.25rem;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          min-width: 0;
        }
        .meta-item a {
          color: var(--accent);
          text-decoration: none;
          overflow-wrap: anywhere;
        }
        .meta-item a:hover { color: var(--primary); }
        .hero-social-row { margin-top: 1.5rem; }
        .scholar-btn {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          padding: 0.45rem 0.7rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .scholar-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: var(--primary-light);
        }
        .hacker-cta-btn {
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 0;
        }
        
        .hero-title {
          font-size: 1.45rem;
        }
        .hero-avatar-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
        }
        .hero-large-image-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 600px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          border: 1px solid var(--border-glass);
        }
        .hero-large-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scaleX(-1);
          filter: contrast(1.1) saturate(1.1);
        }
        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0) 50%);
          pointer-events: none;
        }

        @media (max-width: 992px) {
          .hero-section { padding: 7rem 1.25rem 4rem; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-avatar-wrapper {
            order: -1;
            justify-content: center;
          }
          .hero-large-image-container {
            height: min(105vw, 500px);
          }
        }
        @media (max-width: 540px) {
          .hacker-body { padding: 1.25rem; }
          .ascii-hero { font-size: clamp(0.62rem, 2.6vw, 0.8rem); }
          .hacker-subtitle { font-size: 0.95rem; }
          .hacker-line { font-size: 0.83rem; }
          .hero-cta-group .hacker-cta-btn { width: 100%; justify-content: center; }
          .scholar-btn { flex: 1 1 calc(50% - 0.75rem); justify-content: center; }
          .meta-item { width: 100%; }
          .hero-large-image-container { height: 390px; }
          }
        }
      `}</style>
    </section>
  );
}
