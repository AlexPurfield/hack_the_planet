import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Swal from "sweetalert2";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.loginUser.token;
      Auth.login(token);
    } catch (e) {
      console.error("Error during login", e);
      // You can also use SweetAlert to show errors
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with the login!",
        showConfirmButton: true,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className="mb-5 mt-3">
      <Row className="text-center">
        <h1>LOGIN</h1>
      </Row>
      <Row>
        <Col xs={8} className="mx-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>EMAIL ADDRESS</Form.Label>
              <Form.Control
                placeholder="youremail@test.com"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Container className="mx-auto">
              {error && (
                <Row style={{ color: "red", marginBottom: "1rem" }}>
                  <p className="error-text">
                    The provided credentials are incorrect
                  </p>
                </Row>
              )}
              <Row className="text-center">
                <Col>
                  <Button variant="dark" type="submit">
                    SUBMIT
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
          <Row className="text-center mt-3">
            <span style={{ color: "whitesmoke" }}>
              Don't have an account? <Link to="/login"> Sign up here!</Link>
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
