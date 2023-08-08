import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

// Main component to structure the main layout
const Main = () => {
  return (
    <>
      {/* Render the navigation bar */}
      <Navbar />
      {/* Render the nested routes */}
      <Outlet />{" "}
      {/* The Outlet renders the child routes of this component's route */}
      {/* Render the footer */}
      <Footer />
    </>
  );
};

export default Main;
