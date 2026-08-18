import React, { useEffect, useRef, useState } from 'react';
import { Network, Info, Sparkles } from 'lucide-react';

export default function ResearchGraph({ graphData, researchDomains }) {
  const canvasRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle high DPI display
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth;
    const height = 480;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Initialize nodes with positions and velocities
    const nodes = graphData.nodes.map((node, i) => {
      const angle = (i / graphData.nodes.length) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.32;
      return {
        ...node,
        x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 40,
        y: height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      };
    });

    const links = graphData.links.map(link => {
      const source = nodes.find(n => n.id === link.source);
      const target = nodes.find(n => n.id === link.target);
      return { ...link, sourceNode: source, targetNode: target };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background dynamic connections grid
      ctx.lineWidth = 1;
      links.forEach(link => {
        if (!link.sourceNode || !link.targetNode) return;

        const isHovered = selectedNode && (selectedNode.id === link.sourceNode.id || selectedNode.id === link.targetNode.id);

        ctx.beginPath();
        ctx.moveTo(link.sourceNode.x, link.sourceNode.y);
        ctx.lineTo(link.targetNode.x, link.targetNode.y);

        if (isHovered) {
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      });

      // Update positions & draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from canvas edges
        if (node.x < 50 || node.x > width - 50) node.vx *= -1;
        if (node.y < 50 || node.y > height - 50) node.vy *= -1;

        const isSelected = selectedNode?.id === node.id;

        // Draw outer glow ring for selected node
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';
          ctx.fill();
        }

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);

        if (isSelected) {
          ctx.fillStyle = '#6366f1';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
        } else {
          ctx.fillStyle = node.group === 1 ? 'rgba(99, 102, 241, 0.85)' : node.group === 2 ? 'rgba(16, 185, 129, 0.85)' : 'rgba(245, 158, 11, 0.85)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 1.5;
        }
        ctx.fill();
        ctx.stroke();

        // Draw node text label
        ctx.font = isSelected ? '600 13px Outfit, sans-serif' : '500 11px Inter, sans-serif';
        ctx.fillStyle = isSelected ? '#ffffff' : '#94a3b8';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.size + 16);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Canvas Mouse Click handler
    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      let found = null;
      nodes.forEach(node => {
        const dx = clickX - node.x;
        const dy = clickY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) <= node.size + 5) {
          found = node;
        }
      });
      setSelectedNode(found);
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [graphData, selectedNode]);

  return (
    <section id="graph" className="graph-section">
      <div className="graph-container">
        <div className="section-header">
          <span className="tag">Interactive Knowledge Map</span>
          <h2>Research Domain Taxonomy</h2>
          <p>Explore the connections between the tools, systems, and project themes that shape my current work.</p>
        </div>

        {/* Research Focus Cards Grid */}
        <div className="research-domains-grid">
          {researchDomains.map(domain => (
            <div key={domain.id} className="domain-card glass-card">
              <div className="domain-header">
                <div className="domain-badge">{domain.status}</div>
                <span className="domain-count">{domain.focusLabel}</span>
              </div>
              <h3 className="domain-title">{domain.title}</h3>
              <p className="domain-desc">{domain.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic HTML5 Canvas Graph Box */}
        <div className="graph-box glass-card">
          <div className="graph-box-header">
            <div className="graph-title-row">
              <Network size={20} className="graph-icon" />
              <span className="graph-title-text">Interactive Research Knowledge Graph</span>
            </div>
            <div className="graph-hint">
              <Info size={14} />
              <span>Click nodes to inspect related work</span>
            </div>
          </div>

          <div className="canvas-wrapper">
            <canvas ref={canvasRef} />

            {selectedNode && (
              <div className="node-detail-floating glass-card">
                <div className="node-detail-header">
                  <Sparkles size={16} className="node-sparkle" />
                  <h4>{selectedNode.label}</h4>
                </div>
                <p>A connected focus area within Abhay Rawat's engineering portfolio.</p>
                <div className="node-stats">
                  <span className="node-stat-pill">{selectedNode.val}</span>
                  <span className="node-stat-pill">Current focus</span>
                </div>
                <button onClick={() => setSelectedNode(null)} className="node-close-btn">Close</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .graph-section {
          padding: 5rem 2rem;
          position: relative;
        }
        .graph-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .research-domains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .domain-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .domain-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .domain-badge {
          background: var(--primary-light);
          color: var(--primary);
          border: 1px solid var(--primary-glow);
          padding: 3px 10px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .domain-count {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .domain-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .domain-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Canvas Graph Box */
        .graph-box {
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .graph-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }
        .graph-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .graph-icon {
          color: var(--primary);
        }
        .graph-title-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .graph-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-dim);
        }
        .canvas-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          background: rgba(9, 13, 22, 0.6);
          overflow: hidden;
        }
        canvas {
          display: block;
          cursor: pointer;
        }
        .node-detail-floating {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 260px;
          padding: 1.2rem;
          z-index: 10;
          animation: fadeIn 0.25s ease-out;
        }
        .node-detail-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .node-sparkle {
          color: var(--accent);
        }
        .node-detail-header h4 {
          font-size: 1rem;
          font-weight: 700;
        }
        .node-detail-floating p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 10px;
        }
        .node-stats {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .node-stat-pill {
          font-size: 0.75rem;
          background: var(--primary-light);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        .node-close-btn {
          width: 100%;
          padding: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
        }
        .node-close-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
