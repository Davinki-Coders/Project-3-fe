import React from "react";
import "./CreateCard.css";

const CreateCard = ({ game, setFormState }) => {
	return (
		<div className='card-container'>
			<button type='click' className='container game-card'>
				<img src={game.background_image} alt={game.name} />
				<p className='game-card-title'>{game.name}</p>
			</button>
		</div>
	);
};

export default CreateCard;
