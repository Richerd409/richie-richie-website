import React, { useEffect, useRef } from 'react';

interface Tile {
    x: number;
    y: number;
    vx: number;
    vy: number;
    char: string;
    rotation: number;
    rotationSpeed: number;
    color: string;
}

const CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '💡', '🚀', '💻', '🎨', '⚡'];

const BackgroundTiles: React.FC<{ isFalling: boolean }> = ({ isFalling }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tilesRef = useRef<Tile[]>([]);
    const requestRef = useRef<number>(0);

    const initTiles = (width: number, height: number) => {
        const tiles: Tile[] = [];
        const count = width < 768 ? 15 : 30;

        for (let i = 0; i < count; i++) {
            tiles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                char: CHARS[Math.floor(Math.random() * CHARS.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.05,
                color: Math.random() > 0.8 ? '#00FF8B' : '#333',
            });
        }
        tilesRef.current = tiles;
    };

    const update = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        tilesRef.current.forEach(tile => {
            // Physics
            if (isFalling) {
                tile.vy += 0.5; // Gravity
                tile.vx *= 0.99; // Air resistance
            } else {
                // Floating
                if (tile.x <= 0 || tile.x >= canvas.width) tile.vx *= -1;
                if (tile.y <= 0 || tile.y >= canvas.height) tile.vy *= -1;
            }

            tile.x += tile.vx;
            tile.y += tile.vy;
            tile.rotation += tile.rotationSpeed;

            // Reset if out of bounds (falling mode)
            if (isFalling && tile.y > canvas.height + 50) {
                tile.y = -50;
                tile.vy = 0;
                tile.x = Math.random() * canvas.width;
            }

            // Draw
            ctx.save();
            ctx.translate(tile.x, tile.y);
            ctx.rotate(tile.rotation);
            ctx.fillStyle = tile.color === '#00FF8B' ? 'rgba(0, 255, 139, 0.8)' : 'rgba(255, 255, 255, 0.1)';
            ctx.font = '24px Space Grotesk';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(tile.char, 0, 0);

            // Tile border
            ctx.strokeStyle = tile.color === '#00FF8B' ? 'rgba(0, 255, 139, 0.3)' : 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.strokeRect(-15, -15, 30, 30);

            ctx.restore();
        });

        requestRef.current = requestAnimationFrame(update);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initTiles(canvas.width, canvas.height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        requestRef.current = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isFalling]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default BackgroundTiles;
