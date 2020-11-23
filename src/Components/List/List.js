import React, { useState, useEffect, useContext } from 'react';
import GameCard from '../GameCard/GameCard';
import axios from 'axios';
import './List.css';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';

const List = ({ id }) => {
	const [list, setList] = useState({});
	const { userInfo } = useContext(AppContext);
	let currentUser = null;
	useEffect(() => {
		axios
			.get("https://davinkibackend.herokuapp.com/api/lists/" + id)
			.then((res) => {
				setList(res.data[0]);
			});
	}, []);

	if (!list.title) {
		return <h1>Loading...</h1>;
	}
	if (userInfo) {
		currentUser = userInfo._id;
	}

	return (
		<div className='user-list'>
			<h2>{list.title}</h2>
			<h3>
				by <Link to={"/user/" + list.owner}> {list.author}</Link>
			</h3>
			<p>{list.description}</p>
			{currentUser === list.owner ? (
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
