import { Row, Container, Col } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price } = props.product;
  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <p>hello</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
