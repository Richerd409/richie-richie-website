import React, { useState } from 'react';
import { soundService } from '../utils/soundService';
import { motion, AnimatePresence } from 'framer-motion';

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [newNumber, setNewNumber] = useState(true);

    const handlePress = (key: string) => {
        soundService.playClickSound();

        if (!isNaN(Number(key)) || key === '.') {
            if (newNumber) {
                setDisplay(key === '.' ? '0.' : key);
                setNewNumber(false);
            } else {
                if (key === '.' && display.includes('.')) return;
                setDisplay(display + key);
            }
        } else if (['+', '-', '×', '÷'].includes(key)) {
            setOperator(key);
            setPrevValue(display);
            setNewNumber(true);
        } else if (key === '=') {
            if (!operator || !prevValue) return;
            const current = parseFloat(display);
            const prev = parseFloat(prevValue);
            let result = 0;

            switch (operator) {
                case '+': result = prev + current; break;
                case '-': result = prev - current; break;
                case '×': result = prev * current; break;
                case '÷': result = prev / current; break;
            }

            setDisplay(result.toString().slice(0, 10));
            setOperator(null);
            setPrevValue(null);
            setNewNumber(true);
        } else if (key === 'C') {
            setDisplay('0');
            setOperator(null);
            setPrevValue(null);
            setNewNumber(true);
        }
    };

    const keys = [
        'C', '÷', '×', '-',
        '7', '8', '9', '+',
        '4', '5', '6', '=',
        '1', '2', '3',
        '0', '.'
    ];

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-neon/5 blur-3xl rounded-full" />
            <motion.div
                className="relative glass-panel bg-[#0A0A0A] p-6 rounded-[32px] w-[340px] md:w-[380px] border border-white/10 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                {/* Display */}
                <div className="bg-[#050505] p-6 rounded-2xl mb-6 text-right shadow-inner border border-white/5 relative overflow-hidden h-24 flex items-center justify-end">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={display}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1 }}
                            className="text-4xl font-display text-neon tracking-wider font-bold block w-full truncate"
                        >
                            {display}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 gap-3">
                    {keys.map((key) => {
                         const isOperator = ['÷', '×', '-', '+'].includes(key);
                         const isEquals = key === '=';
                         const isClear = key === 'C';
                         const isZero = key === '0';

                         let bgClass = "bg-[#1C1C1C] text-white hover:bg-[#252525]";
                         if (isOperator) bgClass = "bg-[#252525] text-neon hover:bg-[#333]";
                         if (isClear) bgClass = "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20";
                         if (isEquals) bgClass = "bg-neon text-midnight hover:bg-[#00FF99]";

                         // Grid positioning for equals button
                         const style: React.CSSProperties = {};
                         if (isEquals) {
                             style.gridRow = "span 2";
                             style.height = "100%";
                         }
                         if (isZero) {
                             style.gridColumn = "span 2";
                             style.width = "100%";
                         }

                         return (
                            <motion.button
                                key={key}
                                onClick={() => handlePress(key)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                                    h-16 rounded-2xl font-bold text-xl flex items-center justify-center transition-colors shadow-lg border border-white/5
                                    ${bgClass}
                                `}
                                style={style}
                            >
                                {key}
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Calculator;
