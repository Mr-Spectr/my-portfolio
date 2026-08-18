import React from 'react';
import { CalendarDays, ExternalLink, Activity } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function BentoProjects({ projects }) {
  return (
    <section id="projects" className="bento-section">
      <div className="bento-container">
        <div className="section-header">
          <span className="tag">Selected engineering work</span>
          <h2>Things I have built and documented.</h2>
          <p>Four projects across secure AI systems, financial analytics, and mobile application development.</p>
        </div>

        <div className="bento-grid">
          {projects.map((proj) => (
            <div key={proj.id} className={`bento-card glass-card ${proj.featured ? 'bento-large' : ''}`}>
              <div className="bento-img-wrapper">
                <img src={proj.image} alt={proj.title} className="bento-img" />
                <div className="bento-img-overlay"></div>
                <div className="bento-category-pill">{proj.category}</div>
              </div>

              <div className="bento-body">
                <div className="bento-top-meta">
                  <div className="bento-stars">
                    <CalendarDays size={14} className="star-icon" />
                    <span>{proj.period}</span>
                  </div>
                </div>

                <h3 className="bento-title">{proj.title}</h3>
                <p className="bento-tagline">{proj.tagline}</p>

                {/* Performance Stats Pill */}
                <div className="bento-stats-row">
                  {Object.entries(proj.stats).map(([key, val]) => (
                    <div key={key} className="bento-stat-item">
                      <Activity size={12} className="stat-icon" />
                      <span className="stat-key">{key}:</span>
                      <span className="stat-val">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="bento-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="bento-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="bento-footer">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="bento-btn">
                    <GithubIcon size={15} />
                    <span>GitHub Repo</span>
                  </a>
                  {proj.demoUrl && proj.demoUrl !== '#' && (
                    <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="bento-btn primary">
                      <ExternalLink size={15} />
                      <span>Open Project</span>
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
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.95) 100%);
        }
        .bento-category-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-glass);
          color: var(--accent);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 99px;
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
        }
        .bento-stars, .bento-forks {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .star-icon {
          color: #f59e0b;
        }
        .bento-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
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
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.78rem;
        }
        .stat-icon {
          color: var(--primary);
        }
        .stat-key {
          color: var(--text-dim);
          text-transform: capitalize;
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
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          padding: 3px 8px;
          border-radius: 4px;
          color: var(--text-muted);
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
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          font-size: 0.82rem;
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
          color: #fff;
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
