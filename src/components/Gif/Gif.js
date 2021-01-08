import React from 'react';
import { Link } from 'wouter';

function Gif({ title, id, url }) {
	return (
		<article>
			<div className="card">
				<Link to={`/gif/${id}`}>
					<img
						loading="lazy"
						style={{ width: 300, marginTop: 100 }}
						src={url}
						alt={title}
					/>
				</Link>
			</div>
		</article>
	);
}

export default Gif;
