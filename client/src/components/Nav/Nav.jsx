// CustomNav.js
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";
import AuthService from "../../utils/auth"; // Make sure to implement this if it doesn't exist
import { Link } from "react-router-dom";
import "./Nav.css";

function CustomNav() {
  // State to keep track of the login status
  const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn());

  // Function to handle logout that delegates to the AuthService
  const handleLogout = () => {
    AuthService.logout(); // No need to update state since page reloads
  };

  useEffect(() => {
    // Define a function that updates the loggedIn state based on the AuthService
    const checkLoginStatus = () => {
      setLoggedIn(AuthService.loggedIn());
    };

    // Add a storage event listener in case login status changes in another tab
    window.addEventListener("storage", checkLoginStatus);

    // Check login status when the component mounts
    checkLoginStatus();

    // Cleanup the storage event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      // className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      id="CustomCardColor"
    >
      <Container id="custom-nav-container">
        <Row>
          <Col xs className="text-center">
            <Navbar.Brand id="custom-nav-brand" href="/">
              HACK THE PLANET
            </Navbar.Brand>
          </Col>
          <Col xs id="nav-link-col" className="text-end">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              id="custom-nav-hamburger"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
              <Nav className="ms-auto">
                <div id="custom-nav-dropdown">
                  <NavDropdown title="HARDWARE" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/products?section=laptops">
                      LAPTOPS
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/products?section=keyboards"
                    >
                      KEYBOARDS
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products?section=mice">
                      MICE
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products?section=desks">
                      DESKS
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products?section=chairs">
                      CHAIRS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/products">
                      ALL HARDWARE
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                {/* <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/createaccount">CREATE ACCOUNT</Nav.Link>
            cart will be its own component
          <Nav.Link href="https://buy.stripe.com/test_3cs8Abdb33Z50vubIJ">CHECKOUT</Nav.Link> */}

                {/* Conditional rendering based on login status */}
                {loggedIn ? (
                  <Nav.Link as="button" onClick={handleLogout}>
                    Logout
                  </Nav.Link> // Changed to a button for the onClick event
                ) : (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/createaccount">Create Account</Nav.Link>
                  </>
                )}
                <Nav.Link href="/cart">CART</Nav.Link>
                <Nav.Link href="https://buy.stripe.com/test_dR6eYzc6Z9jpfqobII">
                  CHECKOUT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
