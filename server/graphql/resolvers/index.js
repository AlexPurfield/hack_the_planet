require("dotenv").config();
const usersResolvers = require("./users");
const productsResolvers = require("./products");
const ordersResolvers = require("./orders");
module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...productsResolvers.Query,
    ...ordersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...ordersResolvers.Mutation,
    // Add this new mutation
  },
};
