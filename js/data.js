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
        description: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.',
        price: 8.99,
        servingSize: '1 plate',
        // image: 'https://images.pexels.com/photos/7938992/pexels-photo-7938992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'extra-cheese', name: 'Extra Mozzarella', price: 1.50 },
            { id: 'balsamic', name: 'Balsamic Glaze', price: 0.75 },
            { id: 'prosciutto', name: 'Prosciutto', price: 2.50 }
        ]
    },
    {
        id: 'stuffed-mushrooms',
        categoryId: 'starters',
        name: 'Garlic Stuffed Mushrooms',
        description: 'Button mushrooms stuffed with herbed cream cheese, garlic, and breadcrumbs, baked until golden.',
        price: 10.50,
        servingSize: '1 plate',
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        extras: [
            { id: 'parmesan', name: 'Parmesan Sprinkle', price: 1.00 },
            { id: 'truffle-oil', name: 'Truffle Oil Drizzle', price: 2.25 },
            { id: 'chili-flakes', name: 'Chili Flakes', price: 0.40 }
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
        image: './imgs/Feta-Bruschetta.jpg',
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
        id: 'tandoori_spiced_salmon',
        categoryId: 'mains',
        name: 'Tandoori Spiced Salmon',
        description: 'In this Bahraini dish, the meat (or fish or vegetables) is left to steam and cook gently without any liquid, and the rice is piled on top.',
        price: 29.99,
        servingSize: 'Perry Source',
        image: './imgs/FEGAATA.jpg',
        extras: [
            { id: 'spice-blend', name: 'Spice Blend', price: 1.99 }
        ]
    }, {
        id: 'FEGAATA',
        categoryId: 'mains',
        name: 'Fega\'ata',
        description: 'Spicy twist on the classic Italian porchetta – serve with seasonal roast vegetables or crispy rice.',
        price: 29.99,
        servingSize: '12oz with sides',
        image: './imgs/Porchetta.jpg',
        extras: [
            { id: 'Spinach', name: 'Spinach-brils', price: 1.99 },
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
    {
        id: 'lava-cake',
        categoryId: 'desserts',
        name: 'Molten Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with vanilla bean ice cream.',
        price: 9.49,
        servingSize: 'Individual portion',
        image: './imgs/dessert_1.jpg',
        extras: [
            { id: 'raspberry-coulis', name: 'Raspberry Coulis', price: 0.95 },
            { id: 'extra-ice-cream', name: 'Extra Scoop Ice Cream', price: 1.50 },
            { id: 'crushed-nuts', name: 'Crushed Hazelnuts', price: 0.85 }
        ]
    },
    {
        id: 'panna-cotta',
        categoryId: 'desserts',
        name: 'Vanilla Bean Panna Cotta',
        description: 'Silky smooth panna cotta infused with Madagascar vanilla, topped with seasonal berries.',
        price: 7.99,
        servingSize: 'Individual portion',
        image: './imgs/panna-cotta.jpg',
        extras: [
            { id: 'honey-drizzle', name: 'Wildflower Honey Drizzle', price: 0.70 },
            { id: 'toasted-almonds', name: 'Toasted Almond Flakes', price: 0.90 },
            { id: 'extra-berries', name: 'Extra Berries', price: 1.20 }
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
        image: './imgs/sour-cherry-paloma.jpg',
        extras: [
            { id: 'pitcher', name: 'Upgrade to Pitcher', price: 18.00 },
            { id: 'extra-fruit', name: 'Extra Fruit', price: 1.00 }
        ]
    },
    {
        id: 'mojito',
        categoryId: 'drinks',
        name: 'Classic Mint Mojito',
        description: 'Fresh mint leaves muddled with lime, sugar, white rum, and a splash of soda for a crisp finish.',
        price: 8.49,
        servingSize: 'Glass',
        image: './imgs/sweet-rum-punch.jpg',
        extras: [
            { id: 'extra-mint', name: 'Extra Mint', price: 0.50 },
            { id: 'passionfruit', name: 'Add Passionfruit', price: 1.25 },
            { id: 'dark-rum-float', name: 'Dark Rum Float', price: 2.00 }
        ]
    },
    {
        id: 'sparkling-water',
        categoryId: 'drinks',
        name: 'Craft Sparkling Water',
        description: 'Chilled sparkling mineral water served with a wedge of lemon or lime.',
        price: 3.50,
        servingSize: '330ml Bottle',
        image: './imgs/sparkling.jpg',
        extras: [
            { id: 'cucumber-slices', name: 'Cucumber Slices', price: 0.50 },
            { id: 'berry-syrup', name: 'Dash of Berry Syrup', price: 0.75 }
        ]
    }
    // Add more drinks...
];