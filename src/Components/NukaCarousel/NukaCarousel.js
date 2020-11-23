import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import Axios from 'axios';

const NukaCarousel = () => {
	const [screenshots, setScreenshots] = useState([]);
	useEffect(() => {
		const url =
			'https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added?key=' +
			process.env.REACT_APP_RAWG_KEY;
		Axios.get(url)
			.then((res) => {
				return res.data.results.slice(0, 50).map((game) => {
					return game.background_image;
				});
			})
			.then((images) => setScreenshots(images))
			.catch(console.error);
	}, []);

	return (
		<Carousel withoutControls={true} autoplay={true} autoplayInterval={5000}>
			<img
				className='hero-image'
				src='https://media.rawg.io/media/resize/1920/-/screenshots/092/092c8c633cff8e366b7b7e456337303e_mOIc8Dp.jpg'
				alt='Demon Souls'
			/>
			{screenshots.map((screenshot, index) => (
				<img
					src={screenshot}
					className='hero-image'
					key={index}
					alt={'App Carousel'}
				/>
			))}
		</Carousel>
	);
};

export default NukaCarousel;
