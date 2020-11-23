import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import RecentLists from "../RecentLists/RecentLists";
import { AppContext } from "../../AppContext";

const UserProfile = () => {
	const [lists, setLists] = useState([]);
	const { userInfo } = useContext(AppContext);
	const url = `https://davinkibackend.herokuapp.com/api/lists/author/${userInfo._id}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			setLists(res.data);
		});
	}, []);

	if (!lists) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h2>Lists Curated by {userInfo.username}:</h2>
			<RecentLists lists={lists} />
		</div>
	);
};

export default UserProfile;
