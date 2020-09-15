const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")('sk_test_51HQSuPFS60QR8bxagOhOvm1VAs8SVHoJtzOQ4fSydhbIALMpug0IUiCQ827bmglUIYEJqOEuCCGugvByf6zpsoE700loeMMuU8');

// API 

// App Config 
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes

app.get('/', (req, res) => res.status(200).send('Hello it works yeahhhh'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request recieved yeeee', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
}
)

// Listen Command
exports.api = functions.https.onRequest(app)