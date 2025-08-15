const categories = [
    {
        id: 'starters',
        name: 'Starters',
        description: 'Perfect dishes to begin your culinary journey',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'mains',
        name: 'Main Courses',
        description: 'Hearty dishes crafted with passion',
        image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet treats to end your meal on a high note',
        image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'drinks',
        name: 'Drinks',
        description: 'Refreshing beverages to complement your meal',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

const menuItems = [
    // Starters
    {
        id: 'bruschetta',
        categoryId: 'starters',
        name: 'Classic Fetta Bruschetta',
        description: 'Toasted bread topped with diced tomatoes, fresh basil, garlic, and drizzled with extra virgin olive oil.',
        price: 8.99,
        servingSize: '4 pieces',
        // image: 'https://images.pexels.com/photos/7938992/pexels-photo-7938992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'extra-cheese', name: 'Extra Mozzarella', price: 1.50 },
            { id: 'balsamic', name: 'Balsamic Glaze', price: 0.75 },
            { id: 'prosciutto', name: 'Prosciutto', price: 2.50 }
        ]
    },
    {
        id: 'bruschetta',
        categoryId: 'starters',
        name: 'Classic Fetta Bruschetta',
        description: 'Toasted bread topped with diced tomatoes, fresh basil, garlic, and drizzled with extra virgin olive oil.',
        price: 8.99,
        servingSize: '4 pieces',
        // image: 'https://images.pexels.com/photos/7938992/pexels-photo-7938992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'extra-cheese', name: 'Extra Mozzarella', price: 1.50 },
            { id: 'balsamic', name: 'Balsamic Glaze', price: 0.75 },
            { id: 'prosciutto', name: 'Prosciutto', price: 2.50 }
        ]
    },
    {
        id: 'bruschetta - decore',
        categoryId: 'starters',
        name: 'Classic Fetta decore Bruschetta',
        description: 'Toasted bread topped with diced tomatoes, fresh basil, garlic, and drizzled with extra virgin olive oil.',
        price: 8.99,
        servingSize: '4 pieces',
        // image: 'https://images.pexels.com/photos/7938992/pexels-photo-7938992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'extra-cheese', name: 'Extra Mozzarella', price: 1.50 },
            { id: 'balsamic', name: 'Balsamic Glaze', price: 0.75 },
            { id: 'prosciutto', name: 'Prosciutto', price: 2.50 }
        ]
    },

    // Main Courses
    {
        id: 'steak',
        categoryId: 'mains',
        name: 'Grilled Ribeye Steak',
        description: 'Prime 12oz ribeye steak grilled to your preference, served with roasted garlic mashed potatoes and seasonal vegetables.',
        price: 29.99,
        servingSize: '12oz steak with sides',
        image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'blue-cheese', name: 'Blue Cheese Crumbles', price: 1.99 },
            { id: 'mushroom-sauce', name: 'Sautéed Mushroom Sauce', price: 2.99 },
            { id: 'jumbo-shrimp', name: 'Add Three Jumbo Shrimp', price: 6.99 }
        ]
    },
    {
        id: 'steak-grill',
        categoryId: 'mains',
        name: 'Grilled Ribeye Steak grill',
        description: 'Prime 12oz ribeye steak grilled to your preference, served with roasted garlic mashed potatoes and seasonal vegetables.',
        price: 29.99,
        servingSize: '12oz steak with sides',
        image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'blue-cheese', name: 'Blue Cheese Crumbles', price: 1.99 },
            { id: 'mushroom-sauce', name: 'Sautéed Mushroom Sauce', price: 2.99 },
            { id: 'jumbo-shrimp', name: 'Add Three Jumbo Shrimp', price: 6.99 }
        ]
    }, {
        id: 'steak-mule',
        categoryId: 'mains',
        name: 'Grilled Ribeye Steak mule',
        description: 'Prime 12oz ribeye steak grilled to your preference, served with roasted garlic mashed potatoes and seasonal vegetables.',
        price: 29.99,
        servingSize: '12oz steak with sides',
        image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'blue-cheese', name: 'Blue Cheese Crumbles', price: 1.99 },
            { id: 'mushroom-sauce', name: 'Sautéed Mushroom Sauce', price: 2.99 },
            { id: 'jumbo-shrimp', name: 'Add Three Jumbo Shrimp', price: 6.99 }
        ]
    },

    // Desserts
    {
        id: 'tiramisu',
        categoryId: 'desserts',
        name: 'Classic Tiramisu',
        description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
        price: 8.99,
        servingSize: 'Individual portion',
        image: 'https://images.pexels.com/photos/6133458/pexels-photo-6133458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'chocolate-sauce', name:  'Chocolate Sauce Drizzle', price: 0.99 },
            { id: 'espresso-shot', name: 'Side Shot of Espresso', price: 1.99 },
            { id: 'whipped-cream', name: 'Fresh Whipped Cream', price: 0.75 }
        ]
    },
    // Add more desserts...

    // Drinks
    {
        id: 'sangria',
        categoryId: 'drinks',
        name: 'House Red Sangria',
        description: 'Our signature blend of red wine, brandy, and fresh fruits. Refreshing and fruity.',
        price: 9.99,
        servingSize: 'Glass',
        image: 'https://images.pexels.com/photos/1902215/pexels-photo-1902215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'pitcher', name: 'Upgrade to Pitcher', price: 18.00 },
            { id: 'extra-fruit', name: 'Extra Fruit', price: 1.00 }
        ]
    }
    // Add more drinks...
];