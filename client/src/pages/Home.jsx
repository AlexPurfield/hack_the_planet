import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_SINGLE_PRODUCT } from '../utils/queries';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import ProductCard from '../components/ProductCard/ProductCard';
import StoryCard from '../components/HomeStory/StoryCard';
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => {
  const { loading, data, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: product[3].id }, // Replace 'your-product-id-here' with the actual product ID you want to fetch.
  });
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure that data.products is defined before using it
  const product = data && data.product ? data.product : [];

  return (
    <Container>
      <Row>
        <HomeCarousel />
      </Row>
      <Row>
        <StoryCard />
      </Row>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={3} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {/* <CreateAccount /> */
      /* <Login /> */}
    </Container>
  );
};

export default Home;
