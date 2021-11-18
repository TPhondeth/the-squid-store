const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JwqIAJwkTHmyJpJs2WaUMW20aeie72I9mkzSrmnLQANc09rc4ll8FREGG0DDl0tb5qrPrV9lGU293OISHtsIhpK00kgJP9guY');
const uuid = require('uuid/v4');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.send()
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/checkout', async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log('Charge:', { charge });
        status = 'success';
    }   catch (error) {
        console.error('Error:', error);
        status = 'failure'
    }

    res.json({ error, status })
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
