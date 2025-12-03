import React from 'react';
import { SOCIALS } from '../data/socials';
import { X, ExternalLink } from 'lucide-react';
import { soundService } from '../utils/soundService';

interface SocialsProps {
    onClose: () => void;
}

const Socials: React.FC<SocialsProps> = ({ onClose }) => {
    const handleLinkClick = () => {
        soundService.playClickSound();
    };

    return (
        <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[32px] w-[340px] md:w-[380px] shadow-2xl animate-fade-in max-h-[80vh] overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-display font-bold text-white tracking-wide">MY NETWORK</h2>
                <button
                    onClick={onClose}
                    className="p-2 bg-[#1C1C1C] rounded-full hover:bg-[#252525] transition-colors group"
                >
                    <X className="w-5 h-5 text-white/50 group-hover:text-white" />
                </button>
            </div>

            {/* Social List */}
            <div className="space-y-3">
                {SOCIALS.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-white/5"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-black/40 rounded-full text-white/70 group-hover:text-neon transition-colors">
                                <social.icon className="w-5 h-5" />
                            </div>
                            <span className="font-display font-bold text-white">{social.platform}</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;
