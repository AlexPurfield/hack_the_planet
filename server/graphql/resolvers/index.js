require('dotenv').config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Ensure this is set in your .env file
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    // Add this new mutation
    createPaymentIntent: async (_, { amount, currency = 'usd' }) => {
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
          // Additional options can be added here
        });
        return {
          clientSecret: paymentIntent.client_secret,
        };
      } catch (error) {
        console.error(error);
        throw new Error("Error creating payment intent.");
      }
    },
  },
};
