import Carousel from "react-bootstrap/Carousel";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <Carousel>
            <Carousel.Item className="mx-auto justify-content-center">
              <Image
                src="/assets/images/Hackers.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/NeosDesk.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/assets/images/CodeBreaker.jpg"
                className="HomeCarouselImage"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCarousel;
