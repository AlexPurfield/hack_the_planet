
// import { Auth0Provider } from "@auth0/auth0-react";
// import { Routes, Route } from "react-router-dom";
// import ProductsPage from './pages/ProductsPage';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Swal from "sweetalert2";

import CustomNav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AuthService from "./utils/auth"; // Ensure this is implemented

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes





function App() {
  const navigate = useNavigate();

  // Check for login success on mount
  useEffect(() => {
    // Parse the URL query parameters
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const loginSuccess = params.get("login");

    if (loginSuccess === "success") {
      // Show the SweetAlert success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have been logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optionally, remove the 'login' query parameter from the URL
      params.delete("login");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = AuthService.getToken();
      if (!token || AuthService.isTokenExpired(token)) {
        AuthService.logout();
        navigate("/login");
      }
    }, CHECK_INTERVAL);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [navigate]);

  return (
    <ApolloProvider client={client}>
      <CustomNav />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
