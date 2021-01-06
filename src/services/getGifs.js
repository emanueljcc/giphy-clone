import { API_URL, API_KEY } from './settings';

export default function getGifs({ limit = 5, keyword = 'ramdom', page = 0 }) {
	let apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=g&lang=en`;
	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const { data } = response;
			const gifs = data.map(image => {
				const { id, title, images } = image;
				const { url } = images.downsized_medium;

				return {
					id,
					title,
					url
				};
			});
			return gifs;
		});
}
