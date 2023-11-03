import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { _id, name, description, price, imgUrl } = props.product;
  return (
    <Card
      bg="dark"
      data-bs-theme="dark"
      border="dark"
      className="mt-3"
      id="CustomCardColor"
    >
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Container>
          <Row>
            <Card.Title className="text-center">
              <h3>{name}</h3>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text className="text-center">
              {description} <p>{price}</p>
            </Card.Text>
          </Row>
          <Row>
            <Col xs lg={8} className="mx-auto">
              <Button variant="dark" style={{ width: "100%" }}>
                I'M IN
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
