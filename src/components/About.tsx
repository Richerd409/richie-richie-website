import React from 'react';
import { motion } from 'framer-motion';
import { X, Code2, Sparkles, Monitor } from 'lucide-react';

interface AboutProps {
    onClose: () => void;
}

const About: React.FC<AboutProps> = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[32px] w-[340px] md:w-[380px] shadow-2xl max-h-[80vh] overflow-y-auto custom-scrollbar relative"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#0A0A0A] z-10 pb-4 border-b border-white/5">
                <h2 className="text-xl font-display font-bold text-white tracking-wide flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-neon" />
                    ABOUT ME
                </h2>
                <button
                    onClick={onClose}
                    className="p-2 bg-[#1C1C1C] rounded-full hover:bg-[#252525] transition-colors group"
                >
                    <X className="w-5 h-5 text-white/50 group-hover:text-white" />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-neon/10 rounded-full text-neon">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Vibe Coder</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Crafting digital experiences that not only function flawlessly but also resonate with a unique vibe. I blend creativity with logic to build software that feels alive.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                            <Code2 className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Freelance Coding</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Independent problem solver available for hire. I take on challenging projects and deliver high-quality code, tailored to your specific needs and timelines.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/10 rounded-full text-purple-400">
                            <Monitor className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Web Development</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Full-stack web development expertise. From responsive front-end designs to robust back-end architectures, I build scalable and performant web applications.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
