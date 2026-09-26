/* =========================================================
   GREEN HAVEN NURSERY
   FINAL CONSOLIDATED JAVASCRIPT
   One shared script for all website pages
========================================================= */

const GREEN_HAVEN_PRODUCTS = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        category: "indoor",
        categoryName: "Indoor Plant",
        price: 34,
        oldPrice: 42,
        rating: 4.9,
        reviews: 48,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1614594575815-3b09e8e1a6b0?auto=format&fit=crop&w=900&q=85",
        description: "A beautiful tropical plant with large split leaves. Perfect for bright indoor spaces and modern interiors."
    },
    {
        id: 2,
        name: "Snake Plant",
        category: "indoor",
        categoryName: "Indoor Plant",
        price: 26,
        oldPrice: null,
        rating: 4.8,
        reviews: 63,
        badge: "Easy Care",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=900&q=85",
        description: "A hardy indoor favorite that needs very little care and adds a clean natural touch to your home."
    },
    {
        id: 3,
        name: "Peace Lily",
        category: "flowering",
        categoryName: "Flowering Plant",
        price: 29,
        oldPrice: 35,
        rating: 4.7,
        reviews: 37,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85",
        description: "Elegant green leaves and beautiful white flowers make the Peace Lily a wonderful indoor choice."
    },
    {
        id: 4,
        name: "Aloe Vera",
        category: "succulent",
        categoryName: "Succulent",
        price: 18,
        oldPrice: null,
        rating: 4.9,
        reviews: 51,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85",
        description: "A low-maintenance succulent with fresh green leaves that works beautifully in sunny spaces."
    },
    {
        id: 5,
        name: "Fiddle Leaf Fig",
        category: "indoor",
        categoryName: "Indoor Plant",
        price: 48,
        oldPrice: 55,
        rating: 4.6,
        reviews: 29,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b4d?auto=format&fit=crop&w=900&q=85",
        description: "A statement plant with large glossy leaves that brings height and character to living spaces."
    },
    {
        id: 6,
        name: "Lavender Plant",
        category: "flowering",
        categoryName: "Flowering Plant",
        price: 22,
        oldPrice: null,
        rating: 4.8,
        reviews: 42,
        badge: "Fresh",
        image: "https://images.unsplash.com/photo-1611909023032-2d6b313d9c6d?auto=format&fit=crop&w=900&q=85",
        description: "Fragrant lavender with delicate purple flowers, ideal for sunny windows, balconies and gardens."
    },
    {
        id: 7,
        name: "Rubber Plant",
        category: "indoor",
        categoryName: "Indoor Plant",
        price: 39,
        oldPrice: null,
        rating: 4.8,
        reviews: 34,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1597055181300-04a2e8c0c7c4?auto=format&fit=crop&w=900&q=85",
        description: "A stylish foliage plant with deep green leaves that looks excellent in contemporary interiors."
    },
    {
        id: 8,
        name: "Echeveria Succulent",
        category: "succulent",
        categoryName: "Succulent",
        price: 16,
        oldPrice: 20,
        rating: 4.9,
        reviews: 58,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=85",
        description: "A compact rosette-shaped succulent that is easy to care for and perfect for desks and shelves."
    },
    {
        id: 9,
        name: "Bird of Paradise",
        category: "outdoor",
        categoryName: "Outdoor Plant",
        price: 59,
        oldPrice: null,
        rating: 4.7,
        reviews: 25,
        badge: "Statement",
        image: "https://images.unsplash.com/photo-1616876192321-44d1f2d5f9d4?auto=format&fit=crop&w=900&q=85",
        description: "A dramatic tropical plant that adds height, texture and a luxurious garden feel."
    },
    {
        id: 10,
        name: "Terracotta Planter",
        category: "planter",
        categoryName: "Pot & Planter",
        price: 24,
        oldPrice: null,
        rating: 4.8,
        reviews: 31,
        badge: "Handmade",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
        description: "A timeless terracotta planter designed to complement both indoor and outdoor plant collections."
    },
    {
        id: 11,
        name: "Boston Fern",
        category: "outdoor",
        categoryName: "Outdoor Plant",
        price: 31,
        oldPrice: 37,
        rating: 4.6,
        reviews: 22,
        badge: "Fresh",
        image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=900&q=85",
        description: "A lush fern with soft cascading foliage that brings a fresh woodland feeling to shaded areas."
    },
    {
        id: 12,
        name: "Ceramic Plant Pot",
        category: "planter",
        categoryName: "Pot & Planter",
        price: 28,
        oldPrice: null,
        rating: 4.9,
        reviews: 45,
        badge: "New",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
        description: "A modern ceramic pot with a clean finish, ideal for small indoor plants and stylish home displays."
    }
];


const products = GREEN_HAVEN_PRODUCTS;

/* =========================================================
   JSON DATA LAYER
   JSON is the master source for products for now.
   localStorage acts as the temporary persistent data layer.
========================================================= */

const GREEN_HAVEN_PRODUCT_STORAGE_KEY = "greenHavenProducts";
const GREEN_HAVEN_PRODUCTS_JSON = "data/products.json";

const GREEN_HAVEN_DEFAULT_STOCK = {
    1: 15,
    2: 20,
    3: 12,
    4: 25,
    5: 8,
    6: 14,
    7: 10,
    8: 18,
    9: 6,
    10: 16,
    11: 9,
    12: 13
};

function normalizeProduct(product) {
    const normalized = {
        ...product,
        id: Number(product.id),
        price: Number(product.price) || 0,
        oldPrice: product.oldPrice === null || product.oldPrice === ""
            ? null
            : Number(product.oldPrice),
        rating: Number(product.rating) || 0,
        reviews: Number(product.reviews) || 0,
        stock: Math.max(0, Number(product.stock ?? GREEN_HAVEN_DEFAULT_STOCK[Number(product.id)] ?? 0)),
        status: product.status || "active"
    };

    normalized.categoryName = normalized.categoryName || "Plant";
    return normalized;
}

function saveProductsData(productList) {
    const cleanProducts = productList.map(normalizeProduct);
    localStorage.setItem(
        GREEN_HAVEN_PRODUCT_STORAGE_KEY,
        JSON.stringify(cleanProducts)
    );
    return cleanProducts;
}

function getProductStock(productId) {
    const product = getProduct(productId);
    return product ? Math.max(0, Number(product.stock) || 0) : 0;
}

function isProductAvailable(productId) {
    const product = getProduct(productId);
    return Boolean(product && product.status !== "inactive" && getProductStock(productId) > 0);
}

function refreshProductReferences() {
    products.forEach(product => {
        product.stock = Math.max(0, Number(product.stock ?? GREEN_HAVEN_DEFAULT_STOCK[product.id] ?? 0));
        product.status = product.status || "active";
    });
}

let greenHavenDataStoreReady = null;

function ensureGreenHavenDataStore() {
    if (window.GreenHavenDataStore) {
        return Promise.resolve(window.GreenHavenDataStore);
    }

    if (greenHavenDataStoreReady) {
        return greenHavenDataStoreReady;
    }

    greenHavenDataStoreReady = new Promise(resolve => {
        const existingScript = document.querySelector(
            'script[data-green-haven-data-store="true"]'
        );

        if (existingScript) {
            existingScript.addEventListener("load", () => {
                resolve(window.GreenHavenDataStore || null);
            }, { once: true });

            existingScript.addEventListener("error", () => {
                resolve(null);
            }, { once: true });

            return;
        }

        const script = document.createElement("script");

        script.src = "assets/js/data-store.js";
        script.async = false;
        script.dataset.greenHavenDataStore = "true";

        script.onload = () => {
            resolve(window.GreenHavenDataStore || null);
        };

        script.onerror = () => {
            console.warn(
                "Green Haven Data Store could not be loaded. Using local fallback."
            );
            resolve(null);
        };

        document.head.appendChild(script);
    });

    return greenHavenDataStoreReady;
}

