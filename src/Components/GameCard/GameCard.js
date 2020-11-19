import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game }) => {
	return (
		<a href={`../games/${game.id}`} className='container game-card'>
			<img src={game.background_image} alt={game.name} />
			<p className='game-card-title'>{game.name}</p>
		</a>
	);
};

export default GameCard;
