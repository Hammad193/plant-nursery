/* =========================================================
   GREEN HAVEN NURSERY
   CENTRAL DATA STORE
   STEP 3
========================================================= */

(function (window) {
    "use strict";

    /*
     * Temporary storage:
     * JSON files provide initial data.
     * localStorage provides browser persistence.
     *
     * Future:
     * Replace the storage implementation with backend API/database
     * calls while keeping the same public methods.
     */

    const CONFIG = {
        paths: {
            products: "data/products.json",
            orders: "data/orders.json",
            customers: "data/customers.json"
        },

        storage: {
            products: "greenHavenAdminProducts",
            orders: "greenHavenOrders",
            customers: "greenHavenCustomers"
        },

        customerProducts: "greenHavenProducts"
    };

    function clone(value) {
        try {
            return JSON.parse(JSON.stringify(value));
        } catch (error) {
            return value;
        }
    }

    function read(key, fallback = []) {
        try {
            const raw = localStorage.getItem(key);

            if (!raw) {
                return clone(fallback);
            }

            return JSON.parse(raw) ?? clone(fallback);
        } catch (error) {
            console.warn("Green Haven storage read failed:", key, error);
            return clone(fallback);
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Green Haven storage write failed:", key, error);
            return false;
        }
    }

    function number(value, fallback = 0) {
        const result = Number(value);
        return Number.isFinite(result) ? result : fallback;
    }

    function stock(value) {
        return Math.max(0, Math.floor(number(value)));
    }

    function normalizeProduct(product = {}) {
        return {
            ...product,
            id: number(product.id),
            name: product.name || "",
            slug: product.slug || "",
            category: product.category || "indoor",
            categoryName: product.categoryName || product.category || "Plants",
            price: number(product.price),
            oldPrice:
                product.oldPrice === null ||
                product.oldPrice === undefined ||
                product.oldPrice === ""
                    ? null
                    : number(product.oldPrice),
            stock: stock(product.stock),
            rating: number(product.rating),
            reviews: Math.max(0, Math.floor(number(product.reviews))),
            badge: product.badge || "",
            image: product.image || "",
            description: product.description || "",
            status: product.status || "active"
        };
    }

    function normalizeProducts(list) {
        return Array.isArray(list)
            ? list.map(normalizeProduct).filter(product => product.id > 0)
            : [];
    }

    function normalizeOrder(order = {}) {
        return {
            ...order,
            orderNumber: order.orderNumber || order.id || "",
            status: order.status || "New",
            createdAt: order.createdAt || new Date().toISOString(),
            updatedAt: order.updatedAt || order.createdAt || new Date().toISOString(),
            subtotal: number(order.subtotal),
            delivery: number(order.delivery),
            total: number(order.total),
            items: Array.isArray(order.items) ? clone(order.items) : []
        };
    }

    function normalizeOrders(list) {
        return Array.isArray(list)
            ? list.map(normalizeOrder).filter(order => order.orderNumber)
            : [];
    }

    function normalizeCustomer(customer = {}) {
        return {
            ...customer,
            id: customer.id || customer.customerId || "",
            name: customer.name || customer.customerName || "",
            phone: customer.phone || "",
            email: customer.email || "",
            address: customer.address || "",
            city: customer.city || "",
            updatedAt: customer.updatedAt || new Date().toISOString()
        };
    }

    function normalizeCustomers(list) {
        return Array.isArray(list) ? list.map(normalizeCustomer) : [];
    }

    async function loadJson(path, fallback = []) {
        try {
            const response = await fetch(path, { cache: "no-store" });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.warn("Green Haven JSON load skipped:", path, error);
            return clone(fallback);
        }
    }

    async function loadProductsJson() {
        const data = await loadJson(CONFIG.paths.products, []);

        if (Array.isArray(data)) {
            return normalizeProducts(data);
        }

        return normalizeProducts(data.products);
    }

    async function loadOrdersJson() {
        const data = await loadJson(CONFIG.paths.orders, []);

        if (Array.isArray(data)) {
            return normalizeOrders(data);
        }

        return normalizeOrders(data.orders);
    }

    async function loadCustomersJson() {
        const data = await loadJson(CONFIG.paths.customers, []);

        if (Array.isArray(data)) {
            return normalizeCustomers(data);
        }

        return normalizeCustomers(data.customers);
    }

    /* =====================================================
       PRODUCTS
    ===================================================== */

    function getProducts() {
        return normalizeProducts(read(CONFIG.storage.products, []));
    }

    function getProduct(productId) {
        return getProducts().find(
            product => Number(product.id) === Number(productId)
        ) || null;
    }

    function saveProducts(list) {
        const products = normalizeProducts(list);

        if (!write(CONFIG.storage.products, products)) {
            return false;
        }

        /*
         * Temporary customer-side mirror.
         * Later this becomes a shared backend/API source.
         */
        write(CONFIG.customerProducts, products);

        window.dispatchEvent(
            new CustomEvent("greenHavenProductsUpdated", {
                detail: { products: clone(products) }
            })
        );

        return true;
    }

    async function initializeProducts() {
        let products = getProducts();

        if (products.length) {
            return products;
        }

        products = await loadProductsJson();

        if (
            !products.length &&
            Array.isArray(window.GREEN_HAVEN_PRODUCTS_SEED)
        ) {
            products = normalizeProducts(
                window.GREEN_HAVEN_PRODUCTS_SEED
            );
        }

        if (
            !products.length &&
            Array.isArray(window.GREEN_HAVEN_ADMIN_PRODUCTS)
        ) {
            products = normalizeProducts(
                window.GREEN_HAVEN_ADMIN_PRODUCTS
            );
        }

        if (products.length) {
            saveProducts(products);
        }

        return products;
    }

    function addProduct(product = {}) {
        const products = getProducts();

        const ids = products
            .map(item => number(item.id))
            .filter(id => id > 0);

        const id = product.id
            ? number(product.id)
            : (ids.length ? Math.max(...ids) + 1 : 1);

        const newProduct = normalizeProduct({
            ...product,
            id
        });

        products.push(newProduct);

        return saveProducts(products)
            ? clone(newProduct)
            : null;
    }

    function updateProduct(productId, changes = {}) {
        const products = getProducts();

        const index = products.findIndex(
            product => Number(product.id) === Number(productId)
        );

        if (index < 0) {
            return null;
        }

        products[index] = normalizeProduct({
            ...products[index],
            ...changes,
            id: products[index].id
        });

        return saveProducts(products)
            ? clone(products[index])
            : null;
    }

    function updateProductStatus(productId, status) {
        return updateProduct(productId, {
            status: status === "inactive" ? "inactive" : "active"
        });
    }

    function deleteProduct(productId) {
        const products = getProducts();

        const filtered = products.filter(
            product => Number(product.id) !== Number(productId)
        );

        if (filtered.length === products.length) {
            return false;
        }

        return saveProducts(filtered);
    }

    function updateProductStock(productId, newStock) {
        return updateProduct(productId, {
            stock: stock(newStock)
        });
    }

    function decreaseProductStock(productId, quantity) {
        const product = getProduct(productId);
        const amount = Math.max(1, Math.floor(number(quantity, 1)));

        if (!product) {
            return { success: false, reason: "PRODUCT_NOT_FOUND" };
        }

        if (product.stock < amount) {
            return {
                success: false,
                reason: "INSUFFICIENT_STOCK",
                available: product.stock,
                requested: amount
            };
        }

        const updated = updateProductStock(
            productId,
            product.stock - amount
        );

        return updated
            ? { success: true, product: clone(updated) }
            : { success: false, reason: "SAVE_FAILED" };
    }

    function isProductAvailable(productId, quantity = 1) {
        const product = getProduct(productId);

        if (!product || product.status === "inactive") {
            return false;
        }

        return product.stock >= Math.max(1, Math.floor(number(quantity, 1)));
    }

    /* =====================================================
       ORDERS
    ===================================================== */

    function getOrders() {
        return normalizeOrders(read(CONFIG.storage.orders, []));
    }

    function getOrder(orderNumber) {
        return getOrders().find(
            order => String(order.orderNumber) === String(orderNumber)
        ) || null;
    }

    function saveOrders(list) {
        const orders = normalizeOrders(list);

        if (!write(CONFIG.storage.orders, orders)) {
            return false;
        }

        window.dispatchEvent(
            new CustomEvent("greenHavenOrdersUpdated", {
                detail: { orders: clone(orders) }
            })
        );

        return true;
    }

    async function initializeOrders() {
        let orders = getOrders();

        if (orders.length) {
            return orders;
        }

        orders = await loadOrdersJson();
        saveOrders(orders);

        return orders;
    }

    function generateOrderNumber() {
        const timestamp = Date.now().toString(36).toUpperCase();
        const random = Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

        return `GHN-${timestamp}-${random}`;
    }

    function createOrder(order = {}) {
        const orders = getOrders();

        const created = normalizeOrder({
            ...order,
            orderNumber:
                order.orderNumber || generateOrderNumber(),
            status: order.status || "New",
            createdAt: order.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        orders.push(created);

        return saveOrders(orders)
            ? clone(created)
            : null;
    }

    function updateOrder(orderNumber, changes = {}) {
        const orders = getOrders();

        const index = orders.findIndex(
            order =>
                String(order.orderNumber) === String(orderNumber)
        );

        if (index < 0) {
            return null;
        }

        orders[index] = normalizeOrder({
            ...orders[index],
            ...changes,
            orderNumber: orders[index].orderNumber,
            updatedAt: new Date().toISOString()
        });

        return saveOrders(orders)
            ? clone(orders[index])
            : null;
    }

    function updateOrderStatus(orderNumber, status) {
        return updateOrder(orderNumber, {
            status: status || "New"
        });
    }

    /* =====================================================
       CUSTOMERS
    ===================================================== */

    function getCustomers() {
        return normalizeCustomers(read(CONFIG.storage.customers, []));
    }

    function saveCustomers(list) {
        const customers = normalizeCustomers(list);

        if (!write(CONFIG.storage.customers, customers)) {
            return false;
        }

        window.dispatchEvent(
            new CustomEvent("greenHavenCustomersUpdated", {
                detail: { customers: clone(customers) }
            })
        );

        return true;
    }

    async function initializeCustomers() {
        let customers = getCustomers();

        if (customers.length) {
            return customers;
        }

        customers = await loadCustomersJson();
        saveCustomers(customers);

        return customers;
    }

    function generateCustomerId() {
        return (
            "GHC-" +
            Date.now().toString(36).toUpperCase() +
            "-" +
            Math.random().toString(36).substring(2, 7).toUpperCase()
        );
    }

    function findCustomer(email, phone) {
        const cleanEmail = String(email || "").trim().toLowerCase();
        const cleanPhone = String(phone || "").trim();

        return getCustomers().find(customer => {
            const customerEmail =
                String(customer.email || "").trim().toLowerCase();

            const customerPhone =
                String(customer.phone || "").trim();

            return (
                (cleanEmail && customerEmail === cleanEmail) ||
                (cleanPhone && customerPhone === cleanPhone)
            );
        }) || null;
    }

    function saveCustomer(customer = {}) {
        const customers = getCustomers();
        const normalized = normalizeCustomer(customer);

        const index = customers.findIndex(item => {
            const emailMatch =
                normalized.email &&
                String(item.email || "").trim().toLowerCase() ===
                String(normalized.email).trim().toLowerCase();

            const phoneMatch =
                normalized.phone &&
                String(item.phone || "").trim() ===
                String(normalized.phone).trim();

            return emailMatch || phoneMatch;
        });

        normalized.id =
            normalized.id ||
            (index >= 0
                ? customers[index].id
                : generateCustomerId());

        normalized.updatedAt = new Date().toISOString();

        if (index >= 0) {
            customers[index] = {
                ...customers[index],
                ...normalized
            };
        } else {
            customers.push(normalized);
        }

        return saveCustomers(customers)
            ? clone(normalized)
            : null;
    }

    /* =====================================================
       CHECKOUT TRANSACTION
    ===================================================== */

    function validateOrderItems(items) {
        if (!Array.isArray(items) || !items.length) {
            return {
                valid: false,
                reason: "INVALID_ITEMS"
            };
        }

        for (const item of items) {
            const productId =
                item.id ?? item.productId;

            const quantity = Math.max(
                1,
                Math.floor(number(item.quantity, 1))
            );

            const product = getProduct(productId);

            if (!product) {
                return {
                    valid: false,
                    reason: "PRODUCT_NOT_FOUND",
                    productId
                };
            }

            if (product.status === "inactive") {
                return {
                    valid: false,
                    reason: "PRODUCT_INACTIVE",
                    productId
                };
            }

            if (product.stock < quantity) {
                return {
                    valid: false,
                    reason: "INSUFFICIENT_STOCK",
                    productId,
                    available: product.stock,
                    requested: quantity
                };
            }
        }

        return { valid: true };
    }

    /*
     * Creates the order and reduces stock after a complete
     * stock validation. This is the temporary browser version
     * of the checkout transaction.
     */
    function createOrderTransaction(order = {}) {
        const validation = validateOrderItems(order.items);

        if (!validation.valid) {
            return {
                success: false,
                ...validation
            };
        }

        /*
         * Step 3C transaction safety:
         * Take snapshots before changing inventory. If the order cannot be
         * persisted after stock is reduced, restore the exact previous product
         * state so a failed checkout never consumes stock.
         */
        const previousProducts = getProducts();
        const previousOrders = getOrders();
        const previousProductsRaw = localStorage.getItem(CONFIG.storage.products);
        const previousCustomerProductsRaw = localStorage.getItem(CONFIG.customerProducts);
        const previousOrdersRaw = localStorage.getItem(CONFIG.storage.orders);

        const products = clone(previousProducts);

        for (const item of order.items) {
            const productId =
                item.id ?? item.productId;

            const quantity = Math.max(
                1,
                Math.floor(number(item.quantity, 1))
            );

            const index = products.findIndex(
                product =>
                    Number(product.id) === Number(productId)
            );

            if (index < 0) {
                return {
                    success: false,
                    reason: "PRODUCT_NOT_FOUND",
                    productId
                };
            }

            if (products[index].stock < quantity) {
                return {
                    success: false,
                    reason: "INSUFFICIENT_STOCK",
                    productId,
                    available: products[index].stock,
                    requested: quantity
                };
            }

            products[index] = {
                ...products[index],
                stock: products[index].stock - quantity
            };
        }

        const createdOrder = normalizeOrder({
            ...order,
            orderNumber: order.orderNumber || generateOrderNumber(),
            status: order.status || "New",
            createdAt: order.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        const nextOrders = [...previousOrders, createdOrder];

        /* Save inventory first, then the order. */
        if (!saveProducts(products)) {
            return {
                success: false,
                reason: "PRODUCT_SAVE_FAILED"
            };
        }

        if (!saveOrders(nextOrders)) {
            /*
             * Roll back both inventory keys because the order was not saved.
             * This restores the browser state to exactly what existed before
             * checkout started.
             */
            try {
                if (previousProductsRaw === null) {
                    localStorage.removeItem(CONFIG.storage.products);
                } else {
                    localStorage.setItem(
                        CONFIG.storage.products,
                        previousProductsRaw
                    );
                }

                if (previousCustomerProductsRaw === null) {
                    localStorage.removeItem(CONFIG.customerProducts);
                } else {
                    localStorage.setItem(
                        CONFIG.customerProducts,
                        previousCustomerProductsRaw
                    );
                }

                if (previousOrdersRaw === null) {
                    localStorage.removeItem(CONFIG.storage.orders);
                } else {
                    localStorage.setItem(
                        CONFIG.storage.orders,
                        previousOrdersRaw
                    );
                }

                window.dispatchEvent(
                    new CustomEvent("greenHavenProductsUpdated", {
                        detail: { products: clone(previousProducts) }
                    })
                );

                window.dispatchEvent(
                    new CustomEvent("greenHavenOrdersUpdated", {
                        detail: { orders: clone(previousOrders) }
                    })
                );
            } catch (rollbackError) {
                console.error(
                    "Green Haven transaction rollback failed:",
                    rollbackError
                );
            }

            return {
                success: false,
                reason: "ORDER_SAVE_FAILED",
                rolledBack: true
            };
        }

        return {
            success: true,
            order: clone(createdOrder)
        };
    }

    /* =====================================================
       INITIALIZE EVERYTHING
    ===================================================== */

    async function initialize() {
        const [products, orders, customers] =
            await Promise.all([
                initializeProducts(),
                initializeOrders(),
                initializeCustomers()
            ]);

        return {
            products,
            orders,
            customers
        };
    }

    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.GreenHavenDataStore = {
        config: CONFIG,

        clone,
        read,
        write,
        loadJson,

        initialize,

        getProducts,
        getProduct,
        saveProducts,
        addProduct,
        updateProduct,
        updateProductStatus,
        deleteProduct,
        updateProductStock,
        decreaseProductStock,
        isProductAvailable,

        getOrders,
        getOrder,
        saveOrders,
        createOrder,
        updateOrder,
        updateOrderStatus,

        getCustomers,
        saveCustomers,
        findCustomer,
        saveCustomer,

        validateOrderItems,
        createOrderTransaction,

        generateOrderNumber,
        generateCustomerId
    };

})(window);
