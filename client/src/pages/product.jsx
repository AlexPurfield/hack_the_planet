import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
import { Row, Col, Container } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT);

// if (loading) {
//     return <div>Loading...</div>;
//   }

// const products = data?.product || {};

  return (
    <div>
      <h1>MyComponent</h1>
      <p>Path Parameter ID: {id}</p>
    </div>
  );
}

export default Product;