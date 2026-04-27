import React from 'react';
import { motion } from 'framer-motion';
import { X, Users, Zap, Globe, MessageCircle, TrendingUp, Star } from 'lucide-react';

interface CommunityProps {
    onClose: () => void;
}

const Community: React.FC<CommunityProps> = ({ onClose }) => {
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
                    <Users className="w-5 h-5 text-yellow-400" />
                    RICHIE COMMUNITY
                </h2>
                <button
                    onClick={onClose}
                    className="p-2 bg-[#1C1C1C] rounded-full hover:bg-[#252525] transition-colors group"
                >
                    <X className="w-5 h-5 text-white/50 group-hover:text-white" />
                </button>
            </div>

            {/* Hero Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 }}
                className="p-5 bg-gradient-to-br from-yellow-500/10 to-neon/5 rounded-2xl border border-yellow-500/20 mb-6 text-center"
            >
                <p className="text-2xl font-display font-bold text-white mb-1">Richie &amp; Richie</p>
                <p className="text-xs text-yellow-400 font-mono tracking-widest uppercase">Freelance Community Platform</p>
                <p className="text-sm text-white/50 mt-2">Connecting creators, coders &amp; entrepreneurs across India</p>
            </motion.div>

            {/* Content */}
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-neon/10 rounded-full text-neon">
                            <Users className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Who We Are</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Richie Community is a freelance platform founded by Richerd Gabriel from Tiruppur, Tamil Nadu. We bring together freelancers, developers, designers, and entrepreneurs to grow together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                            <Zap className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">What We Build</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Automation workflows, community tools, Notion databases, Google Workspace integrations, Telegram bots, and Web3 experiences — all powered by the Richie Community ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-500/10 rounded-full text-green-400">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Community Growth</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        From onboarding to scaling — Richie Community supports members at every step. We manage team operations, investor relations, and mentor the next wave of Tamil Nadu's tech talent.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/10 rounded-full text-purple-400">
                            <MessageCircle className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Join the Community</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Active on Telegram, Notion, and Google Workspace. Whether you're a freelancer, student, or entrepreneur — there's a place for you in the Richie Community.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-[#1C1C1C] rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-pink-500/10 rounded-full text-pink-400">
                            <Star className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Empowering every Richie to build, connect, and succeed. No barriers — just vibes, code, and community. Richie &amp; Richie is where the future is being built from Tiruppur.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.a
                    href="https://www.richieandrichie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="w-full bg-neon/10 hover:bg-neon/20 border border-neon/30 p-4 rounded-2xl flex items-center justify-between group transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-neon" />
                        <div>
                            <p className="font-display font-bold text-white">Visit richieandrichie.com</p>
                            <p className="text-xs text-white/40">Explore the community platform</p>
                        </div>
                    </div>
                    <Globe className="w-4 h-4 text-neon/60 group-hover:text-neon transition-colors" />
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Community;
