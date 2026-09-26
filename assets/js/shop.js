const productList = document.querySelector('#product-list');
if (productList && typeof products !== 'undefined') {
  productList.innerHTML = products.map((product) => `<article class="product-card"><h2>${product.name}</h2><p>$${product.price}</p></article>`).join('');
}
