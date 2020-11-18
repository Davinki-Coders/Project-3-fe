import React, { useState, useEffect } from "react";
// import { Route } from 'react-router-dom'
import axios from "axios";

const GameInfo = () => {
	const [gameInfo, setGameInfo] = useState();

	useEffect(() => {
		const id = 50738;
		const url = `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_KEY}`;

		axios.get(url).then((game) => {
			console.log(game);
			setGameInfo(game.data);
		});
	}, []);

	if (!gameInfo) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{gameInfo.name}</h1>
            <img src={gameInfo.background_image}></img>
		</div>
	);
};

export default GameInfo;
