'use client';

import { useEffect, useRef } from 'react';

interface Circle {
  element: HTMLElement;
  x: number;
  y: number;
}

export default function CursorEffect() {
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circleCount = 22;
    const colors = [
      "#FFB56B",
      "#FFA54D",
      "#FF9933",
      "#FF8D1F",
      "#FF8500",
      "#F77D00",
      "#EF7500",
      "#E76D00",
      "#DF6500",
      "#D75D00",
      "#CF5500",
      "#C74D00",
      "#BF4500",
      "#B73D00",
      "#AF3500",
      "#A72D00",
      "#9F2500",
      "#971D00",
      "#8F1500",
      "#870D00",
      "#7F0500",
      "#770000"
    ];

    // Create circles
    circlesRef.current = [];
    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.backgroundColor = colors[i % colors.length];
      document.body.appendChild(circle);
      
      circlesRef.current.push({
        element: circle,
        x: 0,
        y: 0,
      });
    }

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth animation loop
    let animationFrameId: number;
    const animate = () => {
      const circles = circlesRef.current;
      let x = mouseRef.current.x;
      let y = mouseRef.current.y;

      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        
        // Smooth easing towards target position
        circle.x += (x - circle.x) * 0.8;
        circle.y += (y - circle.y) * 0.8;

        // Update position
        circle.element.style.left = circle.x - 12 + 'px';
        circle.element.style.top = circle.y - 12 + 'px';
        circle.element.style.scale = String((circles.length - i) / circles.length);

        // Next circle follows this one
        x = circle.x;
        y = circle.y;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      circlesRef.current.forEach(circle => {
        circle.element.remove();
      });
      circlesRef.current = [];
    };
  }, []);

  return null;
}
