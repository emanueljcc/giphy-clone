import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

import getTrendingTermsService from 'services/getTrendingTermsService';

export default function TrendingSearches() {
	const [location] = useLocation();
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		(async () => {
			setTrends(await getTrendingTermsService());
		})();
	}, [location]);

	return (
		<ul className="comma-list">
			{trends.map(trend => (
				<li key={trend}>
					<Link to={`/search/${trend}`}>{trend}</Link>
					<br />
				</li>
			))}
		</ul>
	);
}
