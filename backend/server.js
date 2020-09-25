const express = require("express");
const cors = require("cors");

const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HNocRLdpw1A1hob55ts3D5oLd4SXzIZtQhHcMB4QWyDrQfjTojrP3lcaemSBDvjKatfyjWTASNAQ98p6cYOG6dZ00Ygiv9sWG");
app.use(express.static("."));
app.use(express.json());
app.use(cors());
const catalogue = require('./catalogue.json');
const bread = catalogue.bread;

const calculateOrderAmount = cart => {
  // assumes all items in cart are bread
  // get prices
  const prices = [];
  const quantities = [];
  cart.forEach((cartItem) => {
      for(var i = 0; i < bread.length; i += 1) {
          if(bread[i]["id"] === cartItem.id) {
              prices.push(bread[i]["price"]);
              quantities.push(cartItem.quantity);
          }
      }
  })
  // compute subtotal
  let subtotal = 0;
  for(var i = 0; i < prices.length; i += 1) {
      subtotal += prices[i] * quantities[i];
  }
  return subtotal;
};

app.get("/shop", (req, res) => {
  res.json(catalogue);
})

app.post("/create-payment-intent", async (req, res) => {
  const { cart } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cart),
    currency: "sgd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));