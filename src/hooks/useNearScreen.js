import { useEffect, useRef, useState } from 'react';

// Hook para hacer intersection observer
export default function useNearScreen() {
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef();

	useEffect(() => {
		let observer;
		const onChange = (entries, observer) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setIsNearScreen(true);
				observer.disconnect(); // para evitar llamados cada vez que hace interseccion con el elemento
			}
		};

		/* importacion dinamica para agregar intersection observer a navgeadores que no lo soportan
		y de esta forma solo cargar la libreria cuando de verdad sea necesario, ej: IE */
		Promise.resolve(
			typeof IntersectionObserver !== 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: '100px'
			});

			observer.observe(fromRef.current);
		});
	}, []);

	return { isNearScreen, fromRef };
}
