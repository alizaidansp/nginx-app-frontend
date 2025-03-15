import { api } from './api';
import { saveToken, clearToken } from './store';

/**
 *  Products

 * @returns {Promise<any>} - A promise resolving to the API response
 */


/**
 * Fetch User Details
 * @returns {Promise<any>} - A promise resolving to the user's data
 */


// Fetch products from the backend
export function products_list(query = '') {
	const endpoint = query ? `/products?search=${encodeURIComponent(query)}` : '/products';
	return api.get(endpoint);
  }