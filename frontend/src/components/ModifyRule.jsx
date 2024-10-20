import React, { useState } from 'react';
import { modifyRule } from '../utils/api';

const ModifyRule = () => {
  const [ruleId, setRuleId] = useState(''); // Rule ID input state
  const [newRuleString, setNewRuleString] = useState(''); // New rule string input state
  const [response, setResponse] = useState(null); // API response state
  const [error, setError] = useState(null); // Error state

  // Function to handle the rule modification process
  const handleModifyRule = async () => {
    try {
      const result = await modifyRule(ruleId, newRuleString); // Call modifyRule API
      console.log(result);
      setResponse(result); // Set the response in state
      setError(null); // Clear any previous error
    } catch (error) {
      setError('Error modifying rule'); // Set error message if API fails
      setResponse(null); // Clear the response on error
    }
  };

  return (
    <div className='flex flex-col space-y-6 max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg'>
      <h2 className='text-4xl font-bold mb-8 text-center text-gray-800'>Modify Rule</h2>

      {/* Rule ID Input */}
      <div className='flex flex-col mb-6'>
        <label className='mb-2 text-lg font-semibold text-gray-700'>Rule ID</label>
        <input
          type='text'
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder='Enter rule ID'
          className='p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500'
        />
      </div>

      {/* New Rule String Input */}
      <div className='flex flex-col mb-6'>
        <label className='mb-2 text-lg font-semibold text-gray-700'>New Rule String</label>
        <textarea
          value={newRuleString}
          onChange={(e) => setNewRuleString(e.target.value)}
          placeholder='Enter new rule string'
          className='p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500'
        />
      </div>

      {/* Modify Rule Button */}
      <button
        onClick={handleModifyRule}
        className='bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105'
      >
        Modify Rule
      </button>

      {/* Display API Response */}
      {response && (
        <pre className='bg-orange-100 text-orange-800 p-4 rounded-md mt-6 border border-orange-200'>
          {response.ruleString ? (
            <div>Rule modified successfully!</div>
          ) : (
            <div>Rule not modified</div>
          )}
        </pre>
      )}

      {/* Display Error Message */}
      {error && (
        <div className='text-red-600 mt-6 text-lg'>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default ModifyRule;
