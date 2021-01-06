import { API_URL, API_KEY } from './settings';

export default function getGifs(keyword = 'ramdom') {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
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
