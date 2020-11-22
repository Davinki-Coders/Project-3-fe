import React, { useState } from "react";
import "./CreateCard.css";

const CreateCard = ({
	result,
	setFormState,
	formState,
	selected = false,
	index,
}) => {
	function handleClick(e) {
		const newList = [...formState.games];

		if (!index && index !== 0) {
			newList.push(result);
		} else {
			newList.splice(index, 1);
		}

		setFormState({ ...formState, games: newList });
	}

	// STRETCH GOAL - main onClick on game button opens modal OR opens in new tab with GameInfo

	return (
		<div className='card-container'>
			<button type='click' className='container game-card'>
				<img src={result.background_image} alt={result.name} />
				<p className='game-card-title'>{result.name}</p>
			</button>
			<button onClick={handleClick}>
				{!index && index !== 0 ? "Add" : "Remove"}
			</button>
		</div>
	);
};

export default CreateCard;
