import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

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
    <div
      className="container my-1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px", // padding at the top
        width: "100%", // ensure div takes full width
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>Login</h2>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%", // full width of the container
          maxWidth: "320px", // max width of the form
          padding: "1rem",
          boxSizing: "border-box",
          backgroundColor: "#f2f3f4",
        }}
      >
        <div
          className="flex-row space-between my-2"
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          <label
            htmlFor="email"
            style={{ marginBottom: "0.5rem", color: "black" }}
          >
            Email address:
          </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div
          className="flex-row space-between my-2"
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          <label
            htmlFor="pwd"
            style={{ marginBottom: "0.5rem", color: "black" }}
          >
            Password:
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        )}
        <div
          className="flex-row flex-end"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center", // Centers horizontally in the container
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <Link
        to="/createaccount"
        style={{ color: "white", padding: "0.5rem 1rem" }}
      >
        Don't have an account? Sign up here!
      </Link>
    </div>
  );
}

export default Login;
