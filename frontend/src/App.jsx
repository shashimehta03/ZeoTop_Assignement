import React from "react"; // Importing React library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing routing components from react-router-dom
import CreateRule from "./components/CreateRule"; // Importing CreateRule component
import CombineRules from "./components/CombineRules"; // Importing CombineRules component
import EvaluateRule from "./components/EvaluateRule"; // Importing EvaluateRule component
import DisplayRules from "./components/DisplayRules"; // Importing DisplayRules component
import Layout from "./layout/layout"; // Importing Layout component to wrap routes
import GetAllRules from './components/GetAllRules'; // Importing GetAllRules component
import ModifyRule from "./components/ModifyRule"; // Importing ModifyRule component

const App = () => {
  return (
    <Router> {/* Wrapping the application in Router for routing functionality */}
        <Routes> {/* Defining routes for the application */}
          <Route element={<Layout/>}> {/* Layout component for shared layout */}
            {/* Define the individual routes for different components */}
            <Route path="/" element={<CreateRule/>} /> {/* Home route for creating rules */}
            <Route path="/combine-rules" element={<CombineRules/>} /> {/* Route for combining rules */}
            <Route path="/evaluate-rule" element={<EvaluateRule/>} /> {/* Route for evaluating rules */}
            <Route path="/display-rules" element={<DisplayRules/>} /> {/* Route for displaying rules */}
            <Route path="/modify-rules" element={<ModifyRule/>} /> {/* Route for modifying rules */}
            <Route path="/getall-rules" element={<GetAllRules/>} /> {/* Route for fetching all rules */}
          </Route>
        </Routes>
    </Router>
  );
};

export default App; // Exporting the App component for use in other parts of the application
