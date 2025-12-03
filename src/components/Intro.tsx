import React, { useEffect, useState } from 'react';
import { LANDING_EFFECTS } from '../data/constants';

interface IntroProps {
    onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Allow fade out transition to finish
        }, LANDING_EFFECTS.introDuration);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-midnight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-offwhite animate-blur-in tracking-wider">
                WELCOME
            </h1>
            <style>{`
        @keyframes blur-in {
          0% {
            filter: blur(20px);
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            filter: blur(0);
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-blur-in {
          animation: blur-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default Intro;
