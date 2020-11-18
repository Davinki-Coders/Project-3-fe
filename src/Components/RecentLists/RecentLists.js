import React from 'react';
import ListCard from '../ListCard/ListCard';

const RecentLists = ({ lists }) => {
	return (
		<div className='container'>
			{lists.map((list, index) => (
				<ListCard key={index} collection={list} />
			))}
		</div>
	);
};

export default RecentLists;
