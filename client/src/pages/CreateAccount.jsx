import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function CreateAccount(props) {
  // State for form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Setting up the mutation hook
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

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

      // TODO: Handle the response data, e.g., saving the token, redirecting the user
      console.log(data);
    } catch (err) {
      // TODO: Handle registration error
      console.error("Error during registration:", err);
    }
  };

  // Form component
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px", // padding at the top
        width: "100%", // ensure div takes full width
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>Create Account</h1>
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
        <div style={{ width: "100%", marginBottom: "1rem" }}>
          <label style={{ marginBottom: "0.5rem", color: "black" }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ width: "100%", marginBottom: "1rem" }}>
          <label style={{ marginBottom: "0.5rem", color: "black" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ width: "100%", marginBottom: "1rem" }}>
          <label style={{ marginBottom: "0.5rem", color: "black" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", cursor: "pointer", color: "white" }}
        >
          Create Account
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <Link to="/login" style={{ color: "white", padding: "0.5rem 1rem" }}>
        Already have an account? Click here
      </Link>
    </div>
  );
}

export default CreateAccount;
