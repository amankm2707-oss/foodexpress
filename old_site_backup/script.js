/* ----------------------------------------------------
   FOODEXPRESS - FUTURISTIC LOGIC ENGINE
   ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const indianMenuItems = [
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
    window.indianMenuItems = indianMenuItems;

    function categoryLabel(category) {
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    function renderIndianMenu() {
        const grid = document.getElementById('menu-items-grid');
        if (!grid) return;

        grid.innerHTML = indianMenuItems.map(item => {
            const tag = `${item.diet === 'veg' ? 'Veg' : 'Non-Veg'} - ${categoryLabel(item.category)}`;
            return `
                <div class="menu-item-card glass-panel reveal" data-category="${item.category}" data-diet="${item.diet}" data-price="${item.price}" data-rating="${item.rating}">
                    <div class="item-img-container">
                        <img src="${item.image}" alt="${item.name}" class="item-img">
                        <div class="item-glass-overlay">
                            <button class="btn-quick-add" data-id="${item.id}" data-name="${item.name}" data-price="${item.price.toFixed(2)}" data-image="${item.image}">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <span class="dish-tag">${tag}</span>
                    </div>
                    <div class="item-info">
                        <div class="item-rating-row">
                            <span class="item-rating"><i class="fa-solid fa-star text-gold"></i> ${item.rating.toFixed(1)} (${item.reviews})</span>
                            <span class="item-time"><i class="fa-solid fa-bolt text-orange"></i> ${item.time} Min</span>
                        </div>
                        <h3>${item.name}</h3>
                        <p class="item-desc">${item.desc}</p>
                        <div class="item-footer">
                            <span class="item-price">₹${item.price.toFixed(2)}</span>
                            <button class="btn btn-primary btn-sm btn-add-to-cart magnetic-target" data-id="${item.id}" data-name="${item.name}" data-price="${item.price.toFixed(2)}" data-image="${item.image}">
                                <span>Add to Basket</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderIndianMenu();
    // ---------------------------------------------
    // PRELOADER HANDLER
    // ---------------------------------------------
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            // Trigger stats counters once loaded and in view
            triggerStatsCounter();
        }, 1200);
    });
    // Fallback in case loading is too slow
    setTimeout(() => {
        if (!preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
        }
    }, 4000);
    // ---------------------------------------------
    // CUSTOM LIQUID CURSOR WITH LERP PHYSICS
    // ---------------------------------------------
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');
    
    let mouseX = 0, mouseY = 0; // Target coordinates
    let ringX = 0, ringY = 0;   // Interpolated coordinates
    
    // Lerp intensity factor (smaller = smoother/laggier)
    const lerpFactor = 0.15;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant position for the dot
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });
    // Main animation loop for trailing ring
    function animateCursor() {
        // Linear Interpolation physics formula: current = current + (target - current) * factor
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;
        
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    // Hover detection over interactive targets
    const hoverTargets = document.querySelectorAll('a, button, .category-pill, .interactive-3d-card, input');
    
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        target.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
    // ---------------------------------------------
    // MAGNETIC BUTTON PHYSICS EFFECT
    // ---------------------------------------------
    const magneticTargets = document.querySelectorAll('.magnetic-target, .btn-magnetic');
    
    magneticTargets.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const bounds = btn.getBoundingClientRect();
            // Calculate center points of current button
            const btnCenterX = bounds.left + bounds.width / 2;
            const btnCenterY = bounds.top + bounds.height / 2;
            
            // Calculate mouse distance from center
            const forceX = e.clientX - btnCenterX;
            const forceY = e.clientY - btnCenterY;
            
            // Apply translation values (scaled down for subtle attraction)
            btn.style.transform = `translate(${forceX * 0.35}px, ${forceY * 0.35}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            // Smoothly reset position
            btn.style.transform = 'translate(0, 0)';
        });
    });
    // ---------------------------------------------
    // 3D PERSPECTIVE CARD TILT EFFECT (PARALLAX GLARE)
    // ---------------------------------------------
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const bounds = card.getBoundingClientRect();
            const width = bounds.width;
            const height = bounds.height;
            
            // Mouse relative position within the card boundaries
            const cardX = e.clientX - bounds.left;
            const cardY = e.clientY - bounds.top;
            
            // Calculate rotation factor (range -15 to +15 deg)
            const rotateX = ((cardY / height) - 0.5) * -20;
            const rotateY = ((cardX / width) - 0.5) * 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Render glare lighting gradient tracking
            const glow = card.querySelector('.card-glow');
            if (glow) {
                const percentageX = (cardX / width) * 100;
                const percentageY = (cardY / height) * 100;
                glow.style.background = `radial-gradient(circle at ${percentageX}% ${percentageY}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Smoothly restore defaults
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.background = 'transparent';
            }
        });
    });
    // ---------------------------------------------
    // SMART NAVBAR SCROLL CONTROLLER
    // ---------------------------------------------
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    const navHeight = 90;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scroll class for glass styling
        if (currentScrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > navHeight) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollY = currentScrollY;
    });
    // ---------------------------------------------
    // INTERSECTION OBSERVER REVEAL EFFECT
    // ---------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    // ---------------------------------------------
    // DYNAMIC STATS AUTO-INCREMENT ENGINE
    // ---------------------------------------------
    let statsTriggered = false;
    function triggerStatsCounter() {
        if (statsTriggered) return;
        
        const deliveryEl = document.getElementById('stat-delivery');
        const ratingEl = document.getElementById('stat-rating');
        
        if (!deliveryEl || !ratingEl) return;
        
        statsTriggered = true;
        
        // Increment Delivery Speed (0 -> 12 min)
        animateCount(deliveryEl, 0, 12, 1800, false);
        // Increment Customer Rating (0.0 -> 4.9)
        animateCount(ratingEl, 0.0, 4.9, 2000, true);
    }
    function animateCount(element, start, end, duration, isDecimal) {
        let startTime = null;
        
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            let value;
            if (isDecimal) {
                value = (progress * (end - start) + start).toFixed(1);
            } else {
                value = Math.floor(progress * (end - start) + start);
            }
            
            element.textContent = value;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        }
        requestAnimationFrame(step);
    }
    // Scroll trigger for stats backup
    window.addEventListener('scroll', () => {
        const statsSection = document.getElementById('stats');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                triggerStatsCounter();
            }
        }
    });
    // ---------------------------------------------
    // DYNAMIC DOM CATEGORY FILTER ENGINE
    // ---------------------------------------------
    const filterPills = document.querySelectorAll('.category-pill[data-filter]');
    const menuGrid = document.getElementById('menu-items-grid');
    const menuCards = document.querySelectorAll('.menu-item-card');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active state
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            const filterValue = pill.getAttribute('data-filter');
            
            if (filterValue === 'price-low') {
                [...menuCards]
                    .sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price))
                    .forEach(card => menuGrid.appendChild(card));
            }
            if (filterValue === 'top-rated') {
                [...menuCards]
                    .sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating))
                    .forEach(card => menuGrid.appendChild(card));
            }

            menuCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const diet = card.getAttribute('data-diet');
                
                // GSAP-like smooth filter animation
                card.style.transition = 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                
                if (filterValue === 'all' || category === filterValue || diet === filterValue || filterValue === 'price-low' || filterValue === 'top-rated') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    // ---------------------------------------------
    // INTERACTIVE CART SYSTEM STATE & OPERATIONS
    // ---------------------------------------------
    const CART_STORAGE_KEY = 'foodExpressCart';
    let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartEmptyState = document.getElementById('cart-empty');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer-details');
    const cartBadge = document.getElementById('cart-badge');
    const btnBrowseMenu = document.getElementById('btn-browse-menu');
    // Sidebar Toggles
    cartToggle.addEventListener('click', () => cartSidebar.classList.add('open'));
    cartClose.addEventListener('click', () => cartSidebar.classList.remove('open'));
    
    if (btnBrowseMenu) {
        btnBrowseMenu.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    }
    // Add To Cart Event Listeners
    const addCartBtns = document.querySelectorAll('.btn-add-to-cart, .btn-quick-add');
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-id'));
            const name = btn.getAttribute('data-name');
            const price = parseFloat(btn.getAttribute('data-price'));
            const image = btn.getAttribute('data-image');
            
            addItemToCart(id, name, price, image);
            
            // Pulsing cart badge animation
            cartBadge.classList.add('pulsing');
            setTimeout(() => cartBadge.classList.remove('pulsing'), 600);
            
            // Show toast prompt
            showToast(`${name} added to cart.`);
        });
    });
    function addItemToCart(id, name, price, image) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }
        
        updateCartUI();
    }
    function updateCartUI() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        window.foodExpressCart = cart;
        window.dispatchEvent(new CustomEvent('foodexpress:cart-sync', { detail: { cart } }));
        // Toggle empty state / footer
        if (cart.length === 0) {
            cartEmptyState.style.display = 'flex';
            cartItemsContainer.style.display = 'none';
            cartFooter.classList.remove('active');
        } else {
            cartEmptyState.style.display = 'none';
            cartItemsContainer.style.display = 'block';
            cartFooter.classList.add('active');
        }
        // Render Cart Items
        cartItemsContainer.innerHTML = '';
        let totalItemsCount = 0;
        let subtotal = 0;
        cart.forEach(item => {
            totalItemsCount += item.quantity;
            subtotal += item.price * item.quantity;
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>₹${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="btn-qty-minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button class="btn-qty-plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button class="mini-action-btn btn-remove-cart-item" data-id="${item.id}" aria-label="Remove ${item.name}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
            cartItemsContainer.lastElementChild.querySelector('.cart-item-info p').textContent = `\u20B9${(item.price * item.quantity).toFixed(2)}`;
        });
        // Set Badges
        cartBadge.textContent = totalItemsCount;
        // Perform Subtotals and final math (Indian Rupees)
        const deliveryCharge = totalItemsCount > 0 ? 39.00 : 0.00;
        const gstRate = 0.05;
        const gstAmount = subtotal * gstRate;
        const finalTotal = subtotal + deliveryCharge + gstAmount;
        const gstEl = document.getElementById('cost-gst');
        document.getElementById('cost-subtotal').textContent = `\u20B9${subtotal.toFixed(2)}`;
        document.getElementById('cost-delivery').textContent = `\u20B9${deliveryCharge.toFixed(2)}`;
        if (gstEl) gstEl.textContent = `\u20B9${gstAmount.toFixed(2)}`;
        document.getElementById('cost-total').textContent = `\u20B9${finalTotal.toFixed(2)}`;
        // Re-attach listeners to qty modifiers
        const minusBtns = cartItemsContainer.querySelectorAll('.btn-qty-minus');
        const plusBtns = cartItemsContainer.querySelectorAll('.btn-qty-plus');
        const removeBtns = cartItemsContainer.querySelectorAll('.btn-remove-cart-item');
        minusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                modifyQuantity(id, -1);
            });
        });
        plusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                modifyQuantity(id, 1);
            });
        });
        removeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                cart = cart.filter(i => i.id !== id);
                showToast("Item removed from basket.");
                updateCartUI();
            });
        });
    }
    function modifyQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (!item) return;
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
            showToast("Item removed from basket.");
        }
        
        updateCartUI();
    }
    window.addFoodToCart = addItemToCart;
    window.updateFoodCartUI = updateCartUI;
    window.clearFoodCart = () => {
        cart = [];
        updateCartUI();
    };
    updateCartUI();
    // ---------------------------------------------
    // CART AND SYSTEM TOAST NOTIFICATIONS
    // ---------------------------------------------
    const toastContainer = document.getElementById('toast-container');
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'custom-toast glass-panel';
        toast.innerHTML = `<i class="fa-solid fa-bell text-orange"></i><span>${message}</span>`;
        
        toastContainer.appendChild(toast);
        
        // Remove toast automatically
        setTimeout(() => {
            toast.style.animation = 'toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }
    // ---------------------------------------------
    // ROLE LOGIN PORTAL & ADMIN DASHBOARD FEEDBACK
    // ---------------------------------------------
    const portalLoginForms = document.querySelectorAll('.portal-login-form');
    portalLoginForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const loginType = form.getAttribute('data-login-type') || 'User';
            const requiredFields = form.querySelectorAll('input[required]');
            const hasEmptyField = Array.from(requiredFields).some(field => !field.value.trim());

            if (hasEmptyField) {
                showToast(`${loginType} credentials are incomplete.`);
                return;
            }

            showToast(`${loginType} login verified in frontend demo mode.`);
            form.reset();
        });
    });

    const adminActionBtns = document.querySelectorAll('.admin-action-btn');
    adminActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const actionMessage = btn.getAttribute('data-admin-action') || 'Admin action queued';
            showToast(actionMessage);
        });
    });
    // ---------------------------------------------
    // SUCCESS MODAL & ORDER EXECUTION PROCESS
    // ---------------------------------------------
    const checkoutBtn = document.getElementById('btn-checkout');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('btn-close-modal');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Close Sidebar first
            cartSidebar.classList.remove('open');
            
            // Visual loader delay before success trigger
            showToast("Encrypting culinary credentials...");
            
            setTimeout(() => {
                successModal.classList.add('open');
                // Clean state
                cart = [];
                updateCartUI();
            }, 1000);
        });
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('open');
        });
    }
    // ---------------------------------------------
    // MOBILE NAV DRAWER INTERACTIVE LOGIC
    // ---------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    }
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    });
    // ---------------------------------------------
    // NEWSLETTER SUBSCRIPTION FEEDBACK
    // ---------------------------------------------
    const subscribeBtn = document.getElementById('btn-newsletter-subscribe');
    const newsletterEmail = document.getElementById('newsletter-email');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const email = newsletterEmail.value.trim();
            if (email && email.includes('@')) {
                showToast("Welcome to the Chronicle. A confirmation key is sent.");
                newsletterEmail.value = '';
            } else {
                showToast("Please supply a functional coordinates email.");
            }
        });
    }
});

/* ----------------------------------------------------
   FOODEXPRESS - DBMS FRONTEND SIMULATION EXTENSION
   ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const DB_KEY = 'foodExpressDBMS';
    const SESSION_KEY = 'foodExpressSession';
    const THEME_KEY = 'foodExpressTheme';
    const SESSION_LIMIT_MS = 12 * 60 * 1000;

    const seedDB = {
        schemaVersion: 2,
        users: [
            { userId: 'USER-1', id: 'USER-1', name: 'Aditi Rao', email: 'customer@foodexpress.in', password: '1234', role: 'Customer', phone: '9876543210', address: 'Indiranagar 12th Main, Bangalore', createdAt: new Date().toISOString(), status: 'Active' },
            { userId: 'USER-2', id: 'USER-2', name: 'Royal Awadh Manager', email: 'partner@foodexpress.in', password: '1234', role: 'Restaurant Partner', phone: '9876543211', address: 'Bangalore Indiranagar', createdAt: new Date().toISOString(), status: 'Active', restaurantId: 'REST-1' },
            { userId: 'USER-3', id: 'USER-3', name: 'Arjun Rider', email: 'rider@foodexpress.in', password: '1234', role: 'Delivery Partner', phone: '9876543212', address: 'Bangalore', createdAt: new Date().toISOString(), status: 'Active', deliveryId: 'DEL-1' },
            { userId: 'USER-4', id: 'USER-4', name: 'Admin Core', email: 'admin@foodexpress.in', password: 'admin123', role: 'Admin', phone: '9876543213', address: 'HQ', createdAt: new Date().toISOString(), status: 'Active' }
        ],
        restaurants: [
            { restaurantId: 'REST-1', id: 'REST-1', restaurantName: 'The Royal Awadh Project', name: 'The Royal Awadh Project', ownerName: 'Royal Awadh Manager', category: 'Biryani, North Indian', rating: 4.7, menuItems: [], totalOrders: 0, revenue: 0, city: 'Bangalore', status: 'Open' },
            { restaurantId: 'REST-2', id: 'REST-2', restaurantName: 'Bandra Spice Lab', name: 'Bandra Spice Lab', ownerName: 'Bandra Partner', category: 'Pizza, Burgers, Street Food', rating: 4.5, menuItems: [], totalOrders: 0, revenue: 0, city: 'Mumbai', status: 'Open' },
            { restaurantId: 'REST-3', id: 'REST-3', restaurantName: 'Connaught Curry House', name: 'Connaught Curry House', ownerName: 'Connaught Partner', category: 'Chinese, South Indian, Desserts', rating: 4.6, menuItems: [], totalOrders: 0, revenue: 0, city: 'Delhi', status: 'Open' }
        ],
        menuItems: window.indianMenuItems.map(item => ({
            itemId: `ITEM-${item.id}`,
            id: item.id,
            itemName: item.name,
            name: item.name,
            category: item.category,
            vegOrNonVeg: item.diet === 'veg' ? 'Veg' : 'Non-Veg',
            price: item.price,
            rating: item.rating,
            deliveryTime: item.time,
            stock: 12 + (item.id % 18),
            image: item.image,
            restaurantId: ['biryani', 'north-indian', 'healthy-meals'].includes(item.category) ? 'REST-1' : ['pizza', 'burgers', 'street-food'].includes(item.category) ? 'REST-2' : 'REST-3',
            available: true,
            sold: 40 + (item.id * 7)
        })),
        orders: [
            { id: 'FX-1184', customer: 'Aditi Rao', item: 'Awadhi Gold Dum', total: 899, status: 'Preparing', payment: 'UPI' },
            { id: 'FX-1185', customer: 'Vikram Malhotra', item: 'Naan Taco Flight', total: 649, status: 'Dispatched', payment: 'Card' },
            { id: 'FX-1186', customer: 'Meera Iyer', item: 'Mango Lassi', total: 128, status: 'Delivered', payment: 'Cash on Delivery' }
        ],
        payments: [
            { id: 'PAY-7701', orderId: 'FX-1184', mode: 'UPI', amount: 899, status: 'Paid' },
            { id: 'PAY-7702', orderId: 'FX-1185', mode: 'Card', amount: 649, status: 'Paid' },
            { id: 'PAY-7703', orderId: 'FX-1186', mode: 'COD', amount: 339, status: 'Collected' }
        ],
        deliveryAgents: [
            { deliveryId: 'DEL-1', id: 'DEL-1', partnerName: 'Arjun Rider', name: 'Arjun Rider', phone: '9876543212', activeOrders: [], completedOrders: [], earnings: 2840, availability: 'Online', rating: 4.91, active: true },
            { deliveryId: 'DEL-2', id: 'DEL-2', partnerName: 'Neha Route Lead', name: 'Neha Route Lead', phone: '9876543214', activeOrders: [], completedOrders: [], earnings: 3190, availability: 'Online', rating: 4.87, active: true }
        ],
        reviews: [{ reviewId: 'REV-1', id: 'REV-1', customerId: 'USER-1', itemId: 'ITEM-1', user: 'Aditi Rao', rating: 5, comment: 'Arrived hot, beautifully packed, and on time.', text: 'Arrived hot, beautifully packed, and on time.', createdAt: new Date().toISOString() }],
        carts: [],
        coupons: [{ code: 'GOLD50', discount: 50 }, { code: 'FEAST10', percent: 10 }],
        notifications: [
            'Low stock alert: Mango Lassi',
            'New complaint opened for FX-1185',
            'Revenue crossed Rs 4.8L today'
        ],
        addresses: ['Indiranagar 12th Main, Bangalore', 'Bandra West, Mumbai'],
        wishlist: ['Chicken Biryani'],
        complaints: ['Late delivery concern for FX-1185', 'Refund review requested for PAY-7703'],
        logs: ['Admin audit queued', 'Restaurant menu synced', 'Rider availability changed']
    };

    function normalizeDB(rawDB = {}) {
        const nextDB = { ...seedDB, ...rawDB };
        nextDB.users = (nextDB.users || []).map((user, index) => ({
            userId: user.userId || user.id || `USER-${index + 1}`,
            id: user.userId || user.id || `USER-${index + 1}`,
            name: user.name || 'FoodExpress User',
            email: user.email || `user${index + 1}@foodexpress.in`,
            password: user.password || '1234',
            role: user.role || 'Customer',
            phone: user.phone || '',
            address: user.address || '',
            createdAt: user.createdAt || new Date().toISOString(),
            status: user.status || 'Active',
            restaurantId: user.restaurantId,
            deliveryId: user.deliveryId
        }));
        nextDB.restaurants = (nextDB.restaurants || []).map((restaurant, index) => ({
            restaurantId: restaurant.restaurantId || restaurant.id || `REST-${index + 1}`,
            id: restaurant.restaurantId || restaurant.id || `REST-${index + 1}`,
            restaurantName: restaurant.restaurantName || restaurant.name || `Restaurant ${index + 1}`,
            name: restaurant.restaurantName || restaurant.name || `Restaurant ${index + 1}`,
            ownerName: restaurant.ownerName || 'Restaurant Partner',
            category: restaurant.category || 'Indian Food',
            rating: Number(restaurant.rating || 4.3),
            menuItems: restaurant.menuItems || [],
            totalOrders: Number(restaurant.totalOrders || 0),
            revenue: Number(restaurant.revenue || 0),
            city: restaurant.city || 'Bangalore',
            status: restaurant.status || 'Open'
        }));
        const menuSource = Array.isArray(nextDB.menuItems) && nextDB.menuItems.length >= 25 ? nextDB.menuItems : seedDB.menuItems;
        nextDB.menuItems = menuSource.map((item, index) => ({
            itemId: item.itemId || `ITEM-${item.id || index + 1}`,
            id: Number(String(item.itemId || item.id || index + 1).replace('ITEM-', '')) || index + 1,
            itemName: item.itemName || item.name || `Menu Item ${index + 1}`,
            name: item.itemName || item.name || `Menu Item ${index + 1}`,
            category: item.category || 'north-indian',
            vegOrNonVeg: item.vegOrNonVeg || (item.diet === 'non-veg' ? 'Non-Veg' : 'Veg'),
            price: Number(item.price || 0),
            rating: Number(item.rating || 4.2),
            deliveryTime: Number(item.deliveryTime || item.time || 25),
            stock: Number(item.stock ?? 10),
            image: item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
            restaurantId: item.restaurantId || nextDB.restaurants[index % nextDB.restaurants.length]?.restaurantId || 'REST-1',
            available: item.available !== false,
            sold: Number(item.sold || 0)
        }));
        nextDB.orders = (nextDB.orders || []).map((order) => {
            const items = order.items || [{ itemId: 'ITEM-1', itemName: order.item || 'Cart Selection', restaurantId: 'REST-1', price: Number(order.total || 0), quantity: 1 }];
            const subtotal = Number(order.subtotal ?? items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0));
            const gst = Number(order.gst ?? subtotal * 0.05);
            const deliveryFee = Number(order.deliveryFee ?? 39);
            return {
                orderId: order.orderId || order.id || `ORD-${Date.now()}`,
                id: order.orderId || order.id || `ORD-${Date.now()}`,
                customerId: order.customerId || nextDB.users.find(user => user.email === order.customer)?.userId || 'USER-1',
                items,
                quantities: order.quantities || Object.fromEntries(items.map(item => [item.itemId, item.quantity || 1])),
                subtotal,
                gst,
                deliveryFee,
                total: Number(order.total ?? subtotal + gst + deliveryFee),
                paymentMethod: order.paymentMethod || order.payment || 'UPI',
                orderStatus: order.orderStatus || order.status || 'Preparing',
                status: order.orderStatus || order.status || 'Preparing',
                assignedDeliveryPartner: order.assignedDeliveryPartner || 'DEL-1',
                createdAt: order.createdAt || new Date().toISOString(),
                item: order.item || items.map(item => `${item.itemName} x${item.quantity || 1}`).join(', ')
            };
        });
        nextDB.deliveryAgents = (nextDB.deliveryAgents || []).map((partner, index) => ({
            deliveryId: partner.deliveryId || partner.id || `DEL-${index + 1}`,
            id: partner.deliveryId || partner.id || `DEL-${index + 1}`,
            partnerName: partner.partnerName || partner.name || `Partner ${index + 1}`,
            name: partner.partnerName || partner.name || `Partner ${index + 1}`,
            phone: partner.phone || '',
            activeOrders: partner.activeOrders || [],
            completedOrders: partner.completedOrders || [],
            earnings: Number(partner.earnings || 0),
            availability: partner.availability || (partner.active === false ? 'Offline' : 'Online'),
            rating: Number(partner.rating || 4.5),
            active: partner.availability !== 'Offline'
        }));
        nextDB.payments = (nextDB.payments || []).map((payment) => ({
            paymentId: payment.paymentId || payment.id || `PAY-${Date.now()}`,
            id: payment.paymentId || payment.id || `PAY-${Date.now()}`,
            orderId: payment.orderId,
            customerId: payment.customerId || 'USER-1',
            amount: Number(payment.amount || 0),
            paymentType: payment.paymentType || payment.mode || 'UPI',
            mode: payment.paymentType || payment.mode || 'UPI',
            paymentStatus: payment.paymentStatus || payment.status || 'Paid',
            status: payment.paymentStatus || payment.status || 'Paid',
            transactionDate: payment.transactionDate || new Date().toISOString()
        }));
        nextDB.reviews = (nextDB.reviews || []).map((review, index) => ({
            reviewId: review.reviewId || review.id || `REV-${index + 1}`,
            id: review.reviewId || review.id || `REV-${index + 1}`,
            customerId: review.customerId || 'USER-1',
            itemId: review.itemId || 'ITEM-1',
            rating: Number(review.rating || 5),
            comment: review.comment || review.text || '',
            text: review.comment || review.text || '',
            createdAt: review.createdAt || new Date().toISOString()
        }));
        nextDB.carts = nextDB.carts || [];
        recalculateDB(nextDB);
        return nextDB;
    }

    function recalculateDB(nextDB) {
        nextDB.restaurants.forEach(restaurant => {
            restaurant.menuItems = nextDB.menuItems.filter(item => item.restaurantId === restaurant.restaurantId).map(item => item.itemId);
            const restaurantOrders = nextDB.orders.filter(order => order.items.some(item => item.restaurantId === restaurant.restaurantId));
            restaurant.totalOrders = restaurantOrders.length;
            restaurant.revenue = restaurantOrders.reduce((sum, order) => sum + order.items.filter(item => item.restaurantId === restaurant.restaurantId).reduce((rowSum, item) => rowSum + Number(item.price || 0) * Number(item.quantity || 1), 0), 0);
        });
        nextDB.deliveryAgents.forEach(partner => {
            partner.activeOrders = nextDB.orders.filter(order => order.assignedDeliveryPartner === partner.deliveryId && order.orderStatus !== 'Delivered').map(order => order.orderId);
            partner.completedOrders = nextDB.orders.filter(order => order.assignedDeliveryPartner === partner.deliveryId && order.orderStatus === 'Delivered').map(order => order.orderId);
            partner.earnings = partner.completedOrders.length * 45;
        });
    }

    const readDB = () => normalizeDB(JSON.parse(localStorage.getItem(DB_KEY) || 'null') || {});
    const writeDB = (db) => localStorage.setItem(DB_KEY, JSON.stringify(normalizeDB(db)));
    let db = readDB();
    writeDB(db);

    let selectedAuthRole = 'Customer';
    let selectedAuthMode = 'login';
    let currentOtp = '';
    let selectedPayment = 'UPI';
    let selectedRating = 5;
    let currentDiscount = 0;
    let referralDiscount = 0;

    function qs(id) { return document.getElementById(id); }
    function money(value) { return `Rs ${Number(value || 0).toLocaleString('en-IN')}`; }
    function toast(message) {
        const container = qs('toast-container');
        if (!container) return;
        const toastEl = document.createElement('div');
        toastEl.className = 'custom-toast glass-panel';
        toastEl.innerHTML = `<i class="fa-solid fa-bell text-orange"></i><span>${message}</span>`;
        container.appendChild(toastEl);
        setTimeout(() => {
            toastEl.style.animation = 'toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
            setTimeout(() => toastEl.remove(), 400);
        }, 2800);
    }
    function openModal(id) { qs(id)?.classList.add('open'); }
    function closeModal(id) { qs(id)?.classList.remove('open'); }
    function saveSession(roleOrUser, email) {
        const user = typeof roleOrUser === 'object' ? roleOrUser : db.users.find(u => u.email === email && u.role === roleOrUser);
        const session = {
            userId: user?.userId,
            role: user?.role || roleOrUser,
            email: user?.email || email,
            loginAt: Date.now(),
            expiresAt: Date.now() + SESSION_LIMIT_MS
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        renderSession();
    }
    function getSession() {
        const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
        if (!session) return null;
        if (Date.now() > session.expiresAt) {
            localStorage.removeItem(SESSION_KEY);
            toast('Session timeout simulated. Please login again.');
            return null;
        }
        return session;
    }
    function getActiveUser() {
        const session = getSession();
        return db.users.find(user => user.userId === session?.userId || user.email === session?.email) || db.users[0];
    }
    function nextId(prefix) {
        return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
    }

    function renderSession() {
        const session = getSession();
        const title = qs('session-role-title');
        const copy = qs('session-role-copy');
        if (!title || !copy) return;
        if (session) {
            title.textContent = `${session.role} session active`;
            copy.textContent = `${session.email} is remembered after refresh. Session timeout is simulated after 12 minutes.`;
        } else {
            title.textContent = 'Guest access active';
            copy.textContent = 'Login or create an account to unlock role based dashboards, saved addresses, order history, and simulated DBMS records.';
        }
    }

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
    });

    document.querySelectorAll('.category-pill[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            let items = [...db.menuItems];
            const filter = btn.dataset.filter;
            if (filter === 'veg') items = items.filter(item => item.vegOrNonVeg === 'Veg');
            else if (filter === 'non-veg') items = items.filter(item => item.vegOrNonVeg === 'Non-Veg');
            else if (filter === 'price-low') items.sort((a, b) => a.price - b.price);
            else if (filter === 'top-rated') items.sort((a, b) => b.rating - a.rating);
            else if (filter !== 'all') items = items.filter(item => item.category === filter);
            renderDbMenu(items);
        });
    });

    window.addEventListener('foodexpress:cart-sync', (event) => {
        const user = getActiveUser();
        const existingCart = db.carts.find(cartRow => cartRow.customerId === user.userId);
        const syncedCart = { customerId: user.userId, items: (event.detail.cart || []).map(item => ({ itemId: `ITEM-${item.id}`, quantity: item.quantity, price: item.price, itemName: item.name })), updatedAt: new Date().toISOString() };
        if (existingCart) Object.assign(existingCart, syncedCart);
        else db.carts.push(syncedCart);
        writeDB(db);
    });

    document.querySelectorAll('.auth-open-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedAuthRole = btn.dataset.authRole;
            selectedAuthMode = btn.dataset.authMode;
            qs('auth-modal-title').textContent = `${selectedAuthRole} ${selectedAuthMode === 'signup' ? 'Signup' : 'Login'}`;
            qs('auth-modal-copy').textContent = 'Use any valid email/password, send OTP, then continue. Admin accepts admin@foodexpress.in.';
            qs('auth-name').style.display = selectedAuthMode === 'signup' ? 'block' : 'none';
            openModal('auth-modal');
        });
    });

    document.querySelectorAll('.portal-login-form').forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            const role = form.getAttribute('data-login-type') || 'Customer';
            const firstInput = form.querySelector('input');
            let user = db.users.find(u => u.role === role && (u.email === firstInput?.value || u.email === `${role.toLowerCase().replaceAll(' ', '')}@foodexpress.in`));
            if (!user) {
                const userId = nextId('USER');
                user = { userId, id: userId, name: `${role} Demo`, email: firstInput?.value || `${role.toLowerCase().replaceAll(' ', '')}@foodexpress.in`, password: '1234', role, phone: '', address: '', createdAt: new Date().toISOString(), status: 'Active' };
                db.users.push(user);
                writeDB(db);
            }
            saveSession(user);
            renderAll();
            toast(`LOGIN validated from USERS table: ${user.email}`);
        }, true);
    });

    qs('send-otp-btn')?.addEventListener('click', () => {
        currentOtp = String(Math.floor(100000 + Math.random() * 900000));
        qs('auth-otp').value = currentOtp;
        toast(`OTP simulation generated: ${currentOtp}`);
    });
    qs('forgot-password-btn')?.addEventListener('click', () => {
        alert('Forgot password simulation: reset link sent and temporary OTP generated for this demo.');
    });
    qs('auth-modal-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = qs('auth-email').value.trim();
        const pass = qs('auth-password').value.trim();
        const otp = qs('auth-otp').value.trim();
        if (!email.includes('@') || pass.length < 4) return toast('Enter a valid email and 4+ character password.');
        if (!currentOtp || otp !== currentOtp) return toast('OTP verification failed. Send OTP first.');
        let user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (selectedAuthMode === 'signup') {
            if (user) return toast('User already exists. Login instead.');
            const userId = nextId('USER');
            user = { userId, id: userId, name: qs('auth-name').value || 'FoodExpress User', email, password: pass, role: selectedAuthRole, phone: '', address: '', createdAt: new Date().toISOString(), status: 'Active' };
            db.users.push(user);
            db.logs.unshift(`INSERT USERS ${userId}`);
            writeDB(db);
        } else {
            if (!user || user.password !== pass || user.role !== selectedAuthRole) return toast('Login failed: email, password, or role mismatch.');
            if (user.status === 'Banned') return toast('Login blocked: user is banned.');
        }
        saveSession(user);
        closeModal('auth-modal');
        renderAll();
        toast(`${selectedAuthRole} access verified and stored.`);
    });
    qs('logout-btn')?.addEventListener('click', () => {
        localStorage.removeItem(SESSION_KEY);
        renderSession();
        toast('Logged out from simulated session.');
    });

    function renderMiniList(id, items) {
        const root = qs(id);
        if (!root) return;
        root.innerHTML = items.map(item => `<div class="mini-card">${item}</div>`).join('');
    }
    function renderTable(id, rows) {
        const root = qs(id);
        if (!root) return;
        root.innerHTML = rows.join('');
    }
    function renderCharts(id, values) {
        const root = qs(id);
        if (!root) return;
        const max = Math.max(...values.map(v => v.value));
        root.innerHTML = values.map(v => `<div class="chart-bar" style="height:${Math.max(18, (v.value / max) * 100)}%"><span>${v.label}</span></div>`).join('');
    }

    function renderCustomer() {
        const user = getActiveUser();
        const localCart = JSON.parse(localStorage.getItem('foodExpressCart') || '[]');
        const existingCart = db.carts.find(cartRow => cartRow.customerId === user.userId);
        const syncedCart = { customerId: user.userId, items: localCart.map(item => ({ itemId: `ITEM-${item.id}`, quantity: item.quantity, price: item.price, itemName: item.name })), updatedAt: new Date().toISOString() };
        if (existingCart) Object.assign(existingCart, syncedCart);
        else db.carts.push(syncedCart);
        const wishlistRows = db.wishlist.filter(row => typeof row === 'object' && row.customerId === user.userId);
        renderMiniList('recommended-list', db.menuItems.slice().sort((a, b) => b.rating - a.rating).slice(0, 3).map(item => `<div class="mini-card-row"><strong>${item.itemName}</strong><button class="mini-action-btn wishlist-add" data-item-id="${item.itemId}" data-name="${item.itemName}"><i class="fa-solid fa-heart"></i></button></div><p>${item.vegOrNonVeg} / ${money(item.price)} / ${item.rating} rating</p>`));
        renderMiniList('address-list', [`<div class="mini-card-row"><strong>${user.address || 'No address saved'}</strong><button class="mini-action-btn remove-address" data-index="0"><i class="fa-solid fa-trash"></i></button></div><p>Stored in USERS.address</p>`]);
        renderMiniList('wishlist-list', wishlistRows.map(row => db.menuItems.find(item => item.itemId === row.itemId)).filter(Boolean).map(item => `<strong>${item.itemName}</strong><p>Favorite dish saved as customer-item relationship.</p>`));
        const count = qs('wishlist-count');
        if (count) count.textContent = `${wishlistRows.length} saved`;
        renderTable('order-history-list', db.orders.filter(o => o.customerId === user.userId).slice(-5).reverse().map(o => `<div class="admin-row"><span>#${o.orderId}</span><span>${o.item}<br>${money(o.total)}</span><strong>${o.orderStatus}</strong></div>`));
    }

    function renderAdmin() {
        const revenue = db.payments.reduce((sum, p) => sum + Number(p.amount || 0), 0);
        if (qs('admin-users-count')) qs('admin-users-count').textContent = db.users.length;
        if (qs('admin-restaurants-count')) qs('admin-restaurants-count').textContent = db.restaurants.length;
        if (qs('admin-riders-count')) qs('admin-riders-count').textContent = db.deliveryAgents.length;
        if (qs('admin-revenue-count')) qs('admin-revenue-count').textContent = money(revenue);
        const revenueFallback = document.querySelector('#admin .admin-dashboard-grid .admin-stat-card:nth-child(4) h3');
        if (revenueFallback) revenueFallback.textContent = money(revenue);
        renderTable('payment-records-table', db.payments.map(p => `<div class="admin-row"><span>${p.paymentId}</span><span>${p.paymentType} / ${money(p.amount)}<br>${p.transactionDate.slice(0, 10)}</span><strong>${p.paymentStatus}</strong></div>`));
        renderTable('manage-users-table', db.users.map(u => `<div class="admin-row"><span>${u.name}</span><span>${u.role}<br>${u.email}</span><strong><button class="admin-action-btn user-ban-toggle" data-id="${u.userId}">${u.status}</button></strong></div>`));
        renderMiniList('fraud-alert-list', ['Multiple COD attempts flagged', 'High coupon usage from same device'].map(x => `<strong>${x}</strong><p>Fraud alert simulation record</p>`));
        renderMiniList('complaint-list', db.complaints.map(x => `<strong>${x}</strong><p>Complaint management queue</p>`));
        renderMiniList('activity-log-list', db.logs.map(x => `<strong>${x}</strong><p>${new Date().toLocaleTimeString()}</p>`));
        renderCharts('revenue-chart', db.restaurants.map(r => ({ label: r.restaurantName.split(' ')[0], value: r.revenue || 1 })));
    }

    function renderRestaurant() {
        const restaurant = db.restaurants.find(r => r.restaurantId === getActiveUser().restaurantId) || db.restaurants[0];
        const items = db.menuItems.filter(item => item.restaurantId === restaurant.restaurantId);
        const restaurantOrders = db.orders.filter(order => order.items.some(item => item.restaurantId === restaurant.restaurantId));
        renderTable('restaurant-menu-table', items.map(item => `<div class="admin-row"><span>${item.itemName}</span><span>${item.stock} stock / ${money(item.price)}</span><strong><button class="admin-action-btn menu-toggle" data-id="${item.itemId}">${item.available ? 'Available' : 'Hidden'}</button><button class="mini-action-btn menu-delete" data-id="${item.itemId}" aria-label="Delete ${item.itemName}"><i class="fa-solid fa-trash"></i></button></strong></div>`));
        renderTable('incoming-orders-table', restaurantOrders.map(o => `<div class="admin-row"><span>${o.orderId}</span><span>${o.item}</span><strong>${o.orderStatus}</strong></div>`));
        renderMiniList('restaurant-stats-list', [`<strong>${money(restaurant.revenue)}</strong><p>Total stored revenue</p>`, `<strong>${restaurantOrders.filter(o => o.orderStatus !== 'Delivered').length}</strong><p>Pending orders</p>`, `<strong>${restaurantOrders.filter(o => o.orderStatus === 'Delivered').length}</strong><p>Completed orders</p>`]);
        renderMiniList('restaurant-profile-list', [`<strong>${restaurant.restaurantName}</strong><p>${restaurant.category}</p>`, `<strong>${restaurant.ownerName}</strong><p>Owner field</p>`, `<strong>${restaurant.menuItems.length}</strong><p>Related menu items</p>`]);
        renderCharts('sales-chart', items.slice(0, 5).map(item => ({ label: item.itemName.split(' ')[0], value: item.sold || 1 })));
    }

    function renderDelivery() {
        const partner = db.deliveryAgents.find(p => p.deliveryId === getActiveUser().deliveryId) || db.deliveryAgents[0];
        const active = db.orders.filter(o => o.assignedDeliveryPartner === partner.deliveryId && o.orderStatus !== 'Delivered');
        if (qs('active-delivery-count')) qs('active-delivery-count').textContent = active.length;
        if (qs('rider-earnings')) qs('rider-earnings').textContent = money(partner.earnings);
        if (qs('availability-label')) qs('availability-label').textContent = partner.availability;
        renderTable('assigned-deliveries-table', active.map(o => `<div class="admin-row"><span>${o.orderId}</span><span>${o.item}<br>${(Math.random() * 5 + 1).toFixed(1)} km estimated</span><strong><button class="admin-action-btn delivery-status" data-id="${o.orderId}">${o.orderStatus}</button></strong></div>`));
        renderMiniList('delivery-history-list', db.orders.filter(o => o.assignedDeliveryPartner === partner.deliveryId && o.orderStatus === 'Delivered').map(o => `<strong>${o.orderId} delivered</strong><p>${o.item} / earnings credited</p>`));
    }

    function renderNotifications() {
        renderMiniList('notification-list', db.notifications.map(n => `<strong>${n}</strong><p>Real-time notification simulation</p>`));
        const count = qs('notification-count');
        if (count) count.textContent = db.notifications.length;
    }

    function renderDbMenu(items = db.menuItems) {
        const grid = qs('menu-items-grid');
        if (!grid) return;
        grid.innerHTML = items.filter(item => item.available !== false).map(item => `
            <div class="menu-item-card glass-panel reveal active" data-category="${item.category}" data-diet="${item.vegOrNonVeg === 'Non-Veg' ? 'non-veg' : 'veg'}" data-price="${item.price}" data-rating="${item.rating}">
                <div class="item-img-container">
                    <img src="${item.image}" alt="${item.itemName}" class="item-img">
                    <div class="item-glass-overlay">
                        <button class="btn-quick-add" data-id="${item.id}" data-item-id="${item.itemId}" data-name="${item.itemName}" data-price="${Number(item.price).toFixed(2)}" data-image="${item.image}">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <span class="dish-tag">${item.vegOrNonVeg} - ${item.category.replaceAll('-', ' ')}</span>
                </div>
                <div class="item-info">
                    <div class="item-rating-row">
                        <span class="item-rating"><i class="fa-solid fa-star text-gold"></i> ${Number(item.rating).toFixed(1)} (${Math.max(20, item.sold + 40)})</span>
                        <span class="item-time"><i class="fa-solid fa-bolt text-orange"></i> ${item.deliveryTime} Min</span>
                    </div>
                    <h3>${item.itemName}</h3>
                    <p class="item-desc">Freshly prepared by a partner restaurant and stored in the MENU ITEMS table.</p>
                    <div class="item-footer">
                        <span class="item-price">&#8377;${Number(item.price).toFixed(2)}</span>
                        <button class="btn btn-primary btn-sm btn-add-to-cart magnetic-target" data-id="${item.id}" data-item-id="${item.itemId}" data-name="${item.itemName}" data-price="${Number(item.price).toFixed(2)}" data-image="${item.image}">
                            <span>Add to Basket</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderAll() {
        db = readDB();
        renderDbMenu();
        renderSession();
        renderCustomer();
        renderAdmin();
        renderRestaurant();
        renderDelivery();
        renderNotifications();
    }

    qs('food-search-input')?.addEventListener('input', (event) => {
        const q = event.target.value.toLowerCase();
        const matches = db.menuItems.filter(item => item.name.toLowerCase().includes(q) || item.category.includes(q)).slice(0, 5);
        qs('search-suggestions').innerHTML = matches.map(item => `<button class="suggestion-chip" data-search="${item.name}">${item.name}</button>`).join('');
        document.querySelectorAll('.menu-item-card').forEach(card => {
            card.style.display = !q || card.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
        });
    });
    qs('search-suggestions')?.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-search]');
        if (!btn) return;
        qs('food-search-input').value = btn.dataset.search;
        toast(`Live search selected ${btn.dataset.search}.`);
    });
    qs('add-address-btn')?.addEventListener('click', () => {
        const address = prompt('Add delivery address');
        if (!address) return;
        const user = db.users.find(u => u.userId === getActiveUser().userId);
        if (user) user.address = address;
        writeDB(db);
        renderCustomer();
        toast('Address saved to USERS table.');
    });
    document.addEventListener('click', (event) => {
        const addButton = event.target.closest('.btn-add-to-cart, .btn-quick-add');
        if (addButton && addButton.dataset.itemId) {
            const itemId = Number(addButton.dataset.itemId.replace('ITEM-', ''));
            if (window.addFoodToCart) window.addFoodToCart(itemId, addButton.dataset.name, Number(addButton.dataset.price), addButton.dataset.image);
            const user = getActiveUser();
            const localCart = JSON.parse(localStorage.getItem('foodExpressCart') || '[]');
            const existingCart = db.carts.find(cartRow => cartRow.customerId === user.userId);
            const dbCart = { customerId: user.userId, items: localCart.map(item => ({ itemId: `ITEM-${item.id}`, quantity: item.quantity, price: item.price, itemName: item.name })), updatedAt: new Date().toISOString() };
            if (existingCart) Object.assign(existingCart, dbCart);
            else db.carts.push(dbCart);
            writeDB(db);
        }
        const wishlist = event.target.closest('.wishlist-add');
        if (wishlist) {
            const user = getActiveUser();
            const itemId = wishlist.dataset.itemId || db.menuItems.find(item => item.itemName === wishlist.dataset.name || item.name === wishlist.dataset.name)?.itemId;
            db.wishlist = db.wishlist.filter(row => typeof row === 'object');
            if (itemId && !db.wishlist.some(row => row.customerId === user.userId && row.itemId === itemId)) db.wishlist.push({ customerId: user.userId, itemId, createdAt: new Date().toISOString() });
            writeDB(db);
            renderCustomer();
            toast('Dish saved to wishlist table.');
        }
        const address = event.target.closest('.remove-address');
        if (address) {
            const user = db.users.find(u => u.userId === getActiveUser().userId);
            if (user) user.address = '';
            writeDB(db);
            renderCustomer();
            toast('Address cleared from USERS table.');
        }
        const ban = event.target.closest('.user-ban-toggle');
        if (ban) {
            const user = db.users.find(u => u.userId == ban.dataset.id);
            user.status = user.status === 'Active' ? 'Banned' : 'Active';
            db.logs.unshift(`${user.name} ${user.status.toLowerCase()} by admin`);
            writeDB(db);
            renderAll();
        }
        const menuToggle = event.target.closest('.menu-toggle');
        if (menuToggle) {
            const item = db.menuItems.find(i => i.itemId == menuToggle.dataset.id || i.id == menuToggle.dataset.id);
            item.available = !item.available;
            writeDB(db);
            renderAll();
            toast(`${item.name} availability updated.`);
        }
        const menuDelete = event.target.closest('.menu-delete');
        if (menuDelete) {
            db.menuItems = db.menuItems.filter(item => item.itemId !== menuDelete.dataset.id);
            db.logs.unshift(`DELETE MENU_ITEMS ${menuDelete.dataset.id}`);
            writeDB(db);
            renderAll();
            toast('Menu item deleted from MENU ITEMS table.');
        }
        const delivery = event.target.closest('.delivery-status');
        if (delivery) {
            const order = db.orders.find(o => o.orderId === delivery.dataset.id || o.id === delivery.dataset.id);
            const flow = ['Preparing', 'Picked Up', 'On The Way', 'Delivered'];
            order.orderStatus = flow[Math.min(flow.indexOf(order.orderStatus) + 1, flow.length - 1)] || 'Picked Up';
            order.status = order.orderStatus;
            if (order.orderStatus === 'Delivered') {
                const payment = db.payments.find(p => p.orderId === order.orderId);
                if (payment && payment.paymentStatus === 'Pending COD') {
                    payment.paymentStatus = 'Collected';
                    payment.status = 'Collected';
                }
            }
            writeDB(db);
            renderAll();
            startTracking(order.orderStatus);
        }
    });

    qs('food-item-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = qs('food-name-field').value.trim();
        const price = Number(qs('food-price-field').value);
        const category = qs('food-category-field').value.trim() || 'signature';
        if (!name || !price) return toast('Food item name and price are required.');
        const restaurantId = getActiveUser().restaurantId || db.restaurants[0].restaurantId;
        const existing = db.menuItems.find(i => i.itemName.toLowerCase() === name.toLowerCase());
        if (existing) Object.assign(existing, { name, itemName: name, price, category, restaurantId, available: true });
        else {
            const itemId = nextId('ITEM');
            db.menuItems.push({ itemId, id: Number(Date.now().toString().slice(-6)), itemName: name, name, category, vegOrNonVeg: 'Veg', price, rating: 4.2, deliveryTime: 25, stock: 10, image: qs('food-image-preview')?.querySelector('img')?.src || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80', restaurantId, available: true, sold: 0 });
        }
        db.logs.unshift(`${existing ? 'UPDATE' : 'INSERT'} MENU_ITEMS ${name}`);
        writeDB(db);
        renderAll();
        event.target.reset();
        toast('Restaurant menu table updated.');
    });
    qs('food-image-field')?.addEventListener('change', (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => qs('food-image-preview').innerHTML = `<img src="${reader.result}" alt="Food preview">`;
        reader.readAsDataURL(file);
    });

    qs('apply-coupon-btn')?.addEventListener('click', () => {
        const code = qs('coupon-input').value.trim().toUpperCase();
        const coupon = db.coupons.find(c => c.code === code);
        if (!coupon) return toast('Coupon not found.');
        currentDiscount = coupon.discount || 0;
        toast(`${code} coupon applied.`);
    });
    qs('apply-referral-btn')?.addEventListener('click', () => {
        referralDiscount = qs('referral-input').value.trim().toUpperCase() === 'FRIEND100' ? 100 : 0;
        toast(referralDiscount ? 'Referral discount applied.' : 'Referral code invalid.');
    });
    qs('btn-checkout')?.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const totalText = qs('cost-total')?.textContent || '0';
        if (Number(totalText.replace(/[^0-9.]/g, '')) <= 0) return toast('Your cart is empty.');
        const user = getActiveUser();
        const localCart = JSON.parse(localStorage.getItem('foodExpressCart') || '[]');
        const existingCart = db.carts.find(cartRow => cartRow.customerId === user.userId);
        const dbCart = { customerId: user.userId, items: localCart.map(item => ({ itemId: `ITEM-${item.id}`, quantity: item.quantity, price: item.price, itemName: item.name })), updatedAt: new Date().toISOString() };
        if (existingCart) Object.assign(existingCart, dbCart);
        else db.carts.push(dbCart);
        writeDB(db);
        qs('checkout-addresses').innerHTML = `<div class="mini-card active"><strong>${user.address || 'No address saved'}</strong><p>Delivery address from USERS table</p></div>`;
        openModal('checkout-modal');
    }, true);
    document.querySelectorAll('[data-payment]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-payment]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPayment = btn.dataset.payment;
        });
    });
    qs('confirm-order-btn')?.addEventListener('click', () => {
        const user = getActiveUser();
        const cart = JSON.parse(localStorage.getItem('foodExpressCart') || '[]');
        if (!cart.length) return toast('Cart table has no rows.');
        const items = cart.map(cartItem => {
            const menuItem = db.menuItems.find(item => item.itemId === `ITEM-${cartItem.id}` || item.itemName === cartItem.name);
            return { itemId: menuItem?.itemId || `ITEM-${cartItem.id}`, itemName: menuItem?.itemName || cartItem.name, restaurantId: menuItem?.restaurantId || db.restaurants[0].restaurantId, price: Number(menuItem?.price || cartItem.price), quantity: Number(cartItem.quantity || 1) };
        });
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const gst = subtotal * 0.05;
        const deliveryFee = 39;
        const finalTotal = Math.max(0, subtotal + gst + deliveryFee - currentDiscount - referralDiscount);
        const id = nextId('ORD');
        const partner = db.deliveryAgents.filter(agent => agent.availability === 'Online').sort((a, b) => a.activeOrders.length - b.activeOrders.length)[0] || db.deliveryAgents[0];
        const order = { orderId: id, id, customerId: user.userId, customer: user.email, items, quantities: Object.fromEntries(items.map(item => [item.itemId, item.quantity])), subtotal, gst, deliveryFee, total: finalTotal, paymentMethod: selectedPayment, payment: selectedPayment, orderStatus: 'Preparing', status: 'Preparing', assignedDeliveryPartner: partner.deliveryId, createdAt: new Date().toISOString(), item: items.map(item => `${item.itemName} x${item.quantity}`).join(', ') };
        db.orders.push(order);
        const paymentId = nextId('PAY');
        db.payments.push({ paymentId, id: paymentId, orderId: id, customerId: user.userId, amount: finalTotal, paymentType: selectedPayment, mode: selectedPayment, paymentStatus: selectedPayment === 'Cash on Delivery' ? 'Pending COD' : 'Paid', status: selectedPayment === 'Cash on Delivery' ? 'Pending COD' : 'Paid', transactionDate: new Date().toISOString() });
        items.forEach(orderItem => {
            const menuItem = db.menuItems.find(item => item.itemId === orderItem.itemId);
            if (menuItem) menuItem.stock = Math.max(0, menuItem.stock - orderItem.quantity);
        });
        const cartRow = db.carts.find(row => row.customerId === user.userId);
        if (cartRow) cartRow.items = [];
        localStorage.setItem('foodExpressCart', '[]');
        if (window.clearFoodCart) window.clearFoodCart();
        db.notifications.unshift(`New order confirmed: ${id}`);
        db.logs.unshift(`INSERT ORDERS ${id}; INSERT PAYMENTS; UPDATE MENU_ITEMS stock`);
        writeDB(db);
        closeModal('checkout-modal');
        openInvoice(order);
        renderAll();
        startTracking('Preparing');
        toast('Order confirmed and DB tables updated.');
    });
    function openInvoice(order) {
        const payment = db.payments.find(p => p.orderId === order.orderId);
        qs('invoice-box').innerHTML = `<h3>${order.orderId}</h3><p>Customer: ${order.customer || order.customerId}</p><p>Items: ${order.item}</p><p>Payment: ${payment?.paymentType || order.paymentMethod} / ${payment?.paymentStatus || 'Pending'}</p><p>GST: ${money(order.gst)} | Delivery: ${money(order.deliveryFee)}</p><p>Status: ${order.orderStatus}</p><p>Coupon discount: ${money(currentDiscount + referralDiscount)}</p><p><strong>Total: ${money(order.total)}</strong></p>`;
        openModal('invoice-modal');
    }
    qs('open-invoice-btn')?.addEventListener('click', () => {
        const order = db.orders[db.orders.length - 1];
        if (order) openInvoice(order);
    });

    function startTracking(status) {
        const states = ['Placed', 'Preparing', 'Picked Up', 'Delivered'];
        let index = Math.max(1, states.indexOf(status));
        const steps = Array.from(document.querySelectorAll('#tracking-steps span'));
        const progress = qs('tracking-progress');
        const copy = qs('tracking-copy');
        const apply = () => {
            steps.forEach((s, i) => s.classList.toggle('active', i <= index));
            if (progress) progress.style.width = `${((index + 1) / states.length) * 100}%`;
            if (copy) copy.textContent = `Order status: ${states[index]}. Distance and ETA are simulated live.`;
        };
        apply();
        const timer = setInterval(() => {
            index += 1;
            apply();
            if (index >= states.length - 1) clearInterval(timer);
        }, 5000);
    }
    let etaSeconds = 18 * 60;
    setInterval(() => {
        etaSeconds = Math.max(0, etaSeconds - 1);
        const min = String(Math.floor(etaSeconds / 60)).padStart(2, '0');
        const sec = String(etaSeconds % 60).padStart(2, '0');
        if (qs('eta-timer')) qs('eta-timer').innerHTML = `<i class="fa-solid fa-clock"></i> ${min}:${sec}`;
    }, 1000);

    qs('submit-review-btn')?.addEventListener('click', () => {
        const text = qs('review-input').value.trim();
        if (!text) return toast('Review text is required.');
        const user = getActiveUser();
        const latestItem = db.orders.filter(order => order.customerId === user.userId).flatMap(order => order.items).at(-1) || db.menuItems[0];
        const reviewId = nextId('REV');
        db.reviews.push({ reviewId, id: reviewId, customerId: user.userId, itemId: latestItem.itemId, rating: selectedRating, comment: text, text, createdAt: new Date().toISOString() });
        const itemReviews = db.reviews.filter(review => review.itemId === latestItem.itemId);
        const menuItem = db.menuItems.find(item => item.itemId === latestItem.itemId);
        if (menuItem) menuItem.rating = Number((itemReviews.reduce((sum, review) => sum + review.rating, 0) / itemReviews.length).toFixed(1));
        db.logs.unshift(`INSERT REVIEWS ${reviewId}`);
        writeDB(db);
        qs('review-input').value = '';
        renderAll();
        toast('Review saved to REVIEWS table and rating recalculated.');
    });
    document.querySelectorAll('#rating-stars button').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedRating = Number(btn.dataset.rating);
            document.querySelectorAll('#rating-stars button').forEach(b => b.classList.toggle('active', Number(b.dataset.rating) <= selectedRating));
        });
    });

    qs('availability-toggle')?.addEventListener('click', () => {
        const partner = db.deliveryAgents.find(p => p.deliveryId === getActiveUser().deliveryId) || db.deliveryAgents[0];
        partner.availability = partner.availability === 'Online' ? 'Offline' : 'Online';
        partner.active = partner.availability === 'Online';
        writeDB(db);
        renderDelivery();
        toast(`DELIVERY_PARTNERS availability changed to ${partner.availability}.`);
    });
    qs('theme-toggle')?.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem(THEME_KEY, document.body.classList.contains('light-mode') ? 'light' : 'dark');
        toast('Theme preference saved.');
    });
    if (localStorage.getItem(THEME_KEY) === 'light') document.body.classList.add('light-mode');
    qs('language-selector')?.addEventListener('change', (event) => toast(`Language switched to ${event.target.value} for demo labels.`));
    qs('profile-settings-btn')?.addEventListener('click', () => openModal('auth-modal'));
    qs('notification-toggle')?.addEventListener('click', () => qs('notification-center')?.classList.toggle('open'));
    qs('notification-close')?.addEventListener('click', () => qs('notification-center')?.classList.remove('open'));

    qs('chatbot-toggle')?.addEventListener('click', () => qs('chatbot-panel')?.classList.toggle('open'));
    qs('chatbot-close')?.addEventListener('click', () => qs('chatbot-panel')?.classList.remove('open'));
    function chat(message, fromUser = false) {
        const root = qs('chatbot-messages');
        if (!root) return;
        root.insertAdjacentHTML('beforeend', `<div class="mini-card"><strong>${fromUser ? 'You' : 'FoodExpress AI'}</strong><p>${message}</p></div>`);
        root.scrollTop = root.scrollHeight;
    }
    chat('I can suggest dishes, explain coupons, or summarize your latest order.');
    qs('chatbot-send')?.addEventListener('click', () => {
        const input = qs('chatbot-input');
        const text = input.value.trim();
        if (!text) return;
        chat(text, true);
        input.value = '';
        const reply = text.toLowerCase().includes('coupon') ? 'Try GOLD50 or FEAST10 in the cart coupon field.' : text.toLowerCase().includes('track') ? 'Your latest order tracker is active in the customer console.' : 'Recommended: Chicken Biryani with Mango Lassi.';
        setTimeout(() => chat(reply), 450);
    });

    setInterval(() => {
        db.notifications.unshift(`Live notification ${new Date().toLocaleTimeString()}: route grid refreshed`);
        db.notifications = db.notifications.slice(0, 6);
        writeDB(db);
        renderNotifications();
    }, 25000);

    renderAll();
});
