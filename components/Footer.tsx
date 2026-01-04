
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Let's Connect</h2>
            <p className="max-w-sm text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <span className="material-icons text-sm">phone</span>
                </div>
                <span className="font-medium text-slate-200">+8210 6858 1767</span>
              </div>
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <span className="material-icons text-sm">email</span>
                </div>
                <span className="font-medium text-slate-200">rima0502@naver.com</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <span className="material-icons text-sm">link</span>
                </div>
                <span className="font-medium text-slate-200">LinkedIn: dongrimkang</span>
              </div>
              <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <span className="material-icons text-sm">code</span>
                </div>
                <span className="font-medium text-slate-200">Github: rima0502</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>© 2025 Dongrim Kang. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
