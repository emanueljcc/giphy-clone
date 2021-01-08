import { useEffect, useRef, useState } from 'react';

// Hook para hacer intersection observer
export default function useNearScreen(externalRef, once = true) {
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef();

	useEffect(() => {
		let observer;

		const element = externalRef ? externalRef.current : fromRef.current;

		const onChange = (entries, observer) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setIsNearScreen(true);
				once && observer.disconnect(); // para evitar llamados cada vez que hace interseccion con el elemento
			} else {
				!once && setIsNearScreen(false);
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

			if (element) observer.observe(element);
		});
	}, [externalRef, once]);

	return { isNearScreen, fromRef };
}
