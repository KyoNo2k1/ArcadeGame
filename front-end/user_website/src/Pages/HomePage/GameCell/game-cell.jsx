import React from "react";
import axios from "axios";
import "./game-cell.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function GameCell({game}){
    const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Avatar;

    return (
        <div className="game-cell all-games" data-item={game.Category}>
            <Link className="game-cell-link" to={'/game-detail/' + game.id + "/" + game.Url}>
                <img className="game-cell__img" src={gameAvaUrl} alt="Cannot get" />
                <div className="game-cell__name">{game.Title}</div>
                <div className="game-cell__rate">Rate: {game.Rate} / 5⭐️</div>
                <div className="game-cell__played">Played: {game.Played}</div>
            </Link>
        </div>
    );
}

export default GameCell;