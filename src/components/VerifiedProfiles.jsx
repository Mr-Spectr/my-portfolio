import React from 'react';
import { ExternalLink, ShieldCheck, Award, Globe, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function VerifiedProfiles() {
  const gcpBadges = [
    "Develop Gen AI Apps with Gemini & Streamlit",
    "Gemini for End-to-End SDLC & MLOps",
    "Inspect Rich Documents with Gemini & Multimodal RAG",
    "Vector Search & Embeddings in Vertex AI Studio",
    "Google Cloud Computing Foundations (Data, ML & AI)"
  ];

  return (
    <section id="profiles" className="profiles-section">
      <div className="profiles-container">
        <div className="section-header">
          <span className="tag">Verified Presence</span>
          <h2>Digital Profiles & Cloud Badges</h2>
          <p>Live verified profile cards across technical platforms, cloud provider skill portals, and credential registries.</p>
        </div>

        <div className="profiles-grid">
          {/* GitHub Preview Card */}
          <div className="profile-card glass-card">
            <div className="card-top-bar github-bar">
              <GithubIcon size={22} className="platform-icon" />
              <span className="platform-name">GitHub Profile</span>
              <span className="status-pill">Active Developer</span>
            </div>

            <div className="card-body">
              <div className="profile-user-row">
                <div className="user-avatar-mini">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h3 className="user-handle">@Mr-Spectr</h3>
                  <p className="user-sub">Abhay Rawat — GitHub</p>
                </div>
              </div>

              <p className="profile-bio-text">
                Primary software engineering hub featuring Enterprise Agentic AI, MACRA Financial Analytics, FlutChat, and GameMania repositories.
              </p>

              <div className="card-tags">
                <span className="card-tag">Python</span>
                <span className="card-tag">FastAPI</span>
                <span className="card-tag">RAG Pipelines</span>
                <span className="card-tag">Flutter</span>
                <span className="card-tag">Docker</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://github.com/Mr-Spectr" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>View GitHub Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* LinkedIn Preview Card */}
          <div className="profile-card glass-card">
            <div className="card-top-bar linkedin-bar">
              <LinkedinIcon size={22} className="platform-icon" />
              <span className="platform-name">LinkedIn Network</span>
              <span className="status-pill">Verified</span>
            </div>

            <div className="card-body">
              <div className="profile-user-row">
                <div className="user-avatar-mini linkedin-bg">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h3 className="user-handle">Abhay Rawat</h3>
                  <p className="user-sub">Information Science & Data Science Scholar</p>
                </div>
              </div>

              <p className="profile-bio-text">
                Bengaluru, India • Nitte Meenakshi Institute of Technology (B.E. ISE, CGPA 8.5) & IIT Madras Data Science Scholar.
              </p>

              <div className="card-tags">
                <span className="card-tag">AI Engineering</span>
                <span className="card-tag">Backend Systems</span>
                <span className="card-tag">IIT Madras</span>
                <span className="card-tag">Amazon ML Top 15%</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.linkedin.com/in/abhay-rawat-790b24288/" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Google Cloud Platform (GCP) Skills Preview Card */}
          <div className="profile-card glass-card gcp-highlight">
            <div className="card-top-bar gcp-bar">
              <Globe size={20} className="platform-icon gcp-icon" />
              <span className="platform-name">Google Cloud Skills</span>
              <span className="diamond-badge">💎 Diamond League</span>
            </div>

            <div className="card-body">
              <div className="gcp-score-strip">
                <div className="score-num gradient-text">82,330</div>
                <div className="score-label">Points Earned on Google Cloud Skills</div>
              </div>

              <div className="gcp-badges-list">
                {gcpBadges.map((badge, idx) => (
                  <div key={idx} className="gcp-badge-item">
                    <CheckCircle2 size={15} className="gcp-check" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.skills.google/public_profiles/08f5ad17-6599-4ca1-8942-eaf7a7f974c8" target="_blank" rel="noreferrer" className="visit-profile-btn gcp-btn">
                <span>View Google Skills Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Credly Verified Credentials Preview Card */}
          <div className="profile-card glass-card">
            <div className="card-top-bar credly-bar">
              <ShieldCheck size={22} className="platform-icon credly-icon" />
              <span className="platform-name">Credly Registry</span>
              <span className="status-pill">Official Badges</span>
            </div>

            <div className="card-body">
              <div className="credly-info-header">
                <Award size={20} className="credly-award-icon" />
                <span>Verified Cloud & Technical Certifications</span>
              </div>

              <p className="profile-bio-text">
                Verified digital badges for Google Cloud Foundations & Engineering, AWS Cloud Architecture, Azure Fundamentals, and Rice University Algorithmic Thinking.
              </p>

              <div className="card-tags">
                <span className="card-tag">AWS Cloud</span>
                <span className="card-tag">GCP Engineering</span>
                <span className="card-tag">Azure AI</span>
                <span className="card-tag">Rice Univ</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>Verify Badges on Credly</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profiles-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .profiles-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .profile-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
        }
        .gcp-highlight {
          border-color: rgba(56, 189, 248, 0.4);
        }
        .card-top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }
        .platform-icon {
          color: var(--primary);
        }
        .platform-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-main);
        }
        .status-pill {
          margin-left: auto;
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          padding: 3px 10px;
          border-radius: 99px;
          color: var(--text-dim);
          font-weight: 600;
        }
        .diamond-badge {
          margin-left: auto;
          font-size: 0.75rem;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          padding: 3px 10px;
          border-radius: 99px;
          font-weight: 700;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
        }
        .profile-user-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .user-avatar-mini {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .linkedin-bg {
          background: rgba(10, 102, 194, 0.15);
          border-color: rgba(10, 102, 194, 0.4);
          color: #0a66c2;
        }
        .user-handle {
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .user-sub {
          font-size: 0.82rem;
          color: var(--text-dim);
        }
        .profile-bio-text {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .card-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          padding: 3px 8px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        /* GCP Score styling */
        .gcp-score-strip {
          background: rgba(9, 13, 22, 0.6);
          border: 1px solid var(--border-glass);
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .score-num {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1;
        }
        .score-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-top: 4px;
        }
        .gcp-badges-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 4px;
        }
        .gcp-badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .gcp-check {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Credly styling */
        .credly-info-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #f59e0b;
        }
        .credly-award-icon {
          color: #f59e0b;
        }

        .card-footer {
          margin-top: 1.4rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }
        .visit-profile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .visit-profile-btn:hover {
          background: var(--primary-light);
          border-color: var(--primary-glow);
          color: var(--primary);
        }
        .gcp-btn {
          background: rgba(56, 189, 248, 0.12);
          border-color: rgba(56, 189, 248, 0.3);
          color: #38bdf8;
        }
        .gcp-btn:hover {
          background: #38bdf8;
          color: #090d16;
        }
      `}</style>
    </section>
  );
}
