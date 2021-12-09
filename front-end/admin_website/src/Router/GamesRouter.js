import React from 'react'
import {FiPlay} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrBarChart} from 'react-icons/gr'
import axios from 'axios'

const GamesRouter = ({games, loading, modalInfo, modalLB, dataGame, deleteOK, playHREF}) => {
    const deleteGame = (id) => {
        if(window.confirm(`Are you sure you want to delete userID ${id}?`)){
            deleteOK(id);
        }
        else return;
    }
    if(loading) {
        return <h2>Loading...</h2>
    }
    if(games.length === 0) {
        return <h2>No games found</h2>
    }
    return (games.map(game => 
               <tr>
                    <td key={game.id}>{game.id}</td>
                    <td><img width="35px" src={axios.defaults.baseURL+"uploads/images/games/avatar/"+game.Avatar} height="35px" className="ava" id="avaGame1"/><a className="name">{game.Title}</a></td>
                    <td>{game.Category.replaceAll(" ",", ")}</td>
                    <td>{game.Played}</td>
                    <td><FiPlay onClick={function(event){playHREF(axios.defaults.baseURL+`uploads/games/${game.id}/`+game.Url)}} className="iconfont0" size="20px"/><RiDeleteBin6Line className="iconfont" onClick={function(event){deleteGame(game.id)}} size="20px"/><GrBarChart onClick={function(event){modalLB(game.id);}} className="iconfont1" size="20px"/><BsInfoCircle onClick={function(event){modalInfo(true);dataGame(game.id)}} size="20px" className="iconfont2"/></td>
                </tr>  
         )
    );
};
export default GamesRouter;
