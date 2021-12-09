import React from 'react'

import './game-same.css'

function GameSame() {
    return (
        <div>
            <div className="game-same game-desc">
                <h3>SAME GAMES</h3>
                <div className="game-same--css">
                    <a className="game-same-link" href="/">
                        <img className="game-same__img" src="https://img-hws.y8.com/cloud/y8-thumbs-thumbnail464x348s-001/5231/thumbnail464x348.gif" alt="" />
                        <div className="game-same__name">Tetris 1</div>
                        <div className="game-same__dev">Min Hiu</div>
                    </a>
                    <a className="game-same-link" href="/">
                        <img className="game-same__img" src="https://d.newsweek.com/en/full/1335908/tetris-99-how-play-win.jpg?w=1600&h=1200&q=88&f=6abc2ab1405c8a796655af740253e6ea" alt="" />
                        <div className="game-same__name">Tetris 2</div>
                        <div className="game-same__dev">Tun Kit</div>
                    </a>
                </div>
                <div className="game-same--css">
                    <a className="game-same-link" href="/">
                        <img className="game-same__img" src="https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-tetris-image_2227849.jpg" alt="" />
                        <div className="game-same__name">Tetris 3</div>
                        <div className="game-same__dev">2' Nhat</div>
                    </a>
                    <a className="game-same-link" href="/">
                        <img className="game-same__img" src="https://scienceline.org/wp-content/uploads/2020/01/tetris.jpg" alt="" />
                        <div className="game-same__name">Tetris 4</div>
                        <div className="game-same__dev">Pun Dy</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameSame
