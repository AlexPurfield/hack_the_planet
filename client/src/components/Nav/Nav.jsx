import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
import LoginButton from "../buttons/loginbutton";
import LogOutButton from "../buttons/logoutbutton";
import "./Nav.css";

function CustomNav() {
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      id="CustomCardColor"
    >
      <Container id="custom-nav-container">
        <Row>
          <Col xs className="text-center">
            <Navbar.Brand href="/" id="custom-nav-brand">
              HACK THE PLANET
            </Navbar.Brand>
          </Col>
          <Col xs id="nav-link-col" className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
              <Nav className="ms-auto">
                <div id="custom-nav-dropdown">
                  <NavDropdown title="HARDWARE" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      LAPTOPS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      KEYBOARDS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">MICE</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      DESKS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      CHAIRS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      ALL HARDWARE
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link>
                  <LoginButton /> <LogOutButton />
                </Nav.Link>
                <Nav.Link href="/createaccount">CREATE ACCOUNT</Nav.Link>
                {/* cart will be its own component */}
                <Nav.Link href="#link">CART</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
