/* =========================================================
   GREEN HAVEN NURSERY
   ADMIN DATA LAYER INTEGRATION
   STEP 3B
========================================================= */

const GH_ADMIN_KEYS = {
    products: "greenHavenAdminProducts",
    orders: "greenHavenOrders",
    customers: "greenHavenCustomers",
    auth: "greenHavenAdminAuth"
};

const GH_CUSTOMER_KEYS = {
    products: "greenHavenProducts",
    orders: "greenHavenOrders",
    customers: "greenHavenCustomers"
};

let greenHavenAdminDataStoreReady = null;
let greenHavenAdminReady = null;

/* =========================================================
   CENTRAL DATA STORE LOADER
========================================================= */

function ensureGreenHavenAdminDataStore() {
    if (window.GreenHavenDataStore) {
        return Promise.resolve(window.GreenHavenDataStore);
    }

    if (greenHavenAdminDataStoreReady) {
        return greenHavenAdminDataStoreReady;
    }

    greenHavenAdminDataStoreReady = new Promise(resolve => {
        const existingScript = document.querySelector(
            'script[data-green-haven-data-store="true"]'
        );

        if (existingScript) {
            existingScript.addEventListener(
                "load",
                () => resolve(window.GreenHavenDataStore || null),
                { once: true }
            );

            existingScript.addEventListener(
                "error",
                () => resolve(null),
                { once: true }
            );

            return;
        }

        const script = document.createElement("script");

        script.src = "../assets/js/data-store.js";
        script.async = false;
        script.dataset.greenHavenDataStore = "true";

        script.onload = () => {
            resolve(window.GreenHavenDataStore || null);
        };

        script.onerror = () => {
            console.warn(
                "Green Haven central data store could not be loaded."
            );
            resolve(null);
        };

        document.head.appendChild(script);
    });

    return greenHavenAdminDataStoreReady;
}

/* =========================================================
   STORAGE HELPERS
========================================================= */

function ghRead(key, fallback = []) {
    try {
        const raw = localStorage.getItem(key);

        if (!raw) {
            return fallback;
        }

        const value = JSON.parse(raw);
        return value ?? fallback;
    } catch (error) {
        console.warn("Green Haven storage read failed:", key, error);
        return fallback;
    }
}

function ghWrite(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Green Haven storage write failed:", key, error);
        return false;
    }
}

function ghProducts() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getProducts();
    }

    return ghRead(GH_ADMIN_KEYS.products, []);
}

function ghOrders() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getOrders();
    }

    return ghRead(GH_ADMIN_KEYS.orders, []);
}

function ghCustomers() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getCustomers();
    }

    return ghRead(GH_ADMIN_KEYS.customers, []);
}

/* =========================================================
   INITIALIZATION
========================================================= */

function ghSeedProducts() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getProducts();
    }

    if (localStorage.getItem(GH_ADMIN_KEYS.products)) {
        return ghProducts();
    }

    if (Array.isArray(window.GREEN_HAVEN_PRODUCTS_SEED)) {
        ghWrite(
            GH_ADMIN_KEYS.products,
            window.GREEN_HAVEN_PRODUCTS_SEED
        );
        return ghProducts();
    }

    if (Array.isArray(window.GREEN_HAVEN_ADMIN_PRODUCTS)) {
        ghWrite(
            GH_ADMIN_KEYS.products,
            window.GREEN_HAVEN_ADMIN_PRODUCTS
        );
    }

    return ghProducts();
}

async function ghLoadSeedIfNeeded() {
    const dataStore = await ensureGreenHavenAdminDataStore();

    if (dataStore) {
        const data = await dataStore.initialize();

        if (!localStorage.getItem(GH_ADMIN_KEYS.orders)) {
            dataStore.saveOrders(data.orders || []);
        }

        if (!localStorage.getItem(GH_ADMIN_KEYS.customers)) {
            dataStore.saveCustomers(data.customers || []);
        }

        return data;
    }

    ghSeedProducts();

    if (!localStorage.getItem(GH_ADMIN_KEYS.orders)) {
        ghWrite(GH_ADMIN_KEYS.orders, []);
    }

    if (!localStorage.getItem(GH_ADMIN_KEYS.customers)) {
        ghWrite(GH_ADMIN_KEYS.customers, []);
    }

    return {
        products: ghProducts(),
        orders: ghOrders(),
        customers: ghCustomers()
    };
}

/* =========================================================
   CENTRAL WRITE ROUTING
========================================================= */

function ghSyncProductsToCustomer() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.saveProducts(
            window.GreenHavenDataStore.getProducts()
        );
    }

    return ghWrite(
        GH_CUSTOMER_KEYS.products,
        ghProducts()
    );
}

function ghSyncOrdersToCustomer() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.saveOrders(
            window.GreenHavenDataStore.getOrders()
        );
    }

    return ghWrite(
        GH_CUSTOMER_KEYS.orders,
        ghOrders()
    );
}

function ghSyncCustomersToCustomer() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.saveCustomers(
            window.GreenHavenDataStore.getCustomers()
        );
    }

    return ghWrite(
        GH_CUSTOMER_KEYS.customers,
        ghCustomers()
    );
}

function ghWriteAndSync(key, value) {
    const dataStore = window.GreenHavenDataStore;

    if (dataStore) {
        if (key === GH_ADMIN_KEYS.products) {
            return dataStore.saveProducts(value);
        }

        if (key === GH_ADMIN_KEYS.orders) {
            return dataStore.saveOrders(value);
        }

        if (key === GH_ADMIN_KEYS.customers) {
            return dataStore.saveCustomers(value);
        }
    }

    const saved = ghWrite(key, value);

    if (!saved) {
        return false;
    }

    if (key === GH_ADMIN_KEYS.products) {
        ghWrite(GH_CUSTOMER_KEYS.products, value);
    }

    if (key === GH_ADMIN_KEYS.orders) {
        ghWrite(GH_CUSTOMER_KEYS.orders, value);
    }

    if (key === GH_ADMIN_KEYS.customers) {
        ghWrite(GH_CUSTOMER_KEYS.customers, value);
    }

    return true;
}

