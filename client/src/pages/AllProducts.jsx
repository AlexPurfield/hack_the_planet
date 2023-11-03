import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./components/ProductCard/ProductCard";
const AllProducts = () => {
  //   const [products, setProducts] = useState([	{
  //     name: "",
  //     price: 0,
  //     image:
  //         "",
  //     short_desc: "",
  // },]);
  const products = [
    {
      _id: 1,
      name: "LAPTOP",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "/assets/images/Laptop.jpg",
    },
    {
      _id: 2,
      name: "KEYBOARD",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "/assets/images/Laptop.jpg",
    },
  ];

  // const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  // if (loading) {
  //     return <div>Loading...</div>;
  //   }
  //

  // const products = data?.products || [];

  return (
    <div>
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col xs={12} md={3} key={i}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
