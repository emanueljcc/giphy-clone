import React from 'react';
import {
	render,
	waitForElement,
	fireEvent,
	screen
} from '@testing-library/react';
import App from 'App';

// test sobre el componente Home
// waitForElement para esperar con asincronia el elemento (async await) -> solo para funciones asincronas
test('home work as expected', async () => {
	const { container } = render(<App />);
	const giftLink = await waitForElement(() => container.querySelector('.card'));
	expect(giftLink).toBeVisible();
});

test('search form could be used', async () => {
	render(<App />);
	const input = await screen.findByRole('textbox');

	fireEvent.change(input, { target: { value: 'Goku' } });
	fireEvent.submit(input);

	// screen.debug();

	const title = await screen.findByText('Goku');
	expect(title).toBeVisible();
});
