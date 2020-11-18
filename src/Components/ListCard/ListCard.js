import React from 'react';
import { useHistory } from 'react-router-dom'
import './ListCard.css'


const ListCard = ({collection}) => {
    const history = useHistory()
    const id = 50738; // game id, will be list id

    let handleClick = (e) => {
        e.preventDefault()
        history.push(`/lists/${id}`)
    }

    return (
        <div className="container list-card" onClick={handleClick}>
            <img src={collection.image} />
        <div className="list-card-info">
            <p className="list-card-title">{collection.listName}</p>
            <p className="list-card-author">{collection.author}</p>
        </div>
        </div>
    );
};

export default ListCard;