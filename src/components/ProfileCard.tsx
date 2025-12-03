import React, { useState } from 'react';
import { ChevronRight, Lightbulb, Share2, Mail, Calculator, ChevronDown } from 'lucide-react';
import { soundService } from '../utils/soundService';

interface ProfileCardProps {
    onNavigate: (section: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onNavigate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleNav = (section: string) => {
        soundService.playClickSound();
        onNavigate(section);
    };

    const handleExpand = () => {
        soundService.playClickSound();
        setIsExpanded(true);
    };

    return (
        <div className="relative z-40">
            <div
                className={`bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] flex flex-col items-center w-[340px] md:w-[380px] shadow-2xl transition-all duration-500 ease-spring ${isExpanded ? 'h-auto' : 'h-auto'}`}
            >

                {/* Profile Image with Glow & Badge */}
                <div className="relative mb-6 group cursor-pointer" onClick={() => !isExpanded ? handleExpand() : setIsExpanded(false)}>
                    <div className="absolute inset-0 rounded-full bg-neon/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <img
                            src="/avatar.png"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-2 border-white/10 group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Bulb Badge */}
                        <div className="absolute bottom-1 right-1 bg-[#0A0A0A] p-1.5 rounded-full border border-white/10">
                            <div className="bg-[#1C1C1C] p-1.5 rounded-full">
                                <Lightbulb className="w-4 h-4 text-neon" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Identity */}
                <div className="text-center space-y-2 mb-8">
                    <h2 className="text-3xl font-display font-bold text-white leading-tight">
                        Richerd Gabriel<br />Parker
                    </h2>
                    <p className="text-neon font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        VIBE CODER
                    </p>
                    <p className="text-white/40 text-sm font-medium">
                        Enthusiastic Learner & Idea Maker.
                    </p>
                </div>

                {/* Navigation Buttons - Hidden initially */}
                <div className={`w-full space-y-3 transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[80vh] opacity-100 overflow-y-auto custom-scrollbar' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <button
                        onClick={() => handleNav('socials')}
                        className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5"
                    >
                        <div className="flex items-center gap-3">
                            <Share2 className="w-5 h-5 text-white/70" />
                            <span className="font-display font-bold text-white">Social Profiles</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>

                    <button
                        onClick={() => handleNav('contact')}
                        className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5"
                    >
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-white/70" />
                            <span className="font-display font-bold text-white">Get in Touch</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>

                    <button
                        onClick={() => handleNav('calc')}
                        className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5"
                    >
                        <div className="flex items-center gap-3">
                            <Calculator className="w-5 h-5 text-white/70" />
                            <span className="font-display font-bold text-white">Cyber Calc</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>

                    {/* Collapse Button */}
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="w-full py-2 flex items-center justify-center gap-2 text-white/30 hover:text-white transition-colors"
                    >
                        <ChevronDown className="w-5 h-5 rotate-180" />
                        <span className="text-xs font-bold tracking-widest uppercase">Collapse</span>
                    </button>
                </div>

                {/* Footer Hint - Hidden when expanded */}
                <button
                    onClick={handleExpand}
                    className={`mt-8 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-all duration-300 ${isExpanded ? 'hidden' : 'flex'}`}
                >
                    <span className="text-[10px] font-bold tracking-widest uppercase">Tap to connect</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>

            </div>
        </div>
    );
};

export default ProfileCard;
