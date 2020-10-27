import React from 'react';
import { Link } from 'wouter';
function Gif({ title, id, url }) {
	return (
		<div className="card" style={{ cursor: 'pointer' }}>
			<Link to={`/gif/${id}`}>
				<img loading="lazy" src={url} alt={title} />
			</Link>
		</div>
	);
}

export default Gif;
