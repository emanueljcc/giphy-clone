import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import useGifs from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
const POPULAR = ['goku', 'vegeta', 'trunks'];

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

				<h3>Los Gifs mas populares</h3>
			</div>

			<div className="columns">
				<ListOfGifs gifs={gifs} />
			</div>

			<ul className="text-center">
				{POPULAR.map(pop => (
					<li key={pop}>
						<Link href={`/search/${pop}`}>Gifs de {pop}</Link>
						<br />
					</li>
				))}
			</ul>
		</>
	);
}
