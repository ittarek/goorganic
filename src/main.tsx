import React from "react";

import "./index.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SecondPage from "./Components/SecondPage";
import SecondPageComponent2 from "./Components/SecondPageComponent2";
import Login from "./Login";
import FirstPage from "./Components/FirstPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/firstPage",
        element: <FirstPage></FirstPage>,
      },
      {
        path: "/second",
        element: <SecondPage></SecondPage>,
      },
      {
        path: "/second2",
        element: <SecondPageComponent2></SecondPageComponent2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
