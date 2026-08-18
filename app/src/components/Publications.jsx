import React, { useMemo, useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Code2, ExternalLink, Search, X } from 'lucide-react';

export default function Publications({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = [project.title, project.category, project.tagline, ...project.tags]
      .join(' ')
      .toLowerCase()
      .includes(term);
    return matchesSearch && (selectedCategory === 'All' || project.category === selectedCategory);
  }), [projects, searchTerm, selectedCategory]);

  return (
    <section id="case-studies" className="pub-section">
      <div className="pub-container">
        <div className="section-header">
          <span className="tag">Project dossiers</span>
          <h2>Applied work, clearly documented.</h2>
          <p>Browse the problem spaces, tools, and implementation themes behind my selected engineering projects.</p>
        </div>

        <div className="pub-controls glass-card">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="search"
              placeholder="Search projects, tools, or focus areas…"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="search-input"
              aria-label="Search project dossiers"
            />
            {searchTerm && <button onClick={() => setSearchTerm('')} className="clear-search" aria-label="Clear search"><X size={16} /></button>}
          </div>
          <div className="category-pills" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button key={category} className={`cat-pill ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="pub-list">
          {filteredProjects.length === 0 ? (
            <div className="no-pubs glass-card"><BookOpen size={40} className="no-pubs-icon" /><p>No project dossier matches “{searchTerm}”.</p></div>
          ) : filteredProjects.map((project) => {
            const expanded = expandedId === project.id;
            return (
              <article key={project.id} className={`pub-card glass-card ${project.featured ? 'highlighted-card' : ''}`}>
                <div className="pub-header">
                  <div className="pub-badges">
                    <span className="badge-pill">{project.period}</span>
                    <span className="pub-type-badge">{project.category}</span>
                    {project.featured && <span className="pub-award-badge">Featured work</span>}
                  </div>
                  <a className="source-mark" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code`}><Code2 size={16} /> Source</a>
                </div>

                <h3 className="pub-title">{project.title}</h3>
                <p className="pub-summary">{project.tagline}</p>

                <button onClick={() => setExpandedId(expanded ? null : project.id)} className="toggle-abstract-btn" aria-expanded={expanded}>
                  <span>{expanded ? 'Hide technical focus' : 'View technical focus'}</span>
                  {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expanded && (
                  <div className="abstract-content">
                    <p>Key tools and concepts</p>
                    <div className="dossier-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="dossier-stats">{Object.entries(project.stats).map(([label, value]) => <span key={label}><b>{label}</b> {value}</span>)}</div>
                  </div>
                )}

                <div className="pub-footer">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="pub-action-btn"><Code2 size={15} /> Source code</a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="pub-action-btn"><ExternalLink size={15} /> Project link</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .pub-section { padding: 5rem 2rem; position: relative; }
        .pub-container { max-width: 1120px; margin: 0 auto; }
        .pub-controls { padding: 1.2rem; margin-bottom: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .search-box { position: relative; width: 100%; }
        .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-dim); }
        .search-input { width: 100%; padding: 12px 40px 12px 42px; background: rgba(9, 13, 22, 0.6); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: var(--text-main); font-size: 0.95rem; outline: none; }
        .search-input:focus { border-color: var(--primary); box-shadow: 0 0 12px var(--primary-glow); }
        .clear-search { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-dim); cursor: pointer; }
        .category-pills, .dossier-tags, .dossier-stats { display: flex; flex-wrap: wrap; gap: 8px; }
        .cat-pill { padding: 6px 14px; border-radius: 999px; background: rgba(255,255,255,.04); border: 1px solid var(--border-glass); color: var(--text-muted); font-size: .82rem; font-weight: 600; cursor: pointer; transition: var(--transition-fast); }
        .cat-pill:hover, .cat-pill.active { background: var(--primary-light); color: var(--primary); border-color: var(--primary-glow); }
        .pub-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .no-pubs { padding: 3rem; text-align: center; color: var(--text-muted); display: grid; place-items: center; gap: 1rem; }
        .no-pubs-icon { color: var(--text-dim); }
        .pub-card { padding: 1.8rem; position: relative; }
        .highlighted-card { border-left: 4px solid var(--primary); }
        .pub-header, .pub-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .pub-header { margin-bottom: .85rem; }
        .pub-badges { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .pub-type-badge, .pub-award-badge, .source-mark { border-radius: 6px; font-size: .78rem; font-weight: 600; }
        .pub-type-badge { padding: 4px 9px; color: var(--accent); background: rgba(255,255,255,.06); border: 1px solid var(--border-glass); }
        .pub-award-badge { padding: 4px 9px; color: #fbbf24; background: rgba(245,158,11,.12); border: 1px solid rgba(245,158,11,.3); }
        .source-mark { display: inline-flex; align-items: center; gap: 6px; color: var(--text-muted); text-decoration: none; }
        .source-mark:hover { color: var(--primary); }
        .pub-title { font-size: 1.35rem; margin-bottom: .6rem; }
        .pub-summary { max-width: 78ch; color: var(--text-muted); font-size: .95rem; line-height: 1.68; margin-bottom: 1rem; }
        .toggle-abstract-btn { display: inline-flex; align-items: center; gap: 5px; padding: 0; border: 0; background: none; color: var(--primary); font-size: .86rem; font-weight: 700; cursor: pointer; }
        .toggle-abstract-btn:hover { text-decoration: underline; }
        .abstract-content { margin: 1rem 0 1.3rem; padding: 1rem; border: 1px solid var(--border-glass); border-radius: var(--radius-sm); background: rgba(9,13,22,.58); color: var(--text-muted); animation: dossierOpen .2s ease-out; }
        .abstract-content p { color: var(--text-main); font-size: .82rem; font-weight: 700; margin-bottom: .7rem; text-transform: uppercase; letter-spacing: .05em; }
        .dossier-tags span, .dossier-stats span { padding: 4px 8px; border-radius: 5px; background: rgba(255,255,255,.05); border: 1px solid var(--border-glass); color: var(--text-muted); font-size: .78rem; }
        .dossier-stats { margin-top: .75rem; }
        .dossier-stats b { color: var(--primary); margin-right: 4px; }
        .pub-footer { border-top: 1px solid var(--border-glass); padding-top: 1rem; justify-content: flex-start; }
        .pub-action-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: var(--text-main); font-size: .82rem; font-weight: 600; text-decoration: none; transition: var(--transition-fast); }
        .pub-action-btn:hover { background: var(--primary-light); border-color: var(--primary-glow); color: var(--primary); }
        @keyframes dossierOpen { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
