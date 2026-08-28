import React from 'react';
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
          <div className="profile-card hacker-modal-content">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_QUERY [GITHUB_PROFILE]</div>
              <div className="terminal-buttons">
                <span className="t-btn t-red"></span>
                <span className="t-btn t-yellow"></span>
                <span className="t-btn t-green"></span>
              </div>
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
                <span className="status-pill">ACTIVE</span>
              </div>

              <p className="profile-bio-text">
                <span className="cli-prompt">&gt;</span> Primary software engineering hub featuring Enterprise Agentic AI, MACRA Financial Analytics, FlutChat, and GameMania repositories.
              </p>

              <div className="card-tags">
                <span className="card-tag">_Python</span>
                <span className="card-tag">_FastAPI</span>
                <span className="card-tag">_RAG_Pipelines</span>
                <span className="card-tag">_Flutter</span>
                <span className="card-tag">_Docker</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://github.com/Mr-Spectr" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>[VIEW_GITHUB_PROFILE]</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Preview Card */}
          <div className="profile-card hacker-modal-content">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_QUERY [LINKEDIN_NETWORK]</div>
              <div className="terminal-buttons">
                <span className="t-btn t-red"></span>
                <span className="t-btn t-yellow"></span>
                <span className="t-btn t-green"></span>
              </div>
            </div>

            <div className="card-body">
              <div className="profile-user-row">
                <div className="user-avatar-mini linkedin-bg">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h3 className="user-handle">Abhay Rawat</h3>
                  <p className="user-sub">Data Science Scholar</p>
                </div>
                <span className="status-pill">VERIFIED</span>
              </div>

              <p className="profile-bio-text">
                <span className="cli-prompt">&gt;</span> Bengaluru, India • Nitte Meenakshi Institute of Technology (B.E. ISE) & IIT Madras Data Science Scholar.
              </p>

              <div className="card-tags">
                <span className="card-tag">_AI_Engineering</span>
                <span className="card-tag">_Backend_Systems</span>
                <span className="card-tag">_IIT_Madras</span>
                <span className="card-tag">_Amazon_ML</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.linkedin.com/in/abhay-rawat-790b24288/" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>[CONNECT_ON_LINKEDIN]</span>
              </a>
            </div>
          </div>

          {/* Google Cloud Platform (GCP) Skills Preview Card */}
          <div className="profile-card hacker-modal-content gcp-highlight">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_QUERY [GCP_SKILLS]</div>
              <div className="terminal-buttons">
                <span className="t-btn t-red"></span>
                <span className="t-btn t-yellow"></span>
                <span className="t-btn t-green"></span>
              </div>
            </div>

            <div className="card-body">
              <div className="gcp-score-strip">
                <div className="score-num gradient-text">82,330</div>
                <div className="score-label">Points Earned on Google Cloud Skills</div>
                <span className="diamond-badge" style={{marginTop: '10px'}}>DIAMOND_LEAGUE</span>
              </div>

              <div className="gcp-badges-list">
                {gcpBadges.map((badge, idx) => (
                  <div key={idx} className="gcp-badge-item">
                    <span className="cli-prompt">&gt;</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.skills.google/public_profiles/08f5ad17-6599-4ca1-8942-eaf7a7f974c8" target="_blank" rel="noreferrer" className="visit-profile-btn gcp-btn">
                <span>[VIEW_GCP_PROFILE]</span>
              </a>
            </div>
          </div>

          {/* Credly Verified Credentials Preview Card */}
          <div className="profile-card hacker-modal-content">
            <div className="terminal-header">
              <div className="terminal-title">// SYSTEM_QUERY [CREDLY_REGISTRY]</div>
              <div className="terminal-buttons">
                <span className="t-btn t-red"></span>
                <span className="t-btn t-yellow"></span>
                <span className="t-btn t-green"></span>
              </div>
            </div>

            <div className="card-body">
              <div className="credly-info-header">
                <span className="cli-prompt">&gt;</span>
                <span>Verified Cloud & Technical Certifications</span>
                <span className="status-pill">OFFICIAL</span>
              </div>

              <p className="profile-bio-text">
                <span className="cli-prompt">&gt;</span> Verified digital badges for Google Cloud Foundations & Engineering, AWS Cloud Architecture, Azure Fundamentals, and Rice University Algorithmic Thinking.
              </p>

              <div className="card-tags">
                <span className="card-tag">_AWS_Cloud</span>
                <span className="card-tag">_GCP_Engineering</span>
                <span className="card-tag">_Azure_AI</span>
                <span className="card-tag">_Rice_Univ</span>
              </div>
            </div>

            <div className="card-footer">
              <a href="https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly" target="_blank" rel="noreferrer" className="visit-profile-btn">
                <span>[VERIFY_ON_CREDLY]</span>
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
          display: flex;
          flex-direction: column;
        }
        .gcp-highlight {
          border-color: rgba(56, 189, 248, 0.4);
        }
        .card-top-bar {
          display: none;
        }
        .platform-icon {
          color: var(--primary);
        }
        .platform-name {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-main);
        }
        .status-pill {
          margin-left: auto;
          font-size: 0.75rem;
          background: transparent;
          border: 1px solid var(--border-glass);
          padding: 3px 10px;
          border-radius: 0;
          color: var(--text-dim);
          font-weight: 600;
          font-family: var(--font-mono);
        }
        .diamond-badge {
          margin-left: auto;
          font-size: 0.75rem;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          padding: 3px 10px;
          border-radius: 0;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex: 1;
          padding: 1.6rem;
        }
        .profile-user-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .user-avatar-mini {
          width: 42px;
          height: 42px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .linkedin-bg {
          border-color: #0a66c2;
          color: #0a66c2;
        }
        .user-handle {
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.2;
          font-family: var(--font-mono);
        }
        .user-sub {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
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