async function initProductData() {
    const dataStore = await ensureGreenHavenDataStore();

    if (dataStore) {
        try {
            const data = await dataStore.initialize();

            if (Array.isArray(data.products) && data.products.length) {
                products.splice(
                    0,
                    products.length,
                    ...data.products.map(normalizeProduct)
                );

                refreshProductReferences();
                return;
            }
        } catch (error) {
            console.warn(
                "Green Haven Data Store product initialization failed:",
                error
            );
        }
    }

    /*
     * Legacy fallback.
     * This keeps the existing website usable if data-store.js
     * cannot be loaded.
     */
    let storedProducts = null;

    try {
        const parsed = JSON.parse(
            localStorage.getItem(
                GREEN_HAVEN_PRODUCT_STORAGE_KEY
            )
        );

        if (Array.isArray(parsed) && parsed.length) {
            storedProducts = parsed;
        }
    } catch (error) {
        storedProducts = null;
    }

    if (!storedProducts) {
        try {
            const response = await fetch(
                GREEN_HAVEN_PRODUCTS_JSON,
                {
                    cache: "no-store"
                }
            );

            if (response.ok) {
                const data = await response.json();

                const jsonProducts =
                    Array.isArray(data.products)
                        ? data.products
                        : data;

                if (
                    Array.isArray(jsonProducts) &&
                    jsonProducts.length
                ) {
                    storedProducts = jsonProducts;

                    localStorage.setItem(
                        GREEN_HAVEN_PRODUCT_STORAGE_KEY,
                        JSON.stringify(
                            jsonProducts.map(
                                normalizeProduct
                            )
                        )
                    );
                }
            }
        } catch (error) {
            /*
             * Local file mode can block fetch.
             * The built-in catalog remains available.
             */
        }
    }

    const sourceProducts =
        storedProducts ||
        GREEN_HAVEN_PRODUCTS.map(
            product => ({
                ...product,
                stock:
                    GREEN_HAVEN_DEFAULT_STOCK[
                        product.id
                    ] ?? 0,
                status: "active"
            })
        );

    products.splice(
        0,
        products.length,
        ...sourceProducts.map(
            normalizeProduct
        )
    );

    refreshProductReferences();
}


function updateStoredProductStock(
    productId,
    newStock
) {
    const cleanStock =
        Math.max(
            0,
            Number(newStock) || 0
        );

    const dataStore =
        window.GreenHavenDataStore;

    if (dataStore) {
        const updated =
            dataStore.updateProductStock(
                productId,
                cleanStock
            );

        if (updated) {
            const localProduct =
                getProduct(productId);

            if (localProduct) {
                localProduct.stock =
                    cleanStock;
            }

            return true;
        }

        return false;
    }

    const product =
        getProduct(productId);

    if (!product) {
        return false;
    }

    product.stock =
        cleanStock;

    const storedProducts =
        products.map(
            normalizeProduct
        );

    localStorage.setItem(
        GREEN_HAVEN_PRODUCT_STORAGE_KEY,
        JSON.stringify(
            storedProducts
        )
    );

    return true;
}


function getStoredOrders() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getOrders();
    }

    return getStoredArray(
        "greenHavenOrders"
    );
}

function saveStoredOrders(orders) {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.saveOrders(
            orders
        );
    }

    return saveStoredArray(
        "greenHavenOrders",
        orders
    );
}


function getStoredArray(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return Array.isArray(value) ? value : [];
    } catch (error) {
        return [];
    }
}

function saveStoredArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
    return getStoredArray("greenHavenCart");
}

function saveCart(cart) {
    saveStoredArray("greenHavenCart", cart);
}

function getWishlist() {
    return getStoredArray("greenHavenWishlist")
        .map(Number)
        .filter(Number.isFinite);
}

function saveWishlist(wishlist) {
    const cleanWishlist = [...new Set(
        wishlist.map(Number).filter(Number.isFinite)
    )];

    saveStoredArray("greenHavenWishlist", cleanWishlist);
}

function getProduct(productId) {
    return products.find(product => Number(product.id) === Number(productId)) || null;
}

function formatPrice(price) {
    return `$${Number(price).toFixed(2)}`;
}

function generateStars(rating) {
    let stars = "";
    const roundedRating = Math.round(Number(rating));

    for (let i = 1; i <= 5; i++) {
        stars += i <= roundedRating
            ? '<i class="bi bi-star-fill"></i>'
            : '<i class="bi bi-star"></i>';
    }

    return stars;
}

function showToast(message) {
    const toast = document.getElementById("toastMessage");

    if (!toast) {
        return;
    }

    const text = toast.querySelector("span");

    if (text) {
        text.textContent = message;
    }

    toast.classList.add("show");

    clearTimeout(window.greenHavenToastTimer);

    window.greenHavenToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {
    const button = document.getElementById("mobileMenuBtn");
    const closeButton = document.getElementById("mobileMenuClose");
    const mobileNav = document.getElementById("mobileNav");

    if (!button || !mobileNav) {
        return;
    }

    const closeMenu = () => {
        mobileNav.classList.remove("open");
        mobileNav.setAttribute("aria-hidden", "true");
        button.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    };

    button.addEventListener("click", () => {
        mobileNav.classList.add("open");
        mobileNav.setAttribute("aria-hidden", "false");
        button.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeMenu);
    }

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

/* =========================================================
   HEADER
========================================================= */

function initHeaderScroll() {
    const header = document.getElementById("siteHeader");

    if (!header) {
        return;
    }

    const updateHeader = () => {
        header.classList.toggle("header-scrolled", window.scrollY > 30);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
}

/* =========================================================
   COUNTERS
========================================================= */

function animateCounterElement(counter) {
    const target = Number(counter.dataset.target);

    if (!Number.isFinite(target)) {
        return;
    }

    const duration = 1600;
    const startTime = performance.now();

    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        counter.textContent = Math.floor(target * eased).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}

function initCounters() {
    const counters = document.querySelectorAll(".counter-number, .about-counter");

    if (!counters.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        counters.forEach(animateCounterElement);
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            animateCounterElement(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.35 });

    counters.forEach(counter => observer.observe(counter));
}

/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

    document.querySelectorAll(".cart-button .icon-count, #cartCount").forEach(element => {
        element.textContent = total;
    });
}

/* =========================================================
   WISHLIST
========================================================= */

function updateWishlistCount() {
    const count = getWishlist().length;

    document.querySelectorAll("#wishlistCount, .wishlist-button .icon-count").forEach(element => {
        element.textContent = count;
    });
}

function updateWishlistButtons() {
    const wishlist = getWishlist();

    document.querySelectorAll(".product-card[data-product-id]").forEach(card => {
        const id = Number(card.dataset.productId);
        const button = card.querySelector(".product-wishlist");

        if (!button) {
            return;
        }

        const active = wishlist.includes(id);
        button.classList.toggle("active", active);

        const icon = button.querySelector("i");

        if (icon) {
            icon.className = active ? "bi bi-heart-fill" : "bi bi-heart";
        }
    });
}

function toggleWishlist(productId) {
    const product = getProduct(productId);
    let wishlist = getWishlist();

    if (wishlist.includes(Number(productId))) {
        wishlist = wishlist.filter(id => Number(id) !== Number(productId));
        showToast(`${product ? product.name : "Plant"} removed from wishlist`);
    } else {
        wishlist.push(Number(productId));
        showToast(`${product ? product.name : "Plant"} saved to wishlist`);
    }

    saveWishlist(wishlist);
    updateWishlistCount();
    updateWishlistButtons();

    if (typeof window.greenHavenShopRefresh === "function") {
        window.greenHavenShopRefresh();
    }
}

/* =========================================================
   CART ACTIONS
========================================================= */

function addToCart(productId, quantity = 1) {
    const product = getProduct(productId);

    if (!product) {
        return false;
    }

    const requestedQuantity = Math.max(1, Number(quantity) || 1);
    const availableStock = getProductStock(productId);

    if (availableStock <= 0) {
        showToast(`${product.name} is currently sold out`);
        return false;
    }

    const cart = getCart();
    const existing = cart.find(item => Number(item.id) === Number(productId));
    const currentQuantity = existing ? Number(existing.quantity) || 0 : 0;
    const newQuantity = currentQuantity + requestedQuantity;

    if (newQuantity > availableStock) {
        const remaining = Math.max(0, availableStock - currentQuantity);

        if (remaining === 0) {
            showToast(`Only ${availableStock} ${product.name} available in stock`);
        } else {
            showToast(`Only ${remaining} more ${product.name} available`);
        }

        return false;
    }

    if (existing) {
        existing.quantity = newQuantity;
        existing.name = product.name;
        existing.price = product.price;
        existing.image = product.image;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: requestedQuantity
        });
    }

    saveCart(cart);
    updateCartCount();
    showToast(`${product.name} added to cart`);

    if (typeof window.greenHavenShopRefresh === "function") {
        window.greenHavenShopRefresh();
    }

    return true;
}

