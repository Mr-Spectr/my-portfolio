import React, { useState } from 'react';
import { Briefcase, BookOpen, GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

export default function AcademicTimeline({ timeline, teaching }) {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-container">
        <div className="section-header">
          <span className="tag">Career & Pedagogy</span>
          <h2>Academic Experience & Teaching</h2>
          <p>Academic positions, research lab leadership, doctoral training, and Stanford university courses taught.</p>
        </div>

        {/* Tab Buttons */}
        <div className="timeline-tabs">
          <button
            className={`timeline-tab-btn ${activeTab === 'career' ? 'active' : ''}`}
            onClick={() => setActiveTab('career')}
          >
            <Briefcase size={16} />
            <span>Research & Industry Roles</span>
          </button>
          <button
            className={`timeline-tab-btn ${activeTab === 'teaching' ? 'active' : ''}`}
            onClick={() => setActiveTab('teaching')}
          >
            <BookOpen size={16} />
            <span>University Teaching ({teaching.length})</span>
          </button>
        </div>

        {/* Career & Education Tab Content */}
        {activeTab === 'career' ? (
          <div className="timeline-tree">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-top">
                    <span className="timeline-period">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                    <span className="timeline-type-pill">{item.badge}</span>
                  </div>

                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-institution">
                    <GraduationCap size={16} />
                    <span>{item.institution}</span>
                  </div>

                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Teaching & Pedagogy Grid */
          <div className="teaching-grid">
            {teaching.map((course, idx) => (
              <div key={idx} className="teaching-card glass-card">
                <div className="course-header">
                  <span className="course-code">{course.code}</span>
                  <span className="course-level">{course.level}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-meta">
                  <div className="course-term">{course.term}</div>
                  <div className="course-role">{course.role}</div>
                </div>

                <div className="course-footer">
                  <a href={course.syllabusUrl} className="syllabus-link">
                    <span>Syllabus & Lecture Notes</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .timeline-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .timeline-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .timeline-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }
        .timeline-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .timeline-tab-btn:hover, .timeline-tab-btn.active {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary-glow);
        }

        /* Timeline Tree */
        .timeline-tree {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          position: relative;
        }
        .timeline-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
        }
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary);
          border: 3px solid var(--bg-dark);
          box-shadow: 0 0 12px var(--primary);
          z-index: 2;
        }
        .marker-line {
          width: 2px;
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          margin-top: 4px;
        }
        .timeline-content {
          flex: 1;
          padding: 1.6rem;
        }
        .timeline-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .timeline-period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
        }
        .timeline-type-pill {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          padding: 2px 10px;
          border-radius: 99px;
          color: var(--text-dim);
          font-weight: 600;
        }
        .timeline-role {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .timeline-institution {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.8rem;
        }
        .timeline-details {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Teaching Grid */
        .teaching-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .teaching-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
        }
        .course-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }
        .course-code {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary);
        }
        .course-level {
          font-size: 0.78rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 3px 8px;
          border-radius: 4px;
          color: var(--text-dim);
        }
        .course-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .course-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
        }
        .course-role {
          color: var(--accent);
          font-weight: 600;
        }
        .course-footer {
          margin-top: auto;
          pt-2;
          border-top: 1px solid var(--border-glass);
          padding-top: 0.8rem;
        }
        .syllabus-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .syllabus-link:hover {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}
