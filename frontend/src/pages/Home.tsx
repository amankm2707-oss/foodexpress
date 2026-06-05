import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Menu from '../components/Menu';
import CartSidebar from '../components/CartSidebar';
import LoginPortals from '../components/LoginPortals';
import Dashboards from '../components/Dashboards';
import Footer from '../components/Footer';
import type { MenuItem, CartItem } from '../types';

const Home: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.id === item.id);
      if (existing) {
        return prevCart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    // Add pulsing animation to badge
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.add('pulsing');
      setTimeout(() => badge.classList.remove('pulsing'), 600);
    }
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      alert("Checkout simulated. Success Modal would open here.");
      setCart([]);
    }, 1000);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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
      
      <Navbar cartItemCount={cartItemCount} onCartToggle={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <BentoGrid />
        <Menu onAddToCart={handleAddToCart} />
        <LoginPortals />
        <Dashboards />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default Home;
