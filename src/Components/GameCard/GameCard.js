import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
	return (
		<a href={`../games/${game.id}`} className='game-card'>
			<img src={game.image} alt={game.name} />
			<p className='game-card-title'>{game.name}</p>
		</a>
	);
};

export default GameCard;
