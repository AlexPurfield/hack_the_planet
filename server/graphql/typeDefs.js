const typeDefs = `
type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  product(_id: ID!): Product
  order(_id: ID!): Order
  user(id: ID!): User
  me: User
  checkout(products: [ID]!): CheckoutSession
}

type Mutation {
  registerUser(registerInput: RegisterInput): Auth
  loginUser(loginInput: LoginInput): Auth
  addOrder(products: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
}

input RegisterInput {
  name: String!
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}

type Product {
  _id: ID
  name: String
  price: Float
  image: String
  short_desc: String
  long_desc: String
  category: Category
}

type User {
  _id: ID
  name: String
  email: String
  password: String
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

type CheckoutSession {
  session: ID
}

type Auth {
  token: ID!
  user: User
}
`;

module.exports = typeDefs;
