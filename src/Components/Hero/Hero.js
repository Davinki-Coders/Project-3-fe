import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Hero.css';
import { AppContext } from '../../AppContext';

const Hero = () => {
	const history = useHistory();
	const { userInfo } = useContext(AppContext);
	let handleClick = (e) => {
		e.preventDefault();
		history.push('/signup');
	};

	return (
		<div className='container hero-image'>
			<div className='center'>
				<div className='hero-text center'>
					<h1>Big Statement Here</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
						accusantium culpa doloribus sit. Unde suscipit ullam voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					{userInfo ? (
						`Welcome ${userInfo.username}!`
					) : (
						<button onClick={handleClick}>Sign Up</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
