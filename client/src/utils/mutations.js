import { gql } from "@apollo/client";

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;
