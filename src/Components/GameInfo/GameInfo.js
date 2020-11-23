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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			<div className='game-info-more'>
				<div className='game-info-left'>
					<h3>Overall Rating: {gameInfo.metacritic / 10}/10</h3>
					<a href={gameInfo.metacritic_url} rel='noreferrer' target='_blank'>
						Metacritic Page
					</a>
					<h3>Purchase:</h3>
					{gameInfo.stores.map((store, index) => (
						<a
							key={index}
							className='game-info-store'
							href={store.url}
							target='_blank'
							rel='noreferrer'>
							{' '}
							{store.store.name}{' '}
						</a>
					))}
				</div>
				<div className='game-info-right'>
					<h3>Official Site:</h3>
					<a href={gameInfo.website} rel='noreferrer' target='_blank'>
						{gameInfo.website}
					</a>
					<h3>Reddit Community:</h3>
					<a href={gameInfo.reddit_url} rel='noreferrer' target='_blank'>
						{gameInfo.reddit_url}
					</a>
				</div>
			</div>
			<ReactPlayer
				width='100%'
				height='auto'
				className='react-player'
				url={gameInfo.clip.clips.full}
				controls={true}
			/>
		</div>
	);
};

export default GameInfo;
