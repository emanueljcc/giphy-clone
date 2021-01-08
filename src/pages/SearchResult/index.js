import React from 'react';

import Spinner from 'components/Spinner';
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';

export default function SearchResult({ params }) {
	const { keyword } = params;
	const { loading, loadingNextPage, gifs, page, setPage } = useGifs(keyword);

	const handleNextPage = () => setPage(page + 1);
	return (
		<>
			{loading ? <Spinner /> : <ListOfGifs gifs={gifs} name={keyword} />}
			<br />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
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
			</div>
		</>
	);
}
