import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Chairs from "./pages/Chairs.jsx";
import Laptops from "./pages/Laptops.jsx";
import Mice from "./pages/Mice.jsx";
import Desks from "./pages/Desks.jsx";
import Keyboards from "./pages/Keyboards.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/createaccount",
        element: <CreateAccount />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/chairs",
        element: <Chairs />,
      },
      {
        path: "/laptops",
        element: <Laptops />,
      },
      {
        path: "/mice",
        element: <Mice />,
      },
      {
        path: "/desks",
        element: <Desks />,
      },
      {
        path: "/keyboards",
        element: <Keyboards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
