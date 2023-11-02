const typeDefs = `
type Product {
  _id: ID
  name: String
  price: Float
  image: String
  short_desc: String
  category: Category
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  orders: [Order]
}
type Category {
  _id: ID
  name: String
}
type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}
type Checkout {
  session: ID
}
type Auth {
  token: ID
  user: User
}
type Query {
  categories: [Category]
  products(category: ID, name: String):
  [Product]
  product(_id: ID!): Product
  user: User
  order(_id: ID!): Order
  checkout(products: [ID]!): Checkout
}

type Mutation {
  addUser(firstName: String!, lastName:
    String!, email: String!, password: String!):
    Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName:
    String, email: String, password: String): User updateProduct(_id: ID!, quantity: Int!):
    Product
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
