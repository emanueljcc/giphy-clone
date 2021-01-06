import React, { useState } from 'react';
import { useLocation } from 'wouter';

import useGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import LazyTrending from 'components/TrendingSearches';

export default function Home() {
	const [keyword, setKeyword] = useState('');
	const [, setLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = e => {
		e.preventDefault();
		setLocation(`/search/${keyword}`);
	};

	const handleChange = e => setKeyword(e.target.value);

	return (
		<>
			<form
				style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					value={keyword}
					onChange={handleChange}
					placeholder="Buscar..."
				/>
			</form>
			<div className="text-center">
				<h3>Ultima busqueda</h3>
			</div>

			<ListOfGifs gifs={gifs} />

			<div className="text-center">
				<h3>Tendencias</h3>
			</div>
			<LazyTrending />
		</>
	);
}
