<?php
// Start Session & database connection
require_once 'config/db.php';
require_once 'includes/header.php';
// Retrieve search filters from URL parameters
$search = isset($_GET['search']) ? trim($_GET['search']) : '';
$cuisine = isset($_GET['cuisine']) ? trim($_GET['cuisine']) : '';
$high_rated = isset($_GET['high_rated']) ? true : false;
// Prepare dynamic SQL query
$query = "SELECT * FROM restaurants WHERE 1=1";
$params = [];
if (!empty($search)) {
    $query .= " AND (name LIKE ? OR cuisine LIKE ?)";
    $params[] = "%$search%";
    $params[] = "%$search%";
}
if (!empty($cuisine)) {
    $query .= " AND cuisine LIKE ?";
    $params[] = "%$cuisine%";
}
if ($high_rated) {
    $query .= " AND rating >= 4.5";
}
// Order by rating descending by default
$query .= " ORDER BY rating DESC";
try {
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $restaurants = $stmt->fetchAll();
} catch (Exception $e) {
    $restaurants = [];
}
?>
<!-- Browse Header Banner -->
<section class="menu-header-banner" style="background-image: linear-gradient(rgba(10,12,22,0.85), rgba(10,12,22,0.95)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=80')">
    <div class="container" style="text-align: center;">
        <h1 style="font-size: 48px; margin-bottom: 12px;">Browse Restaurants</h1>
        <p style="color: var(--text-secondary); max-width:600px; margin: 0 auto;">Discover the absolute best culinary experiences in your neighborhood. Quick search, filter by dietary choices, or look up elite kitchens.</p>
    </div>
</section>
<!-- Search and Filter Panel -->
<section style="padding: 30px 0 10px 0; background: rgba(255,255,255,0.01); border-bottom: 1px solid var(--border-color);">
    <div class="container">
        <form action="restaurants.php" method="GET" style="display:flex; flex-wrap:wrap; gap: 16px; align-items:center; justify-content:space-between;">
            <!-- Simple text input filter -->
            <div class="search-box" style="flex: 1; min-width: 280px; max-width: 450px; margin: 0;">
                <i class="fa-solid fa-magnifying-glass" style="color: var(--text-secondary); margin-left: 12px; margin-top: 14px; font-size:16px;"></i>
                <input type="text" name="search" placeholder="Type restaurant name or cuisine..." value="<?php echo htmlspecialchars($search); ?>">
                <?php if (!empty($cuisine)): ?>
                    <input type="hidden" name="cuisine" value="<?php echo htmlspecialchars($cuisine); ?>">
                <?php endif; ?>
            </div>
            
            <!-- Quick filters buttons panel -->
            <div style="display:flex; flex-wrap:wrap; gap: 12px;">
                <a href="restaurants.php" class="btn-secondary <?php echo (empty($search) && empty($cuisine) && !$high_rated) ? 'active' : ''; ?>" style="padding: 8px 16px; font-size:13px;">
                    All Kitchens
                </a>
                <a href="restaurants.php?high_rated=1<?php echo !empty($search) ? '&search='.urlencode($search) : ''; ?><?php echo !empty($cuisine) ? '&cuisine='.urlencode($cuisine) : ''; ?>" class="btn-secondary <?php echo $high_rated ? 'active' : ''; ?>" style="padding: 8px 16px; font-size:13px; border-color: <?php echo $high_rated ? 'var(--color-star)' : 'var(--border-color)'; ?>;">
                    <i class="fa-solid fa-star" style="color: var(--color-star); margin-right:4px;"></i> Top Rated (4.5+)
                </a>
                
                <!-- Quick Dropdown select for Cuisine -->
                <select name="cuisine" onchange="this.form.submit()" style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); color: white; padding: 8px 16px; border-radius: var(--radius-sm); font-family: var(--font-inter); outline:none; font-size:13px;">
                    <option value="">Filter by Cuisine</option>
                    <option value="American" <?php echo $cuisine == 'American' ? 'selected' : ''; ?>>American</option>
                    <option value="Italian" <?php echo $cuisine == 'Italian' ? 'selected' : ''; ?>>Italian</option>
                    <option value="Pan-Asian" <?php echo $cuisine == 'Pan-Asian' ? 'selected' : ''; ?>>Pan-Asian</option>
                    <option value="North Indian" <?php echo $cuisine == 'North Indian' ? 'selected' : ''; ?>>North Indian</option>
                    <option value="Desserts" <?php echo $cuisine == 'Desserts' ? 'selected' : ''; ?>>Desserts</option>
                </select>
                
                <?php if (!empty($search) || !empty($cuisine) || $high_rated): ?>
                    <a href="restaurants.php" class="btn-secondary" style="padding: 8px 16px; font-size:13px; color: var(--accent-orange); border-color: rgba(255, 77, 77, 0.3);">
                        <i class="fa-solid fa-rotate-left"></i> Reset
                    </a>
                <?php endif; ?>
            </div>
        </form>
    </div>
