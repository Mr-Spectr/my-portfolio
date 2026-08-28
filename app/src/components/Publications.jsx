import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Quote, 
  ExternalLink, 
  Code, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  BookOpen,
  X
} from 'lucide-react';

export default function Publications({ publications, onCopyBibtex }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const [activeBibtexModal, setActiveBibtexModal] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', ...new Set(publications.map((publication) => publication.category))];

  const toggleAbstract = (id) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPubs = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch && (selectedCategory === 'All' || pub.category === selectedCategory);
  });

  const handleCopyCode = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopyBibtex('Software citation copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="pub-section">
      <div className="pub-container">
        <div className="section-header">
          <span className="tag">Technical Portfolio</span>
          <h2>Selected Technical Work</h2>
          <p>Open-source projects spanning agentic AI, data analytics, and cross-platform mobile engineering.</p>
        </div>

        {/* Filter Controls & Search */}
        <div className="pub-controls glass-card">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by project, technology, or focus area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="clear-search">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="pub-list">
          {filteredPubs.length === 0 ? (
            <div className="no-pubs glass-card">
              <BookOpen size={40} className="no-pubs-icon" />
              <p>No publications matching "{searchTerm}". Try another search query.</p>
            </div>
          ) : (
            filteredPubs.map(pub => (
              <div key={pub.id} className={`pub-card hacker-modal-content ${pub.isHighlighted ? 'highlighted-card' : ''}`}>
                <div className="terminal-header">
                  <div className="terminal-title">// SYSTEM_QUERY [PROJECT_{pub.year}_{pub.id}]</div>
                  <div className="terminal-buttons">
                    <span className="t-btn t-red"></span>
                    <span className="t-btn t-yellow"></span>
                    <span className="t-btn t-green"></span>
                  </div>
                </div>

                <div className="pub-body-inner" style={{ padding: '1.8rem' }}>
                  <div className="pub-header">
                    <div className="pub-badges">
                      <span className="badge-pill">_{pub.year}</span>
                      <span className="pub-type-badge">_{pub.type}</span>
                      <span className="pub-category-badge">_{pub.category}</span>
                      {pub.award && (
                        <span className="pub-award-badge">
                          <Award size={13} />
                          {pub.award}
                        </span>
                      )}
                    </div>

                    <div className="pub-citations">
                      <span className="cli-prompt">&gt;</span>
                      <span>OPEN_SOURCE</span>
                    </div>
                  </div>

                <h3 className="pub-title">{pub.title}</h3>

                <div className="pub-authors">
                  {pub.authors.map((author, index) => (
                    <span key={index} className={author === "Abhay Rawat" ? "author-highlight" : ""}>
                      {author}{index < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>

                <div className="pub-venue">{pub.venue}</div>

                {/* Abstract Expander */}
                <div className="pub-abstract-row">
                  <button 
                    onClick={() => toggleAbstract(pub.id)}
                    className="toggle-abstract-btn"
                  >
                    <span>{expandedAbstracts[pub.id] ? "Hide Abstract" : "Read Abstract"}</span>
                    {expandedAbstracts[pub.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {expandedAbstracts[pub.id] && (
                  <div className="abstract-content">
                    <p>{pub.abstract}</p>
                  </div>
                )}

                {/* Footer Action Links & BibTeX Trigger */}
                <div className="pub-footer">
                  <div className="pub-action-links">
                    <a href={pub.pdfUrl} target="_blank" rel="noreferrer" className="pub-action-btn">
                      <FileText size={15} />
                      <span>Project Page</span>
                    </a>
                    {pub.codeUrl && (
                      <a href={pub.codeUrl} target="_blank" rel="noreferrer" className="pub-action-btn">
                        <Code size={15} />
                        <span>Code</span>
                      </a>
                    )}
                    {pub.demoUrl && pub.demoUrl !== '#' && (
                      <a href={pub.demoUrl} target="_blank" rel="noreferrer" className="pub-action-btn">
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button 
                    onClick={() => setActiveBibtexModal(pub)} 
                    className="bibtex-btn"
                  >
                    <Quote size={14} />
                    <span>Software Citation</span>
                  </button>
                </div>
              </div>
            </div>
            ))
          )}
        </div>
      </div>

      {/* BibTeX Modal */}
      {activeBibtexModal && (
        <div className="modal-backdrop" onClick={() => setActiveBibtexModal(null)}>
          <div className="bibtex-modal glass-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <Quote size={18} className="quote-icon" />
                <span>Software Citation</span>
              </div>
              <button onClick={() => setActiveBibtexModal(null)} className="close-modal-btn">
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <p className="bibtex-pub-title">{activeBibtexModal.title}</p>
              <div className="bibtex-code-wrapper">
                <pre className="bibtex-code">{activeBibtexModal.bibtex}</pre>
                <button
                  onClick={() => handleCopyCode(activeBibtexModal.bibtex, activeBibtexModal.id)}
                  className="copy-bibtex-floating"
                >
                  {copiedId === activeBibtexModal.id ? (
                    <>
                      <Check size={16} color="#10b981" />
                      <span style={{ color: '#10b981' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pub-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .pub-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .pub-controls {
          padding: 1.2rem;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .search-box {
          position: relative;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .search-input {
          width: 100%;
          padding: 12px 40px 12px 42px;
          background: rgba(9, 13, 22, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .search-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 12px var(--primary-glow);
        }
        .clear-search {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cat-pill {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .cat-pill:hover, .cat-pill.active {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary-glow);
        }

        .pub-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .no-pubs {
          padding: 3rem;
          text-align: center;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .no-pubs-icon {
          color: var(--text-dim);
        }
        .pub-card {
          position: relative;
        }
        .pub-card .pub-body-inner {
          padding: 1.8rem;
          font-family: var(--font-mono);
        }
        .highlighted-card {
          border-left: 4px solid var(--primary);
        }
        .pub-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          flex-wrap: wrap;
          gap: 10px;
        }
        .pub-badges {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pub-type-badge {
          font-size: 0.78rem;
          background: transparent;
          border: 1px solid var(--border-glass);
          padding: 3px 10px;
          border-radius: 0;
          color: var(--accent);
          font-weight: 600;
        }
        .pub-category-badge {
          font-size: 0.78rem;
          color: var(--text-dim);
          background: transparent;
          border: 1px solid var(--border-glass);
          padding: 3px 8px;
          border-radius: 0;
        }
        .pub-award-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.5);
          padding: 3px 10px;
          border-radius: 0;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .pub-citations {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--primary);
          font-weight: 600;
          background: transparent;
          border: 1px solid var(--primary);
          padding: 4px 10px;
          border-radius: 0;
        }
        .pub-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.6rem;
          color: var(--text-main);
          font-family: var(--font-mono);
        }
        .pub-authors {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          font-family: var(--font-mono);
        }
        .author-highlight {
          color: var(--primary);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .pub-venue {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-dim);
          margin-bottom: 1rem;
          font-family: var(--font-mono);
        }
        .pub-abstract-row {
          margin-bottom: 0.8rem;
        }
        .toggle-abstract-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 0;
          font-family: var(--font-mono);
        }
        .toggle-abstract-btn:hover {
          text-decoration: underline;
        }
        .abstract-content {
          background: rgba(10, 10, 10, 0.9);
          border: 1px solid var(--border-glass);
          border-radius: 0;
          padding: 1rem;
          margin-bottom: 1.2rem;
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--text-muted);
          animation: fadeIn 0.2s ease-out;
          font-family: var(--font-mono);
        }
        .pub-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
          flex-wrap: wrap;
          gap: 12px;
        }
        .pub-action-links {
          display: flex;
          gap: 10px;
        }
        .pub-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
          font-family: var(--font-mono);
        }
        .pub-action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-glow);
          color: #fff;
        }
        .bibtex-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 0;
          background: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: var(--font-mono);
        }
        .bibtex-btn:hover {
          background: var(--primary);
          color: #111;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .bibtex-modal {
          width: 100%;
          max-width: 620px;
          padding: 1.8rem;
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .modal-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
        }
        .quote-icon {
          color: var(--primary);
        }
        .close-modal-btn {
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .close-modal-btn:hover { color: #fff; }
        .bibtex-pub-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-main);
        }
        .bibtex-code-wrapper {
          position: relative;
        }
        .bibtex-code {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          background: #060911;
          color: #38bdf8;
          padding: 1.2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-glass);
          overflow-x: auto;
          line-height: 1.5;
        }
        .copy-bibtex-floating {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }
        .copy-bibtex-floating:hover {
          border-color: var(--primary-glow);
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
