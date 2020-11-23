import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CreateResults from '../CreateResults/CreateResults';
import CreateCard from '../CreateCard/CreateCard';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { useHistory } from 'react-router-dom';
import './CreateList.css';

const CreateList = () => {
	const emptyForm = {
		title: '',
		description: '',
		games: [],
	};
	const [formState, setFormState] = useState(emptyForm);
	const [results, setResults] = useState([]);
	const { userInfo } = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		axios
			.get(
				'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added'
			)
			.then((res) => {
				setResults(res.data.results);
			});
	}, []);

	if (!results) {
		return <h1>Loading...</h1>;
	}

	if (!userInfo) {
		history.push('/login');
	}

	function handleChange(e) {
		setFormState({ ...formState, [e.target.id]: e.target.value });
	}

	function formatGames(games) {
		const formattedGames = games.map((game) => {
			return { id: game.id, name: game.name, image: game.background_image };
		});
		return formattedGames;
	}

	function handleSubmit(e) {
		e.preventDefault();
		const createdList = {
			...formState,
			games: formatGames(formState.games),
			author: userInfo.username,
			owner: userInfo._id,
			imageUrl: formState.games[0].background_image,
		};
		/* axios({
			method: 'post',
			url: 'https://davinkibackend.herokuapp.com/api/lists/',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: createdList,
		})
			.then(() => history.push('/'))
			.catch(console.error); */

		console.log(createdList);
	}

	return (
		<div className='create-list'>
			<h1>Create List</h1>
			<label htmlFor='title'>Title:</label>
			<input
				required
				id='title'
				maxLength='40'
				onChange={handleChange}
				value={formState.title}></input>
			<label htmlFor='description'>Description:</label>
			<textarea
				required
				onChange={handleChange}
				id='description'
				value={formState.description}
				cols='10'
				rows='10'
				maxLength='400'></textarea>
			<label htmlFor='searchbar'>Search Games:</label>
			<SearchBar setResults={setResults} />
			<h2>Search Results:</h2>
			<CreateResults
				results={results}
				formState={formState}
				setFormState={setFormState}
			/>
			<h2>Your List:</h2>
			<div className='create-list-list'>
				{formState.games.map((game, index) => (
					<CreateCard
						selected={true}
						result={game}
						setFormState={setFormState}
						formState={formState}
						key={index}
						index={index}
					/>
				))}
			</div>
			<button onClick={handleSubmit}>Submit Your List</button>
		</div>
	);
};

export default CreateList;
