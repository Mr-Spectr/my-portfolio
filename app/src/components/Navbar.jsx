import React, { useState, useEffect } from 'react';
import { Sparkles, FileDown, Menu, X, Palette } from 'lucide-react';

export default function Navbar({ activeTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'default', name: 'Sapphire Indigo', color: '#6366f1' },
    { id: 'emerald', name: 'Emerald Science', color: '#10b981' },
    { id: 'amber', name: 'Sunset Amber', color: '#f59e0b' },
    { id: 'violet', name: 'Cyber Violet', color: '#a855f7' }
  ];

  const navLinks = [
    { name: 'Focus', href: '#research' },
    { name: 'Knowledge Graph', href: '#graph' },
    { name: 'Project Dossiers', href: '#case-studies' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-icon">
            <Sparkles size={20} className="logo-sparkle" />
          </div>
          <span className="logo-text">Abhay Rawat</span>
          <span className="logo-sub">NMIT · IITM</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Theme Palette Switcher */}
          <div className="theme-switcher-relative">
            <button
              className="icon-btn"
              onClick={() => setThemeDropdown(!themeDropdown)}
              title="Change Color Theme"
            >
              <Palette size={18} />
            </button>

            {themeDropdown && (
              <div className="theme-menu">
                <div className="theme-menu-title">Accent Theme</div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    className={`theme-option ${activeTheme === t.id ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeDropdown(false);
                    }}
                  >
                    <span className="color-dot" style={{ backgroundColor: t.color }}></span>
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="./abhay-rawat-resume.pdf" target="_blank" rel="noreferrer" className="btn-primary btn-sm" aria-label="Download resume">
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="./abhay-rawat-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <FileDown size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.2rem 2rem;
          transition: var(--transition-normal);
        }
        .navbar-header.is-scrolled {
          padding: 0.75rem 2rem;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-glass);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--primary-light);
          border: 1px solid var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--text-main);
        }
        .logo-sub {
          font-size: 0.75rem;
          background: var(--bg-card);
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid var(--border-glass);
          color: var(--accent);
          font-weight: 600;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .icon-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary-glow);
        }
        .theme-switcher-relative {
          position: relative;
        }
        .theme-menu {
          position: absolute;
          top: 48px;
          right: 0;
          width: 180px;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 8px;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .theme-menu-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          padding: 4px 8px;
        }
        .theme-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 8px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .theme-option:hover, .theme-option.active {
          background: var(--primary-light);
          color: var(--text-main);
        }
        .color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .btn-sm {
          padding: 8px 16px;
          font-size: 0.88rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-drawer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(9, 13, 22, 0.95);
          backdrop-filter: blur(16px);
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-glass);
        }
        .mobile-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
        }
        @media (max-width: 520px) {
          .navbar-header, .navbar-header.is-scrolled { padding: 0.7rem 0.85rem; }
          .logo-sub { display: none; }
          .logo-text { font-size: 1.03rem; }
          .nav-actions { gap: 8px; }
          .nav-actions .btn-sm { padding: 8px 11px; }
          .nav-actions .btn-sm span { display: none; }
        }
      `}</style>
    </header>
  );
}
