require("dotenv").config();
const usersResolvers = require("./users");
const productsResolvers = require("./products");
const ordersResolvers = require("./orders");
const categoryResolvers = require("./categories");

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...productsResolvers.Query,
    ...ordersResolvers.Query,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...ordersResolvers.Mutation,
    // Add this new mutation
  },
};
