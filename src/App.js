import React from 'react';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import './App.css';

export default function App() {
	return (
		<StaticContext.Provider>
			<Link to="/">
				<img
					src="https://blog.phonehouse.es/wp-content/uploads/2018/01/giphy-1-1.gif"
					alt="logo"
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
						cursor: 'pointer'
					}}
				/>
			</Link>

			<GifsContextProvider>
				<Route component={Home} path="/" />
				<Route path="/search/:keyword" component={SearchResult} />
				<Route path="/gif/:id" component={Detail} />
			</GifsContextProvider>
		</StaticContext.Provider>
	);
}
