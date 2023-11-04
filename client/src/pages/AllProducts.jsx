import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";

const AllProducts = () => {
  const { loading, data, error } = useQuery(QUERY_ALL_PRODUCTS);
  if (error) {
    console.log(JSON.stringify(error));
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  const products = data?.products || [];

  return (
    <div>
      <Container className="py-3">
        <div id="custom-bg-secondary" className="pt-3">
          <h1 className="display-4 font-weight-bold text-white bg-opaque">
            CHAIRS
          </h1>
          <Row>
            {products.slice(0, 4).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div id="custom-bg-secondary" className="mt-3 pt-3">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            LAPTOPS
          </h1>
          <Row>
            {products.slice(4, 8).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div id="custom-bg-secondary" className="mt-3 pt-3">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            KEYBOARDS
          </h1>
          <Row>
            {products.slice(8, 12).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div id="custom-bg-secondary" className="mt-3 pt-3">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            MICE
          </h1>
          <Row>
            {products.slice(12, 16).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div id="custom-bg-secondary" className="my-3 pt-3">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            DESKS
          </h1>
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
