import Axios from "axios";
import React, { useState } from "react";

const SearchBar = ({ setResults }) => {
	const [searchInput, setSearchInput] = useState("");

	let handleSubmit = (event) => {
		event.preventDefault();
		// FINISH THIS FIRST
		// axios call here
		// set & clear search input w/ state above
        let url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&page_size=50&search=mario`;
        
        Axios.get(url)
            .then((res) => {
                console.log(res.data);
                setResults(res.data.results)
            })
	
};
	return (
		<form onSubmit={handleSubmit}>
			<input></input>
		</form>
	);
};

export default SearchBar;
