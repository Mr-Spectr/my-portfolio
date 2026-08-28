import React from 'react';
import { X, Printer, FileText } from 'lucide-react';

export default function CvModal({ isOpen, onClose, profile }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="cv-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cv-modal-header">
          <div className="cv-header-title">
            <FileText size={20} className="cv-icon" />
            <span>Curriculum Vitae — {profile.name}</span>
          </div>

          <div className="cv-actions">
            <button onClick={handlePrint} className="btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="close-cv-btn">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable CV Document View */}
        <div className="cv-document">
          <div className="cv-doc-header">
            <h1 className="cv-name">ABHAY RAWAT</h1>
            <div className="cv-subtitle">Information Science Engineer & Data Science Scholar</div>
            <div className="cv-contact-line">
              <span>📍 Bengaluru, India</span> | 
              <span>📱 +91 7411202198</span> | 
              <span>✉️ workwithabhay3006@gmail.com</span>
            </div>
            <div className="cv-contact-links">
              <a href="https://www.linkedin.com/in/abhay-rawat-790b24288/" target="_blank" rel="noreferrer">LinkedIn</a> | 
              <a href="https://github.com/Mr-Spectr" target="_blank" rel="noreferrer">GitHub</a> | 
              <a href="https://www.credly.com/users/abhay-rawat.d65578c3/badges/credly" target="_blank" rel="noreferrer">Credly Badges</a>
            </div>
          </div>

          <hr className="cv-divider" />

          {/* Education */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">Education</h3>
            <div className="cv-list">
              <div className="cv-item">
                <div className="cv-item-left">
                  <span className="cv-item-period">Aug 2023 – Jul 2027</span>
                </div>
                <div className="cv-item-main">
                  <div className="cv-item-role">Bachelor of Engineering in Information Science and Engineering</div>
                  <div className="cv-item-inst">Nitte Meenakshi Institute of Technology, Bengaluru</div>
                  <div className="cv-item-desc"><strong>CGPA: 8.5 / 10.0</strong></div>
                </div>
              </div>
              <div className="cv-item">
                <div className="cv-item-left">
                  <span className="cv-item-period">May 2024 – Present</span>
                </div>
                <div className="cv-item-main">
                  <div className="cv-item-role">B.Sc. in Data Science & Programming</div>
                  <div className="cv-item-inst">Indian Institute of Technology, Madras</div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">Technical Skills</h3>
            <div className="cv-skills-grid">
              <div className="cv-skill-row">
                <strong>Programming Languages:</strong> Python, C++, Java, JavaScript, SQL
              </div>
              <div className="cv-skill-row">
                <strong>Frameworks & Tools:</strong> FastAPI, Flutter, Firebase, Docker, Git/GitHub, n8n
              </div>
              <div className="cv-skill-row">
                <strong>Core Concepts:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks
              </div>
              <div className="cv-skill-row">
                <strong>AI & Data:</strong> Pandas, scikit-learn, TensorFlow, PyTorch, NLP, RAG Pipelines
              </div>
              <div className="cv-skill-row">
                <strong>Cloud & DevOps:</strong> AWS, Google Cloud Platform (GCP), Azure Fundamentals, Docker
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">Major Engineering Projects</h3>
            <div className="cv-projects-list">
              <div className="cv-proj-box">
                <div className="cv-proj-head">
                  <span className="cv-proj-t">Enterprise Knowledge Agent (Agentic AI)</span>
                  <span className="cv-proj-d">Dec 2025 – Present</span>
                </div>
                <div className="cv-proj-tech"><strong>Tech Stack:</strong> Python, FastAPI, MySQL, RAG, Groq API, n8n, Docker, REST APIs</div>
                <ul className="cv-bullet-list">
                  <li>Engineered a scalable Agentic AI platform using FastAPI, MySQL, Docker, and RAG pipelines for secure knowledge retrieval.</li>
                  <li>Developed retrieval pipelines, Role-Based Access Control (RBAC), and Retrieval-Augmented Generation (RAG).</li>
                  <li>Built scalable FastAPI services, workflow automation, and report-generation modules supporting real-time queries.</li>
                </ul>
              </div>

              <div className="cv-proj-box">
                <div className="cv-proj-head">
                  <span className="cv-proj-t">MACRA — Business Analytics & Decision Support Platform</span>
                  <span className="cv-proj-d">Apr 2025 – Jun 2025</span>
                </div>
                <div className="cv-proj-tech"><strong>Tech Stack:</strong> Python, JavaScript, scikit-learn, SQL, REST APIs</div>
                <ul className="cv-bullet-list">
                  <li>Engineered a data-driven analytics platform processing financial datasets to generate actionable investment insights.</li>
                  <li>Processed key financial indicators including PE Ratio, PB Ratio, Dividend Yield, and Market Capitalization.</li>
                  <li>Developed REST APIs and automated data processing workflows supporting model inference.</li>
                </ul>
              </div>

              <div className="cv-proj-box">
                <div className="cv-proj-head">
                  <span className="cv-proj-t">FlutChat — Real-Time Chat Application</span>
                  <span className="cv-proj-d">Jan 2025 – Mar 2025</span>
                </div>
                <div className="cv-proj-tech"><strong>Tech Stack:</strong> Flutter, Dart, Firebase Auth, Firestore</div>
                <ul className="cv-bullet-list">
                  <li>Built a real-time messaging application with Firebase Authentication and Firestore database synchronization.</li>
                  <li>Designed modular architecture and state management workflows improving maintainability.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">Certifications</h3>
            <p className="cv-summary-text">
              <strong>Cloud & DevOps:</strong> Google Cloud Engineering, Google Cloud Foundations, AWS Cloud Architecture & Foundations, Azure AI & DevOps Fundamentals (Credly Verified).<br />
              <strong>AI/ML & Data:</strong> IIT Madras Data Science Foundations, Algorithmic Thinking (Rice University), Python for Data Science, AI/MLOps Foundations, NLP & Deep Learning.
            </p>
          </section>

          {/* Achievements */}
          <section className="cv-sec">
            <h3 className="cv-sec-title">Honors & Achievements</h3>
            <ul className="cv-bullet-list">
              <li><strong>Amazon ML Challenge:</strong> Top 15% rank nationally in structured ML model-building challenge.</li>
              <li><strong>Code Cadets Hackathon (IISc):</strong> Secured top 5% among 500+ participants.</li>
              <li><strong>Smart India Hackathon 2025:</strong> College-Level Qualified and Institute Representative.</li>
            </ul>
          </section>
        </div>
      </div>

      <style>{`
        .cv-modal {
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.95);
          animation: scaleUp 0.25s ease-out;
        }
        .cv-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
        }
        .cv-header-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
        }
        .cv-icon { color: var(--primary); }
        .cv-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .close-cv-btn {
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .close-cv-btn:hover { color: #fff; }

        /* Printable Sheet */
        .cv-document {
          background: #0d1322;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          font-family: 'Inter', sans-serif;
          color: #e2e8f0;
          line-height: 1.6;
        }
        .cv-doc-header {
          text-align: center;
          margin-bottom: 1.2rem;
        }
        .cv-name {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }
        .cv-subtitle {
          font-size: 1rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 6px;
        }
        .cv-contact-line {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .cv-divider {
          border: none;
          border-top: 1px solid var(--border-glass);
          margin: 1.5rem 0;
        }
        .cv-sec {
          margin-bottom: 1.8rem;
        }
        .cv-sec-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px dashed var(--border-glass);
          padding-bottom: 4px;
          margin-bottom: 1rem;
        }
        .cv-summary-text {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .cv-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cv-item {
          display: flex;
          gap: 1.5rem;
        }
        .cv-item-left {
          width: 110px;
          flex-shrink: 0;
        }
        .cv-item-period {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary);
        }
        .cv-item-main {
          flex: 1;
        }
        .cv-item-role {
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
        }
        .cv-item-inst {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 2px;
        }
        .cv-item-desc {
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .cv-contact-links {
          font-size: 0.85rem;
          color: var(--accent);
          margin-top: 4px;
        }
        .cv-contact-links a {
          color: var(--accent);
          text-decoration: underline;
        }
        .cv-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .cv-skill-row strong {
          color: #fff;
        }
        .cv-projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .cv-proj-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          padding: 1rem;
        }
        .cv-proj-head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .cv-proj-t {
          font-weight: 700;
          color: #fff;
          font-size: 0.95rem;
        }
        .cv-proj-d {
          font-size: 0.82rem;
          color: var(--primary);
          font-weight: 600;
        }
        .cv-proj-tech {
          font-size: 0.85rem;
          color: var(--accent);
          margin-bottom: 6px;
        }
        .cv-bullet-list {
          margin-left: 1.2rem;
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .cv-bullet-list li {
          margin-bottom: 4px;
        }

        @media print {
          body * { visibility: hidden; }
          .cv-document, .cv-document * { visibility: visible; }
          .cv-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #fff !important;
            color: #000 !important;
          }
          .cv-name { color: #000 !important; }
          .cv-sec-title { color: #000 !important; border-bottom-color: #ccc; }
          .cv-pub-t { color: #000 !important; }
        }
      `}</style>
    </div>
  );
}
