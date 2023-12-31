import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER_USER, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Auth from "../utils/auth";

function CreateAccount(props) {
  // State for form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Setting up the mutation hook
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);
  const [login, { err }] = useMutation(LOGIN);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await registerUser({
        variables: {
          registerInput: {
            name: formState.name,
            email: formState.email,
            password: formState.password,
          },
        },
      });
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.loginUser.token;
      Auth.login(token);

      //Handle the response data, e.g., saving the token, redirecting the user
      console.log(data);
    } catch (err) {
      // Handle registration error
      console.error("Error during registration:", err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with the account creation!",
        showConfirmButton: true,
      });
    }
  };

  // Form component
  return (
    <Container className="mb-5 mt-3">
      <Row className="text-center">
        <h1>CREATE ACCOUNT</h1>
      </Row>
      <Row>
        <Col xs={8} className="mx-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Container className="mx-auto">
              <Row className="text-center">
                <Col>
                  <Button variant="dark" type="submit">
                    SUBMIT
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
      <Row className="text-center mt-3">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <span style={{ color: "grey" }}>
          Already have an account?{" "}
          <Link to="/Login" style={{ color: "whitesmoke" }}>
            {" "}
            Log in
          </Link>
        </span>
      </Row>
    </Container>
  );
}

export default CreateAccount;
