import React from 'react'

import './game-control.css'

import muiTen from '../../../Assets/Images/Game/muiten.png'
import wasd from '../../../Assets/Images/Game/wasd.png'
import mouseClick from '../../../Assets/Images/Game/mouse-click.png'

function GameControl() {
    return (
            <div className="game-control">
                <div className="game-control__btn">
                    <h3>GAME CONTROLS</h3>
                    <div className="game-control__btn--css">
                        <img className="btn__control" src={muiTen} alt="" />
                        <img className="btn__control" src={wasd} alt="" />
                        <img className="btn__control" src={mouseClick} alt="" />
                    </div>
                </div>
                <div className="game-control__zoom">
                    <h3>ADJUST OR MAXIMIZE</h3>
                    <div className="game-control__btn--css">
                        <i className="btn__zoom fas fa-search-plus"></i>
                        <i className="btn__zoom fas fa-search-minus"></i>
                        <i className="btn__zoom fas fa-expand-alt"></i>
                    </div>
                </div>
            </div>
    )
}

export default GameControl
