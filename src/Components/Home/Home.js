import React, { useState, useEffect } from "react";
import RecentLists from "../RecentLists/RecentLists";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import "./Home.css";
import axios from "axios";

const Home = () => {
	const [recentLists, setRecentLists] = useState([]);

	useEffect(() => {
		axios.get("https://davinkibackend.herokuapp.com/api/lists").then((res) => {
			setRecentLists(res.data.slice(Math.max(res.data.length - 4, 0)));
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
