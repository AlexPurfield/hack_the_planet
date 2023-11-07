import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../utils/queries";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";

const Laptops = () => {
  //change
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);

  const { loading: catLoading, data: catData } = useQuery(QUERY_CATEGORIES);
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: categoryId },
  });

  useEffect(() => {
    if (!catLoading) {
      setCategoryId(
        catData?.categories.find((e) => {
          return e.name === "laptop"; // change  // from apollo
        })._id
      );
      setProducts(data?.products || []);
    }
  }, [catLoading, data]);

  return (
    <div>
      <Container>
        {/* Laptops Section */}
        <div id="laptops" className="product-section">
          {" "}
          //change id
          <h1 className="display-4 font-weight-bold text-white bg-opaque pt-3">
            LAPTOPS //change title
          </h1>
          <Row className="pb-5">
            {products.slice(0, 4).map((product, i) => (
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

export default Laptops; //change
