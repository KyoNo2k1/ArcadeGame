import React from 'react'
import StarRating from "./star-rating";
import './game-info.css'

function GameInfo({gameTitle}) {
    return (
            <div className="game-info">
                <div className="game-info__left">
                    <h1>{gameTitle + ' Game'}</h1>
                    <button className="game-info__report">
                        <i className="far fa-flag report-flag"></i>
                        <h4>Report a bug</h4>
                    </button>
                </div>
                <div className="game-info__right">
                    <h4>Did you like this game?</h4>
                    <div class="game__rating">
                        <StarRating />
                    </div>
                    {/* <div className="game-info__like">
                        <button className="like">
                            <i className="far fa-thumbs-up"></i>
                        </button>
                        <button className="unlike">
                            <i className="far fa-thumbs-down"></i>
                        </button>
                    </div> */}
                </div>
            </div>
    )
}

export default GameInfo
