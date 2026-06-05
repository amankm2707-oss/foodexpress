import React from 'react';

const Dashboards: React.FC = () => {
  return (
    <>
      {/* Admin Central Hub */}
      <section className="section-padding" id="admin">
        <div className="section-container">
          <div className="section-header reveal">
            <span className="accent-label">GOD MODE</span>
            <h2 className="section-title">Admin <span className="gradient-text">Central Hub</span></h2>
            <p className="section-subtitle">A high-level view of users, restaurants, operations, and platform logs. Connected to simulated backend arrays.</p>
          </div>
          
          <div className="admin-panels-grid">
            <div className="admin-panel glass-panel reveal" data-tilt>
              <div className="admin-panel-header">
                <div>
                  <h3>Users Directory</h3>
                  <span className="bento-tag text-cyan">4 Active Users</span>
                </div>
                <button className="mini-action-btn admin-action-btn"><i className="fa-solid fa-arrows-rotate"></i></button>
              </div>
              <div className="admin-list scrollbar-hidden">
                <div className="admin-row">
                  <strong>USER-1</strong><span>Aditi Rao</span><span>Customer</span><span className="text-orange">Active</span>
                </div>
                <div className="admin-row">
                  <strong>USER-2</strong><span>Royal Awadh Manager</span><span>Partner</span><span className="text-orange">Active</span>
                </div>
                <div className="admin-row">
                  <strong>USER-3</strong><span>Arjun Rider</span><span>Delivery</span><span className="text-orange">Active</span>
                </div>
                <div className="admin-row">
                  <strong>USER-4</strong><span>Admin Core</span><span>Admin</span><span className="text-orange">Active</span>
                </div>
              </div>
            </div>

            <div className="admin-panel glass-panel reveal" data-tilt>
              <div className="admin-panel-header">
                <div>
                  <h3>Restaurant Ecosystem</h3>
                  <span className="bento-tag text-purple">3 Guilds Active</span>
                </div>
                <button className="mini-action-btn admin-action-btn"><i className="fa-solid fa-arrows-rotate"></i></button>
              </div>
              <div className="admin-list scrollbar-hidden">
                <div className="admin-row">
                  <strong>REST-1</strong><span>The Royal Awadh</span><span>Biryani</span><span className="text-orange">Open</span>
                </div>
                <div className="admin-row">
                  <strong>REST-2</strong><span>Bandra Spice Lab</span><span>Street Food</span><span className="text-orange">Open</span>
                </div>
                <div className="admin-row">
                  <strong>REST-3</strong><span>Connaught Curry</span><span>Chinese</span><span className="text-orange">Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Features Matrix */}
      <section className="section-padding grid-lines" id="database">
        <div className="section-container">
          <div className="section-header text-center reveal">
            <span className="accent-label">POSTGRES ARCHITECTURE</span>
            <h2 className="section-title">Database <span className="gradient-text">Features Matrix</span></h2>
            <p className="section-subtitle">Simulated entity models and relations managed by the React frontend logic engine.</p>
          </div>
          
          <div className="database-features-grid">
            <div className="db-feature-card glass-panel reveal">
              <i className="fa-solid fa-cart-shopping db-icon"></i>
              <h3>Carts & Checkout</h3>
              <p>Dynamic local storage array managing current session carts and converting them to orders on checkout.</p>
            </div>
            <div className="db-feature-card glass-panel reveal">
              <i className="fa-solid fa-wallet db-icon"></i>
              <h3>Payments</h3>
              <p>Relational simulation of payment IDs mapped to order IDs, handling UPI, Card, and COD states.</p>
            </div>
            <div className="db-feature-card glass-panel reveal">
              <i className="fa-solid fa-motorcycle db-icon"></i>
              <h3>Delivery Tracking</h3>
              <p>Delivery agents entity model with active orders, earnings tracking, and routing assignments.</p>
            </div>
            <div className="db-feature-card glass-panel reveal">
              <i className="fa-solid fa-star-half-stroke db-icon"></i>
              <h3>Reviews System</h3>
              <p>Simulated foreign key constraints tying customer reviews to specific menu items and restaurant IDs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboards;
