import React from 'react';
import type { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCharge = totalItemsCount > 0 ? 39.00 : 0.00;
  const gstAmount = subtotal * 0.05;
  const finalTotal = subtotal + deliveryCharge + gstAmount;

  return (
    <aside className={`cart-sidebar glass-panel ${isOpen ? 'open' : ''}`} id="cart-sidebar">
      <div className="cart-header">
        <h3><i className="fa-solid fa-basket-shopping text-saffron"></i> Your Basket</h3>
        <button className="cart-close-btn" onClick={onClose} aria-label="Close Basket">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <div className="cart-body">
        {cart.length === 0 ? (
          <div className="cart-empty-state" style={{ display: 'flex' }}>
            <div className="empty-cart-icon">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
            <p>Your culinary journey hasn't started yet. Add some items from our Indian kitchens.</p>
            <button className="btn btn-outline btn-block btn-magnetic" onClick={onClose}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="cart-items-container">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <button className="btn-qty-minus" onClick={() => onUpdateQuantity(item.id, -1)}><i className="fa-solid fa-minus"></i></button>
                  <span>{item.quantity}</span>
                  <button className="btn-qty-plus" onClick={() => onUpdateQuantity(item.id, 1)}><i className="fa-solid fa-plus"></i></button>
                </div>
                <button className="mini-action-btn btn-remove-cart-item" onClick={() => onRemoveItem(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`cart-footer ${cart.length > 0 ? 'active' : ''}`} style={{ display: cart.length > 0 ? 'block' : 'none' }}>
        <div className="cart-coupon-field portal-field">
          <i className="fa-solid fa-ticket"></i>
          <input type="text" placeholder="Promo Code (e.g. GOLD50)" />
          <button type="button"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        
        <div className="footer-cost-row">
          <span>Item Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="footer-cost-row">
          <span>Delivery Hub Fee</span>
          <span>₹{deliveryCharge.toFixed(2)}</span>
        </div>
        <div className="footer-cost-row">
          <span>Govt Taxes (5%)</span>
          <span>₹{gstAmount.toFixed(2)}</span>
        </div>
        <hr className="glass-divider" />
        <div className="footer-cost-row cost-total-row">
          <span>To Pay</span>
          <span>₹{finalTotal.toFixed(2)}</span>
        </div>
        
        <button className="btn btn-primary btn-block checkout-btn btn-magnetic" onClick={onCheckout}>
          <span>Checkout Securely</span>
          <i className="fa-solid fa-shield-check"></i>
        </button>
      </div>
    </aside>
  );
};

export default CartSidebar;
