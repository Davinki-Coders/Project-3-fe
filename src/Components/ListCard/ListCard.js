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
		<button type='click' className='list-card' onClick={handleClick}>
			<img src={list.games[0].image} alt={list.title} />
			<p className='list-card-title'>{list.title}</p>
			<p className='list-card-author'>by {list.author}</p>
		</button>
	);
};

export default ListCard;
