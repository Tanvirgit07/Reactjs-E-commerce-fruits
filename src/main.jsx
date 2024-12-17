import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home";
import Brand from "./Pages/Brand/Brand";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path : '/brand',
        element : <Brand/>
      },
      {
        path : '/contact',
        element : <Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
