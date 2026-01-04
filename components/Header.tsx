
import React from 'react';

export const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 'center'에서 'start'로 변경하여 섹션 시작점이 상단에 오도록 함
      });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="material-icons text-white text-sm">person</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dongrim Kang</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a 
            href="#skills" 
            onClick={(e) => scrollToSection(e, 'skills')}
            className="hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')}
            className="hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a 
            href="#leadership" 
            onClick={(e) => scrollToSection(e, 'leadership')}
            className="hover:text-primary transition-colors"
          >
            Leadership
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-sm"
          >
            Contact
          </a>
        </div>
        
        <div className="md:hidden">
          <span className="material-icons text-slate-600">menu</span>
        </div>
      </div>
    </nav>
  );
};
