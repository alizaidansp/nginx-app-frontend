import { api } from './api';
import { saveToken, clearToken } from './store';

/**
 * User Registration
 * @param {string} username - The user's username
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<any>} - A promise resolving to the API response
 */
export async function register(username, email, password) {
	return api.post('/register', { username, email, password });
}

// Fetch user details

/**
 * User Login
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<object>} - A promise resolving to the login response
 */
export async function login(email, password) {
	const response = await api.post('/login', { email, password });

	if (response.access_token) {
		saveToken(response.access_token);
	}

	return response; // Contains access_token and user info
}

/**
 * User Logout - Clears the stored token
 */
export function logout() {
	clearToken();
}
