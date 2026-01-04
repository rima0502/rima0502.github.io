
import React from 'react';
import { LeadershipItem } from '../types';

const ITEMS: LeadershipItem[] = [
  {
    title: 'Team Coordination',
    description: 'Gained project management skills by coordinating schedules and setting priorities with team members through meetings.'
  },
  {
    title: 'Decision Making',
    description: "Experienced listening to team members' opinions and mediating effectively to make the best decisions during role assignments."
  },
  {
    title: 'Project Management',
    description: "Developed skills in managing the overall flow of collaboration by setting milestones and organizing development progress."
  },
  {
    title: 'Version Control',
    description: 'Experienced efficient team development processes including code merging, tracking modifications, and resolving conflicts using Git.'
  }
];

export const LeadershipExperience: React.FC = () => {
  return (
    <section className="py-24 bg-white scroll-mt-24" id="leadership">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-12">
          <span className="material-icons text-primary text-xl">diversity_3</span>
          <h2 className="text-3xl font-display font-bold text-slate-900">Leadership & Collaboration</h2>
        </div>
        <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {ITEMS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <span className="material-icons text-xs">check</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
