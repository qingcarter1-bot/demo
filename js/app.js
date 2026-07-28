function createProductCard(product) {
  const card = document.createElement('article');
  card.className = `product-card${product.inStock ? '' : ' out-of-stock'}`;
  card.dataset.id = product.id;

  const badgeClass = product.badge === 'Promo' ? 'promo' : '';
  const badgeHtml = product.badge
    ? `<span class="product-badge ${badgeClass}">${product.badge}</span>`
    : '';

  const oldPriceHtml = product.oldPrice
    ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>`
    : '';

  card.innerHTML = `
    ${badgeHtml}
    <a href="produit.html?id=${product.id}" class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </a>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <a href="produit.html?id=${product.id}">
        <h3 class="product-name">${product.name}</h3>
      </a>
      <div class="product-rating">${renderStars(product.rating)} <span>(${product.reviews})</span></div>
      <div class="product-price-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        ${oldPriceHtml}
      </div>
      <div class="product-actions">
        <a href="produit.html?id=${product.id}" class="btn btn-outline" style="border-color:var(--border);color:var(--text)">Voir</a>
        <button class="btn btn-accent add-to-cart-btn" data-id="${product.id}" ${product.inStock ? '' : 'disabled'}>
          ${product.inStock ? 'Ajouter' : 'Rupture'}
        </button>
      </div>
    </div>
  `;

  return card;
}

function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function initAddToCartButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn || btn.disabled) return;
    const id = parseInt(btn.dataset.id);
    if (addToCart(id)) {
      showToast('Produit ajouté au panier !');
      btn.textContent = 'Ajouté ✓';
      setTimeout(() => { btn.textContent = 'Ajouter'; }, 1500);
    }
  });
}

function renderFeaturedProducts(container, count = 4) {
  const featured = PRODUCTS.filter(p => p.inStock).slice(0, count);
  container.innerHTML = '';
  featured.forEach(p => container.appendChild(createProductCard(p)));
}

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

document.addEventListener('DOMContentLoaded', () => {
  initAddToCartButtons();

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