function changeCartItemQuantity(productId, amount) {
    const cart = getCart();
    const item = cart.find(entry => Number(entry.id) === Number(productId));

    if (!item) {
        return false;
    }

    const product = getProduct(productId);
    const currentQuantity = Number(item.quantity) || 0;
    const requestedQuantity = currentQuantity + Number(amount);

    if (requestedQuantity > 0 && product) {
        const stock = getProductStock(productId);

        if (requestedQuantity > stock) {
            showToast(`Only ${stock} ${product.name} available in stock`);
            return false;
        }
    }

    item.quantity = requestedQuantity;
    const updatedCart = cart.filter(entry => Number(entry.quantity) > 0);

    saveCart(updatedCart);
    updateCartCount();

    if (typeof window.greenHavenShopRefresh === "function") {
        window.greenHavenShopRefresh();
    }

    if (typeof window.greenHavenProductDetailRefreshCart === "function") {
        window.greenHavenProductDetailRefreshCart();
    }

    return true;
}

function removeFromCart(productId) {
    const cart = getCart().filter(item => Number(item.id) !== Number(productId));

    saveCart(cart);
    updateCartCount();

    if (typeof window.greenHavenShopRefresh === "function") {
        window.greenHavenShopRefresh();
    }

    if (typeof window.greenHavenProductDetailRefreshCart === "function") {
        window.greenHavenProductDetailRefreshCart();
    }
}

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

