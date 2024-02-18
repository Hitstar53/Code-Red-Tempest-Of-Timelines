import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Welcome from "./pages/welcome/Welcome";
import Prelevel1 from "./pages/prelevels/Prelevel1";
import Level1 from "./pages/levels/Level1";
import Level2 from "./pages/levels/Level2";
import Level3 from "./pages/levels/Level3";
import Level4 from "./pages/levels/Level4";
import Level5 from "./pages/levels/Level5";
import Level6 from "./pages/levels/Level6";
import Level7 from "./pages/levels/Level7";
import Level8 from "./pages/levels/Level8";
// import Level9 from './pages/levels/Level9'
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Welcome /> },
      // { path: "login", element: <Login /> },
      {
        path: "levels",
        children: [
          { index: true, element: <Prelevel1 /> },
          { path: "level1", element: <Level1 /> },
          { path: "level2", element: <Level2 /> },
          { path: "level3", element: <Level3 /> },
          { path: "level4", element: <Level4 /> },
          { path: "level5", element: <Level5 /> },
          { path: "level6", element: <Level6 /> },
          { path: "level7", element: <Level7 /> },
          { path: "level8", element: <Level8 /> },
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
