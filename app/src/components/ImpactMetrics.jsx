import React from 'react';
import { Quote, Award, BookOpen, FileText, Star } from 'lucide-react';

export default function ImpactMetrics({ metrics }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Quote': return <Quote size={24} />;
      case 'Award': return <Award size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'FileText': return <FileText size={24} />;
      case 'Star': return <Star size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <section className="metrics-section">
      <div className="metrics-container">
        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <div key={index} className="metric-card glass-card">
              <div className="metric-icon-box">
                {getIcon(item.icon)}
              </div>
              <div className="metric-info">
                <div className="metric-value gradient-text-accent">{item.value}</div>
                <div className="metric-label">{item.label}</div>
                <div className="metric-change">{item.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .metrics-section {
          padding: 2rem 2rem 5rem;
          position: relative;
          z-index: 2;
        }
        .metrics-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1.5rem;
        }
        .metric-card {
          padding: 1.6rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          position: relative;
          overflow: hidden;
        }
        .metric-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0.6;
        }
        .metric-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .metric-info {
          display: flex;
          flex-direction: column;
        }
        .metric-value {
          font-family: var(--font-heading);
          font-size: 2.1rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .metric-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .metric-change {
          font-size: 0.78rem;
          color: var(--text-dim);
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
}
