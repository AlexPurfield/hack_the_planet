// import CreateAccount from "./CreateAccount";
// import Login from "./Login";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import ProductCard from "../components/ProductCard/ProductCard";
import StoryCard from "../components/HomeStory/StoryCard";
import { Row, Col, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../utils/queries";
import { useState, useEffect } from "react";

const Home = () => {
  //change
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);

  const { loading: catLoading, data: catData } = useQuery(QUERY_CATEGORIES);
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const categories = ["laptop", "Desks", "Keyboards", "Mouses"];
  useEffect(() => {
    if (!catLoading) {
      var categoryIds = categories.map((c) => {
        var Id = catData?.categories.find((e) => {
          return e.name === c;
        })._id;
        return Id;
      });
      console.log(categoryIds);
      var selectedProducts = categoryIds.map((c_id) => {
        var product = data?.products.find((e) => {
          return e.category._id == c_id;
        });
        return product;
      });
      if (data?.products) {
        setProducts(selectedProducts);
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
