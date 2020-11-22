import React, { useState } from "react";
import "./CreateCard.css";

const CreateCard = ({ result, setFormState, formState, selected = false }) => {
	function handleClick(e) {
		// if (result) {
		// 	console.log("results:", result);
		// 	console.log("formState", formState);
		// 	console.log("formState.games:", formState.games);
		// }

		// if (formState.games.find((game) => game.id === result.id) && !selected) {
		// 	console.log('selected:', selected);
		// 	const newGameList = [...formState.games];
		// 	const index = newGameList.findIndex((game) => game.id === result.id);
		// 	newGameList.splice(index, 1);
		// 	setFormState({ ...formState, games: newGameList });
		// } else {
		// 	console.log('selected:', selected);
		// 	const newGameList = [...formState.games];
		// 	newGameList.push(result);
		// 	setFormState({ ...formState, games: newGameList });
		// }
	}


	// one function to add an item to the newGameList
	// one function to remove an item from the newGameList
	// these will be the handleClick/onClick events for the add/remove buttons conditionally rendered below
	// STRETCH GOAL - main onClick on game button opens modal OR opens in new tab with GameInfo



	return (
		<div className='card-container'>
			<button
				onClick={handleClick}
				type='click'
				className='container game-card'>
				<img src={result.background_image} alt={result.name} />
				<p className='game-card-title'>{result.name}</p>
			</button>
			{(formState.games.find((game) => game.id === result.id)) ? <button>Remove</button> : <button>Add</button>}
		</div>
	);
};

export default CreateCard;
