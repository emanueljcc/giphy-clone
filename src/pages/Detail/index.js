import React from 'react';
import Gif from '../../components/Gif/Gif';
import useGlobalGifs from '../../hooks/useGlobalGif';

export default function Detail({ params }) {
	const { id } = params;
	const gifs = useGlobalGifs();

	const gif = gifs.find(singleGif => singleGif.id === id);
	console.log(gif);
	return <Gif {...gif} />;
}
