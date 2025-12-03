import { useState } from 'react';
import BackgroundTiles from './components/BackgroundTiles';
import Intro from './components/Intro';
import ProfileCard from './components/ProfileCard';
import Calculator from './components/Calculator';
import Socials from './components/Socials';
import { X } from 'lucide-react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const handleCloseOverlay = () => {
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-midnight text-offwhite overflow-x-hidden relative selection:bg-neon selection:text-midnight font-sans">
      <BackgroundTiles isFalling={activeSection !== null} />

      {showIntro && <Intro onComplete={handleIntroComplete} />}

      <main className={`relative z-10 min-h-screen flex flex-col items-center justify-center p-4 py-8 md:py-12 transition-all duration-700 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>

        {/* Main Card - Hidden when overlay is active */}
        <div className={`transition-all duration-500 relative ${activeSection ? 'scale-90 opacity-0 pointer-events-none absolute' : 'scale-100 opacity-100'}`}>
          <ProfileCard onNavigate={handleNavigate} />
        </div>

        {/* Overlays */}
        <div className={`transition-all duration-500 absolute ${activeSection ? 'scale-100 opacity-100' : 'scale-110 opacity-0 pointer-events-none'}`}>
          {activeSection === 'socials' && <Socials onClose={handleCloseOverlay} />}

          {activeSection === 'contact' && (
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[32px] w-[340px] md:w-[380px] shadow-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-display font-bold text-white tracking-wide">GET IN TOUCH</h2>
                <button onClick={handleCloseOverlay} className="p-2 bg-[#1C1C1C] rounded-full hover:bg-[#252525] transition-colors group">
                  <X className="w-5 h-5 text-white/50 group-hover:text-white" />
                </button>
              </div>
              <div className="space-y-3">
                <a href="mailto:gabrielricherd7@gmail.com" className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black/40 rounded-full text-white/70 group-hover:text-neon transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-display font-bold text-white">Email</span>
                      <span className="text-xs text-white/50">gabrielricherd7@gmail.com</span>
                    </div>
                  </div>
                </a>
                <a href="tel:9944958020" className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black/40 rounded-full text-white/70 group-hover:text-neon transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-display font-bold text-white">Phone</span>
                      <span className="text-xs text-white/50">9944958020</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {activeSection === 'calc' && (
            <div className="relative">
              <button onClick={handleCloseOverlay} className="absolute -top-12 right-0 p-2 bg-[#1C1C1C] rounded-full hover:bg-[#252525] transition-colors group">
                <X className="w-5 h-5 text-white/50 group-hover:text-white" />
              </button>
              <Calculator />
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
