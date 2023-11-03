import { gql } from '@apollo/client';

export const QUERY_SINGLE_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(_id: $productId) {
      _id
      name
      price
      image
      short_desc
      long_desc
      category {
        name
      }
    }
  }
`;


export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
query checkout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    price
    image
    short_desc
    category {
      name
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
