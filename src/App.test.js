import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// se pueden añadir todos los test que se quieran

// comprobar en este test de ejemplo que encuentra la frase "Last search" en el componenre <App />
// no todos los metodos como del import render como findByText son asincronos, algunos son sincronos *(ver documentacion de testing library)
test('renders without crashing', async () => {
	const { findByText } = render(<App />);
	const title = await findByText(/Last search/i);
	expect(title).toBeInTheDocument();
});
