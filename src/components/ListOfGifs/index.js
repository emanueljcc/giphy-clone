import React from 'react';

import Gif from '../Gif/Gif';
// import Spinner from '../Spinner';

function ListOfGifs({ gifs }) {
	// if (loading) return <Spinner />;
	return (
		<div className="columns">
			{gifs.map(({ id, title, url }) => (
				<Gif id={id} title={title} url={url} key={id} />
			))}
		</div>
	);
}

export default ListOfGifs;
