import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RecentLists from '../RecentLists/RecentLists';

const UserProfile = (props) => {
	const [lists, setLists] = useState();
	const [author, setAuthor] = useState();
	const url = `https://davinkibackend.herokuapp.com/api/lists/author/${props.id}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			if (res.data.length) {
				setAuthor(res.data[0].author);
			}
			setLists(res.data);
		});
	}, [url]);

	if (!lists) {
		return <h1>Loading...</h1>;
	}

	function checkForLists() {
		return lists.length && author;
	}

	return (
		<div style={{ maxWidth: '900px', margin: '0 auto', padding: '10px' }}>
			{checkForLists() ? (
				<>
					<h2>Lists Curated by {author}:</h2>
					<RecentLists lists={lists} />
				</>
			) : (
				<h2>No lists found!</h2>
			)}
		</div>
	);
};

export default UserProfile;
