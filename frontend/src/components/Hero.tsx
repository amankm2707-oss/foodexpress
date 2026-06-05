import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="section-container hero-grid">
        {/* Left Content */}
        <div className="hero-content reveal">
          <div className="hero-badge">
            <span className="pulse-ring"></span>
            <span className="badge-text"><i className="fa-solid fa-fire-burner"></i> The Golden Age of Indian Dining</span>
          </div>
          
          <h1 className="hero-title">
            Indian Gastronomy, <span className="gradient-text text-glow">Refined & Delivered</span>.
          </h1>
          
          <p className="hero-subtitle">
            Order biryani, butter chicken, paneer meals, dosa, momos, burgers, desserts, and drinks from popular Indian kitchens with fast city delivery.
          </p>
          
          {/* Advanced Indian City Coordinates Selector */}
          <div className="hero-search-wrapper glass-panel">
            <div className="search-field">
              <i className="fa-solid fa-map-pin location-icon"></i>
              <select id="city-selector" className="city-dropdown magnetic-target" defaultValue="blr">
                <option value="blr" data-coords="12.9716° N, 77.5946° E" data-name="Bangalore Hub (Indiranagar)">Bangalore — Indiranagar</option>
                <option value="bom" data-coords="19.0760° N, 72.8777° E" data-name="Mumbai Hub (Bandra West)">Mumbai — Bandra West</option>
                <option value="del" data-coords="28.6139° N, 77.2090° E" data-name="Delhi Hub (Connaught Place)">Delhi — Connaught Place</option>
                <option value="maa" data-coords="13.0827° N, 80.2707° E" data-name="Chennai Hub (Adyar/ECR)">Chennai — Adyar / ECR</option>
              </select>
            </div>
            <button className="btn btn-primary btn-magnetic" id="find-food-btn">
              <span>Lock Coordinates</span>
              <i className="fa-solid fa-bullseye"></i>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-avatars">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Epicure" className="trust-img" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Epicure" className="trust-img" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="Epicure" className="trust-img" />
            </div>
            <p className="trust-text">
              Preferred by <span className="highlight-text bold">22,500+</span> food lovers in India. <span className="stars"><i className="fa-solid fa-star"></i> 4.8/5</span>
            </p>
          </div>
        </div>

        {/* Right Visual (3D Parallax Stack) */}
        <div className="hero-visual reveal">
          <div className="card-stack">
            {/* Card 1: Chicken Biryani */}
            <div className="interactive-3d-card card-primary glass-panel" data-tilt>
              <div className="card-glow"></div>
              <div className="card-image-container">
                <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" alt="Chicken Biryani" className="food-img" />
                <span className="item-tag tag-hot">Non-Veg Bestseller</span>
              </div>
              <div className="card-details">
                <h3>Chicken Biryani</h3>
                <div className="card-meta">
                  <span><i className="fa-solid fa-star star-glow"></i> 4.95</span>
                  <span>20 Min</span>
                </div>
              </div>
            </div>

            {/* Card 2: Butter Chicken */}
            <div className="interactive-3d-card card-secondary glass-panel" data-tilt>
              <div className="card-glow"></div>
              <div className="card-image-container">
                <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80" alt="Butter Chicken Tacos" className="food-img" />
                <span className="item-tag tag-trending">North Indian</span>
              </div>
              <div className="card-details">
                <h3>Butter Chicken</h3>
                <div className="card-meta">
                  <span><i className="fa-solid fa-star star-glow"></i> 4.88</span>
                  <span>15 Min</span>
                </div>
              </div>
            </div>

            {/* Floating Michelin Badge */}
            <div className="floating-badge-glass glass-panel animated-float-slow">
              <div className="badge-icon"><i className="fa-solid fa-mortar-pestle"></i></div>
              <div className="badge-info">
                <h4>Fresh Kitchen Prep</h4>
                <p>Hot meals packed well</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
