import { API_URL, API_KEY } from './settings';

export default function getTrendingTerms() {
	return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
		.then(res => res.json())
		.then(response => {
			return response.data;
		});
}
