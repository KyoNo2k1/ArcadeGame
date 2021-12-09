import React from 'react'
import axios from 'axios'
import './game-screen.css'

const playGame = (gameId) => {
    document.getElementById('gameScreenBtnPlay').style.display = 'none'
    document.getElementById('openGameScreen').style.display = 'block'
    document.getElementById('gameIFrame').src += '';

    axios.post('game/increase-played/' + gameId).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

function GameScreen({gameLink, currentGame}) {
    const gameId = currentGame.id;
    const gameUrl = gameLink + "/" + gameId + "/" + currentGame.Url;
    const gameImg = currentGame.GamePlayImage.split(' ');
    
    return (
        <div className="game-screen-outside" id="game-screen-outside">
            <div className="game-screen" id="gameScreenBtnPlay">
                <div className="game-screen__img">
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[0]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[1]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[2]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[3]} className="game-screen__img--css" alt="" />
                </div>
                <ul className="game-screen__btn">
                    <li className="btn-play" onClick={() => playGame(gameId)}>
                        <a className="btn-play-link">PLAY</a>
                    </li>
                    <li className="btn-toturial">
                        <a className="btn-toturial-link">TUTORIAL</a>
                    </li>
                    <li className="btn-music">
                        <a className="btn-music-link">MUSIC</a>
                    </li>
                    <li className="btn-setting">
                        <a className="btn-setting-link">SETTING</a>
                    </li>
                </ul>
            </div>
            <div className="playGame" id="openGameScreen">
                <iframe 
                    title={currentGame.Title} 
                    id="gameIFrame" 
                    className="playGame__screen" 
                    src={gameUrl}>
                </iframe>
            </div>
        </div>
    )
}

export default GameScreen
