import React from "react";
import GameCard from "../GameCard/GameCard"

const GameResults = ({ games }) => {

    // what info to display on each result

	return (
		<div className='container'>
			{games.map((game) => {
                return <GameCard key={game.id} game={game} />
            })}
		</div>
	);
};

export default GameResults;
