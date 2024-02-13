import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bastille from "./pages/levels/Bastille";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/levels/",
    children: [
      { index: true, element: <div>Home</div> },
      { path: "level4", element: <Bastille /> },
    ],
  },
  {
    path: "/",
    children: [{ path: "login", element: <div>Login</div> }],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
