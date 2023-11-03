
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";

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
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 2,
      name: "LAPTOP",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 3,
      name: "LAPTOP",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 4,
      name: "LAPTOP",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 5,
      name: "KEYBOARD",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 6,
      name: "KEYBOARD",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 7,
      name: "KEYBOARD",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 8,
      name: "KEYBOARD",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 9,
      name: "MOUSE",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 10,
      name: "MOUSE",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 11,
      name: "MOUSE",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 12,
      name: "MOUSE",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 13,
      name: "DESK",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 14,
      name: "DESK",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 15,
      name: "DESK",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 16,
      name: "DESK",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 17,
      name: "CHAIR",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 18,
      name: "CHAIR",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 19,
      name: "CHAIR",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
    },
    {
      _id: 20,
      name: "CHAIR",
      description: "hacker pick",
      price: 999.99,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF1MePWubfQaH5IsEoOcJFrninOPR_cF4iw&usqp=CAU",
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
        <div>
          <h1 >Laptops</h1>
      <Row>
        {products.slice(0, 4).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div>
          <h1>Keyboards</h1>
      <Row>
        {products.slice(4, 8).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div>
          <h1>Mice</h1>
      <Row>
        {products.slice(8, 12).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div>
          <h1>Desks</h1>
      <Row>
        {products.slice(12, 16).map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
      <div>
          <h1>Chairs</h1>
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