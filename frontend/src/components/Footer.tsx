import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer section-padding">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand-box">
            <span className="logo-text">Food<span className="text-orange">Express</span></span>
            <p className="brand-subtext">The frontier of digital dining. Experience curated Indian kitchens, rapid delivery grids, and secure transaction ledgers all in one interface.</p>
            <div className="social-links-glow">
              <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div>
              <h4>Platform</h4>
              <ul>
                <li><a href="#menu">Menu Grid</a></li>
                <li><a href="#restaurants">Partner Kitchens</a></li>
                <li><a href="#">Delivery Tracker</a></li>
                <li><a href="#login">Access Portals</a></li>
              </ul>
            </div>
            <div>
              <h4>Operations</h4>
              <ul>
                <li><a href="#">Join as Rider</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">API Documentation</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h4>Join The Chronicle</h4>
            <p>Subscribe for exclusive culinary drops, algorithm updates, and partner news directly to your inbox.</p>
            <div className="newsletter-field-wrapper portal-field">
              <input type="email" placeholder="transmission@email.com" id="newsletter-email" />
              <button className="newsletter-btn" id="btn-newsletter-subscribe"><i className="fa-solid fa-paper-plane text-dark"></i></button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 FoodExpress Engine. All Rights Reserved. Demo DB Mode Active.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Protocol</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Matrix</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
