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

import CustomNav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// import { StoreProvider } from './utils/GlobalState';
import AuthService from "./utils/auth"; // Make sure to implement this if it doesn't exist

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
      {/* <StoreProvider> */}
      <CustomNav />
      {/* <Routes>
        {/* <Route path="/products" element={<ProductsPage />} /> */}
      {/* Add other routes here */}
      {/* </Routes> */}
      <Outlet />
      <Footer />
      {/* </StoreProvider> */}
    </ApolloProvider>
  );
}

export default App;
