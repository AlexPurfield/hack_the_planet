const { Category } = require("../../models");

module.exports = {
  Query: {
    // Resolver to get all products
    categories: async () => {
      return await Category.find();
    },
  },
  // any mutations related to products, they would go here
  Mutation: {
    // Example: addProduct, updateProduct, deleteProduct, etc.
  },
};
