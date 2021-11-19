const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'GUARDS' },
        { name: 'PLAYERS' },
        { name: 'FRONT MAN' },
        { name: 'VIP'}
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'SQUID GAME Square Guard',
            description:
                'The Square Guard Costume. Includes Jumpsuit, Mask and Accessories.',
            image: 'square.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'SQUID GAME Circle Guard',
            description:
                'The Circle Guard Costume. Includes Jumpsuit, Mask and Accessories.',
            image: 'circle.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'SQUID GAME Triangle Guard',
            description:
                'The Triangle Guard Costume. Includes Jumpsuit, Mask and Accessories.',
            image: 'triangle.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'SQUID GAME Guard Masks',
            description:
                'Includes all 3 Guard Masks.',
            image: 'masks.jpg',
            category: categories[0]._id,
            price: 99.95,
            quantity: 300
        },
        {
            name: 'Player 067 Costume',
            description:
                'The Squid Game Player 067 Costume. Includes Tracksuit and T-shirt.',
            image: 'player067.jpg',
            category: categories[1]._id,
            price: 54.95,
            quantity: 300
        },
        {
            name: 'Player 240 Costume',
            description:
                'The Squid Game Player 240 Costume. Includes Tracksuit and T-shirt.',
            image: 'player240.jpg',
            category: categories[1]._id,
            price: 54.95,
            quantity: 300
        },
        {
            name: 'Player 218 Costume',
            description:
                'The Squid Game Player 218 Costume. Includes Tracksuit and T-shirt.',
            image: 'player218.jpg',
            category: categories[1]._id,
            price: 54.95,
            quantity: 300
        },
        {
            name: 'Player 456 Costume',
            description:
                'The Squid Game Player 456 Costume. Includes Tracksuit and T-shirt.',
            image: 'player456.jpg',
            category: categories[1]._id,
            price: 54.95,
            quantity: 300
        },
        {
            name: 'Player 001 Costume',
            description:
                'The Squid Game Player 001 Costume. Includes Tracksuit and T-shirt.',
            image: 'player001.jpg',
            category: categories[1]._id,
            price: 54.95,
            quantity: 300
        },
        {
            name: 'Front Man Costume',
            description:
                'The Squid Game Front Man Costume. Includes BOSS Mask and Long Hooded Jacket.',
            image: 'boss.jpg',
            category: categories[2]._id,
            price: 99.95,
            quantity: 300
        },
        {
            name: 'VIP Deer Mask',
            description:
                'The Squid Game VIP Deer Mask.',
            image: 'deer.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Bear Mask',
            description:
                'The Squid Game VIP Bear Mask.',
            image: 'bear.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Buffalo Mask',
            description:
                'The Squid Game VIP Buffalo Mask.',
            image: 'buffalo.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Eagle Mask',
            description:
                'The Squid Game VIP Eagle Mask.',
            image: 'eagle.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Tiger Mask',
            description:
                'The Squid Game VIP Tiger Mask.',
            image: 'tiger.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Lion Mask',
            description:
                'The Squid Game VIP Lion Mask.',
            image: 'lion.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Owl Mask',
            description:
                'The Squid Game VIP Owl Mask.',
            image: 'owl.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Squid',
        lastName: 'Player',
        email: 'player@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Squid',
        lastName: 'Guard',
        email: 'guard@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});