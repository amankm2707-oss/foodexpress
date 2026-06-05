import React, { useState } from 'react';
import { MenuItem } from '../types';

const indianMenuItems: MenuItem[] = [
    { id: 1, name: 'Chicken Biryani', category: 'biryani', diet: 'non-veg', price: 249, rating: 4.7, reviews: 342, time: 28, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80', desc: 'Aromatic basmati rice layered with tender chicken, fried onions, mint, and classic dum spices.' },
    { id: 2, name: 'Veg Biryani', category: 'biryani', diet: 'veg', price: 199, rating: 4.5, reviews: 218, time: 24, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80', desc: 'Basmati rice cooked with mixed vegetables, saffron, herbs, and gentle biryani masala.' },
    { id: 3, name: 'Mutton Biryani', category: 'biryani', diet: 'non-veg', price: 349, rating: 4.8, reviews: 189, time: 32, image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=500&q=80', desc: 'Slow-cooked mutton pieces with long-grain rice, whole spices, mint, and browned onions.' },
    { id: 4, name: 'Margherita Pizza', category: 'pizza', diet: 'veg', price: 149, rating: 4.3, reviews: 176, time: 22, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80', desc: 'Classic cheese pizza with tomato sauce, mozzarella, basil, and a crisp crust.' },
    { id: 5, name: 'Paneer Tikka Pizza', category: 'pizza', diet: 'veg', price: 229, rating: 4.6, reviews: 204, time: 26, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=80', desc: 'Loaded pizza topped with paneer tikka cubes, onions, capsicum, and spicy makhani sauce.' },
    { id: 6, name: 'Chicken Pepperoni Pizza', category: 'pizza', diet: 'non-veg', price: 299, rating: 4.6, reviews: 158, time: 27, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80', desc: 'Cheesy pizza with chicken pepperoni, oregano, chilli flakes, and tomato sauce.' },
    { id: 7, name: 'Aloo Tikki Burger', category: 'burgers', diet: 'veg', price: 99, rating: 4.2, reviews: 261, time: 18, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80', desc: 'Crispy aloo tikki patty with lettuce, onion, tomato, and tangy burger sauce.' },
    { id: 8, name: 'Paneer Burger', category: 'burgers', diet: 'veg', price: 149, rating: 4.4, reviews: 148, time: 20, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80', desc: 'Grilled paneer patty with crunchy vegetables, cheese, and creamy tandoori mayo.' },
    { id: 9, name: 'Chicken Burger', category: 'burgers', diet: 'non-veg', price: 179, rating: 4.5, reviews: 232, time: 21, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80', desc: 'Juicy chicken patty with cheese, lettuce, onions, and a smoky house sauce.' },
    { id: 10, name: 'Veg Momos', category: 'chinese', diet: 'veg', price: 119, rating: 4.4, reviews: 315, time: 16, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80', desc: 'Steamed dumplings filled with seasoned vegetables and served with spicy momo chutney.' },
    { id: 11, name: 'Chicken Momos', category: 'chinese', diet: 'non-veg', price: 149, rating: 4.5, reviews: 286, time: 17, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500&q=80', desc: 'Soft steamed momos stuffed with minced chicken, herbs, and pepper.' },
    { id: 12, name: 'Veg Fried Rice', category: 'chinese', diet: 'veg', price: 139, rating: 4.3, reviews: 197, time: 20, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80', desc: 'Wok-tossed rice with vegetables, spring onion, soy sauce, and mild seasoning.' },
    { id: 13, name: 'Chicken Fried Rice', category: 'chinese', diet: 'non-veg', price: 179, rating: 4.5, reviews: 214, time: 21, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80', desc: 'Fried rice tossed with chicken, vegetables, egg, soy, and spring onion.' },
    { id: 14, name: 'Hakka Noodles', category: 'chinese', diet: 'veg', price: 149, rating: 4.4, reviews: 248, time: 19, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80', desc: 'Street-style noodles tossed with crunchy vegetables and Indo-Chinese sauces.' },
    { id: 15, name: 'Paneer Butter Masala', category: 'north-indian', diet: 'veg', price: 229, rating: 4.7, reviews: 376, time: 25, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80', desc: 'Paneer cubes simmered in a rich tomato, butter, cashew, and cream gravy.' },
    { id: 16, name: 'Butter Chicken', category: 'north-indian', diet: 'non-veg', price: 279, rating: 4.8, reviews: 428, time: 27, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80', desc: 'Tandoori chicken pieces in a creamy makhani gravy with butter and kasuri methi.' },
    { id: 17, name: 'Dal Makhani', category: 'north-indian', diet: 'veg', price: 189, rating: 4.6, reviews: 254, time: 24, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', desc: 'Black lentils and rajma slow-cooked with butter, cream, and roasted spices.' },
    { id: 18, name: 'Chole Bhature', category: 'north-indian', diet: 'veg', price: 149, rating: 4.5, reviews: 401, time: 20, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80', desc: 'Spiced chickpea curry served with fluffy bhature and onion salad.' },
    { id: 19, name: 'Masala Dosa', category: 'south-indian', diet: 'veg', price: 119, rating: 4.6, reviews: 390, time: 18, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80', desc: 'Crisp dosa filled with potato masala, served with sambar and coconut chutney.' },
    { id: 20, name: 'Idli Sambar', category: 'south-indian', diet: 'veg', price: 89, rating: 4.4, reviews: 284, time: 15, image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?auto=format&fit=crop&w=500&q=80', desc: 'Soft steamed idlis with warm sambar and fresh coconut chutney.' },
    { id: 21, name: 'Chicken Chettinad', category: 'south-indian', diet: 'non-veg', price: 269, rating: 4.7, reviews: 171, time: 28, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80', desc: 'Chicken cooked in a bold Chettinad masala with coconut, pepper, and curry leaves.' },
    { id: 22, name: 'Gulab Jamun', category: 'desserts', diet: 'veg', price: 79, rating: 4.5, reviews: 332, time: 10, image: 'https://images.unsplash.com/photo-1605197183305-6f1b2b7db55d?auto=format&fit=crop&w=500&q=80', desc: 'Warm milk-solid dumplings soaked in cardamom sugar syrup.' },
    { id: 23, name: 'Chocolate Brownie', category: 'desserts', diet: 'veg', price: 129, rating: 4.6, reviews: 226, time: 12, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80', desc: 'Dense chocolate brownie with a soft center and roasted walnut crunch.' },
    { id: 24, name: 'Rasmalai', category: 'desserts', diet: 'veg', price: 149, rating: 4.7, reviews: 192, time: 11, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80', desc: 'Soft chenna discs soaked in chilled saffron milk and topped with pistachios.' },
    { id: 25, name: 'Cold Coffee', category: 'beverages', diet: 'veg', price: 99, rating: 4.4, reviews: 266, time: 9, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80', desc: 'Chilled coffee blended with milk, ice cream, and chocolate drizzle.' },
    { id: 26, name: 'Mango Lassi', category: 'beverages', diet: 'veg', price: 89, rating: 4.5, reviews: 298, time: 8, image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=500&q=80', desc: 'Thick curd-based mango drink finished with a pinch of cardamom.' },
    { id: 27, name: 'Masala Chai', category: 'beverages', diet: 'veg', price: 49, rating: 4.3, reviews: 354, time: 8, image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&w=500&q=80', desc: 'Freshly brewed tea with milk, ginger, cardamom, and warming spices.' },
    { id: 28, name: 'Pav Bhaji', category: 'street-food', diet: 'veg', price: 129, rating: 4.6, reviews: 412, time: 18, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80', desc: 'Mumbai-style mashed vegetable bhaji served with butter-toasted pav.' },
    { id: 29, name: 'Chicken Shawarma', category: 'street-food', diet: 'non-veg', price: 139, rating: 4.5, reviews: 323, time: 16, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80', desc: 'Soft wrap filled with spiced chicken, garlic mayo, pickled vegetables, and fries.' },
    { id: 30, name: 'Rajma Rice Bowl', category: 'healthy-meals', diet: 'veg', price: 169, rating: 4.4, reviews: 203, time: 22, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80', desc: 'Comforting rajma served with steamed rice, salad, and a light homestyle gravy.' },
    { id: 31, name: 'Grilled Chicken Salad', category: 'healthy-meals', diet: 'non-veg', price: 249, rating: 4.6, reviews: 137, time: 19, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80', desc: 'Grilled chicken with greens, cucumber, corn, cherry tomatoes, and lemon dressing.' },
    { id: 32, name: 'Paneer Protein Bowl', category: 'healthy-meals', diet: 'veg', price: 219, rating: 4.5, reviews: 164, time: 20, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80', desc: 'Paneer tikka, brown rice, vegetables, sprouts, and mint yogurt dip.' }
];

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  const getFilteredItems = () => {
    let sortedItems = [...indianMenuItems];
    
    if (filter === 'price-low') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (filter === 'top-rated') {
      sortedItems.sort((a, b) => b.rating - a.rating);
    } else if (filter !== 'all') {
      sortedItems = sortedItems.filter(item => item.category === filter || item.diet === filter);
    }

    return sortedItems;
  };

  const categoryLabel = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <section className="section-padding" id="categories">
      <div className="section-container">
        <div className="section-header text-center reveal">
          <h2 className="section-title">Curated <span className="gradient-text">Indian Crafts</span></h2>
          <p className="section-subtitle">Filter by dish type, veg preference, price, or rating.</p>
        </div>
        
        {/* Categories Filter Grid */}
        <div className="categories-filter-wrapper reveal">
          <div className="categories-container scrollbar-hidden">
            <button className={`category-pill magnetic-target ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>
              <i className="fa-solid fa-plate-wheat"></i><span>All Items</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'biryani' ? 'active' : ''}`} onClick={() => handleFilterClick('biryani')}>
              <i className="fa-solid fa-mortar-pestle"></i><span>Biryani</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'pizza' ? 'active' : ''}`} onClick={() => handleFilterClick('pizza')}>
              <i className="fa-solid fa-pizza-slice"></i><span>Pizza</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'burgers' ? 'active' : ''}`} onClick={() => handleFilterClick('burgers')}>
              <i className="fa-solid fa-burger"></i><span>Burgers</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'chinese' ? 'active' : ''}`} onClick={() => handleFilterClick('chinese')}>
              <i className="fa-solid fa-bowl-rice"></i><span>Chinese</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'north-indian' ? 'active' : ''}`} onClick={() => handleFilterClick('north-indian')}>
              <i className="fa-solid fa-bowl-food"></i><span>North Indian</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'south-indian' ? 'active' : ''}`} onClick={() => handleFilterClick('south-indian')}>
              <i className="fa-solid fa-leaf"></i><span>South Indian</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'desserts' ? 'active' : ''}`} onClick={() => handleFilterClick('desserts')}>
              <i className="fa-solid fa-ice-cream"></i><span>Desserts</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'veg' ? 'active' : ''}`} onClick={() => handleFilterClick('veg')}>
              <i className="fa-solid fa-seedling"></i><span>Pure Veg</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'price-low' ? 'active' : ''}`} onClick={() => handleFilterClick('price-low')}>
              <i className="fa-solid fa-arrow-down-9-1"></i><span>Price Low</span>
            </button>
            <button className={`category-pill magnetic-target ${filter === 'top-rated' ? 'active' : ''}`} onClick={() => handleFilterClick('top-rated')}>
              <i className="fa-solid fa-star"></i><span>Top Rated</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu List */}
      <div className="section-container" id="menu">
        <div className="menu-grid" id="menu-items-grid">
          {getFilteredItems().map(item => (
            <div key={item.id} className="menu-item-card glass-panel reveal" data-category={item.category} data-diet={item.diet} style={{ transition: 'opacity 0.3s, transform 0.3s' }}>
              <div className="item-img-container">
                <img src={item.image} alt={item.name} className="item-img" />
                <div className="item-glass-overlay">
                  <button className="btn-quick-add" onClick={() => onAddToCart(item)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <span className="dish-tag">{item.diet === 'veg' ? 'Veg' : 'Non-Veg'} - {categoryLabel(item.category)}</span>
              </div>
              <div className="item-info">
                <div className="item-rating-row">
                  <span className="item-rating"><i className="fa-solid fa-star text-gold"></i> {item.rating.toFixed(1)} ({item.reviews})</span>
                  <span className="item-time"><i className="fa-solid fa-bolt text-orange"></i> {item.time} Min</span>
                </div>
                <h3>{item.name}</h3>
                <p className="item-desc">{item.desc}</p>
                <div className="item-footer">
                  <span className="item-price">₹{item.price.toFixed(2)}</span>
                  <button className="btn btn-primary btn-sm btn-add-to-cart magnetic-target" onClick={() => onAddToCart(item)}>
                    <span>Add to Basket</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
