// import CreateAccount from "./CreateAccount";
// import Login from "./Login";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import ProductCard from "../components/ProductCard/ProductCard";
import StoryCard from "../components/HomeStory/StoryCard";
import { Row, Col, Container } from "react-bootstrap";

const products = [
  {
    _id: 1,
    name: "LAPTOP",
    description: "hacker pick",
    price: 999.99,
    // use img
    image: "/assets/images/Laptop.jpg",
  },
  {
    _id: 2,
    name: "KEYBOARD",
    description: "hacker pick",
    price: 999.99,
    // use img
    image: "/assets/images/Laptop.jpg",
  },
  {
    _id: 3,
    name: "MOUSE",
    description: "hacker pick",
    price: 999.99,
    // use img
    image: "/assets/images/Laptop.jpg",
  },
  {
    _id: 4,
    name: "DESK",
    description: "hacker pick",
    price: 999.99,
    // use img
    image: "/assets/images/Laptop.jpg",
  },
];

const Home = () => {
  return (
    <Container>
      <Row>
        <HomeCarousel />
      </Row>
      <Row>
        <StoryCard />
      </Row>
      <Row>
        {products.map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {/* <CreateAccount /> */}
      {/* <Login /> */}
    </Container>
  );
};

export default Home;
