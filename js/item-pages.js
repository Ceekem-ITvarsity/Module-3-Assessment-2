// Shared logic for category.html, item.html, and thankyou redirect.
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (path.endsWith('category.html')) {
      const catId = params.get('id');
      const category = categories.find(c => c.id === catId);
      const titleEl = document.getElementById('categoryTitle');
      const grid = document.getElementById('itemsGrid');
      if (category && titleEl && grid) {
        titleEl.textContent = category.name;
        const items = menuItems.filter(m => m.categoryId === category.id);
        grid.innerHTML = items.map(item => `
          <div class="category-card">
            <div class="category-image">
              <img src="${item.image}" alt="${item.name}" />
              <h3 class="category-name">${item.name}</h3>
            </div>
            <div class="category-description">
              <p>${item.description.substring(0, 90)}...</p>
              <a href="item.html?id=${encodeURIComponent(item.id)}" class="view-menu">View Meal <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>`).join('');
      } else if (titleEl) {
        titleEl.textContent = 'Category Not Found';
      }
    }

    if (path.endsWith('item.html')) {
      const id = params.get('id');
      const item = menuItems.find(m => m.id === id);
      const container = document.getElementById('itemContainer');
      if (item && container) {
        container.innerHTML = `
          <div class="menu-item">
            <div class="menu-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="menu-item-details">
              <h2>${item.name}</h2>
              <div class="menu-item-price">R${item.price.toFixed(2)}</div>
              <p class="menu-item-description">${item.description}</p>
              <p><strong>Serving size:</strong> ${item.servingSize}</p>
              <div class="menu-item-extras">
                <h4>Available Extras:</h4>
                <ul class="extras-list">
                  ${item.extras.map(extra => `<li><label><input type='checkbox' value='${extra.id}'> ${extra.name} (+R${extra.price.toFixed(2)})</label></li>`).join('')}
                </ul>
              </div>
              <form id="orderForm" class="special-instructions">
                <h4>Special Instructions:</h4>
                <textarea name="notes" placeholder="Any special requests or allergies?"></textarea>
                <button type="submit" class="order-button mt-md">Place Order</button>
              </form>
              <p class="mt-md"><a href="category.html?id=${encodeURIComponent(item.categoryId)}">&larr; Back to ${item.categoryId}</a></p>
            </div>
          </div>`;
        const form = document.getElementById('orderForm');
        form.addEventListener('submit', e => {
          e.preventDefault();
          // Simple order ref
          const ref = 'ORD' + Date.now().toString().slice(-6);
          window.location.href = `thankyou.html?ref=${encodeURIComponent(ref)}`;
        });
      } else if (container) {
        container.innerHTML = '<p>Meal not found.</p>';
      }
    }
  });
})();
