import { useContext, useState, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0;

export default function useGifs(keyword = null) {
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const { gifs, setGifs } = useContext(GifsContext);
	const [page, setPage] = useState(INITIAL_PAGE);
	const keywordToUse = keyword || localStorage.getItem('lastItem') || 'ramdom';

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs);
			setLoading(false);
			localStorage.setItem('lastItem', keywordToUse);
		});
	}, [keywordToUse, setGifs]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		setLoadingNextPage(true);
		getGifs({ page, keyword: keywordToUse }).then(nextGifs => {
			setGifs(prevGifs => prevGifs.concat(nextGifs));
			setLoadingNextPage(false);
		});
	}, [page, keywordToUse, setGifs]);

	console.log(loadingNextPage);

	return { loading, gifs, loadingNextPage, page, setPage };
}
