const apiKey = 'EA1gWHjpvboe7gEqtQM4d4Qd89MpVVCt';

export default function getGifs(keyword = 'the walking dead') {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
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