</section>
<!-- Active Listings Grid -->
<section style="padding: 60px 0;">
    <div class="container">
        <!-- Display search summaries -->
        <?php if (!empty($search) || !empty($cuisine)): ?>
            <p style="color: var(--text-secondary); margin-bottom: 24px; font-size:15px;">
                Showing matches for: 
                <?php if (!empty($search)) echo 'Search "<strong>' . htmlspecialchars($search) . '</strong>"'; ?>
                <?php if (!empty($search) && !empty($cuisine)) echo ' & '; ?>
                <?php if (!empty($cuisine)) echo 'Cuisine "<strong>' . htmlspecialchars($cuisine) . '</strong>"'; ?>
                <span style="color: var(--text-muted);"> (<?php echo count($restaurants); ?> found)</span>
            </p>
        <?php endif; ?>
        
        <div class="restaurant-grid">
            <?php if (!empty($restaurants)): ?>
                <?php foreach ($restaurants as $restaurant): ?>
                    <!-- Individual Restaurant Card -->
                    <div class="restaurant-card glass-card" onclick="window.location.href='menu.php?id=<?php echo $restaurant['id']; ?>'">
                        <div class="card-img-wrap">
                            <img src="<?php echo htmlspecialchars($restaurant['image_url']); ?>" alt="<?php echo htmlspecialchars($restaurant['name']); ?>">
                            <?php if ($restaurant['rating'] >= 4.5): ?>
                                <span class="tag-badge" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);"><i class="fa-solid fa-medal"></i> Popular</span>
                            <?php endif; ?>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title"><?php echo htmlspecialchars($restaurant['name']); ?></h3>
                            <p class="cuisine"><?php echo htmlspecialchars($restaurant['cuisine']); ?></p>
                            
                            <div class="card-meta">
                                <span class="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <?php echo htmlspecialchars($restaurant['rating']); ?>
                                </span>
                                <span class="delivery-time">
                                    <i class="fa-solid fa-motorcycle" style="color: var(--accent-orange);"></i>
                                    <?php echo htmlspecialchars($restaurant['delivery_time']); ?> mins
                                </span>
                                <span>Min: ₹<?php echo htmlspecialchars($restaurant['min_order']); ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <!-- Search Result Empty State -->
                <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 80px 40px; border-color: rgba(255, 77, 77, 0.15);">
                    <i class="fa-solid fa-utensils" style="font-size: 72px; margin-bottom: 24px; opacity: 0.15;"></i>
                    <h2 style="font-size: 28px; margin-bottom: 10px;">No Restaurants Match Your Criteria</h2>
                    <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 30px auto;">We couldn't find any kitchen matches for your filters. Try search keywords like "burger", "pizza", "wok" or check all kitchens.</p>
                    <a href="restaurants.php" class="btn-primary">View All Kitchens</a>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
<?php require_once 'includes/footer.php'; ?>
