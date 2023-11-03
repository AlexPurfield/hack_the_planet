import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className=" d-flex justify-content-center mt-3">
      <Row>
        <Col>
          <p>© 2023, Hack The Planet</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
