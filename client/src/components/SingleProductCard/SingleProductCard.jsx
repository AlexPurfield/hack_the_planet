import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Ratio,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleProductCard.css";
import { addToCart } from "../../utils/cartUtils";

const ProductCard = (props) => {
  const cardStyle = {
    height: "30rem", // You can adjust the height as needed
  };
  const { _id, name, price, image, short_desc, } = props.product;

  const handleAddToCart = () => {
    // Create a product object with the necessary properties
    const productToAdd = {
      id: _id,
      name,
      price,
      image,
      quantity: 1, // assuming you want to add one quantity by default
    };
    addToCart(productToAdd);
  };

  return (
    <Card
      bg="dark"
      data-bs-theme="dark"
      border="dark"
      className="mt-3"
      id="CustomCardColor"
    >
      <Ratio className="custom-ratio" aspectRatio="1x1">
        <Image className="custom-card-image" src={image} />
      </Ratio>
      <Card.Body>
        <Container>
          <Row>
            <Card.Title className="text-center">
              <h3>{short_desc}</h3>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text className="text-center">${price}</Card.Text>
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col xs lg={8} className="mx-auto">
            <Button
              variant="secondary"
              onClick={handleAddToCart}
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
