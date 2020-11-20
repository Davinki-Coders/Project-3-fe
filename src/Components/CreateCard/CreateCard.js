import React, { useState } from "react";
import "./CreateCard.css";

const CreateCard = ({ result, setFormState, formState, selected = false }) => {
	function handleClick(e) {
		// if (result) {
		// 	console.log("results:", result);
		// 	console.log("formState", formState);
		// 	console.log("formState.games:", formState.games);
		// }

		if (formState.games.find((game) => game.id === result.id) && !selected) {
			console.log('selected:', selected);
			const newGameList = [...formState.games];
			const index = newGameList.findIndex((game) => game.id === result.id);
			newGameList.splice(index, 1);
			setFormState({ ...formState, games: newGameList });
		} else {
			console.log('selected:', selected);
			const newGameList = [...formState.games];
			newGameList.push(result);
			setFormState({ ...formState, games: newGameList });
		}
	}

	return (
		<div className='card-container'>
			<button
				onClick={handleClick}
				type='click'
				className='container game-card'>
				<img src={result.background_image} alt={result.name} />
				<p className='game-card-title'>{result.name}</p>
			</button>
		</div>
	);
};

export default CreateCard;
