import React, { useState } from 'react';
import './CreateCard.css';

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
		<div className='create-card'>
			<div className='create-card-grid'>
				<img src={result.background_image} alt={result.name} />
				<p className='create-card-title'>{result.name}</p>
				<button onClick={handleClick}>
					{!index && index !== 0 ? 'Add' : 'Remove'}
				</button>
			</div>
		</div>
	);
};

export default CreateCard;
