import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Hero.css';
import { AppContext } from '../../AppContext';
import NukaCarousel from '../NukaCarousel/NukaCarousel';

const Hero = () => {
	const history = useHistory();
	const { userInfo } = useContext(AppContext);
	let handleClick = (e) => {
		e.preventDefault();
		history.push('/signup');
	};

	return (
		<div className='hero-container'>
			<NukaCarousel className='hero-box' />
			<div className='container center hero-box stack'>
				<div className='hero-text center'>
					<h1>Curatr</h1>
					<p>
						
						Curate game lists.
						Share your good tastes. Recommendations galore.
					</p>
					{userInfo ? (
						<h2>{`Welcome ${userInfo.username}!`}</h2>
					) : (
						<button onClick={handleClick}>Sign Up</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
