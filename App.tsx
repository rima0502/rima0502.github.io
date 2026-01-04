
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechnicalSkills } from './components/TechnicalSkills';
import { InterpersonalSkills } from './components/InterpersonalSkills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WorkExperience } from './components/WorkExperience';
import { LeadershipExperience } from './components/LeadershipExperience';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main>
        <Hero />
        <TechnicalSkills />
        <InterpersonalSkills />
        <FeaturedProjects />
        <WorkExperience />
        <LeadershipExperience />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
