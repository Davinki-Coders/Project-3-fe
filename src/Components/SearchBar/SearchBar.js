import Axios from 'axios';
import React, { useState } from 'react';

const SearchBar = ({ setResults }) => {
	const [searchInput, setSearchInput] = useState('');

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		let url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&page_size=50&search=${searchInput}`;

		Axios.get(url).then((res) => {
			setResults(res.data.results);
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				required
				onChange={handleChange}
				type='text'
				value={searchInput}></input>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
