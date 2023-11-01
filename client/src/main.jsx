import React from 'react';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
// import Detail from './pages/Detail';
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

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
          path: '/login',
          element: <Login />
        }, {
          path: '/CreateAccount',
          element: <CreateAccount />
        }, 
        //{
      //     path: '/success',
      //     element: <Success />
      //   }, {
      //     path: '/orderHistory',
      //     element: <OrderHistory />
      //   }, {
      //     path: '/products/:id',
      //     element: <Detail />
      //   }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
