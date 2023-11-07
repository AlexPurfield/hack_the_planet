// import CreateAccount from "./CreateAccount";
// import Login from "./Login";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import ProductCard from "../components/ProductCard/ProductCard";
import StoryCard from "../components/HomeStory/StoryCard";
import { Row, Col, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../utils/queries";
import { useState, useEffect } from "react";
// const products = [
//   {
//     _id: "65468f3fe096c127beebe400",
//     name: "LAPTOP",
//     description: "hacker pick",
//     price: 629.99,
//     image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7317994/7317994_o01_090323/7317994",
//   },
//   {
//     _id: "65468f3fe096c127beebe405",
//     name: "KEYBOARD",
//     description: "hacker pick",
//     price: 34.99,
//     image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/716162/716162_o01_122021/716162",
//   },
//   {
//     _id: "65468f3fe096c127beebe408",
//     name: "MOUSE",
//     description: "hacker pick",
//     price: 19.99,
//     image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/604723/604723_o02_021323/604723",
//   },
//   {
//     _id: "65468f3fe096c127beebe40d",
//     name: "DESK",
//     description: "hacker pick",
//     price: 239.99,
//     image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3513269/3513269_o01_sauder_nova_loft_l_shaped_desk/3513269",
//   },
// ];

const Home = () => {
  //change
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);

  const { loading: catLoading, data: catData } = useQuery(QUERY_CATEGORIES);
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (!catLoading) {
      var categoryId1 = catData?.categories.find((e) => {
        return e.name === "laptop";
      })._id;
      var categoryId2 = catData?.categories.find((e) => {
        return e.name === "Desks";
      })._id;
      var categoryId3 = catData?.categories.find((e) => {
        return e.name === "Keyboards";
      })._id;
      var categoryId4 = catData?.categories.find((e) => {
        return e.name === "Mouses";
      })._id;
      var product1 = data?.products.find((e) => {
        return e.category._id == categoryId1;
      });
      var product2 = data?.products.find((e) => {
        return e.category._id == categoryId2;
      });
      var product3 = data?.products.find((e) => {
        return e.category._id == categoryId3;
      });
      var product4 = data?.products.find((e) => {
        return e.category._id == categoryId4;
      });
      if (data?.products) {
        setProducts([product1, product2, product3, product4]);
      } else {
        setProducts([]);
      }
    }
  }, [catLoading, data]);
  return (
    <Container>
      <Row>
        <HomeCarousel />
      </Row>
      <Row>
        <StoryCard />
      </Row>
      <Row>
        {products?.map((product, i) => (
          <Col xs={12} md={3} key={i}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
