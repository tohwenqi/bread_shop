const express = require("express");
const cors = require("cors");

const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HNocRLdpw1A1hob55ts3D5oLd4SXzIZtQhHcMB4QWyDrQfjTojrP3lcaemSBDvjKatfyjWTASNAQ98p6cYOG6dZ00Ygiv9sWG");
app.use(express.static("."));
app.use(express.json());
app.use(cors());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

const items = require('./items.json');
app.get("/shop", (req, res) => {
  res.json(items);
})

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));