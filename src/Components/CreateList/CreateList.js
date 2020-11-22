import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CreateResults from "../CreateResults/CreateResults";
import CreateCard from "../CreateCard/CreateCard";
import axios from "axios";

const CreateList = () => {
	const emptyForm = {
		title: "",
		description: "",
		games: [],
		owner: "5fb6ea1e65d38c0017ea6399",
	};

	const [formState, setFormState] = useState(emptyForm);
	const [results, setResults] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
			)
			.then((res) => {
				console.log(res.data.results);
				setResults(res.data.results);
			});
	}, []);

	if (!results) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='container center' style={{ flexDirection: "column" }}>
			{/* <form className='form-stack'>
				<h1>Create List</h1>
				<label htmlFor='title'>Title:</label>
				<input maxLength='40'></input>
				<label htmlFor='description'>Description:</label>
				<textarea cols='40' rows='10' maxLength='400'></textarea>
				<label htmlFor='searchbar'>Search Games:</label>
			</form> */}
			<SearchBar setResults={setResults} />
			<CreateResults
				results={results}
				formState={formState}
				setFormState={setFormState}
			/>
			<div className='container'>
				{formState.games.map((game) => (
					<CreateCard selected={true} result={game} setFormState={setFormState} formState={formState} />
				))}
			</div>
		</div>
	);
};

export default CreateList;
