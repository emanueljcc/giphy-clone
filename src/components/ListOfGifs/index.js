import React from 'react';

import Gif from '../Gif/Gif';
// import Spinner from '../Spinner';

function ListOfGifs({ gifs, name }) {
	// if (loading) return <Spinner />;
	return (
		<>
			{name && (
				<h1 className="text-center" style={{ marginTop: 10 }}>
					{decodeURI(name)}
				</h1>
			)}
			<div className="galery">
				{gifs.map(({ id, title, url }) => (
					<Gif id={id} title={title} url={url} key={id} />
				))}
			</div>
		</>
	);
}

export default ListOfGifs;
