
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    title: 'BomberMan',
    date: 'Aug 2025',
    role: 'PROGRAMMER • CUSTOM C++ ENGINE',
    platform: 'Custom Engine',
    description: "Built a fully functional Bomberman clone from scratch using a custom C++ engine. Implemented grid-based logic, destructible environments, and AI enemy behavior using core game loop patterns.",
    iconUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Blade of Flame',
    date: 'Sep 2024',
    role: 'PROGRAMMER • ALPHAENGINE (C++)',
    platform: 'AlphaEngine',
    description: 'An action-packed survival game. Implemented a robust memory pooling system to manage high volumes of projectiles and enemies without garbage collection spikes.',
    iconUrl: 'https://images.unsplash.com/photo-1552824734-80795562cdad?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Gonjiamerica',
    date: 'Jan 2025',
    role: 'PROGRAMMER • UNREAL ENGINE',
    platform: 'Unreal Engine',
    description: 'A psychological horror experience. Leveraged Unreal Engine 5 features including Lumen and Nanite for high-fidelity visuals and implemented intricate horror mechanics and AI navigation.',
    iconUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Hyper Auto Pets',
    date: 'May 2024',
    role: 'PROGRAMMER • CPROCESSING',
    platform: 'CProcessing',
    description: 'Strategy card battler. Designed a modular ability system allowing for unique card combinations and synergies, focused on clean object-oriented architecture in C++.',
    iconUrl: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=600',
  }
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-32 bg-[#0A0D17] text-white scroll-mt-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
               Project Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed">
            A selection of works showcasing technical versatility across different game engines and genres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.title} className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="h-72 relative bg-slate-950 overflow-hidden">
                <img src={project.iconUrl} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-6 right-6">
                   <div className="bg-white/10 backdrop-blur px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                     {project.platform}
                   </div>
                </div>
              </div>
              
              <div className="p-12 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                     <span className="material-icons text-xl group-hover:text-white">north_east</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-bold text-primary tracking-widest uppercase">{project.role}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="text-[11px] font-medium text-slate-500">{project.date}</span>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                   <div className="px-4 py-2 rounded-xl bg-slate-800/50 text-xs font-semibold text-slate-300">C++</div>
                   <div className="px-4 py-2 rounded-xl bg-slate-800/50 text-xs font-semibold text-slate-300">OpenGL</div>
                   <div className="px-4 py-2 rounded-xl bg-slate-800/50 text-xs font-semibold text-slate-300">Game Design</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
