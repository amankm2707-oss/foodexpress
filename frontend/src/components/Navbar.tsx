import React from 'react';

interface NavbarProps {
  cartItemCount: number;
  onCartToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartToggle }) => {
  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-brand magnetic-target">
          Food<span className="gradient-text">Express</span><span className="brand-dot"></span>
        </a>

        <nav className="nav-links">
          <a href="#hero" className="nav-link active magnetic-target">Home</a>
          <a href="#restaurants" className="nav-link magnetic-target">Guilds</a>
          <a href="#menu" className="nav-link magnetic-target">Menu</a>
          <a href="#login" className="nav-link magnetic-target">Login</a>
          <a href="#testimonials" className="nav-link magnetic-target">Reviews</a>
          <a href="#download" className="nav-link magnetic-target">App</a>
        </nav>
        
        <div className="nav-actions">
          {/* Location Indicator Badge */}
          <div className="coords-badge glass-panel" id="coords-display">
            <span className="pulse-dot"></span>
            <span id="coords-text">BLR : Indiranagar</span>
          </div>

          <button className="cart-btn magnetic-target" id="cart-toggle" aria-label="Open Shopping Bag" onClick={onCartToggle}>
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="cart-badge" id="cart-badge">{cartItemCount}</span>
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" id="mobile-toggle" aria-label="Toggle Mobile Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
