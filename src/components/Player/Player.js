import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    // console.log(props.player)
    const { image, name, salary } = props.player
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Salary: ${salary}</p>
                    <button onClick={() => handleAddPlayer(props.player)} className='btn btn-primary'><FontAwesomeIcon icon={faPlus} />Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;