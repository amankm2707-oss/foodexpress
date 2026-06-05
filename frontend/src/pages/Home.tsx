import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

const Home: React.FC = () => {
  useEffect(() => {
    // 1. Intersection Observer for .reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Custom Liquid Cursor
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    const lerpFactor = 0.15;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }
    };
    
    const animateCursor = () => {
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;
        if (cursorRing) {
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
        }
        animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    animateCursor();

    // 3. Magnetic Button Physics
    const magneticTargets = document.querySelectorAll('.magnetic-target, .btn-magnetic');
    const handleMagneticMove = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        const mouseEvent = e as MouseEvent;
        const bounds = btn.getBoundingClientRect();
        const btnCenterX = bounds.left + bounds.width / 2;
        const btnCenterY = bounds.top + bounds.height / 2;
        const forceX = mouseEvent.clientX - btnCenterX;
        const forceY = mouseEvent.clientY - btnCenterY;
        btn.style.transform = `translate(${forceX * 0.35}px, ${forceY * 0.35}px)`;
    };
    const handleMagneticLeave = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        btn.style.transform = 'translate(0, 0)';
    };
    magneticTargets.forEach(btn => {
        btn.addEventListener('mousemove', handleMagneticMove);
        btn.addEventListener('mouseleave', handleMagneticLeave);
    });

    // 4. 3D Tilt Effect
    const tiltCards = document.querySelectorAll('[data-tilt]');
    const handleTiltMove = (e: Event) => {
        const card = e.currentTarget as HTMLElement;
        const mouseEvent = e as MouseEvent;
        const bounds = card.getBoundingClientRect();
        const width = bounds.width;
        const height = bounds.height;
        const cardX = mouseEvent.clientX - bounds.left;
        const cardY = mouseEvent.clientY - bounds.top;
        const rotateX = ((cardY / height) - 0.5) * -20;
        const rotateY = ((cardX / width) - 0.5) * 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        const glow = card.querySelector('.card-glow') as HTMLElement;
        if (glow) {
            const percentageX = (cardX / width) * 100;
            const percentageY = (cardY / height) * 100;
            glow.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`;
        }
    };
    const handleTiltLeave = (e: Event) => {
        const card = e.currentTarget as HTMLElement;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        const glow = card.querySelector('.card-glow') as HTMLElement;
        if (glow) glow.style.background = 'transparent';
    };
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTiltMove);
        card.addEventListener('mouseleave', handleTiltLeave);
    });

    // Cleanup
    return () => {
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(animationFrameId);
        magneticTargets.forEach(btn => {
            btn.removeEventListener('mousemove', handleMagneticMove);
            btn.removeEventListener('mouseleave', handleMagneticLeave);
        });
        tiltCards.forEach(card => {
            card.removeEventListener('mousemove', handleTiltMove);
            card.removeEventListener('mouseleave', handleTiltLeave);
        });
    };
  }, []);

  return (
    <>
      {/* Liquid Custom Cursor */}
      <div className="cursor-dot" id="custom-cursor-dot"></div>
      <div className="cursor-ring" id="custom-cursor-ring"></div>
      
      {/* Stripe-style Decorative Grid Lines */}
      <div className="stripe-gridlines">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-2"></div>
        <div className="grid-line line-v-3"></div>
      </div>
      
      {/* Dynamic Aurora Glow Blobs */}
      <div className="aurora-container">
        <div className="aurora-blob blob-saffron"></div>
        <div className="aurora-blob blob-magenta"></div>
        <div className="aurora-blob blob-cyan"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
      </main>
    </>
  );
};

export default Home;
