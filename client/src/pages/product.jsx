import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
import { Row, Col, Container } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();

  // Fetch data for the specific product using its ID
  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: id }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product || {};

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>{product.name}</h1>
            <p>{product.short_desc}</p>
            {/* Render the rest of the product details here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
