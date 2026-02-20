import React from 'react';
import { SOCIALS } from '../data/socials';
import { X, ExternalLink } from 'lucide-react';
import { soundService } from '../utils/soundService';
import { motion } from 'framer-motion';

interface SocialsProps {
    onClose: () => void;
}

const Socials: React.FC<SocialsProps> = ({ onClose }) => {
    const handleLinkClick = () => {
        soundService.playClickSound();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[32px] w-[340px] md:w-[380px] shadow-2xl max-h-[80vh] overflow-y-auto custom-scrollbar"
        >
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
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3"
            >
                {SOCIALS.map((social) => (
                    <motion.a
                        key={social.platform}
                        variants={itemVariants}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-black/40 rounded-full text-white/70 group-hover:text-neon transition-colors">
                                <social.icon className="w-5 h-5" />
                            </div>
                            <span className="font-display font-bold text-white">{social.platform}</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Socials;
