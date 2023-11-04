// import CreateAccount from "./CreateAccount";
// import Login from "./Login";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import ProductCard from "../components/ProductCard/ProductCard";
import StoryCard from "../components/HomeStory/StoryCard";
import { Row, Col, Container } from "react-bootstrap";

const products = [
  {
    _id: "65468f3fe096c127beebe400",
    name: "LAPTOP",
    description: "hacker pick",
    price: 629.99,
    image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7317994/7317994_o01_090323/7317994",
  },
  {
    _id: "65468f3fe096c127beebe405",
    name: "KEYBOARD",
    description: "hacker pick",
    price: 34.99,
    image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/716162/716162_o01_122021/716162",
  },
  {
    _id: "65468f3fe096c127beebe408",
    name: "MOUSE",
    description: "hacker pick",
    price: 999.99,
    image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/604723/604723_o02_021323/604723",
  },
  {
    _id: "65468f3fe096c127beebe40d",
    name: "DESK",
    description: "hacker pick",
    price: 239.99,
    image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3513269/3513269_o01_sauder_nova_loft_l_shaped_desk/3513269",
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
