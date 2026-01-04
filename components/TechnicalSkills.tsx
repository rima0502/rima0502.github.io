
import React from 'react';
import { Skill } from '../types';

const SKILLS: Skill[] = [
  { 
    name: 'Custom Engine', 
    logoUrl: 'https://img.icons8.com/fluency/96/engine.png' 
  },
  { 
    name: 'C / C++', 
    logoUrl: 'https://img.icons8.com/color/96/c-plus-plus-logo.png' 
  },
  { 
    name: 'Unreal Engine', 
    logoUrl: 'https://img.icons8.com/color/96/unreal-engine.png' 
  },
  { 
    name: 'Git', 
    logoUrl: 'https://img.icons8.com/color/96/git.png' 
  },
  { 
    name: 'Blender', 
    logoUrl: 'https://img.icons8.com/color/96/blender-3d.png' 
  },
];

export const TechnicalSkills: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/50 scroll-mt-24" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-10">
          <span className="material-icons text-primary text-xl">settings</span>
          <h2 className="text-2xl font-display font-bold text-slate-900">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center p-3 group-hover:bg-slate-100 transition-colors">
                <img 
                  src={skill.logoUrl} 
                  alt={skill.name} 
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill.name)}&background=f1f5f9&color=e11d48&bold=true`;
                  }}
                />
              </div>
              <span className="text-sm font-bold text-slate-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
