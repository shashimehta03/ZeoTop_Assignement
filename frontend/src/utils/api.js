// src/utils/api.js
import axios from 'axios'; // Importing Axios for making HTTP requests

const API_URL = 'http://localhost:3000/api'; // Define the base URL for the backend API (update as needed)

// Function to create a new rule
export const createRule = async (ruleString) => {
  try {
    // Send a POST request to the API to create a new rule
    const response = await axios.post(`${API_URL}/rules`, { rule_string: ruleString });
    return response.data; // Return the data from the response
  } catch (error) {
    // Log the error for debugging purposes
    console.error('API call error:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

// Function to combine multiple rules
export const combineRules = async (ruleStrings) => {
  try {
    // Send a POST request to the API to combine rules
    const response = await axios.post(`${API_URL}/rules/combine`, { ruleStrings });
    return response.data; // Return the combined rules data
  } catch (error) {
    console.error('API call error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to evaluate a specific rule
export const evaluateRule = async (ruleId, data) => {
  try {
    // Send a POST request to evaluate the rule with the provided ID and data
    const response = await axios.post(`${API_URL}/rules/evaluate`, { ruleId, data });
    return response.data; // Return the evaluation result
  } catch (error) {
    console.error('API call error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to modify an existing rule
export const modifyRule = async (ruleId, newRuleString) => {
  try {
    // Send a PUT request to the API to modify the rule
    const response = await axios.put(`${API_URL}/rules/modify`, { ruleId, newRuleString });
    return response.data; // Return the modified rule data
  } catch (error) {
    console.error('API call error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to retrieve all rules
export const getAllRules = async () => {
  try {
    // Send a GET request to fetch all rules from the API
    const response = await axios.get(`${API_URL}/rules/all`);
    return response.data; // Return the list of all rules
  } catch (error) {
    console.error('API call error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
