// src/components/DisplayRules.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making API requests

const DisplayRules = () => {
  // State variables to manage fetched rules, loading state, and error handling
  const [rules, setRules] = useState([]); // Store the rules fetched from the API
  const [loading, setLoading] = useState(true); // Track whether the data is still being loaded
  const [error, setError] = useState(null); // Track any errors that occur during the fetch process

  // useEffect to fetch rules when the component is mounted
  useEffect(() => {
    const fetchRules = async () => {
      try {
        // Fetch rules from the backend API
        const response = await axios.get('http://localhost:3000/api/rules/all');
        console.log('Fetched rules:', response.data); // Log the fetched data for debugging
        setRules(response.data); // Set the rules in state
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error('Error fetching rules:', error.response ? error.response.data : error.message); // Improved error logging
        setError('Failed to fetch rules'); // Set error message in state
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchRules(); // Invoke the fetch function
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
  

  // Display loading message while fetching data
  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
      <p className="text-gray-700 mt-4">Loading...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md max-w-md w-full">
        <p className="font-semibold">Error:</p>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-10 justify-center items-center h-full">
      {/* Heading for the page */}
      <h2 className="text-5xl font-bold mt-20">Display Rules</h2>

      {/* Display rules in a list */}
      <ul className="bg-violet-600 text-white space-y-6 p-10 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Check if there are rules to display */}
        {rules?.length > 0 ? (
          rules?.map((rule) => (
            // Display each rule in a styled list item, with key based on rule ID
            <li key={rule?._id} className="p-4 border border-gray-300 bg-white text-black rounded-md">
              <pre className="whitespace-pre-wrap break-words">{rule?.ruleString}</pre>
            </li>
          ))
        ) : (
          // Display a message if no rules are available
          <li className="p-4 text-center text-gray-200">No rules available</li>
        )}
      </ul>
    </div>
  );
};

export default DisplayRules;
