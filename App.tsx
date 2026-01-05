
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TechnicalSkills } from './components/TechnicalSkills.tsx';
import { InterpersonalSkills } from './components/InterpersonalSkills.tsx';
import { FeaturedProjects } from './components/FeaturedProjects.tsx';
import { WorkExperience } from './components/WorkExperience.tsx';
import { LeadershipExperience } from './components/LeadershipExperience.tsx';
import { Footer } from './components/Footer.tsx';
import { AIChat } from './components/AIChat.tsx';

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
