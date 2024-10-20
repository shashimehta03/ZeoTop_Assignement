import React, { useState, useEffect } from 'react';
import { evaluateRule } from '../utils/api';

const EvaluateRule = () => {
  // State variables to manage user inputs, API response, errors, and fetched rule IDs
  const [ruleId, setRuleId] = useState(''); // Store the selected rule ID
  const [age, setAge] = useState(''); // Store the age input
  const [salary, setSalary] = useState(''); // Store the salary input
  const [department, setDepartment] = useState(''); // Store the department input
  const [experience, setExperience] = useState(''); // Store the experience input
  const [response, setResponse] = useState(null); // Store the API response
  const [error, setError] = useState(null); // Store any error that occurs
  const [ruleIds, setRuleIds] = useState([]); // Store the fetched rule IDs
  const [rule, setRule] = useState(''); // Store the selected rule for evaluation

  // useEffect to fetch rule IDs when the component mounts
  useEffect(() => {
    const getRuleIds = async () => {
      try {
        // Fetch all rule IDs from the backend API
        const response = await fetch('http://localhost:3000/api/rules/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setRuleIds(result); // Store the fetched rule IDs
      } catch (error) {
        console.error('Error fetching rule IDs:', error);
        setError('Error fetching rule IDs');
      }
    };

    getRuleIds(); // Invoke the fetch function
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Handle the form submission to evaluate a rule
  const handleEvaluateRule = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data payload with user inputs
      const data = {
        age: parseInt(age, 10),
        salary: parseInt(salary, 10),
        department: department,
        experience: parseInt(experience, 10),
      };

      // Log the request body for debugging
      console.log('Sending request body:', { ruleId: rule, data });

      // Send the evaluation request to the backend API
      const result = await evaluateRule(rule, data);
      setResponse(result); // Set the API response
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error evaluating rule:', error);
      setError('Error evaluating rule');
      setResponse(null); // Clear the response in case of error
    }
  };

  return (
    <div className="flex flex-col space-y-4 max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Evaluate Rule</h2>

      <form onSubmit={handleEvaluateRule} className="flex flex-col space-y-4">
        {/* Dropdown to select a rule ID */}
        <div className="flex flex-col">
          <label className="mb-1 text-lg font-semibold text-gray-700">Rule ID</label>
          <select
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
          >
            <option value="" disabled>Select a Rule ID</option>
            {ruleIds?.map((item) => (
              <option key={item._id} value={item._id}>{item.ruleString}</option>
            ))}
          </select>
        </div>

        {/* Input for age */}
        <div className="flex flex-col">
          <label className="mb-1 text-lg font-semibold text-gray-700">Age</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        {/* Input for department */}
        <div className="flex flex-col">
          <label className="mb-1 text-lg font-semibold text-gray-700">Department</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter department"
          />
        </div>

        {/* Input for salary */}
        <div className="flex flex-col">
          <label className="mb-1 text-lg font-semibold text-gray-700">Salary</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
          />
        </div>

        {/* Input for experience */}
        <div className="flex flex-col">
          <label className="mb-1 text-lg font-semibold text-gray-700">Experience</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter experience"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Evaluate Rule
        </button>
      </form>

      {/* Display API response */}
      {response && (
        <pre className="bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4">
          {response.result ? 'You are eligible' : 'You are not eligible'}
        </pre>
      )}

      {/* Display error message */}
      {error && <div className="text-red-500 mt-4 text-center text-lg">Error: {error}</div>}
    </div>
  );
};

export default EvaluateRule;
