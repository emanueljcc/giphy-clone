import React from 'react';
import { Link, Route } from 'wouter';

import ListOfGifs from './components/ListOfGifs';

import './App.css';

export default function App() {
	return (
		<div className="App columns">
			<Link href="/gif/vegeta">Gifs de Vegeta</Link>
			<Link href="/gif/trunks">Gifs de Trunks</Link>
			<Route path="/gif/:keyword" component={ListOfGifs} />
		</div>
	);
}
