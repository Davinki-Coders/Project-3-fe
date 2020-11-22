import React, { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';
import axios from 'axios';
import './List.css';

const List = ({ id }) => {
	const [list, setList] = useState({});

	useEffect(() => {
		axios
			.get('https://davinkibackend.herokuapp.com/api/lists/' + id)
			.then((res) => {
				setList(res.data[0]);
			});
	}, []);

	if (!list.title) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='user-list'>
			<h2>{list.title}</h2>
			<h3>by {list.author}</h3>
			<p>{list.description}</p>
			<div className='user-list-container'>
				{list.games.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</div>
		</div>
	);
};

export default List;
