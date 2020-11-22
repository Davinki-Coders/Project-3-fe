import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game }) => {
	return (
		<Link to={`../games/${game.id}`} className='game-card'>
			<img src={game.image} alt={game.name} />
			<p className='game-card-title'>{game.name}</p>
		</Link>
	);
};

export default GameCard;
