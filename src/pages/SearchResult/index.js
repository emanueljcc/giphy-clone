import React, { useCallback, useEffect, useRef } from 'react';

import Spinner from 'components/Spinner';
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResult({ params }) {
	const { keyword } = params;
	const { loading, loadingNextPage, gifs, page, setPage } = useGifs(keyword);
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen(loading ? null : externalRef, false);

	// const handleNextPage = () => setPage(page + 1);

	// const handleNextPage = () => console.log('next page');
	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [debounceHandleNextPage, isNearScreen]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<ListOfGifs gifs={gifs} name={keyword} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
			<br />
			{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
				{!loadingNextPage ? (
					<button
						onClick={handleNextPage}
						style={{ borderRadius: 25, fontSize: 15 }}
					>
						Load more
					</button>
				) : (
					<Spinner />
				)}
			</div> */}
		</>
	);
}
