
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 상단 정렬로 변경
      });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration: Minimal & Clean */}
      <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:40px_40px] -z-20 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl relative">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
            Building the <br />
            <span className="text-primary italic">Future of Fun.</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            Hi, I'm <span className="text-slate-900 font-bold">Dongrim Kang</span>, a Game Developer and DigiPen Academy Busan graduate. 
            I specialize in custom engine architecture and creating immersive experiences.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center gap-3 active:scale-95"
            >
              Explore Projects <span className="material-icons text-xl">rocket_launch</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
            >
              Contact
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://i.pravatar.cc/40?img=${i+15}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Team" />
               ))}
             </div>
             <p className="text-sm text-slate-500 font-medium">
               Collaborated with over <span className="text-slate-900 font-bold">15+ professionals</span> <br /> on various game jam projects.
             </p>
          </div>
        </div>

        {/* Sophisticated Image Grid with ACTUAL images */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-2 gap-6 items-start">
            
            {/* Left Column: Game Development Scene (Vertical) */}
            <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[3/4.5] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
                alt="Game Programming Workspace" 
                className="w-full h-full object-cover" 
                loading="eager"
              />
            </div>

            {/* Right Column: Two Square Images */}
            <div className="space-y-6">
              {/* Top Right: Technical Detail / Hardware */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-square bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop" 
                  alt="High Performance Tech" 
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
              </div>
              
              {/* Bottom Right: 3D Render / Visuals */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-square bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" 
                  alt="Abstract 3D Art" 
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-6 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
