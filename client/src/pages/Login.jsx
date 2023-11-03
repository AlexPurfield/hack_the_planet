import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // The mutationResponse will now reflect the structure we expect from the backend
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      // Assuming the server returns the token under loginUser, adjust accordingly
      const token = mutationResponse.data.loginUser.token;
      Auth.login(token);
    } catch (e) {
      console.error("Error during login", e);
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
    </Container>
  );

  // <div className="container mt-3" style={{ backgroundcolor: "black" }}>
  //   <Link to="/signup">← Go to Signup</Link>

  //   <h2 style={{color:"white"}}>LOGIN</h2>
  //   <form onSubmit={handleFormSubmit}>
  //     <div className="flex-row space-between mt-2">
  //       <label style={{ color: "white" }} htmlFor="email">
  //         EMAIL ADDRESS:
  //       </label>
  //       //inclue all input
  //       <input
  //         placeholder="youremail@test.com"
  //         name="email"
  //         type="email"
  //         id="email"
  //         value={formState.email}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div className="flex-row space-between my-2">
  //       <label style={{ color: "white" }} htmlFor="pwd">
  //         PASSWORD:
  //       </label>
  //       //inclue all input
  //       <input
  //         placeholder="******"
  //         name="password"
  //         type="password"
  //         id="pwd"
  //         value={formState.password}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     {error && (
  //       <div>
  //         <p className="error-text">The provided credentials are incorrect</p>
  //       </div>
  //     )}
  //     <div className="flex-row flex-end">
  //       <button className="btn btn-dark" type="submit">
  //         Submit
  //       </button>
  //     </div>
  //   </form>
  // </div>
}

export default Login;
