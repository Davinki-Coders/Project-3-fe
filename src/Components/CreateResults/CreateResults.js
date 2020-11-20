import React from "react";
import CreateCard from "../CreateCard/CreateCard"
import './CreateResults.css'

const CreateResults = ({ games, setFormState }) => {

    // what info to display on each result

	return (
		<div className='scrolling-wrapper'>
			{games.map((game) => {
                return <CreateCard key={game.id} game={game} setFormState={setFormState} />
            })}
		</div>
	);
};

export default CreateResults;
