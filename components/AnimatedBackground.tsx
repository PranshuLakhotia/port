'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.hue = Math.random() * 60 + 240; // Blue to purple range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Subtle opacity animation
        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Create glowing effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, 0.8)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 70%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw flowing aurora waves
    const drawAurora = (time: number) => {
      ctx.save();
      
      // Create multiple aurora layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.globalAlpha = 0.15 - layer * 0.03;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const hue1 = 240 + Math.sin(time * 0.001 + layer) * 30;
        const hue2 = 280 + Math.cos(time * 0.0015 + layer) * 40;
        
        gradient.addColorStop(0, `hsla(${hue1}, 100%, 60%, 0.3)`);
        gradient.addColorStop(0.5, `hsla(${hue2}, 100%, 70%, 0.2)`);
        gradient.addColorStop(1, `hsla(${hue1 + 20}, 100%, 80%, 0.1)`);
        
        ctx.fillStyle = gradient;
        
        // Draw flowing wave shapes
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.3);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height * 0.3 + 
                   Math.sin((x + time * 0.5) * 0.01 + layer) * 100 +
                   Math.sin((x + time * 0.3) * 0.005 + layer * 2) * 50;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }
      
      ctx.restore();
    };

    // Draw glowing orbs
    const drawOrbs = (time: number) => {
      const orbs = [
        { x: 0.2, y: 0.3, size: 200, hue: 260 },
        { x: 0.8, y: 0.7, size: 150, hue: 300 },
        { x: 0.6, y: 0.2, size: 180, hue: 240 },
      ];

      orbs.forEach((orb, index) => {
        const x = canvas.width * orb.x + Math.sin(time * 0.001 + index) * 50;
        const y = canvas.height * orb.y + Math.cos(time * 0.0008 + index) * 30;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.size);
        gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 70%, 0.15)`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 100%, 60%, 0.08)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 100%, 50%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, orb.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0a0a0a');
      bgGradient.addColorStop(0.5, '#1a0a2e');
      bgGradient.addColorStop(1, '#16213e');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw aurora waves
      drawAurora(time);
      
      // Draw glowing orbs
      drawOrbs(time);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />
      
      {/* Additional CSS-based animations */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
          `,
          animation: 'backgroundShift 20s ease-in-out infinite',
          '@keyframes backgroundShift': {
            '0%, 100%': {
              transform: 'scale(1) rotate(0deg)',
              opacity: 0.7,
            },
            '50%': {
              transform: 'scale(1.1) rotate(180deg)',
              opacity: 0.9,
            },
          },
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: Math.random() > 0.5 ? '50%' : '10px',
            background: `linear-gradient(45deg, 
              hsla(${240 + i * 30}, 100%, 70%, 0.1), 
              hsla(${280 + i * 20}, 100%, 80%, 0.05)
            )`,
            backdropFilter: 'blur(1px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: -1,
            pointerEvents: 'none',
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
}
