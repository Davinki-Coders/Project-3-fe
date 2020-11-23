import React, { useState, useEffect } from "react";
import axios from "axios";
import RecentLists from "../RecentLists/RecentLists"

const BrowseLists = () => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		axios.get("https://davinkibackend.herokuapp.com/api/lists").then((res) => {
			setLists(res.data);
		});
    }, []);

	if (!lists) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h2>Browse User Curated Lists:</h2>
            <RecentLists lists={lists} />
		</div>
	);
};

export default BrowseLists;