function renderFeaturedProducts() {
    const container = document.getElementById("featuredProducts");

    if (!container) {
        return;
    }

    container.innerHTML = products.slice(0, 4).map(product => `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image-wrap">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                <button class="product-wishlist" type="button" aria-label="Add ${product.name} to wishlist" data-wishlist="${product.id}">
                    <i class="bi bi-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card-content">
                <span class="product-category">${product.categoryName}</span>
                <span class="product-stock ${isProductAvailable(product.id) ? "in-stock" : "sold-out"}">${isProductAvailable(product.id) ? `In Stock: ${product.stock}` : "Sold Out"}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${generateStars(product.rating)} <span>(${product.reviews})</span></div>
                <div class="product-bottom">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <button class="add-cart-btn ${!isProductAvailable(product.id) ? "disabled" : ""}" type="button" aria-label="${isProductAvailable(product.id) ? `Add ${product.name} to cart` : `${product.name} is sold out`}" data-add-cart="${product.id}" ${!isProductAvailable(product.id) ? "disabled" : ""}>
                        <i class="bi ${isProductAvailable(product.id) ? "bi-bag-plus" : "bi-x-circle"}"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    if (container.dataset.greenHavenActionsReady !== "true") {
        container.dataset.greenHavenActionsReady = "true";

        container.addEventListener("click", event => {
            const wishlistButton = event.target.closest("[data-wishlist]");
            const addButton = event.target.closest("[data-add-cart]");

            if (wishlistButton) {
                event.preventDefault();
                toggleWishlist(Number(wishlistButton.dataset.wishlist));
                return;
            }

            if (addButton) {
                event.preventDefault();
                addToCart(Number(addButton.dataset.addCart), 1);
            }
        });
    }

    updateWishlistButtons();
}

/* =========================================================
   NEWSLETTER
========================================================= */

function initNewsletter() {
    const form = document.getElementById("newsletterForm");

    if (!form || form.dataset.greenHavenReady === "true") {
        return;
    }

    form.dataset.greenHavenReady = "true";

    form.addEventListener("submit", event => {
        event.preventDefault();

        const email = form.querySelector('input[type="email"]');

        if (!email || !email.value.trim()) {
            return;
        }

        showToast("Thanks for joining our newsletter!");
        form.reset();
    });
}

/* =========================================================
   SHOP PAGE
========================================================= */

function initShopPage() {
    const productGrid = document.getElementById("productGrid");

    if (!productGrid) {
        return;
    }

    const searchInput = document.getElementById("productSearch");
    const sortSelect = document.getElementById("sortProducts");
    const filters = Array.from(document.querySelectorAll(".category-filter"));
    const resultText = document.getElementById("productResultText");
    const clearFilters = document.getElementById("clearFilters");
    const emptyReset = document.getElementById("emptyResetBtn");
    const emptyState = document.getElementById("shopEmpty");

    const cartOpen = document.getElementById("cartOpenBtn");
    const cartClose = document.getElementById("cartCloseBtn");
    const cartDrawer = document.getElementById("cartDrawer");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const cartFooter = document.getElementById("cartFooter");
    const cartSubtotal = document.getElementById("cartSubtotal");
    const continueTop = document.getElementById("continueShoppingBtn");
    const continueBottom = document.getElementById("continueShoppingBottom");
    const checkout = document.getElementById("checkoutBtn");

    const quickViewOverlay = document.getElementById("quickViewOverlay");
    const quickViewContent = document.getElementById("quickViewContent");
    const quickViewClose = document.getElementById("quickViewClose");

    let currentCategory = "all";
    let currentSearch = "";
    let currentSort = "featured";

    function getFilteredProducts() {
        let filtered = [...products];

        if (currentCategory !== "all") {
            filtered = filtered.filter(product => product.category === currentCategory);
        }

        const searchTerm = currentSearch.trim().toLowerCase();

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.categoryName.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        switch (currentSort) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "name-az":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-za":
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

        return filtered;
    }

    function renderProducts() {
        const filtered = getFilteredProducts();
        const wishlist = getWishlist();

        productGrid.innerHTML = "";

        if (emptyState) {
            emptyState.classList.toggle("show", filtered.length === 0);
        }

        productGrid.style.display = filtered.length ? "grid" : "none";

        filtered.forEach(product => {
            const wishlisted = wishlist.includes(product.id);
            const oldPrice = product.oldPrice
                ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
                : "";

            const card = document.createElement("article");
            card.className = "product-card";
            card.dataset.productId = product.id;

            card.innerHTML = `
                <div class="product-image-wrap">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">

                    ${product.badge
                        ? `<span class="product-badge ${product.badge === "Sale" ? "sale" : ""}">${product.badge}</span>`
                        : ""
                    }

                    <button
                        class="product-wishlist ${wishlisted ? "active" : ""}"
                        type="button"
                        data-wishlist="${product.id}"
                        aria-label="${wishlisted ? "Remove" : "Add"} ${product.name} ${wishlisted ? "from" : "to"} wishlist"
                    >
                        <i class="bi ${wishlisted ? "bi-heart-fill" : "bi-heart"}"></i>
                    </button>

                    <button
                        class="quick-view-btn"
                        type="button"
                        data-quick-view="${product.id}"
                    >
                        Quick View
                    </button>
                </div>

                <div class="product-card-content">
                    <span class="product-category">${product.categoryName}</span>
                    <span class="product-stock ${isProductAvailable(product.id) ? "in-stock" : "sold-out"}">${isProductAvailable(product.id) ? `In Stock: ${product.stock}` : "Sold Out"}</span>
                    <h3 class="product-name">${product.name}</h3>

                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>${product.rating} (${product.reviews})</span>
                    </div>

                    <div class="product-bottom">
                        <div class="product-price">
                            <span class="current-price">${formatPrice(product.price)}</span>
                            ${oldPrice}
                        </div>

                        <button
                            class="add-cart-btn ${!isProductAvailable(product.id) ? "disabled" : ""}"
                            type="button"
                            data-add-cart="${product.id}"
                            aria-label="${isProductAvailable(product.id) ? `Add ${product.name} to cart` : `${product.name} is sold out`}"
                            ${!isProductAvailable(product.id) ? "disabled" : ""}
                        >
                            <i class="bi ${isProductAvailable(product.id) ? "bi-bag-plus" : "bi-x-circle"}"></i>
                        </button>
                    </div>
                </div>
            `;

            productGrid.appendChild(card);
        });

        if (resultText) {
            resultText.innerHTML =
                `Showing <strong>${filtered.length}</strong> of <strong>${products.length}</strong> products`;
        }

        updateWishlistCount();
    }

    function resetFilters() {
        currentCategory = "all";
        currentSearch = "";
        currentSort = "featured";

        if (searchInput) {
            searchInput.value = "";
        }

        if (sortSelect) {
            sortSelect.value = "featured";
        }

        filters.forEach(filter => {
            filter.classList.toggle("active", filter.dataset.category === "all");
        });

        renderProducts();
    }

    function renderCart() {
        if (!cartItems) {
            return;
        }

        const cart = getCart();
        let subtotal = 0;
        let totalQuantity = 0;

        cartItems.innerHTML = "";

        cart.forEach(item => {
            const product = getProduct(item.id);
            const name = product ? product.name : item.name;
            const image = product ? product.image : item.image;
            const price = product ? product.price : Number(item.price);

            subtotal += price * Number(item.quantity);
            totalQuantity += Number(item.quantity);

            const row = document.createElement("div");
            row.className = "cart-product";

            row.innerHTML = `
                <div class="cart-product-image">
                    <img src="${image}" alt="${name}">
                </div>

                <div class="cart-product-info">
                    <h4>${name}</h4>
                    <div class="cart-product-price">${formatPrice(price)}</div>

                    <div class="cart-quantity">
                        <button type="button" data-cart-minus="${item.id}" aria-label="Decrease quantity">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button type="button" data-cart-plus="${item.id}" aria-label="Increase quantity">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>

                <button
                    class="remove-cart-item"
                    type="button"
                    data-remove-cart="${item.id}"
                    aria-label="Remove ${name}"
                >
                    <i class="bi bi-trash3"></i>
                </button>
            `;

            cartItems.appendChild(row);
        });

        if (cartEmpty) {
            cartEmpty.style.display = cart.length ? "none" : "flex";
        }

        if (cartFooter) {
            cartFooter.style.display = cart.length ? "block" : "none";
        }

        if (cartItems) {
            cartItems.style.display = cart.length ? "block" : "none";
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = formatPrice(subtotal);
        }

        if (document.getElementById("cartCount")) {
            document.getElementById("cartCount").textContent = totalQuantity;
        }

        updateCartCount();
    }

    function openCart() {
        if (!cartDrawer || !cartOverlay) {
            return;
        }

        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeCart() {
        if (!cartDrawer || !cartOverlay) {
            return;
        }

        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");

        if (!quickViewOverlay || !quickViewOverlay.classList.contains("active")) {
            document.body.style.overflow = "";
        }
    }

    function openQuickView(productId) {
        const product = getProduct(productId);

        if (!product || !quickViewOverlay || !quickViewContent) {
            return;
        }

        quickViewContent.innerHTML = `
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="quick-view-info">
                    <span class="product-category">${product.categoryName}</span>
                    <h2>${product.name}</h2>

                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>${product.rating} (${product.reviews} reviews)</span>
                    </div>

                    <p>${product.description}</p>

                    <div class="quick-view-price">${formatPrice(product.price)}</div>

                    <button
                        class="btn btn-primary quick-view-add"
                        type="button"
                        data-quick-add="${product.id}"
                        ${!isProductAvailable(product.id) ? "disabled" : ""}
                    >
                        <i class="bi ${isProductAvailable(product.id) ? "bi-bag-plus" : "bi-x-circle"}"></i>
                        ${isProductAvailable(product.id) ? "Add to Cart" : "Sold Out"}
                    </button>
                </div>
            </div>
        `;

        quickViewOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeQuickView() {
        if (!quickViewOverlay) {
            return;
        }

        quickViewOverlay.classList.remove("active");

        if (!cartDrawer || !cartDrawer.classList.contains("active")) {
            document.body.style.overflow = "";
        }
    }

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            filters.forEach(item => item.classList.remove("active"));
            filter.classList.add("active");
            currentCategory = filter.dataset.category || "all";
            renderProducts();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentSearch = searchInput.value;
            renderProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            currentSort = sortSelect.value;
            renderProducts();
        });
    }

    [clearFilters, emptyReset].forEach(button => {
        if (button) {
            button.addEventListener("click", resetFilters);
        }
    });

    productGrid.addEventListener("click", event => {
        const wishlistButton = event.target.closest("[data-wishlist]");
        const addButton = event.target.closest("[data-add-cart]");
        const quickButton = event.target.closest("[data-quick-view]");

        if (wishlistButton) {
            toggleWishlist(Number(wishlistButton.dataset.wishlist));
        }

        if (addButton) {
            addToCart(Number(addButton.dataset.addCart));
            renderCart();
        }

        if (quickButton) {
            openQuickView(Number(quickButton.dataset.quickView));
        }
    });

    if (cartItems) {
        cartItems.addEventListener("click", event => {
            const minus = event.target.closest("[data-cart-minus]");
            const plus = event.target.closest("[data-cart-plus]");
            const remove = event.target.closest("[data-remove-cart]");

            if (minus) {
                changeCartItemQuantity(Number(minus.dataset.cartMinus), -1);
            }

            if (plus) {
                changeCartItemQuantity(Number(plus.dataset.cartPlus), 1);
            }

            if (remove) {
                removeFromCart(Number(remove.dataset.removeCart));
            }

            renderCart();
        });
    }

    if (cartOpen) {
        cartOpen.addEventListener("click", () => {
            renderCart();
            openCart();
        });
    }

    if (cartClose) {
        cartClose.addEventListener("click", closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }

    [continueTop, continueBottom].forEach(button => {
        if (button) {
            button.addEventListener("click", closeCart);
        }
    });

    if (quickViewClose) {
        quickViewClose.addEventListener("click", closeQuickView);
    }

    if (quickViewOverlay) {
        quickViewOverlay.addEventListener("click", event => {
            if (event.target === quickViewOverlay) {
                closeQuickView();
            }
        });
    }

    if (quickViewContent) {
        quickViewContent.addEventListener("click", event => {
            const button = event.target.closest("[data-quick-add]");

            if (!button) {
                return;
            }

            closeQuickView();
            addToCart(Number(button.dataset.quickAdd));
            renderCart();
            openCart();
        });
    }

    if (checkout) {
        checkout.addEventListener("click", () => {
            if (!getCart().length) {
                showToast("Your cart is empty.");
                return;
            }

            window.location.href = "checkout.html";
        });
    }

    const headerWishlist = document.getElementById("headerWishlistBtn");

    if (headerWishlist) {
        headerWishlist.addEventListener("click", () => {
            const wishlist = getWishlist();

            if (!wishlist.length) {
                showToast("Your wishlist is currently empty.");
                return;
            }

            currentCategory = "all";
            currentSearch = "";
            currentSort = "featured";

            if (searchInput) {
                searchInput.value = "";
            }

            if (sortSelect) {
                sortSelect.value = "featured";
            }

            filters.forEach(filter => {
                filter.classList.toggle("active", filter.dataset.category === "all");
            });

            const wishlistProducts = products.filter(product => wishlist.includes(product.id));

            productGrid.innerHTML = "";

            wishlistProducts.forEach(product => {
                const card = document.createElement("article");
                card.className = "product-card";
                card.dataset.productId = product.id;

                card.innerHTML = `
                    <div class="product-image-wrap">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <span class="product-badge">Wishlist</span>

                        <button
                            class="product-wishlist active"
                            type="button"
                            data-wishlist="${product.id}"
                            aria-label="Remove ${product.name} from wishlist"
                        >
                            <i class="bi bi-heart-fill"></i>
                        </button>

                        <button
                            class="quick-view-btn"
                            type="button"
                            data-quick-view="${product.id}"
                        >
                            Quick View
                        </button>
                    </div>

                    <div class="product-card-content">
                        <span class="product-category">${product.categoryName}</span>
                        <h3 class="product-name">${product.name}</h3>

                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span>${product.rating}</span>
                        </div>

                        <div class="product-bottom">
                            <div class="product-price">
                                <span class="current-price">${formatPrice(product.price)}</span>
                            </div>

                            <button
                                class="add-cart-btn"
                                type="button"
                                data-add-cart="${product.id}"
                            >
                                <i class="bi bi-bag-plus"></i>
                            </button>
                        </div>
                    </div>
                `;

                productGrid.appendChild(card);
            });

            if (emptyState) {
                emptyState.classList.remove("show");
            }

            productGrid.style.display = "grid";

            if (resultText) {
                resultText.innerHTML =
                    `Showing <strong>${wishlistProducts.length}</strong> wishlist products`;
            }
        });
    }

    window.greenHavenShopRefresh = () => {
        renderProducts();
        renderCart();
    };

    renderProducts();
    renderCart();
}

/* =========================================================
   PRODUCT DETAILS PAGE
========================================================= */

function initProductDetailsPage() {
    const mainImage = document.getElementById("mainProductImage");

    if (!mainImage) {
        return;
    }

    const thumbnails = document.querySelectorAll(".product-thumbnail");
    const quantityElement = document.getElementById("productQuantity");
    const quantityMinus = document.getElementById("quantityMinus");
    const quantityPlus = document.getElementById("quantityPlus");
    const sizeOptions = document.querySelectorAll(".size-option");
    const wishlistButton = document.getElementById("productWishlistBtn");
    const addButton = document.getElementById("addProductToCart");
    const buyButton = document.getElementById("buyNowBtn");

    let quantity = 1;
    const productId = Number(document.body.dataset.productId || 1);
    const currentProduct = getProduct(productId) || products[0];

    if (!currentProduct) {
        return;
    }

    const currentStock = getProductStock(currentProduct.id);

    if (currentStock <= 0) {
        quantity = 0;
    }

    if (addButton && currentStock <= 0) {
        addButton.disabled = true;
        addButton.innerHTML = '<i class="bi bi-x-circle"></i> Sold Out';
    }

    if (buyButton && currentStock <= 0) {
        buyButton.disabled = true;
        buyButton.innerHTML = '<i class="bi bi-x-circle"></i> Sold Out';
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const image = thumbnail.dataset.image;

            if (image) {
                mainImage.src = image;
            }

            thumbnails.forEach(item => item.classList.remove("active"));
            thumbnail.classList.add("active");
        });
    });

    if (quantityMinus && quantityElement) {
        quantityMinus.addEventListener("click", () => {
            quantity = Math.max(1, quantity - 1);
            quantityElement.textContent = quantity;
        });
    }

    if (quantityPlus && quantityElement) {
        quantityPlus.addEventListener("click", () => {
            quantity = Math.min(getProductStock(currentProduct.id), quantity + 1);
            quantityElement.textContent = quantity;
        });
    }

    sizeOptions.forEach(option => {
        option.addEventListener("click", () => {
            sizeOptions.forEach(item => item.classList.remove("active"));
            option.classList.add("active");
        });
    });

    function updateProductWishlist() {
        if (!wishlistButton) {
            return;
        }

        const active = getWishlist().includes(currentProduct.id);

        wishlistButton.classList.toggle("active", active);
        wishlistButton.innerHTML = active
            ? '<i class="bi bi-heart-fill"></i>'
            : '<i class="bi bi-heart"></i>';
    }

    if (wishlistButton) {
        wishlistButton.addEventListener("click", () => {
            toggleWishlist(currentProduct.id);
            updateProductWishlist();
        });
    }

    function addCurrentProduct() {
        addToCart(currentProduct.id, quantity);

        const drawer = document.getElementById("cartDrawer");
        const overlay = document.getElementById("cartOverlay");

        if (drawer && overlay) {
            drawer.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        if (typeof window.greenHavenProductDetailRefreshCart === "function") {
            window.greenHavenProductDetailRefreshCart();
        }
    }

    if (addButton) {
        addButton.addEventListener("click", addCurrentProduct);
    }

    if (buyButton) {
        buyButton.addEventListener("click", addCurrentProduct);
    }

    function refreshDetailCart() {
        const cart = getCart();
        const cartItems = document.getElementById("cartItems");
        const cartEmpty = document.getElementById("cartEmpty");
        const cartFooter = document.getElementById("cartFooter");
        const cartSubtotal = document.getElementById("cartSubtotal");

        if (!cartItems) {
            return;
        }

        let subtotal = 0;

        cartItems.innerHTML = "";

        cart.forEach(item => {
            const product = getProduct(item.id);
            const name = product ? product.name : item.name;
            const image = product ? product.image : item.image;
            const price = product ? product.price : Number(item.price);

            subtotal += price * Number(item.quantity);

            const row = document.createElement("div");
            row.className = "cart-product";

            row.innerHTML = `
                <div class="cart-product-image">
                    <img src="${image}" alt="${name}">
                </div>

                <div class="cart-product-info">
                    <h4>${name}</h4>
                    <div class="cart-product-price">${formatPrice(price)}</div>

                    <div class="cart-quantity">
                        <button type="button" data-detail-minus="${item.id}">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button type="button" data-detail-plus="${item.id}">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>

                <button type="button" class="remove-cart-item" data-detail-remove="${item.id}">
                    <i class="bi bi-trash3"></i>
                </button>
            `;

            cartItems.appendChild(row);
        });

        if (cartEmpty) {
            cartEmpty.style.display = cart.length ? "none" : "flex";
        }

        if (cartFooter) {
            cartFooter.style.display = cart.length ? "block" : "none";
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = formatPrice(subtotal);
        }

        updateCartCount();
    }

    const cartItems = document.getElementById("cartItems");
    const cartOpen = document.getElementById("cartOpenBtn");
    const cartClose = document.getElementById("cartCloseBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartDrawer = document.getElementById("cartDrawer");

    if (cartOpen) {
        cartOpen.addEventListener("click", () => {
            refreshDetailCart();

            if (cartDrawer && cartOverlay) {
                cartDrawer.classList.add("active");
                cartOverlay.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    }

    const closeDetailCart = () => {
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.remove("active");
            cartOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    };

    if (cartClose) {
        cartClose.addEventListener("click", closeDetailCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeDetailCart);
    }

    if (cartItems) {
        cartItems.addEventListener("click", event => {
            const minus = event.target.closest("[data-detail-minus]");
            const plus = event.target.closest("[data-detail-plus]");
            const remove = event.target.closest("[data-detail-remove]");

            if (minus) {
                changeCartItemQuantity(Number(minus.dataset.detailMinus), -1);
            }

            if (plus) {
                changeCartItemQuantity(Number(plus.dataset.detailPlus), 1);
            }

            if (remove) {
                removeFromCart(Number(remove.dataset.detailRemove));
            }

            refreshDetailCart();
        });
    }

    window.greenHavenProductDetailRefreshCart = refreshDetailCart;

    updateProductWishlist();
    refreshDetailCart();
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function initAboutPage() {
    const section = document.querySelector(".about-stats-section");
    const counters = document.querySelectorAll(".about-counter");

    if (!section || !counters.length || !("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) {
            return;
        }

        counters.forEach(animateCounterElement);
        observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(section);
}

/* =========================================================
   FAQ
   Shared by Services, Contact and any future FAQ section
========================================================= */

function initFaq() {
    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (!question) {
            return;
        }

        question.setAttribute(
            "aria-expanded",
            item.classList.contains("active") ? "true" : "false"
        );

        question.addEventListener("click", () => {
            const wasActive = item.classList.contains("active");

            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");

                const otherQuestion = otherItem.querySelector(".faq-question");

                if (otherQuestion) {
                    otherQuestion.setAttribute("aria-expanded", "false");
                }
            });

            if (!wasActive) {
                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });
}

/* =========================================================
   SERVICES REVEAL
========================================================= */

function initServiceReveal() {
    const elements = document.querySelectorAll(
        ".service-card, .process-step, .benefit-item, .package-card"
    );

    if (!elements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("service-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("service-visible");
            instance.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    elements.forEach(element => {
        element.classList.add("service-reveal");
        observer.observe(element);
    });
}

/* =========================================================
   GALLERY
========================================================= */

function initGallery() {
    const filters = document.querySelectorAll(".gallery-filter");
    const items = document.querySelectorAll(".gallery-item");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const selected = filter.dataset.filter || "all";

            filters.forEach(button => button.classList.remove("active"));
            filter.classList.add("active");

            items.forEach(item => {
                const category = item.dataset.category || "";

                item.classList.remove("gallery-filter-in");

                if (selected === "all" || selected === category) {
                    item.classList.remove("gallery-hidden");
                    void item.offsetWidth;
                    item.classList.add("gallery-filter-in");
                } else {
                    item.classList.add("gallery-hidden");
                }
            });
        });
    });

    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCategory = document.getElementById("lightboxCategory");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const closeButton = document.getElementById("lightboxClose");
    const previousButton = document.getElementById("lightboxPrev");
    const nextButton = document.getElementById("lightboxNext");

    if (!lightbox || !lightboxImage) {
        return;
    }

    let currentIndex = 0;

    function getVisibleButtons() {
        return Array.from(
            document.querySelectorAll(
                ".gallery-item:not(.gallery-hidden) .gallery-image-button"
            )
        );
    }

    function updateLightbox(index) {
        const buttons = getVisibleButtons();

        if (!buttons.length) {
            return;
        }

        if (index < 0) {
            index = buttons.length - 1;
        }

        if (index >= buttons.length) {
            index = 0;
        }

        currentIndex = index;

        const button = buttons[currentIndex];
        const image = button.querySelector("img");

        if (!image) {
            return;
        }

        const item = button.closest(".gallery-item");
        const category = item ? item.querySelector(".gallery-caption span") : null;
        const title = item ? item.querySelector(".gallery-caption h3") : null;

        lightboxImage.src =
            image.dataset.galleryImage || image.getAttribute("src") || "";

        lightboxImage.alt =
            image.getAttribute("alt") || "Green Haven Nursery gallery image";

        if (lightboxCategory) {
            lightboxCategory.textContent =
                category ? category.textContent : "Green Haven Nursery";
        }

        if (lightboxTitle) {
            lightboxTitle.textContent =
                title ? title.textContent : "Plant Gallery";
        }
    }

    function openLightbox(button) {
        const buttons = getVisibleButtons();
        currentIndex = Math.max(0, buttons.indexOf(button));

        updateLightbox(currentIndex);

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-image-button").forEach(button => {
        button.addEventListener("click", () => openLightbox(button));
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    if (previousButton) {
        previousButton.addEventListener("click", () => {
            updateLightbox(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            updateLightbox(currentIndex + 1);
        });
    }

    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", event => {
        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            updateLightbox(currentIndex - 1);
        }

        if (event.key === "ArrowRight") {
            updateLightbox(currentIndex + 1);
        }
    });
}

/* =========================================================
   CONTACT FORM
========================================================= */

function initContactForm() {
    const form = document.getElementById("greenContactForm");
    const messageBox = document.getElementById("contactFormMessage");

    if (!form || !messageBox) {
        return;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const message = form.querySelector('[name="message"]');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !name ||
            !email ||
            !message ||
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim() ||
            !emailPattern.test(email.value.trim())
        ) {
            messageBox.textContent =
                "Please complete all required fields with a valid email address.";
            messageBox.className = "contact-form-message error";
            messageBox.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        messageBox.textContent =
            "Thank you. Your message has been prepared successfully. Our team will contact you soon.";
        messageBox.className = "contact-form-message success";

        form.reset();
        messageBox.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}




function initImageFallbacks() {
    const fallback = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85";

    document.querySelectorAll("img").forEach(image => {
        image.addEventListener("error", () => {
            if (image.dataset.fallbackApplied === "true") {
                return;
            }
            image.dataset.fallbackApplied = "true";
            image.src = fallback;
        }, { once: true });
    });
}



/* =========================================================
   CART PAGE
========================================================= */

function initCartPage() {

    const cartPageItems = document.getElementById("cartPageItems");
    const cartPageContent = document.getElementById("cartPageContent");
    const cartPageEmpty = document.getElementById("cartPageEmpty");

    if (!cartPageItems || !cartPageContent || !cartPageEmpty) {
        return;
    }

    const cartItemCount = document.getElementById("cartItemCount");
    const cartSummaryItems = document.getElementById("cartSummaryItems");
    const cartSubtotal = document.getElementById("cartPageSubtotal");
    const cartDelivery = document.getElementById("cartPageDelivery");
    const cartTotal = document.getElementById("cartPageTotal");
    const clearCartButton = document.getElementById("clearCartBtn");
    const checkoutLink = document.getElementById("cartPageCheckout");

    const deliveryFee = 7;


    function getPageTotals(cart) {

        let subtotal = 0;
        let quantity = 0;

        cart.forEach(item => {

            const product = getProduct(item.id);

            const price = product
                ? Number(product.price)
                : Number(item.price || 0);

            const itemQuantity = Math.max(
                0,
                Number(item.quantity || 0)
            );

            subtotal += price * itemQuantity;
            quantity += itemQuantity;

        });

        const delivery = subtotal > 0
            ? deliveryFee
            : 0;

        return {
            subtotal,
            delivery,
            total: subtotal + delivery,
            quantity
        };

    }


    function renderCartPage() {

        const cart = getCart();
        const totals = getPageTotals(cart);

        cartPageItems.innerHTML = "";

        cartPageContent.hidden = cart.length === 0;
        cartPageEmpty.hidden = cart.length !== 0;


        if (cartItemCount) {

            cartItemCount.textContent =
                `${totals.quantity} ${
                    totals.quantity === 1
                        ? "item"
                        : "items"
                }`;

        }


        if (cartSummaryItems) {
            cartSummaryItems.textContent =
                totals.quantity;
        }


        if (cartSubtotal) {
            cartSubtotal.textContent =
                formatPrice(totals.subtotal);
        }


        if (cartDelivery) {
            cartDelivery.textContent =
                formatPrice(totals.delivery);
        }


        if (cartTotal) {
            cartTotal.textContent =
                formatPrice(totals.total);
        }


        if (checkoutLink) {

            checkoutLink.setAttribute(
                "aria-disabled",
                cart.length ? "false" : "true"
            );

        }


        cart.forEach(item => {

            const product = getProduct(item.id);

            const name = product
                ? product.name
                : (item.name || "Plant");

            const image = product
                ? product.image
                : (item.image || "");

            const price = product
                ? Number(product.price)
                : Number(item.price || 0);

            const category = product
                ? product.categoryName
                : "Plant";

            const quantity = Math.max(
                1,
                Number(item.quantity || 1)
            );

            const lineTotal =
                price * quantity;


            const row =
                document.createElement("article");

            row.className =
                "cart-page-item";


            row.innerHTML = `

                <div class="cart-page-item-image">

                    <img
                        src="${image}"
                        alt="${name}"
                        loading="lazy"
                    >

                </div>


                <div class="cart-page-item-details">

                    <span class="cart-page-item-category">
                        ${category}
                    </span>

                    <h3 class="cart-page-item-name">
                        ${name}
                    </h3>

                    <span class="cart-page-item-price">
                        ${formatPrice(price)} each
                    </span>


                    <div class="cart-page-item-controls">

                        <div
                            class="cart-page-quantity"
                            aria-label="Quantity for ${name}"
                        >

                            <button
                                type="button"
                                data-page-cart-minus="${item.id}"
                                aria-label="Decrease ${name} quantity"
                            >
                                <i class="bi bi-dash"></i>
                            </button>


                            <span>
                                ${quantity}
                            </span>


                            <button
                                type="button"
                                data-page-cart-plus="${item.id}"
                                aria-label="Increase ${name} quantity"
                            >
                                <i class="bi bi-plus"></i>
                            </button>

                        </div>


                        <button
                            class="cart-page-remove"
                            type="button"
                            data-page-cart-remove="${item.id}"
                        >

                            <i class="bi bi-trash3"></i>

                            Remove

                        </button>

                    </div>

                </div>


                <div class="cart-page-item-total">

                    <strong>
                        ${formatPrice(lineTotal)}
                    </strong>

                </div>

            `;


            cartPageItems.appendChild(row);

        });


        updateCartCount();

    }


    cartPageItems.addEventListener(
        "click",
        event => {

            const minusButton =
                event.target.closest(
                    "[data-page-cart-minus]"
                );

            const plusButton =
                event.target.closest(
                    "[data-page-cart-plus]"
                );

            const removeButton =
                event.target.closest(
                    "[data-page-cart-remove]"
                );


            if (minusButton) {

                changeCartItemQuantity(
                    Number(
                        minusButton.dataset.pageCartMinus
                    ),
                    -1
                );

                renderCartPage();

                return;

            }


            if (plusButton) {

                changeCartItemQuantity(
                    Number(
                        plusButton.dataset.pageCartPlus
                    ),
                    1
                );

                renderCartPage();

                return;

            }


            if (removeButton) {

                const productId =
                    Number(
                        removeButton.dataset.pageCartRemove
                    );

                const product =
                    getProduct(productId);


                removeFromCart(productId);

                renderCartPage();


                showToast(
                    `${product ? product.name : "Item"} removed from cart`
                );

            }

        }
    );


    if (clearCartButton) {

        clearCartButton.addEventListener(
            "click",
            () => {

                if (!getCart().length) {
                    return;
                }

                saveCart([]);

                updateCartCount();

                renderCartPage();

                showToast(
                    "Your cart has been cleared"
                );

            }
        );

    }


    if (checkoutLink) {

        checkoutLink.addEventListener(
            "click",
            event => {

                if (!getCart().length) {

                    event.preventDefault();

                    showToast(
                        "Add a plant before checkout"
                    );

                }

            }
        );

    }


    window.greenHavenCartPageRefresh =
        renderCartPage;


    renderCartPage();

}

/* =========================================================
   CHECKOUT PAGE
========================================================= */

function initCheckoutPage() {
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutEmpty = document.getElementById("checkoutEmpty");
    const checkoutSuccess =
        document.getElementById("orderConfirmation") ||
        document.getElementById("checkoutSuccess");
    const checkoutSubtotal = document.getElementById("checkoutSubtotal");
    const checkoutDelivery = document.getElementById("checkoutDelivery");
    const checkoutTotal = document.getElementById("checkoutTotal");
    const orderNumber = document.getElementById("orderNumber");
    const confirmationTotal = document.getElementById("confirmationTotal");

    if (!checkoutForm || !checkoutItems) {
        return;
    }

    const deliveryFee = 7;

    const findField = (...ids) => {
        for (const id of ids) {
            const byId = document.getElementById(id);
            if (byId) {
                return byId;
            }
        }

        for (const id of ids) {
            const byName = checkoutForm.querySelector(`[name="${id}"]`);
            if (byName) {
                return byName;
            }
        }

        return null;
    };

    const getFieldValue = (...ids) => {
        const field = findField(...ids);
        return field ? field.value.trim() : "";
    };

    function calculateOrder(cart = getCart()) {
        let subtotal = 0;

        cart.forEach(item => {
            const product = getProduct(item.id);
            const price = product
                ? Number(product.price)
                : Number(item.price || 0);
            const quantity = Math.max(1, Number(item.quantity) || 1);

            subtotal += price * quantity;
        });

        const delivery = subtotal > 0 ? deliveryFee : 0;

        return {
            subtotal,
            delivery,
            total: subtotal + delivery
        };
    }

    function renderCheckoutItems() {
        const cart = getCart();

        checkoutItems.innerHTML = "";

        if (!cart.length) {
            checkoutForm.hidden = true;

            if (checkoutEmpty) {
                checkoutEmpty.hidden = false;
            }

            if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(0);
            if (checkoutDelivery) checkoutDelivery.textContent = formatPrice(0);
            if (checkoutTotal) checkoutTotal.textContent = formatPrice(0);
            return;
        }

        checkoutForm.hidden = false;

        if (checkoutEmpty) {
            checkoutEmpty.hidden = true;
        }

        cart.forEach(item => {
            const product = getProduct(item.id);
            const name = product ? product.name : (item.name || "Plant");
            const image = product ? product.image : (item.image || "");
            const price = product ? Number(product.price) : Number(item.price || 0);
            const quantity = Math.max(1, Number(item.quantity) || 1);

            const row = document.createElement("div");
            row.className = "checkout-item";
            row.innerHTML = `
                <div class="checkout-item-image">
                    <img src="${image}" alt="${name}" loading="lazy">
                </div>
                <div class="checkout-item-info">
                    <h3>${name}</h3>
                    <span>${formatPrice(price)} × ${quantity}</span>
                </div>
                <strong class="checkout-item-price">
                    ${formatPrice(price * quantity)}
                </strong>
            `;

            checkoutItems.appendChild(row);
        });

        const totals = calculateOrder(cart);

        if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(totals.subtotal);
        if (checkoutDelivery) checkoutDelivery.textContent = formatPrice(totals.delivery);
        if (checkoutTotal) checkoutTotal.textContent = formatPrice(totals.total);
    }

    function clearErrors() {
        checkoutForm.querySelectorAll(".checkout-error").forEach(error => {
            error.textContent = "";
        });

        checkoutForm.querySelectorAll(".checkout-input-error").forEach(wrapper => {
            wrapper.classList.remove("checkout-input-error");
        });

        checkoutForm.querySelectorAll(".checkout-field-invalid").forEach(field => {
            field.classList.remove("checkout-field-invalid");
        });
    }

    function setFieldError(field, message) {
        if (!field) {
            return;
        }

        field.classList.add("checkout-field-invalid");

        const wrapper = field.closest(".checkout-input-wrapper");
        if (wrapper) {
            wrapper.classList.add("checkout-input-error");
        }

        const error = checkoutForm.querySelector(`[data-error-for="${field.id}"]`);
        if (error) {
            error.textContent = message;
        }
    }

    function validateCheckout() {
        clearErrors();
        let valid = true;
        let firstError = null;

        const requiredFields = [
            {
                field: findField("checkoutName", "fullName", "name"),
                message: "Please enter your full name."
            },
            {
                field: findField("checkoutPhone", "phone"),
                message: "Please enter your phone number."
            },
            {
                field: findField("checkoutCity", "city"),
                message: "Please enter your city."
            },
            {
                field: findField("checkoutAddress", "address"),
                message: "Please enter your delivery address."
            },
            {
                field: findField("checkoutEmail", "email"),
                message: "Please enter your email address."
            }
        ];

        requiredFields.forEach(({ field, message }) => {
            if (!field || !field.value.trim()) {
                setFieldError(field, message);
                valid = false;
                if (!firstError && field) {
                    firstError = field;
                }
            }
        });

        const email = findField("checkoutEmail", "email");
        if (email && email.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {
                setFieldError(email, "Please enter a valid email address.");
                valid = false;
                if (!firstError) {
                    firstError = email;
                }
            }
        }

        if (!valid && firstError) {
            firstError.focus();
            firstError.scrollIntoView({ behavior: "smooth", block: "center" });
            showToast("Please complete the required fields.");
        }

        return valid;
    }

    function generateOrderNumber() {
        if (
            window.GreenHavenDataStore &&
            typeof window.GreenHavenDataStore.generateOrderNumber === "function"
        ) {
            return window.GreenHavenDataStore.generateOrderNumber();
        }

        const stamp = Date.now().toString().slice(-6);
        const random = Math.floor(10 + Math.random() * 90);

        return `GHN-${stamp}${random}`;
    }

    checkoutForm.querySelectorAll('input[name="payment"]').forEach(input => {
        input.addEventListener("change", () => {
            checkoutForm.querySelectorAll(".payment-option").forEach(option => {
                const paymentInput = option.querySelector('input[name="payment"]');
                option.classList.toggle("active", Boolean(paymentInput?.checked));
            });
        });
    });

    checkoutForm.querySelectorAll("input, textarea, select").forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("checkout-field-invalid");

            const wrapper = input.closest(".checkout-input-wrapper");
            if (wrapper) {
                wrapper.classList.remove("checkout-input-error");
            }

            const error = checkoutForm.querySelector(`[data-error-for="${input.id}"]`);
            if (error) {
                error.textContent = "";
            }
        });
    });

    checkoutForm.addEventListener("submit", event => {
        event.preventDefault();

        const cart = getCart();

        if (!cart.length) {
            renderCheckoutItems();
            showToast("Your cart is empty.");
            return;
        }

        if (!validateCheckout()) {
            return;
        }

        const totals = calculateOrder(cart);
        const paymentInput = checkoutForm.querySelector('input[name="payment"]:checked');
        const note = getFieldValue("checkoutNote", "note", "notes");
        const newOrderNumber = generateOrderNumber();

        const order = {
            orderNumber: newOrderNumber,
            createdAt: new Date().toISOString(),
            customer: {
                name: getFieldValue("checkoutName", "fullName", "name"),
                email: getFieldValue("checkoutEmail", "email"),
                phone: getFieldValue("checkoutPhone", "phone"),
                city: getFieldValue("checkoutCity", "city"),
                address: getFieldValue("checkoutAddress", "address"),
                note
            },
            payment: paymentInput
                ? paymentInput.value
                : "Cash on Delivery",
            items: cart.map(item => ({ ...item })),
            subtotal: totals.subtotal,
            delivery: totals.delivery,
            total: totals.total
        };

        // Recheck stock immediately before saving the order.
        const stockProblem = cart.find(item => {
            const product = getProduct(item.id);
            return !product || Number(item.quantity) > getProductStock(item.id);
        });

        if (stockProblem) {
            showToast("One or more products no longer have enough stock. Please review your cart.");
            renderCheckoutItems();
            return;
        }

        const dataStore =
            window.GreenHavenDataStore;

        let createdOrder = null;

        if (dataStore) {
            const transaction =
                dataStore.createOrderTransaction(
                    order
                );

            if (
                !transaction ||
                !transaction.success
            ) {
                showToast(
                    "One or more products no longer have enough stock. Please review your cart."
                );

                renderCheckoutItems();
                return;
            }

            createdOrder =
                transaction.order;
        } else {
            /*
             * Legacy fallback for environments where
             * data-store.js could not be loaded.
             */
            const orders =
                getStoredOrders();

            createdOrder = {
                ...order,
                status: "New"
            };

            orders.push(
                createdOrder
            );

            saveStoredOrders(
                orders
            );

            cart.forEach(item => {
                updateStoredProductStock(
                    item.id,
                    getProductStock(item.id) -
                        Number(item.quantity)
                );
            });

            const customers =
                getStoredArray(
                    "greenHavenCustomers"
                );

            const existingCustomer =
                customers.find(
                    customer =>
                        customer.email ===
                            order.customer.email ||
                        customer.phone ===
                            order.customer.phone
                );

            if (existingCustomer) {
                Object.assign(
                    existingCustomer,
                    {
                        ...order.customer,
                        lastOrderNumber:
                            newOrderNumber,
                        updatedAt:
                            new Date().toISOString()
                    }
                );
            } else {
                customers.push({
                    id:
                        `CUS-${Date.now()}`,
                    ...order.customer,
                    firstOrderNumber:
                        newOrderNumber,
                    createdAt:
                        new Date().toISOString(),
                    updatedAt:
                        new Date().toISOString()
                });
            }

            saveStoredArray(
                "greenHavenCustomers",
                customers
            );
        }

        saveStoredArray(
            "greenHavenLastOrder",
            createdOrder || order
        );

        if (dataStore) {
            dataStore.saveCustomer({
                ...order.customer,
                lastOrderNumber:
                    createdOrder.orderNumber
            });
        }


        saveCart([]);
        updateCartCount();

        if (orderNumber) {
            orderNumber.textContent = newOrderNumber;
        }

        if (confirmationTotal) {
            confirmationTotal.textContent = formatPrice(totals.total);
        }

        checkoutForm.hidden = true;

        if (checkoutEmpty) {
            checkoutEmpty.hidden = true;
        }

        if (checkoutSuccess) {
            checkoutSuccess.hidden = false;
            checkoutSuccess.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        showToast("Your order has been placed successfully.");
    });

    renderCheckoutItems();

    window.greenHavenCheckoutRefresh = renderCheckoutItems;
}

/* =========================================================
   GLOBAL KEYBOARD
========================================================= */

function initGlobalKeyboard() {
    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") {
            return;
        }

        document.querySelectorAll(".cart-drawer.active, .quick-view-overlay.active, .gallery-lightbox.active")
            .forEach(element => element.classList.remove("active"));

        document.querySelectorAll(".cart-overlay.active")
            .forEach(element => element.classList.remove("active"));

        const mobileNav = document.getElementById("mobileNav");

        if (mobileNav) {
            mobileNav.classList.remove("open");
        }

        document.body.style.overflow = "";
    });
}

/* =========================================================
   CENTRAL DATA STORE EVENTS
========================================================= */

window.addEventListener(
    "greenHavenProductsUpdated",
    event => {
        const updatedProducts =
            event.detail &&
            Array.isArray(
                event.detail.products
            )
                ? event.detail.products
                : null;

        if (!updatedProducts) {
            return;
        }

        products.splice(
            0,
            products.length,
            ...updatedProducts.map(
                normalizeProduct
            )
        );

        refreshProductReferences();

        if (
            typeof window.greenHavenShopRefresh ===
            "function"
        ) {
            window.greenHavenShopRefresh();
        }

        if (
            typeof window.greenHavenCartPageRefresh ===
            "function"
        ) {
            window.greenHavenCartPageRefresh();
        }

        if (
            typeof window.greenHavenCheckoutRefresh ===
            "function"
        ) {
            window.greenHavenCheckoutRefresh();
        }
    }
);

/* =========================================================
   CROSS TAB INVENTORY SYNC
========================================================= */

window.addEventListener("storage", async event => {
    if (event.key !== "greenHavenAdminProducts") {
        return;
    }

    const dataStore = await ensureGreenHavenDataStore();

    if (!dataStore) {
        return;
    }

    const latestProducts = dataStore.getProducts();

    products.splice(
        0,
        products.length,
        ...latestProducts.map(normalizeProduct)
    );

    refreshProductReferences();

    if (typeof window.greenHavenShopRefresh === "function") {
        window.greenHavenShopRefresh();
    }

    if (typeof window.greenHavenCartPageRefresh === "function") {
        window.greenHavenCartPageRefresh();
    }

    if (typeof window.greenHavenCheckoutRefresh === "function") {
        window.greenHavenCheckoutRefresh();
    }
});

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {
    await ensureGreenHavenDataStore();
    await initProductData();

    initMobileMenu();
    initHeaderScroll();
    initCartPage();
    initCounters();
    renderFeaturedProducts();
    updateCartCount();
    updateWishlistCount();
    initNewsletter();
    initShopPage();
    initProductDetailsPage();
    initAboutPage();
    initFaq();
    initServiceReveal();
    initGallery();
    initContactForm();
    initCheckoutPage();
    initGlobalKeyboard();
    initImageFallbacks();
});
