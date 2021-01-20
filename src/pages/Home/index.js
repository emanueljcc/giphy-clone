import React, { useCallback } from 'react';
import { useLocation } from 'wouter';

import useGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import LazyTrending from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';

function Home() {
	const [, setLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = useCallback(
		({ keyword }) => {
			setLocation(`/search/${keyword}`);
		},
		[setLocation]
	);

	return (
		<>
			<SearchForm onSubmit={handleSubmit} />
			<div className="text-center">
				<h3>Last search</h3>
			</div>

			<ListOfGifs gifs={gifs} loading={loading} />

			<div className="text-center">
				<h3>Tendencias</h3>
			</div>
			<LazyTrending />
		</>
	);
}

export default React.memo(Home);
