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

type Checkout {
  session: ID
}

type Auth {
  token: ID!
  user: User
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

type Query {
  categories: [Category]
  products(category: ID, name: String,) : [Product]
  product(_id: ID!): Product
  order(_id: ID!): Order
  checkout(products: [ID]!): Checkout
  user(id: ID!): User
  me: User
}

type Mutation {
  registerUser(registerInput: RegisterInput): Auth
  loginUser(loginInput: LoginInput): Auth
}
`;

module.exports = typeDefs;
