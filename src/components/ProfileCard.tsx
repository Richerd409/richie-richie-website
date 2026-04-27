import React, { useState } from 'react';
import { ChevronRight, Lightbulb, Share2, Mail, Calculator, ChevronDown, Sparkles, Users } from 'lucide-react';
import { soundService } from '../utils/soundService';
import { motion, AnimatePresence } from 'framer-motion';

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

    const containerVariants = {
        collapsed: { height: 'auto' },
        expanded: { height: 'auto' }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10, height: 0 },
        visible: {
            opacity: 1,
            y: 0,
            height: 'auto',
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: { opacity: 0, y: -10, height: 0 }
    };

    return (
        <div className="relative z-40">
            <motion.div
                variants={containerVariants}
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="glass-panel bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 p-8 rounded-[32px] flex flex-col items-center w-[340px] md:w-[380px] shadow-2xl overflow-hidden relative"
            >
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Profile Image with Glow & Badge */}
                <motion.div
                    className="relative mb-6 group cursor-pointer"
                    onClick={() => !isExpanded ? handleExpand() : setIsExpanded(false)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-neon/20 blur-xl"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <img
                            src="/avatar.png"
                            alt="Richerd Gabriel - Richie Community Founder"
                            className="w-full h-full rounded-full object-cover border-2 border-white/10 relative z-10"
                        />
                        {/* Bulb Badge */}
                        <motion.div
                            className="absolute bottom-1 right-1 bg-[#0A0A0A] p-1.5 rounded-full border border-white/10 z-20"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                            <div className="bg-[#1C1C1C] p-1.5 rounded-full">
                                <Lightbulb className="w-4 h-4 text-neon" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Identity */}
                <div className="text-center space-y-2 mb-8 relative z-10">
                    <h2 className="text-3xl font-display font-bold text-white leading-tight">
                        Richerd Gabriel
                    </h2>
                    <p className="text-neon font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        VIBE CODER · JACK OF ALL TRADE
                    </p>
                    <p className="text-white/40 text-sm font-medium">
                        Founder, Richie Community · Tiruppur, TN
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-neon/10 text-neon rounded-full font-mono tracking-wide border border-neon/20">richieandrichie.com</span>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full space-y-3"
                        >
                            <motion.button
                                variants={itemVariants}
                                onClick={() => handleNav('about')}
                                className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5 relative overflow-hidden"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <Sparkles className="w-5 h-5 text-white/70 group-hover:text-neon transition-colors" />
                                    <span className="font-display font-bold text-white">About Me</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                onClick={() => handleNav('community')}
                                className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5 relative overflow-hidden"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <Users className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition-colors" />
                                    <span className="font-display font-bold text-white">Richie Community</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                onClick={() => handleNav('socials')}
                                className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5 relative overflow-hidden"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <Share2 className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
                                    <span className="font-display font-bold text-white">Social Profiles</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                onClick={() => handleNav('contact')}
                                className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5 relative overflow-hidden"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <Mail className="w-5 h-5 text-white/70 group-hover:text-purple-400 transition-colors" />
                                    <span className="font-display font-bold text-white">Get in Touch</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                onClick={() => handleNav('calc')}
                                className="w-full bg-[#1C1C1C] hover:bg-[#252525] p-4 rounded-2xl flex items-center justify-between group border border-transparent hover:border-white/5 relative overflow-hidden"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 relative z-10">
                                    <Calculator className="w-5 h-5 text-white/70 group-hover:text-green-400 transition-colors" />
                                    <span className="font-display font-bold text-white">Cyber Calc</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </motion.button>

                            {/* Collapse Button */}
                            <motion.button
                                variants={itemVariants}
                                onClick={() => setIsExpanded(false)}
                                className="w-full py-2 flex items-center justify-center gap-2 text-white/30 hover:text-white transition-colors"
                            >
                                <ChevronDown className="w-5 h-5 rotate-180" />
                                <span className="text-xs font-bold tracking-widest uppercase">Collapse</span>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer Hint - Hidden when expanded */}
                <AnimatePresence>
                {!isExpanded && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2 }}
                        onClick={handleExpand}
                        className="mt-8 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                        <span className="text-[10px] font-bold tracking-widest uppercase">Tap to connect</span>
                        <ChevronDown className="w-4 h-4 animate-bounce" />
                    </motion.button>
                )}
                </AnimatePresence>

            </motion.div>
        </div>
    );
};

export default ProfileCard;
