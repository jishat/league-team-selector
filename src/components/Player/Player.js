import React from 'react';
import './Player.css';

const Player = (props) => {
    const {id, name, batting_style, bowling_style, img, flag, country, salary} = props.player;
    const addPlayers = props.addPlayers;
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-0">
                <div className="text-center mt-3">
                    <img src={img} alt="" className="card-img-top playerImg"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <ul className="playerDetails">
                        <li><span>Batting Style:</span> {batting_style}</li>
                        <li><span>Bowling Style:</span> {bowling_style}</li>
                        <li><span>Country:</span> <img src={flag} alt={country} className="flag"/> {country}</li>
                    </ul>
                    <h3 className="salary">${salary}</h3>
                    <button id={id} className="btn selectBtn" data-info='0' onClick={event=>addPlayers(props.player, event)}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Player;