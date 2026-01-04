
import React from 'react';
import { Experience } from '../types';

const EXPERIENCES: Experience[] = [
  {
    title: 'Unreal Engine 5',
    subtitle: 'GONJIAMERICA DEVELOPMENT',
    description: "Through the development of 'Gonjiamerica', a first-person horror shooter, I gained a deep understanding of Unreal Engine architecture and components, significantly enhancing my practical game development skills.",
    icon: 'hub'
  },
  {
    title: 'BomberMan Clone',
    subtitle: 'OPENGL & ENGINE ARCH',
    description: 'Mastered the design and implementation of component-based game architectures. Also gained experience in low-level graphics processing by rendering visuals directly using OpenGL.',
    icon: 'visibility'
  },
  {
    title: 'Blade of Flame',
    subtitle: 'MEMORY MANAGEMENT',
    description: 'Implemented memory pooling to optimize object creation and destruction. This allowed for smooth gameplay with high performance even in resource-constrained environments.',
    icon: 'settings'
  }
];

export const WorkExperience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 scroll-mt-24" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-16">
          <span className="material-icons text-primary text-xl">work</span>
          <h2 className="text-3xl font-display font-bold text-slate-900">Technical Experience</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.title} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors mb-8">
                <span className="material-icons text-3xl">{exp.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-5">{exp.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
