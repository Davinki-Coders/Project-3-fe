import React, { useState, useEffect } from 'react';
import RecentLists from '../RecentLists/RecentLists';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './Home.css';
import axios from 'axios';

const Home = () => {
	const [recentLists, setRecentLists] = useState([]);


	// THIS NEEDS TESTING ONCE WE HAVE MORE LISTS IN DB
	useEffect(() => {
		axios.get('https://davinkibackend.herokuapp.com/api/lists').then((res) => {
			const list = [];
			console.log('res:', res);
			//update this to only show like 3-5 lists
			console.log('length of response array:', res.data.length);

			for (let i = 0; i < 3; i++) {
				const index = Math.floor(Math.random(0, res.data.length + 1) * res.data.length)
				console.log('index:', index);
				list.push(res.data[index]);
			}
			console.log('list:', list);
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
