import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client (not recommended, use ReactDOM.render instead)
import { Provider } from "react-redux"; // Import Provider to connect Redux store
import { RouterProvider } from "react-router-dom"; // Import RouterProvider for routing
import { store } from "./app/store"; // Import the Redux store
import "./index.css"; // Import global CSS styles
import { router } from "./router/Router.jsx"; // Import the router configuration

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use the Provider to provide the Redux store to the app */}
    <Provider store={store}>
      {/* Use the RouterProvider to provide the routing configuration */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
