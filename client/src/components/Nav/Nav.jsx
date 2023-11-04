// CustomNav.js
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import AuthService from "../../utils/auth"; // Make sure to implement this if it doesn't exist
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
              <NavDropdown.Item href="#action/3.4">DESKS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">CHAIRS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">ALL HARDWARE</NavDropdown.Item>
            </NavDropdown>

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

            {/* cart will be its own component */}
            <Nav.Link href="https://buy.stripe.com/test_dR6eYzc6Z9jpfqobII">
              CHECKOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
