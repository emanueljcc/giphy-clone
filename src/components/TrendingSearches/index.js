import React, { Suspense } from 'react';

import useNearScreen from 'hooks/useNearScreen';
import Spinner from 'components/Spinner';

// react lazy
const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

// TODO: LAZY LOAD
export default function LazyTrending() {
	const { isNearScreen, fromRef } = useNearScreen();

	return (
		<div ref={fromRef}>
			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	);
}
