import React, { useState, useEffect, useContext } from 'react';
import GameCard from '../GameCard/GameCard';
import axios from 'axios';
import './List.css';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';

const List = ({ id }) => {
	const [list, setList] = useState({});
	const { userInfo } = useContext(AppContext);
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
			{userInfo._id === list.owner ? (
				<Link to={'/lists/edit/' + id}>Edit List</Link>
			) : null}
			<div className='user-list-container'>
				{list.games.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</div>
		</div>
	);
};

export default List;
