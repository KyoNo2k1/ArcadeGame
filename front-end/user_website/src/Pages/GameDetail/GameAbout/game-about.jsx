import React from 'react'
import './game-about.css'
function gameAbout({gameDes,gameCreatedAt}) {
    return (
        <div className="game-about game-desc">
            <h3>DETAILS</h3>
            <div className="game-about__info">
                {gameDes}
            </div>
            <footer className="game-about__footer">
            <div className="game-dev">Developer: Arcade Game</div>
                <div>Added on <time datetime={gameCreatedAt}>{gameCreatedAt}</time></div>
            </footer>
        </div>
    )
}

export default gameAbout
