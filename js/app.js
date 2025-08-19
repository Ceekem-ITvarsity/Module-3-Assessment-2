document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Render categories
    const categoryGrid = document.getElementById('categoryGrid');
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('Module-3-Assessment-2/')) {
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
            <a href="category.html?id=${encodeURIComponent(category.id)}" class="view-menu">
                View Menu
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </a>
        </div>
    `;
    return card;
}

// showCategoryItems no longer used (navigation now handled by links)

function placeOrder(itemId) {
    const ref = 'ORD' + Date.now().toString().slice(-6);
    window.location.href = `thankyou.html?ref=${encodeURIComponent(ref)}`;
}