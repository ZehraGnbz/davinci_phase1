import React, { useEffect, useState } from 'react';
import './FloatingParticles.css';

interface Particle
{
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

const FloatingParticles: React.FC = () =>
{
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() =>
    {
        const createParticles = () =>
        {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 20; i++)
            {
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 4 + 2,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }
            setParticles(newParticles);
        };

        createParticles();

        const animateParticles = () =>
        {
            setParticles(prevParticles =>
                prevParticles.map(particle =>
                {
                    let newX = particle.x + particle.speedX;
                    let newY = particle.y + particle.speedY;

                    // Wrap around screen edges
                    newX = newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX;
                    newY = newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY;

                    return {
                        ...particle,
                        x: newX,
                        y: newY,
                    };
                })
            );
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-particles">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
