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
    <div id='backgroundImageAllProduct'>
      <Container>
        <div id="custom-bg-secondary">
          <h1 className="display-2 font-weight-bold text-decoration-underline text-white bg-opaque">Chairs</h1>
      <Row>
        {products.slice(0, 4).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            
            <ProductCard product={product} />
            
          </Col>
        ))}
      </Row>
      </div>
      <div id="custom-bg-secondary">
          <h1 className="display-2 font-weight-bold text-decoration-underline text-white bg-opaque">Laptops</h1>
      <Row>
        {products.slice(4, 8).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div id="custom-bg-secondary">
          <h1 className="display-2 font-weight-bold text-decoration-underline text-white bg-opaque">Keyboards</h1>
      <Row>
        {products.slice(8, 12).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div id="custom-bg-secondary">
          <h1 className="display-2 font-weight-bold text-decoration-underline text-white bg-opaque">Mice</h1>
      <Row>
        {products.slice(12, 16).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div id="custom-bg-secondary">
          <h1 className="display-2 font-weight-bold text-decoration-underline  text-white bg-opaque">Desks</h1>
      <Row>
        {products.slice(16, 20).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      </Container>
    </div>
  );
};

export default AllProducts;
