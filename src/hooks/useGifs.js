import { useContext, useState, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext';

export default function useGifs(keyword = null) {
	const [loading, setLoading] = useState(false);
	const { gifs, setGifs } = useContext(GifsContext);

	useEffect(() => {
		setLoading(true);

		const keywordToUse =
			keyword || localStorage.getItem('lastItem') || 'ramdom';

		getGifs(keywordToUse).then(gifs => {
			setGifs(gifs);
			setLoading(false);
			localStorage.setItem('lastItem', keywordToUse);
		});
	}, [keyword, setGifs]);

	return { loading, gifs };
}
