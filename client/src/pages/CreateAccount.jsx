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
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Link to="/login">Already have an account? Log in</Link>
    </div>
  );
}

export default CreateAccount;
