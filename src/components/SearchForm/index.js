import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
	const [keyword, setKeyword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ keyword });
	};

	const handleChange = e => setKeyword(e.target.value);

	return (
		<form
			style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				value={keyword}
				onChange={handleChange}
				placeholder="Search..."
			/>
		</form>
	);
}

export default SearchForm;
