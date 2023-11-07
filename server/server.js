const path = require("path")
// const Stripe = require('stripe');
require("dotenv").config();
// const stripe = Stripe('sk_test_51O84RdCtpfsF2ochuYUQVSK7rXUKROnSNJGmRG1U2j573D6i0CTtr2HtHKvaxwkTsWvKNy7pDBYW5L5n7u6NE4Ni003bjF8b37');
// const Stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const express = require("express");
// Import the ApolloServer class
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// Import the two parts of a GraphQL schema
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const db = require("./config/connection");
const { authMiddleware } = require("./middleware/auth");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
