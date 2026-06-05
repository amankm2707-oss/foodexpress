import React from 'react';

const LoginPortals: React.FC = () => {
  const handleLogin = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    alert(`Simulated Login for ${type}`);
  };

  return (
    <section className="section-padding grid-lines" id="login">
      <div className="section-container">
        <div className="section-header text-center reveal">
          <span className="accent-label">SECURE ACCESS PORTALS</span>
          <h2 className="section-title">FoodExpress <span className="gradient-text">Login Matrix</span></h2>
          <p className="section-subtitle">Dedicated frontend access surfaces for customers, restaurant partners, and delivery partners.</p>
        </div>
        
        <div className="login-portals-grid">
          {/* Customer Login */}
          <div className="login-card glass-panel reveal" data-tilt>
            <div className="login-card-top">
              <span className="login-icon"><i className="fa-solid fa-user"></i></span>
              <div>
                <span className="bento-tag text-orange">Customer Login</span>
                <h3>Epicure Access</h3>
              </div>
            </div>
            <form className="portal-login-form" onSubmit={(e) => handleLogin(e, 'Customer')}>
              <div className="portal-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="customer@foodexpress.in" required />
              </div>
              <div className="portal-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <button className="btn btn-primary btn-block btn-magnetic" type="submit">
                <span>Enter Customer Portal</span>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
          </div>

          {/* Restaurant Partner Login */}
          <div className="login-card glass-panel reveal" data-tilt>
            <div className="login-card-top">
              <span className="login-icon"><i className="fa-solid fa-store"></i></span>
              <div>
                <span className="bento-tag text-purple">Restaurant Partner Login</span>
                <h3>Guild Console</h3>
              </div>
            </div>
            <form className="portal-login-form" onSubmit={(e) => handleLogin(e, 'Restaurant Partner')}>
              <div className="portal-field">
                <i className="fa-solid fa-id-badge"></i>
                <input type="text" placeholder="Partner ID" required />
              </div>
              <div className="portal-field">
                <i className="fa-solid fa-key"></i>
                <input type="password" placeholder="Access Key" required />
              </div>
              <button className="btn btn-primary btn-block btn-magnetic" type="submit">
                <span>Open Guild Console</span>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
          </div>

          {/* Delivery Partner Login */}
          <div className="login-card glass-panel reveal" data-tilt>
            <div className="login-card-top">
              <span className="login-icon"><i className="fa-solid fa-motorcycle"></i></span>
              <div>
                <span className="bento-tag text-cyan">Delivery Partner Login</span>
                <h3>Rider Grid</h3>
              </div>
            </div>
            <form className="portal-login-form" onSubmit={(e) => handleLogin(e, 'Delivery Partner')}>
              <div className="portal-field">
                <i className="fa-solid fa-phone"></i>
                <input type="tel" placeholder="+91 Rider Mobile" required />
              </div>
              <div className="portal-field">
                <i className="fa-solid fa-shield-halved"></i>
                <input type="password" placeholder="Route PIN" required />
              </div>
              <button className="btn btn-primary btn-block btn-magnetic" type="submit">
                <span>Join Delivery Grid</span>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="auth-session-bar glass-panel reveal">
          <div>
            <span className="bento-tag text-cyan"><i className="fa-solid fa-shield-heart"></i> Session Memory</span>
            <h3 id="session-role-title">Guest access active</h3>
            <p id="session-role-copy">Login or create an account to unlock role based dashboards, saved addresses, order history, and simulated DBMS records.</p>
          </div>
          <div className="auth-session-actions">
            <button className="category-pill magnetic-target auth-open-btn"><i className="fa-solid fa-user-plus"></i><span>Customer Signup</span></button>
            <button className="category-pill magnetic-target auth-open-btn"><i className="fa-solid fa-store"></i><span>Partner Signup</span></button>
            <button className="category-pill magnetic-target auth-open-btn"><i className="fa-solid fa-motorcycle"></i><span>Rider Signup</span></button>
            <button className="category-pill magnetic-target auth-open-btn"><i className="fa-solid fa-user-shield"></i><span>Admin Login</span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPortals;
