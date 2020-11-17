import React from 'react';
import Router from 'react-router-dom'
import './ListCard.css'
const ListCard = ({collection}) => {
    return (
        <div className="container list-card">
            <img src={collection.image} />
        <div className="list-card-info">
            <p className="list-card-title">{collection.listName}</p>
            <p className="list-card-author">{collection.author}</p>
        </div>
        </div>
    );
};

export default ListCard;