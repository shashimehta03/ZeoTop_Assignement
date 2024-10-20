// src/axios.js
import axios from 'axios'; // Importing the axios library

// Creating an instance of axios with a default configuration
const instance = axios.create({
    baseURL: 'http://localhost:3000', // Set the base URL for all requests
});

// Exporting the custom axios instance for use in other parts of the application
export default instance;
