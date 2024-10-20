import React, { useState } from 'react';
import { combineRules } from '../utils/api'; // Import the API function to handle rule combination requests

const CombineRules = () => {
  // State for managing user input (rule strings), API response, and errors
  const [ruleStrings, setRuleStrings] = useState(''); // Stores the rule strings entered by the user
  const [response, setResponse] = useState(null); // Stores the API response after combining rules
  const [error, setError] = useState(null); // Stores any errors that occur during the process

  // Function to handle form submission and combine rules
  const handleCombineRules = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      // Split the input rule strings by new lines and filter out empty lines
      const rulesArray = ruleStrings.split('\n').filter((rule) => rule.trim() !== '');
      console.log('Rules to combine:', rulesArray); // Log the array of rules before sending to the API

      // Call the API to combine the rules
      const result = await combineRules(rulesArray);
      console.log('API response:', result); // Log the response from the API

      setResponse(result); // Update the response state with the API result
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error combining rules:', error); // Log detailed error information
      setError('Error combining rules'); // Set the error message for the user
      setResponse(null); // Clear the response in case of error
    }
  };

  return (
    <div className="flex flex-col space-y-6 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Combine Rules</h2>

      {/* Form for entering rules and combining them */}
      <form onSubmit={handleCombineRules} className="flex flex-col space-y-4">
        {/* Input area for rule strings */}
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold text-gray-700">Rule Strings</label>
          <textarea
            className="p-4 border border-gray-300 rounded-md h-48 resize-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
            value={ruleStrings}
            onChange={(e) => setRuleStrings(e.target.value)}
            placeholder="Enter rule strings, one per line"
            aria-label="Rule Strings" // Improved accessibility by adding aria-label
          />
        </div>

        {/* Button to submit the form and combine rules */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Combine Rules
        </button>
      </form>

      {/* Display API response if available */}
      {response && (
        <div className="bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4">
          {response.combinedAST ? (
            <div>Rules combined successfully</div> // Show success message when rules are combined
          ) : (
            <div>Rules not combined</div> // Show failure message if the combination wasn't successful
          )}
        </div>
      )}

      {/* Display error message if an error occurred */}
      {error && (
        <div className="text-red-600 mt-4 text-center text-lg">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default CombineRules;
