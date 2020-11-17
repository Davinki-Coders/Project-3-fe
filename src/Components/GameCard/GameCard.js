import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
	return (
		<div className='container game-card'>
			<img src={game.cover} alt={game.title} />
			<p className='game-card-title'>{game.title}</p>
			<p className='game-card-dev'>{game.developer}</p>
		</div>
	);
};

export default GameCard;
