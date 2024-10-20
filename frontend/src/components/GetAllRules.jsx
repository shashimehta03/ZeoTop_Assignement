import React, { useEffect, useState } from 'react';
import { getAllRules } from '../utils/api';

const GetAllRules = () => {
  const [rules, setRules] = useState([]); // Store fetched rules
  const [error, setError] = useState(null); // Store error message if any

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const result = await getAllRules(); // Fetch all rules from the API
        setRules(result); // Set the rules in state
        setError(null); // Clear any previous errors
      } catch (error) {
        setError('Error fetching rules'); // Set error message in case of failure
      }
    };

    fetchRules(); // Call the async function to fetch rules
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Display error message if an error occurs
  if (error) return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md max-w-md w-full">
        <p className="font-semibold">Error:</p>
        <p>{error}</p>
      </div>
    </div>
  );

  if (rules.length === 0) return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 rounded-md shadow-md max-w-md w-full">
        <p className="font-semibold">No Rules Found</p>
        <p className="mt-1">It seems there are no rules available. Please create some!</p>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col justify-center items-center p-6'>
      <h2 className='text-4xl font-bold mb-8 text-center text-blue-600'>All Rules</h2>
      <div className='w-full max-w-4xl bg-white shadow-md rounded-lg overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-blue-500 text-white'>
            <tr>
              <th className='p-4 text-left text-sm font-medium'>Rule ID</th>
              <th className='p-4 text-left text-sm font-medium'>Rule String</th>
            </tr>
          </thead>
          <tbody className='bg-gray-50 divide-y divide-gray-200'>
            {rules.map((rule) => (
              <tr key={rule._id} className='hover:bg-gray-100'>
                <td className='p-4 text-sm'>{rule._id}</td>
                <td className='p-4 text-sm'>{rule.ruleString}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllRules;
