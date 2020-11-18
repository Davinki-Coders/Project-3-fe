import React, { useState, useEffect } from 'react';
import RecentLists from '../RecentLists/RecentLists';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	const [newLists, setNewLists] = useState([]);

	useEffect(() => {
		fetch('/test-data.json')
			.then((res) => res.json())
			.then((resjson) => {
				const list = [];
				for (let i = 0; i < 10; i++) {
					list.push(resjson.list);
				}
				setNewLists(list);
			});
	}, []);
	return (
		<div className='home'>
			<div className='recents-header'>
				<h2>Recently Created:</h2>
				<Link to='/lists'>Browse More</Link>
			</div>
			<RecentLists lists={newLists} />
		</div>
	);
};

export default Home;
