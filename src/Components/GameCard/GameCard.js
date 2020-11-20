import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
	return (
		<div className='card-container'>
			<a href={`../games/${game.id}`} className='container game-card'>
				<img src={game.background_image} alt={game.name} />
				<p className='game-card-title'>{game.name}</p>
			</a>
		</div>
	);
};

export default GameCard;
