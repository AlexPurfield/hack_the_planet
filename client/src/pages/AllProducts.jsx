import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import { useEffect } from "react";

const AllProducts = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get("section");

    if (section && data) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [loading, data, location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const products = data?.products || [];

  return (
    <div id="backgroundImageAllProduct">
      <Container>
        {/* Chairs Section */}
        <div id="chairs" className="product-section">
          <h1 className="display-4 font-weight-bold text-white bg-opaque pt-3">
            CHAIRS
          </h1>
          <Row className="pb-5">
            {products.slice(0, 4).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Laptops Section */}
        <div id="laptops" className="product-section">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            LAPTOPS
          </h1>
          <Row className="pb-5">
            {products.slice(4, 8).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Keyboards Section */}
        <div id="keyboards" className="product-section">
          <h1 className="display-4 font-weight-bold text-white bg-opaque">
            KEYBOARDS
          </h1>
          <Row className="pb-5">
            {products.slice(8, 12).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Mice Section */}
        <div id="mice" className="product-section">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            MICE
          </h1>
          <Row className="pb-5">
            {products.slice(12, 16).map((product, i) => (
              <Col xs={12} md={3} key={i}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Desks Section */}
        <div id="desks" className="product-section">
          <h1 className="display-4 font-weight-bold  text-white bg-opaque">
            DESKS
          </h1>
          <Row className="pb-5">
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
