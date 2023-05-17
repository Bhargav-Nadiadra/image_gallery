import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
import Pricing from './components/routes/Pricing';
import Login from './components/routes/Login';
import Home from './components/routes/Home';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./App.css";
import Cars from "./components/categories/Cars";
import Bikes from "./components/categories/Bikes";



const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);