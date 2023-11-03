const usersResolvers = require("./users");
const productResolvers = require("./products");

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
