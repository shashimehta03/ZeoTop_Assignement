// src/index.jsx
import React from "react"; // Import React library for creating components
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering to the DOM
import App from "./App"; // Import the main App component
import "./index.css"; // Import the global CSS styles

// Create a root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode> {/* Enables additional checks and warnings for the app */}
    <App /> {/* Main application component */}
  </React.StrictMode>,
);
