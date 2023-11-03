import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = (props) => {
  const cardStyle = {
    height: '30rem', // You can adjust the height as needed
  };
  const { _id, name, description, price, image } = props.product;
  return (
    <Card
      bg="dark"
      data-bs-theme="dark"
      border="dark"
      className="mt-3"
      id="CustomCardColor"
    
    >
      <Card.Img variant="top" src={image} style={{ width: '300px', height: '300px', objectFit: 'cover' }}/>
      <Card.Body>
        <Container>
          <Row>
            <Card.Title className="text-center">
              <h3>{name}</h3>
            </Card.Title>
          </Row>
          <Row>
          <Card.Text className="text-center">
            ${price}
          </Card.Text>
          </Row>
          <Row>
            <Col xs lg={8} className="mx-auto">
              <Button variant="dark bottom" style={{ width: "100%" }}>
                <Link to={`/product/${_id}`}>View Product</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
