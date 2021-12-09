import React from 'react'

import './game-tag.css'

function GameTag() {
    return (
        <div>
            <div className="game-tag game-desc">
                <h3>TAGS</h3>
                <div className="game-tag__list">
                    <div className="game-tag__list--css">
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://www.svgrepo.com/show/162811/one-player-game-symbol.svg" alt="" />
                            <div className="game-tag__text">1 Player</div>
                        </button>
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn-icons-png.flaticon.com/512/39/39739.png" alt="" />
                            <div className="game-tag__text">2 Player</div>
                        </button>
                    </div>
                    <div className="game-tag__list--css">
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://www.pikpng.com/pngl/m/71-712931_png-file-svg-action-game-icon-png-clipart.png" alt="" />
                            <div className="game-tag__text">Action</div>
                        </button>
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn-icons-png.flaticon.com/512/2790/2790420.png" alt="" />
                            <div className="game-tag__text">Mutilplayer</div>
                        </button>
                    </div>
                    <div className="game-tag__list--css">
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn1.iconfinder.com/data/icons/rpg-game-design/100/rpg_meat-512.png" alt="" />
                            <div className="game-tag__text">Cooking</div>
                        </button>
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn3.iconfinder.com/data/icons/games-11/24/_zombie-512.png" alt="" />
                            <div className="game-tag__text">Zombie</div>
                        </button>
                    </div>
                    <div className="game-tag__list--css">
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn1.iconfinder.com/data/icons/popular-games/154/game-shot-target-shooter-512.png" alt="" />
                            <div className="game-tag__text">Shooting</div>
                        </button>
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://cdn1.iconfinder.com/data/icons/sports-center-icostory-black-and-white/64/ball-sport-basketball-game-512.png" alt="" />
                            <div className="game-tag__text">Sport</div>
                        </button>
                    </div>
                    <div className="game-tag__list--css">
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://static.thenounproject.com/png/2986673-200.png" alt="" />
                            <div className="game-tag__text">Strategy</div>
                        </button>
                        <button className="game-tag__item">
                            <img className="game-tag__img" src="https://image.flaticon.com/icons/png/512/119/119699.png" alt="" />
                            <div className="game-tag__text">Racing</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameTag
