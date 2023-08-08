import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main"; // Import the Main layout component
import Home from "../pages/home/home/Home"; // Import the Home page component
import Menu from "../pages/menu/menu/Menu"; // Import the Menu page component

// Create a new router configuration
export const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Main />, // Render the Main layout component at the root path
    children: [
      {
        path: "/", // Child path for the home page
        element: <Home />, // Render the Home page component
      },
      {
        path: "/menu", // Child path for the menu page
        element: <Menu />, // Render the Menu page component
      },
    ],
  },
]);
