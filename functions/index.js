const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Reciebved!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

