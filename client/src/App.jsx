import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bastille from "./pages/levels/Bastille";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "login", element: <Login /> },
      {
        path: "levels",
        children: [
          { path: "level4", element: <Bastille /> },
        ],
      },
    ],
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
