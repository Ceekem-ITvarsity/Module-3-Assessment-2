document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Render categories
    const categoryGrid = document.getElementById('categoryGrid');
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        categories.forEach(category => {
            const categoryCard = createCategoryCard(category);
            categoryGrid.appendChild(categoryCard);
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Modal functionality
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <div class="category-image">
            <img src="${category.image}" alt="${category.name}">
            <h3 class="category-name">${category.name}</h3>
        </div>
        <div class="category-description">
            <p>${category.description}</p>
            <a href="#" class="view-menu">
                View Menu
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </a>
        </div>
    `;

    card.addEventListener('click', () => showCategoryItems(category));
    return card;
}

function showCategoryItems(category) {
    const items = menuItems.filter(item => item.categoryId === category.id);
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = category.name;
    modalBody.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <div class="menu-item-price">R${item.price.toFixed(2)}</div>
                <p class="menu-item-description">${item.description}</p>
                <p>Serving size: ${item.servingSize}</p>
                
                <div class="menu-item-extras">
                    <h4>Available Extras:</h4>
                    <ul class="extras-list">
                        ${item.extras.map(extra => `
                            <li>
                                <input type="checkbox" id="${item.id}-${extra.id}">
                                <label for="${item.id}-${extra.id}">
                                    ${extra.name} (+R${extra.price.toFixed(2)})
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="special-instructions">
                    <h4>Special Instructions:</h4>
                    <textarea placeholder="Any special requests or allergies we should know about?"></textarea>
                </div>
                
                <button class="order-button" onclick="placeOrder('${item.id}')">
                    Place Order
                </button>
            </div>
        </div>
    `).join('');

    modal.classList.add('active');
}

function placeOrder(itemId) {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    
    // In a real application, you would collect the form data and send it to a server
    // For now, we'll just show an alert
    alert('Thank you for your order! It will be ready soon.');
    
    // Redirect to homepage
    window.location.href = '/';
}