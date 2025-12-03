import React, { useState } from 'react';
import { soundService } from '../utils/soundService';

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
        '7', '8', '9', '÷',
        '4', '5', '6', '×',
        '1', '2', '3', '-',
        'C', '0', '.', '+',
        '='
    ];

    return (
        <div className="glass-panel p-6 rounded-xl w-full max-w-xs mx-auto neon-border">
            <div className="bg-black/50 p-4 rounded-lg mb-4 text-right">
                <span className="text-3xl font-display text-neon tracking-widest font-bold">
                    {display}
                </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {keys.map((key) => (
                    <button
                        key={key}
                        onClick={() => handlePress(key)}
                        className={`
              p-3 rounded-lg font-bold text-lg transition-all duration-200
              ${key === '=' ? 'col-span-4 bg-neon text-midnight hover:bg-white' : 'bg-charcoal text-offwhite hover:text-neon hover:border-neon border border-transparent'}
              hover:shadow-[0_0_10px_rgba(0,255,139,0.3)]
              active:scale-95
            `}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
