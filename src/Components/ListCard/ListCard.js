import React from 'react';
import { useHistory } from 'react-router-dom';
import './ListCard.css';

const ListCard = ({ list }) => {
	const history = useHistory();

	let handleClick = (e) => {
		e.preventDefault();
		history.push(`/lists/${list._id}`);
	};

	if (!list.title) {
		return 'loading';
	}

	return (
		<div className='container list-card' onClick={handleClick}>
			<img src={list.games[0].image} alt={list.title} />
			<div className='list-card-info'>
				<p className='list-card-title'>{list.title}</p>
				<p className='list-card-author'>{list.author}</p>
				{/*IMPORTANT!! WE ACTUALLY DO NEED A LIST AUTHOR IN THE SCHEMA LOL MY BAD*/}
			</div>
		</div>
	);
};

export default ListCard;
