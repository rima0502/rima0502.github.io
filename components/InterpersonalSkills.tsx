
import React from 'react';

export const InterpersonalSkills: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-10">
          <span className="material-icons text-primary text-xl">groups</span>
          <h2 className="text-2xl font-display font-bold text-slate-900">Interpersonal Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Communication & Collaboration</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Communication within the team was crucial throughout the game jam projects. We held regular scrum meetings and checked each team member's role and progress every hour. This allowed us to track each other's progress and quickly exchange feedback where necessary.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Leadership & Mediation</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              In particular, I took on the role of mediating between the graphic designer and the programmer to ensure smooth communication. I clearly conveyed the design and functional requirements, which helped keep the project on track and running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
