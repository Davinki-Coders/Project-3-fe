import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import GameResults from "../GameResults/GameResults";
import axios from "axios";

const CreateList = () => {
	const [formState, setFormState] = useState();
	const [games, setGames] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
			)
			.then((res) => {
				setGames(res.data.results);
			});
	}, []);

	if (!games) {
		return <h1>Loading...</h1>;
	}


	return (
		<div className='container center' style={{flexDirection: 'column'}}>
			<form className='form-stack'>
				<h1>Create List</h1>
				<label htmlFor='title'>Title:</label>
				<input maxLength='40'></input>
				<label htmlFor='description'>Description:</label>
				<textarea cols='40' rows='10' maxLength='400'></textarea>
				<label htmlFor='searchbar'>Search for Games:</label>
			</form>
				<SearchBar setGames={setGames} />
                <GameResults games={games} />
		</div>
	);
};

export default CreateList;
