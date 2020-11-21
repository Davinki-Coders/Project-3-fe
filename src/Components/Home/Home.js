import React, { useState, useEffect } from 'react';
import RecentLists from '../RecentLists/RecentLists';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './Home.css';
import axios from 'axios';

const Home = () => {
	const [recentLists, setRecentLists] = useState([]);

	useEffect(() => {
		axios.get('https://davinkibackend.herokuapp.com/api/lists').then((res) => {
			const list = [];
			for (let i = 0; i < 3; i++) {
				list.push(res.data[0]);
			}
			setRecentLists(list);
		});
	}, []);
	return (
		<div className='home'>
			<Hero />
			<div className='recents-header'>
				<h2>Recently Created:</h2>
				<Link to='/lists'>Browse More</Link>
			</div>
			<RecentLists lists={recentLists} />
		</div>
	);
};

export default Home;
