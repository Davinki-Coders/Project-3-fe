import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './GameInfo.css';
import axios from 'axios';

const GameInfo = ({ id }) => {
	const [gameInfo, setGameInfo] = useState();

	useEffect(() => {
		const url = `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG_KEY}`;

		axios.get(url).then((game) => {
			setGameInfo(game.data);
		});
	}, []);

	if (!gameInfo) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='game-info-screen'>
			<img
				className='game-info-hero'
				src={gameInfo.background_image}
				alt=''></img>
			<h1 className='game-info-title'>{gameInfo.name}</h1>
			<div className='game-info-section'>
				<h2 className='game-info-dev'>
					Released in {gameInfo.released.slice(0, 4)}
				</h2>
				<h2 className='game-info-dev'>
					Developed by {gameInfo.developers[0].name}
				</h2>
				<h2 className='game-info-dev'>
					Published by {gameInfo.publishers[0].name}
				</h2>
				<h2 className='game-info-dev'>
					For{' '}
					{gameInfo.platforms
						.map((results) => results.platform.name)
						.join(', ')}
				</h2>
			</div>
			<div className='game-info-links'>
				<img
					className='game-info-add-img'
					src={gameInfo.background_image_additional}
					alt=''></img>
				<div className='game-info-more'>
					<h3>Official Site:</h3>
					<a href={gameInfo.website} rel='noreferrer' target='_blank'>
						{gameInfo.website}
					</a>
				</div>
			</div>
		</div>
	);
};

export default GameInfo;
