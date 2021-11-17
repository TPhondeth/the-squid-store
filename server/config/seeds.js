const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Guards' },
        { name: 'Players' },
        { name: 'Front Man' },
        { name: 'VIP'}
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'GUARD Square',
            description:
                'The Squid Game GUARD Costume. Includes Jumpsuit and Square Mask.',
            image: 'square-guard-costume.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'GUARD Circle',
            description:
                'The Squid Game GUARD Costume. Includes Jumpsuit and Circle Mask.',
            image: 'circle-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'GUARD Triangle',
            description:
                'The Squid Game GUARD Costume. Includes Jumpsuit and Triangle Mask',
            image: 'triangle-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 300
        },
        {
            name: 'GUARD All',
            description:
                'The Squid Game GUARD Costume. Includes Jumpsuit and all 3 Masks.',
            image: 'all-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 99.95,
            quantity: 300
        },
        {
            name: 'PLAYER 067',
            description:
                'The Squid Game PLAYER 067 T-Shirt.',
            image: 'player067-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 300
        },
        {
            name: 'PLAYER 212',
            description:
                'The Squid Game PLAYER 212 T-Shirt.',
            image: 'player212-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 300
        },
        {
            name: 'PLAYER 218',
            description:
                'The Squid Game PLAYER 218 T-Shirt.',
            image: 'player218-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 300
        },
        {
            name: 'PLAYER 456',
            description:
                'The Squid Game PLAYER 456 T-Shirt.',
            image: 'player456-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 300
        },
        {
            name: 'PLAYER 001',
            description:
                'The Squid Game PLAYER 001 T-Shirt.',
            image: 'player001-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 300
        },
        {
            name: 'Front Man Costume',
            description:
                'The Squid Game Front Man Costume. Includes BOSS Mask and Long Hooded Jacket.',
            image: 'front-man-costume.jpg',
            category: categories[2]._id,
            price: 99.95,
            quantity: 300
        },
        {
            name: 'VIP Deer Mask',
            description:
                'The Squid Game VIP Deer Mask.',
            image: 'vip-deer.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Bear Mask',
            description:
                'The Squid Game VIP Bear Mask.',
            image: 'vip-bear.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Buffalo Mask',
            description:
                'The Squid Game VIP Buffalo Mask.',
            image: 'vip-buffalo.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Eagle Mask',
            description:
                'The Squid Game VIP Eagle Mask.',
            image: 'vip-eagle.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Tiger Mask',
            description:
                'The Squid Game VIP Tiger Mask.',
            image: 'vip-tiger.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Lion Mask',
            description:
                'The Squid Game VIP Lion Mask.',
            image: 'vip-lion.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 300
        },
        {
            name: 'VIP Owl Mask',
            description:
                'The Squid Game VIP Owl Mask.',
            image: 'vip-owl.jpg',
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