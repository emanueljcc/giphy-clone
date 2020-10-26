import React from 'react';

function Gif({ title, id, url }) {
	return (
		<div className="card">
			<a href={`#${id}`}>
				<img src={url} alt={title} />
			</a>
		</div>
	);
}

export default Gif;
