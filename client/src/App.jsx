import { Auth0Provider } from "@auth0/auth0-react";

// import { Routes, Route } from "react-router-dom";
// import ProductsPage from './pages/ProductsPage';

import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

import CustomNav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// import { StoreProvider } from './utils/GlobalState';

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

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
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
    </Auth0Provider>
  );
}


export default App;
