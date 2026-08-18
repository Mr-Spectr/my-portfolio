import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import ResearchGraph from './components/ResearchGraph';
import Publications from './components/Publications';
import BentoProjects from './components/BentoProjects';
import VerifiedProfiles from './components/VerifiedProfiles';
import AcademicTimeline from './components/AcademicTimeline';
import AwardsGrants from './components/AwardsGrants';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CheckCircle } from 'lucide-react';
import AmbientParticles from './components/AmbientParticles';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [theme, setTheme] = useState('default');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <div className="app-main">
      <AmbientParticles />
      <ScrollProgress />
      <Navbar
        activeTheme={theme}
        setTheme={setTheme}
      />

      <main>
        <Hero
          profile={PORTFOLIO_DATA.profile}
        />

        <ImpactMetrics
          metrics={PORTFOLIO_DATA.metrics}
        />

        <ResearchGraph
          graphData={PORTFOLIO_DATA.graphData}
          researchDomains={PORTFOLIO_DATA.researchDomains}
        />

        <Publications
          projects={PORTFOLIO_DATA.projects}
        />

        <BentoProjects
          projects={PORTFOLIO_DATA.projects}
        />

        <VerifiedProfiles />

        <AcademicTimeline
          timeline={PORTFOLIO_DATA.timeline}
          teaching={PORTFOLIO_DATA.teaching}
        />

        <AwardsGrants
          awards={PORTFOLIO_DATA.awards}
        />

        <ContactSection
          profile={PORTFOLIO_DATA.profile}
          onToast={addToast}
        />
      </main>

      <Footer
        profile={PORTFOLIO_DATA.profile}
      />

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className="toast">
            <CheckCircle size={18} color="#10b981" />
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
