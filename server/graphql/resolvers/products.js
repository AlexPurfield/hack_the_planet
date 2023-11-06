const { Product } = require("../../models");

module.exports = {
  Query: {
    // Resolver to get all products
    products: async (_, { category, name }) => {
      let query = {};
      if (category) {
        query.category = category;
      }
      if (name) {
        query.name = { $regex: name, $options: "i" }; // search by name, case insensitive
      }
      return await Product.find(query).populate("category");
    },
    // Resolver to get a single product by ID
    product: async (_, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
  },
  // any mutations related to products, they would go here
  Mutation: {
    // Example: addProduct, updateProduct, deleteProduct, etc.
  },
};
