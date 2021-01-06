import React from 'react';

import Gif from '../Gif/Gif';
import Spinner from '../Spinner';

function ListOfGifs({ gifs, name, loading }) {
	// if (loading) return <Spinner />;
	return (
		<>
			{name && (
				<h1 className="text-center" style={{ marginTop: 10 }}>
					{decodeURI(name)}
				</h1>
			)}
			<div className="galery" style={{ paddingTop: 80 }}>
				{gifs.length && !loading ? (
					gifs.map(({ id, title, url }) => (
						<Gif id={id} title={title} url={url} key={id} />
					))
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
}

export default ListOfGifs;
