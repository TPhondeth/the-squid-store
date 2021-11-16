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
                'The Squid Game GUARD Costume.',
            image: 'square-guard-costume.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 500
        },
        {
            name: 'GUARD Circle',
            description:
                'The Squid Game GUARD Costume.',
            image: 'circle-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 500
        },
        {
            name: 'GUARD Triangle',
            description:
                'The Squid Game GUARD Costume.',
            image: 'triangle-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 500
        },
        {
            name: 'GUARD All',
            description:
                'The Squid Game GUARD Costume All Masks.',
            image: 'all-guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 99.95,
            quantity: 500
        },

        {
            name: 'PLAYER 067',
            description:
                'The Squid Game PLAYER 067 Shirt.',
            image: 'player067-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 500
        },
        {
            name: 'PLAYER 212',
            description:
                'The Squid Game PLAYER 212 Shirt.',
            image: 'player212-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 500
        },
        {
            name: 'PLAYER 218',
            description:
                'The Squid Game PLAYER 218.',
            image: 'player218-shirt.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 500
        },
        {
            name: 'PLAYER 456',
            description:
                'The Squid Game PLAYER 456.',
            image: 'player456-shirt.jpg',
            category: categories[1]._id,
            price: 49.95,
            quantity: 500
        },
        {
            name: 'PLAYER 001',
            description:
                'The Squid Game PLAYER 001.',
            image: 'player001-shirt.jpg',
            category: categories[1]._id,
            price: 49.95,
            quantity: 500
        },
        {
            name: 'BOSS Costume',
            description:
                'The Squid Game BOSS Costume.',
            image: 'boss-costume.jpg',
            category: categories[2]._id,
            price: 99.95,
            quantity: 500
        },
        {
            name: 'VIP Deer Mask',
            description:
                'The Squid Game VIP Deer Mask.',
            image: 'vip-deer.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Bear Mask',
            description:
                'The Squid Game VIP Bear Mask.',
            image: 'vip-bear.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Buffalo Mask',
            description:
                'The Squid Game VIP Buffalo Mask.',
            image: 'vip-buffalo.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Eagle Mask',
            description:
                'The Squid Game VIP Eagle Mask.',
            image: 'vip-eagle.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Tiger Mask',
            description:
                'The Squid Game VIP Tiger Mask.',
            image: 'vip-tiger.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Lion Mask',
            description:
                'The Squid Game VIP Lion Mask.',
            image: 'vip-lion.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
        },
        {
            name: 'VIP Owl Mask',
            description:
                'The Squid Game VIP Owl Mask.',
            image: 'vip-owl.jpg',
            category: categories[3]._id,
            price: 149.95,
            quantity: 500
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