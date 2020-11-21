import React, { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';
import axios from 'axios';
import './List.css';

const List = ({ id }) => {
	const [games, setGames] = useState([]);
	console.log(id);
	//Rodrigo - Stopped here because we do not have a get route for a single list by id. Will continue that tomorrow.
	const fakeList = {
		title: 'Great Game',
		owner: 'Jake',
		description:
			'A list of games that does not exist because this is dummy data for layout development',
		games: [],
	};

	useEffect(() => {
		axios.get('/test-data.json').then((res) => {
			console.log(res.data.games);
			setGames(res.data.games);
		});
	}, []);

	if (!games) {
		return <h1>Loading...</h1>;
	}

	return (
		<div class='user-list'>
			<h2>{fakeList.title}</h2>
			<h3>by {fakeList.owner}</h3>
			<p>{fakeList.description}</p>
			<div className='user-list-container'>
				{games.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</div>
		</div>
	);
};

export default List;
