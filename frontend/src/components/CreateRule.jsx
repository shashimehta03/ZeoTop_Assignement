import React, { useState } from 'react';
import { createRule } from '../utils/api'; // Import API function for creating a new rule

const CreateRule = () => {
  // State to manage the rule string input, API response, and errors
  const [ruleString, setRuleString] = useState(''); // Stores the user's input for the rule string
  const [response, setResponse] = useState(null); // Stores the response from the API after creating the rule
  const [error, setError] = useState(null); // Stores any errors that occur during the API request

  // Function to handle form submission and create the rule
  const handleCreateRule = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      // Call the API to create a new rule
      const result = await createRule(ruleString);
      console.log(result); // Log the API response for debugging

      setResponse(result); // Update the response state with the result from the API
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error creating rule'); // Set the error message in case of failure
      setResponse(null); // Clear the response state on error
    }
  };

  return (
    <div className="flex flex-col space-y-6 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Rule</h2>

      {/* Form to input the rule string and submit to create the rule */}
      <form onSubmit={handleCreateRule} className="flex flex-col space-y-4">
        {/* Input area for the rule string */}
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold text-gray-700">Rule String</label>
          <textarea
            className="p-4 border border-gray-300 rounded-md h-40 resize-none focus:ring-2 focus:ring-green-500"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter rule string"
            aria-label="Rule String" // Accessibility improvement with aria-label
          />
        </div>

        {/* Button to submit the form and create the rule */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Create Rule
        </button>
      </form>

      {/* Display the response after API call */}
      {response && (
        <div className="bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4">
          {/* Success or failure message based on the API response */}
          {response.ruleString ? (
            <div>Rule created successfully</div>
          ) : (
            <div>Rule not created</div>
          )}
        </div>
      )}

      {/* Display the error message if an error occurs */}
      {error && (
        <div className="text-red-500 mt-4 text-center text-lg">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default CreateRule;
