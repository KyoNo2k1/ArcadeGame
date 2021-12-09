import React from 'react';

import "./AllGames.css";

import GameCell from '../GameCell/game-cell';


function AllGames({listGame}) {
    const allGames = listGame.map(game => {
        return (
            <GameCell game={game}/>
        )
    })

    return (
        <div className="AllGames">
            <h3 className="SectionTitle">All Games</h3>
            <label className="GameCell">
                {allGames}
            </label>
        </div>
    );
};
export default AllGames;