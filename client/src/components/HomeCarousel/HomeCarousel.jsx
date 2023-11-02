import Carousel from "react-bootstrap/Carousel";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto">
          <Carousel>
            <Carousel.Item className="mx-auto justify-content-center">
              <Image
                src="/assets/images/NeosDesk.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3>Remember,</h3>
                <h3>hacking is more than just a crime.</h3>
                <h3> It's a survival trait.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/Hackers.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/CodeBreaker.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCarousel;
