import React from 'react';
import { Star, GitFork } from 'lucide-react';

export default function BentoProjects({ projects }) {
  return (
    <section id="projects" className="bento-section">
      <div className="bento-container">
        <div className="section-header">
          <span className="tag">Software & Benchmarks</span>
          <h2>Open-Source Software Projects</h2>
          <p>Hands-on projects by Abhay Rawat across agentic AI, financial analytics, and mobile applications.</p>
        </div>

        <div className="bento-grid">
          {projects.map((proj) => (
            <div key={proj.id} className={`bento-card hacker-modal-content ${proj.featured ? 'bento-large' : ''}`}>
              <div className="terminal-header">
                <div className="terminal-title">// SYSTEM_PROCESS [{proj.title.toUpperCase().replace(/\s+/g, '_')}]</div>
                <div className="terminal-buttons">
                  <span className="t-btn t-red"></span>
                  <span className="t-btn t-yellow"></span>
                  <span className="t-btn t-green"></span>
                </div>
              </div>

              <div className="bento-img-wrapper" style={{ borderBottom: '1px solid var(--border-glass)' }}>
                <img src={proj.image} alt={proj.title} className="bento-img" />
                <div className="bento-img-overlay"></div>
                <div className="bento-category-pill">[{proj.category.toUpperCase()}]</div>
              </div>

              <div className="bento-body">
                <div className="bento-top-meta">
                  <div className="bento-stars">
                    <span className="cli-prompt">&gt;</span>
                    <Star size={14} className="star-icon" />
                    <span>{proj.stars} STARS</span>
                  </div>
                  <div className="bento-forks">
                    <GitFork size={14} />
                    <span>{proj.forks} FORKS</span>
                  </div>
                </div>

                <h3 className="bento-title" style={{ fontFamily: 'var(--font-mono)' }}>{proj.title}</h3>
                <p className="bento-tagline" style={{ fontFamily: 'var(--font-mono)' }}>{proj.tagline}</p>

                {/* Performance Stats Pill */}
                <div className="bento-stats-row">
                  {Object.entries(proj.stats).map(([key, val]) => (
                    <div key={key} className="bento-stat-item">
                      <span className="stat-key">{key}:</span>
                      <span className="stat-val">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="bento-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="bento-tag">_{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="bento-footer">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="bento-btn">
                    <span>[GITHUB_REPO]</span>
                  </a>
                  {proj.demoUrl && proj.demoUrl !== '#' && (
                    <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="bento-btn primary">
                      <span>[VIEW_PROJECT]</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .bento-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }
        .bento-card {
          grid-column: span 6;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .bento-large {
          grid-column: span 6;
        }
        .bento-img-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-normal);
        }
        .bento-card:hover .bento-img {
          transform: scale(1.05);
        }
        .bento-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 10, 0.95) 100%);
        }
        .bento-category-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 0;
        }
        .bento-body {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .bento-top-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 0.6rem;
          font-family: var(--font-mono);
        }
        .bento-stars, .bento-forks {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .star-icon {
          color: var(--primary);
        }
        .bento-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .bento-tagline {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }
        .bento-stats-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 1.2rem;
        }
        .bento-stat-item {
          display: flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid var(--border-glass);
          padding: 4px 10px;
          border-radius: 0;
          font-size: 0.78rem;
          font-family: var(--font-mono);
        }
        .stat-icon {
          color: var(--primary);
        }
        .stat-key {
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .stat-val {
          color: var(--primary);
          font-weight: 700;
        }
        .bento-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 1.5rem;
        }
        .bento-tag {
          font-size: 0.75rem;
          background: transparent;
          border: 1px solid var(--border-glass);
          padding: 3px 8px;
          border-radius: 0;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .bento-footer {
          margin-top: auto;
          display: flex;
          gap: 10px;
        }
        .bento-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          font-size: 0.82rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .bento-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .bento-btn.primary {
          background: var(--primary-light);
          border-color: var(--primary-glow);
          color: var(--primary);
        }
        .bento-btn.primary:hover {
          background: var(--primary);
          color: #111;
        }

        @media (max-width: 992px) {
          .bento-card {
            grid-column: span 12;
          }
        }
      `}</style>
    </section>
  );
}