/* =========================================================
   AUTHENTICATION
========================================================= */

function ghEnsureAuth() {
    if (
        document.body.dataset.authRequired === "true" &&
        localStorage.getItem(GH_ADMIN_KEYS.auth) !== "true"
    ) {
        location.href = "login.html";
        return false;
    }

    return true;
}

function ghLogout() {
    localStorage.removeItem(GH_ADMIN_KEYS.auth);
    location.href = "login.html";
}

/* =========================================================
   FORMATTING / UI HELPERS
========================================================= */

function ghEsc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[character];
    });
}

function ghMoney(value) {
    const amount = Number(value) || 0;
    return "$" + amount.toFixed(2);
}

function ghStatus(stock) {
    return Number(stock) > 0
        ? '<span class="badge in-stock">In Stock</span>'
        : '<span class="badge sold-out">Sold Out</span>';
}

function ghInitNav() {
    const currentPath =
        location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav a").forEach(function (link) {
        const href = link.getAttribute("href");

        if (href === currentPath) {
            link.classList.add("active");
        }
    });
}

function ghNextProductId(products = []) {
    const ids = products
        .map(product => Number(product.id))
        .filter(id => Number.isFinite(id));

    if (!ids.length) {
        return 1;
    }

    return Math.max(...ids) + 1;
}

function ghGenerateOrderNumber() {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.generateOrderNumber();
    }

    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    return "GHN-" + timestamp + "-" + random;
}

function ghFindOrder(orderNumber) {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getOrder(orderNumber);
    }

    return ghOrders().find(
        order => String(order.orderNumber) === String(orderNumber)
    ) || null;
}

function ghFindProduct(productId) {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.getProduct(productId);
    }

    return ghProducts().find(
        product => Number(product.id) === Number(productId)
    ) || null;
}

function ghUpdateProductStock(productId, newStock) {
    if (window.GreenHavenDataStore) {
        return Boolean(
            window.GreenHavenDataStore.updateProductStock(
                productId,
                newStock
            )
        );
    }

    const products = ghProducts();
    const index = products.findIndex(
        product => Number(product.id) === Number(productId)
    );

    if (index < 0) {
        return false;
    }

    products[index] = {
        ...products[index],
        stock: Math.max(0, Math.floor(Number(newStock) || 0))
    };

    return ghWriteAndSync(
        GH_ADMIN_KEYS.products,
        products
    );
}

function ghUpdateProductStatus(productId, status) {
    const nextStatus = status === "inactive" ? "inactive" : "active";

    if (window.GreenHavenDataStore) {
        return Boolean(
            window.GreenHavenDataStore.updateProductStatus(
                productId,
                nextStatus
            )
        );
    }

    const products = ghProducts();
    const index = products.findIndex(
        product => Number(product.id) === Number(productId)
    );

    if (index < 0) {
        return false;
    }

    products[index] = {
        ...products[index],
        status: nextStatus
    };

    return ghWriteAndSync(
        GH_ADMIN_KEYS.products,
        products
    );
}

function ghDeleteProduct(productId) {
    if (window.GreenHavenDataStore) {
        return window.GreenHavenDataStore.deleteProduct(productId);
    }

    const products = ghProducts();
    const filtered = products.filter(
        product => Number(product.id) !== Number(productId)
    );

    if (filtered.length === products.length) {
        return false;
    }

    return ghWriteAndSync(
        GH_ADMIN_KEYS.products,
        filtered
    );
}

function ghUpdateOrderStatus(orderNumber, status) {
    if (window.GreenHavenDataStore) {
        return Boolean(
            window.GreenHavenDataStore.updateOrderStatus(
                orderNumber,
                status || "New"
            )
        );
    }

    const orders = ghOrders();
    const index = orders.findIndex(
        order => String(order.orderNumber) === String(orderNumber)
    );

    if (index < 0) {
        return false;
    }

    orders[index] = {
        ...orders[index],
        status: status || "New",
        updatedAt: new Date().toISOString()
    };

    return ghWriteAndSync(
        GH_ADMIN_KEYS.orders,
        orders
    );
}

/* =========================================================
   LIVE UPDATE EVENTS
========================================================= */

window.addEventListener("storage", function (event) {
    if (event.key === GH_ADMIN_KEYS.products) {
        window.dispatchEvent(
            new CustomEvent("greenHavenProductsUpdated")
        );
    }

    if (event.key === GH_ADMIN_KEYS.orders) {
        window.dispatchEvent(
            new CustomEvent("greenHavenOrdersUpdated")
        );
    }

    if (event.key === GH_ADMIN_KEYS.customers) {
        window.dispatchEvent(
            new CustomEvent("greenHavenCustomersUpdated")
        );
    }
});

/* =========================================================
   ADMIN STARTUP
========================================================= */

function ghAdminReady() {
    if (greenHavenAdminReady) {
        return greenHavenAdminReady;
    }

    greenHavenAdminReady = (async function () {
        const data = await ghLoadSeedIfNeeded();

        if (!ghEnsureAuth()) {
            return null;
        }

        ghInitNav();

        window.dispatchEvent(
            new CustomEvent("greenHavenAdminDataReady", {
                detail: data
            })
        );

        return data;
    })();

    return greenHavenAdminReady;
}

document.addEventListener("DOMContentLoaded", function () {
    ghAdminReady();
});
