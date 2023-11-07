import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";
import { Row, Col, Container } from "react-bootstrap";
import SingleProductCard from "../components/SingleProductCard/SingleProductCard";

const Product = () => {
  const { id } = useParams();

  // Fetch data for the specific product using its ID
  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product || {};

  return (
    <Container>
      <Row className="pt-3">
        <Col xs={12} lg={8} className="mx-auto">
          <h1
            className="display-4 font-weight-bold text-white bg-opaque"
            id="custom-bg-secondary"
          >
            {product.name}
          </h1>
          <SingleProductCard product={product} />
          <p
            className="display-6 font-weight-bold text-white bg-opaque mt-3"
            id="custom-bg-secondary"
          >
            {product.long_desc}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
