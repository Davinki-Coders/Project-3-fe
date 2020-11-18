import React from "react";
import { useHistory } from 'react-router-dom'
import "./Hero.css";

const Hero = () => {
	const history = useHistory()

	let handleClick = (e) => {
		e.preventDefault()
		history.push('/signup')
	}

	return (
		<div className='container center hero-image'>
			<div className=''>
				<div className='hero-text'>
					<h1>Big Statement Here</h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quo accusantium culpa doloribus sit.
					Unde suscipit ullam voluptatibus.
				<button onClick={handleClick}>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
