import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container>
        <Navbar.Brand className="mx-auto" href="/">
          HACK THE PLANET
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="HARDWARE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LAPTOPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">KEYBOARDS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MICE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DESKS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CHAIRS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">All Hardware
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>LOGIN</Nav.Link>
            <Nav.Link href="/createaccount">CREATE ACCOUNT</Nav.Link>
            {/* cart will be its own component */}
            <Nav.Link href="">CHECKOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
