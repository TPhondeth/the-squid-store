const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Guards' },
        { name: 'Players' },
        { name: 'The Boss' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'GUARD Mask',
            description:
                'The Squid Game GUARD Mask.',
            image: 'guard-mask.jpg',
            category: categories[0]._id,
            price: 49.95,
            quantity: 500
        },
        {
            name: 'GUARD Jumpsuit',
            description:
                'The Squid Game GUARD Jumpsuit.',
            image: 'guard-jumpsuit.jpg',
            category: categories[0]._id,
            price: 79.95,
            quantity: 500
        },
        {
            name: 'PLAYER Shoes',
            description:
                'The Squid Game PLAYER Shoes.',
            image: 'player-shoes.jpg',
            category: categories[1]._id,
            price: 34.95,
            quantity: 500
        },
        {
            name: 'PLAYER Green Tracksuit',
            description:
                'The Squid Game PLAYER Green Tracksuit.',
            image: 'player-tracksuit.jpg',
            category: categories[1]._id,
            price: 119.95,
            quantity: 500
        },
        {
            name: 'PLAYER Green Tracksuit',
            description:
                'The Squid Game PLAYER Green Tracksuit.',
            image: 'player-tracksuit.jpg',
            category: categories[1]._id,
            price: 119.95,
            quantity: 500
        },
        {
            name: 'BOSS Mask',
            description:
                'The Squid Game BOSS Mask.',
            image: 'boss-mask.jpg',
            category: categories[2]._id,
            price: 49.95,
            quantity: 500
        },
        {
            name: 'BOSS Long Hooded Jacket',
            description:
                'The Squid Game BOSS Long Hooded Jacket.',
            image: 'boss-jacket.jpg',
            category: categories[2]._id,
            price: 49.95,
            quantity: 500
        }
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