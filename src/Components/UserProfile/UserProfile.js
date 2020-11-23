import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RecentLists from '../RecentLists/RecentLists';

const UserProfile = (props) => {
	const [lists, setLists] = useState([]);
	const [author, setAuthor] = useState('Loading...');
	const url = `https://davinkibackend.herokuapp.com/api/lists/author/${props.id}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			setAuthor(res.data[0].author);
			setLists(res.data);
		});
	}, [url]);

	if (!lists) {
		return <h1>Loading...</h1>;
	}

	return (
		<div style={{ maxWidth: '900px', margin: '0 auto', padding: '10px' }}>
			<h2>Lists Curated by {author}:</h2>
			<RecentLists lists={lists} />
		</div>
	);
};

export default UserProfile;
