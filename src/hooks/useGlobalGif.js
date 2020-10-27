import React, { useContext } from 'react';
import GifsContext from '../context/GifsContext';

export default function Detail() {
	return useContext(GifsContext).gifs;
}
