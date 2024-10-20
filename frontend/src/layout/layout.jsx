import React from 'react'; // Importing React library to use JSX and React features
import Navbar from '../components/Navbar'; // Importing the Navbar component for navigation
import { Outlet } from 'react-router-dom'; // Importing Outlet from react-router-dom to render nested routes

// Layout component serves as a wrapper for other components, providing a consistent layout
const Layout = () => {
  return (
    <div>
      <Navbar/> {/* Rendering the Navbar component at the top of the layout */}
      <Outlet/> {/* Rendering child routes here; allows nested routing in the application */}
    </div>
  );
}

export default Layout; // Exporting the Layout component for use in other parts of the application
