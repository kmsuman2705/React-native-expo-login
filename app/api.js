import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Make sure the URL is correct

export const login = async (data) => {
    try {
        // Attempt to send the login request
        const response = await axios.post(`${API_URL}/api/college/login`, data);
        return response.data;  // If successful, return the response data
    } catch (error) {
        // Log the error in detail for debugging
        console.error("Login error:", error);

        // Check if the error is from Axios and log more details
        if (error.response) {
            // If the error is from a failed request (e.g., status 400, 500, etc.)
            console.error("Response error details:", error.response);
            console.error("Status code:", error.response.status);
            console.error("Response data:", error.response.data);
            console.error("Headers:", error.response.headers);

            // Throw a new error with the message from the server response (if available)
            throw new Error(error.response?.data?.message || 'An error occurred during login.');
        } else if (error.request) {
            // If the error is due to no response from the server (network issue)
            console.error("Request error:", error.request);
            throw new Error('No response received from the server. Please check your network connection.');
        } else {
            // Any other errors (e.g., misconfigured Axios, etc.)
            console.error("General error:", error.message);
            throw new Error('An unexpected error occurred during login.');
        }
    }
};


export const register = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/college/register`, data);

        // Assuming the API returns the data in the following format
        // { message: "Success", token: "jwt_token" }

        if (response.status === 201) { // 201 is a success status for creation
            return {
                success: true,
                message: response.data.message || "Registration successful",
                token: response.data.token,
            };
        } else {
            return {
                success: false,
                message: response.data.message || "An unexpected error occurred",
            };
        }
    } catch (error) {
        // Check if error is from Axios (response, request, or config)
        console.error("Registration error:", error);

        return {
            success: false,
            message: error.response?.data?.message || error.message || "An error occurred during registration",
        };
    }
};
