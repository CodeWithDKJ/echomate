
import React, { useEffect, useRef } from 'react';

interface StarryBackgroundProps {
  density?: number;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ density = 100 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Star properties
    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinkleDirection: number;
    }
    
    let stars: Star[] = [];
    
    // Define generateStars function BEFORE it's used
    const generateStars = () => {
      stars = [];
      const starCount = Math.floor(density * (canvas.width * canvas.height) / 100000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
          twinkleSpeed: Math.random() * 0.01 + 0.003,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
    };
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Update star opacity (twinkling effect)
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        
        if (star.opacity >= 1) {
          star.opacity = 1;
          star.twinkleDirection = -1;
        } else if (star.opacity <= 0.2) {
          star.opacity = 0.2;
          star.twinkleDirection = 1;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        
        // Move star slightly
        star.y -= star.speed;
        
        // Reset position if star moves off screen
        if (star.y < -5) {
          star.y = canvas.height + 5;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [density]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default StarryBackground;
