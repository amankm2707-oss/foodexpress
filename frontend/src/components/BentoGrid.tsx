import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="section-padding grid-lines" id="stats">
      <div className="section-container">
        <div className="bento-grid">
          {/* Box 1: Core Logistics Tracker */}
          <div className="bento-box glass-panel reveal large-col" data-tilt>
            <div className="bento-content flex-row">
              <div className="bento-text">
                <span className="bento-tag text-orange"><i className="fa-solid fa-location-crosshairs"></i> Logistics Core</span>
                <h2 className="bento-number text-glow" id="stat-delivery">14</h2>
                <span className="bento-unit">Minutes Indian Hub Avg</span>
                <p className="bento-description">Smart route planning helps meals reach nearby homes quickly while staying hot and fresh.</p>
              </div>
              <div className="bento-graphic">
                <div className="speed-radar">
                  <span className="radar-sweep"></span>
                  <span className="radar-dot dot-1"></span>
                  <span className="radar-dot dot-2"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Box 2: Tandoor Masters */}
          <div className="bento-box glass-panel reveal" data-tilt>
            <div className="bento-content">
              <span className="bento-tag text-purple"><i className="fa-solid fa-crown"></i> Legacy Masters</span>
              <h3 className="bento-title">Tandoor Masters</h3>
              <p className="bento-description">Partnering with trusted kitchens serving everyday Indian favorites across major cities.</p>
              <div className="chef-icon-container">
                <i className="fa-solid fa-pepper-hot floating-icon"></i>
              </div>
            </div>
          </div>
          
          {/* Box 3: Trust Score */}
          <div className="bento-box glass-panel reveal" data-tilt>
            <div className="bento-content">
              <span className="bento-tag text-cyan"><i className="fa-solid fa-star"></i> Heritage Index</span>
              <h2 className="bento-number text-glow" id="stat-rating">4.95</h2>
              <span className="bento-unit">Epicurean Rating</span>
              <div className="stars-row">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="bento-description">Praised by critical Indian food columnists and culinary connoisseurs.</p>
            </div>
          </div>
          
          {/* Box 4: Eco packaging */}
          <div className="bento-box glass-panel reveal large-col" data-tilt>
            <div className="bento-content flex-row">
              <div className="bento-text">
                <span className="bento-tag text-green"><i className="fa-solid fa-earth-asia"></i> Bio Packaging</span>
                <h3 className="bento-title">Eco Packaging</h3>
                <p className="bento-description">Orders use practical, food-safe packaging designed for freshness, portability, and lower waste.</p>
              </div>
              <div className="eco-visual">
                <div className="leaf-orb">
                  <i className="fa-solid fa-seedling leaf-pulsing"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
