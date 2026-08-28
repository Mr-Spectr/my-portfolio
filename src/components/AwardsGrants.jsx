import React from 'react';
import { Award } from 'lucide-react';

export default function AwardsGrants({ awards }) {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="section-header">
          <span className="tag">Scientific Honors</span>
          <h2>Awards, Fellowships & Grants</h2>
          <p>Recognition from top academic societies, conferences, and competitive national scientific research foundations.</p>
        </div>

        <div className="awards-grid">
          {awards.map((item, index) => (
            <div key={index} className="award-card glass-card">
              <div className="award-icon-box">
                <Award size={24} className="award-icon" />
              </div>

              <div className="award-content">
                <div className="award-header">
                  <span className="award-year">{item.year}</span>
                  <span className="award-org">{item.organization}</span>
                </div>
                <h3 className="award-title">{item.title}</h3>
                <p className="award-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .awards-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .awards-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .award-card {
          padding: 1.6rem;
          display: flex;
          gap: 1.2rem;
          position: relative;
        }
        .award-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .award-content {
          display: flex;
          flex-direction: column;
        }
        .award-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .award-year {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--primary);
          background: var(--primary-light);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .award-org {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .award-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: var(--text-main);
        }
        .award-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
