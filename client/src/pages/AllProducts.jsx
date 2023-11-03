import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";

const AllProducts = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const products = data?.products || [];

  return (
    <div>
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={12} md={3} key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
