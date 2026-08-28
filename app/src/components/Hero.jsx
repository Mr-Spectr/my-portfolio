import React from 'react';
import {
  GraduationCap,
  MapPin,
  Mail,
  ExternalLink,
  FileDown,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ profile }) {
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
          <div className="hero-content">
            <h1 className="hero-name">
              Hello, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <h2 className="hero-title">{profile.title}</h2>
            <div className="hero-institution">
              <GraduationCap size={18} className="institution-icon" />
              <span>{profile.institution}</span>
            </div>

            <p className="hero-bio">{profile.tagline}</p>

            {/* Quick Links & Location */}
            <div className="hero-meta-row">
              <div className="meta-item">
                <MapPin size={15} />
                <span>{profile.location}</span>
              </div>
              <div className="meta-item meta-focus">AI · data · systems · mobile</div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a href="#publications" className="btn-primary">
                <BookOpen size={18} />
                <span>Explore Project Dossiers</span>
              </a>
              <a href="./abhay-rawat-resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                <span>Start a conversation</span>
              </a>
            </div>

            {/* Scholar & Code Badges */}
            <div className="hero-social-row">
              <a href={profile.credly} target="_blank" rel="noreferrer" className="scholar-btn">
                <BookOpen size={16} />
                <span>Credly Certifications</span>
                <ExternalLink size={12} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="scholar-btn">
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="scholar-btn">
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Full-portrait profile card */}
          <div className="hero-avatar-wrapper">
            <div className="avatar-glass-card">
              <div className="avatar-portrait">
                <img src={profile.avatar} alt={profile.name} className="avatar-img" />
                <div className="avatar-image-wash"></div>
              </div>

              <div className="avatar-card-info">
                <div className="info-badge">NMIT & IIT Madras Scholar</div>
                <div className="info-title">Core Competencies</div>
                <div className="info-tags">
                  <span className="mini-tag">Agentic AI & RAG</span>
                  <span className="mini-tag">FastAPI & Docker</span>
                  <span className="mini-tag">Data Science</span>
                  <span className="mini-tag">Flutter & Firebase</span>
                </div>
              </div>
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
        .hero-name {
          font-size: 3.4rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 0.6rem;
        }
        .hero-title {
          font-size: 1.45rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .hero-institution {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }
        .institution-icon {
          color: var(--accent);
        }
        .hero-bio {
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 650px;
        }
        .hero-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: var(--text-dim);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .orcid-badge {
          background: #a6ce39;
          color: #111;
          font-weight: 800;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .meta-item a {
          color: var(--text-muted);
          text-decoration: none;
        }
        .meta-item a:hover {
          color: var(--primary);
        }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.2rem;
        }
        .hero-social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .scholar-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .scholar-btn:hover {
          background: var(--primary-light);
          border-color: var(--primary-glow);
          color: var(--text-main);
        }

        /* Avatar Card */
        .hero-avatar-wrapper {
          display: flex;
          justify-content: center;
        }
        .avatar-glass-card {
          background: #060c19;
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-xl);
          overflow: hidden;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          position: relative;
          width: 100%;
          max-width: 380px;
          min-height: 470px;
          transition: var(--transition-normal);
        }
        .avatar-glass-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -10px var(--primary-glow);
        }
        .avatar-portrait {
          position: relative;
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #071126;
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 28%;
          transform: scaleX(-1) scale(1.035);
          filter: saturate(1.06) contrast(1.04);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .avatar-image-wash {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(5, 9, 20, 0.08) 26%, rgba(5, 9, 20, 0.4) 50%, rgba(5, 9, 20, 0.96) 100%),
            linear-gradient(135deg, rgba(99, 102, 241, 0.2), transparent 46%);
        }
        .avatar-glass-card:hover .avatar-img {
          transform: scaleX(-1) scale(1.1);
        }
        .avatar-card-info {
          position: absolute;
          z-index: 1;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          padding: 1rem 0.8rem 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          background: rgba(8, 14, 31, 0.62);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .info-badge {
          background: var(--primary-light);
          color: var(--primary);
          border: 1px solid var(--primary-glow);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .info-title {
          color: var(--text-dim);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 6px;
        }
        .info-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-top: 4px;
        }
        .mini-tag {
          font-size: 0.75rem;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.2);
          padding: 3px 8px;
          border-radius: 6px;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-avatar-wrapper {
            order: -1;
          }
          .avatar-glass-card {
            max-width: 430px;
            min-height: 450px;
          }
        }
      `}</style>
    </section>
  );
}
