import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import axios from "axios";

const List = () => {
	const [games, setGames] = useState([]);

	const fakeList = {
		title: "Great Game",
		owner: "Jake",
		description: "description here",
		games: [],
	};

	useEffect(() => {
		axios.get("/test-data.json").then((res) => {
            console.log(res.data.games);
			setGames(res.data.games);
		});
    }, []);
    
    if (!games) {
        return <h1>Loading...</h1>
    }

	return (
		<div>
			<h1>{fakeList.title}</h1>
			<h2>{fakeList.owner}</h2>
			<p>{fakeList.description}</p>
			<div className='container'>
				{games.map((game) => (
					<GameCard game={game} />
				))}
			</div>
		</div>
	);
};

export default List;
