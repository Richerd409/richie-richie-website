import React, { useEffect } from 'react';
import { LANDING_EFFECTS } from '../data/constants';
import { motion } from 'framer-motion';

interface IntroProps {
    onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, LANDING_EFFECTS.introDuration);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-6xl md:text-8xl font-display font-bold text-offwhite tracking-wider"
            >
                WELCOME
            </motion.h1>
        </motion.div>
    );
};

export default Intro;
