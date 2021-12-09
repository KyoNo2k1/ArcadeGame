import React, {useState, useEffect} from 'react';
import './game-detail.css'
import axios from 'axios'
import GameScreen from './GameScreen/game-screen'
import GameControl from './GameControl/game-control'
import GameInfo from './GameInfo/game-info'
import GameComment from './GameComment/game-comment'
import GameDiff from './GameDiff/game-diff'
import GameDemo from './GameDemo/game-demo'
import GameTag from './GameTag/game-tag'
import GameSame from './GameSame/game-same'
import GameAbout from './GameAbout/game-about';
import FriendList from '../HomePage/FriendList/friend-list'

function GameDetail({user}) {
    window.scrollTo(0, 0);
    
    const getUrlGame= window.location.href.split("/")
    const gameId = getUrlGame[getUrlGame.length - 2]
    
    const [currentGame, setCurrentGame] = useState(null)
    const gameLink = axios.defaults.baseURL + 'uploads/games'

    useEffect(() => {
        axios.get('/game/' + gameId)
        .then((res)=>{
            setCurrentGame(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[gameId])

    return (currentGame) ? (
        <div className="grid wide-1">
            <div className="row">
                <FriendList user={user}/>
                <GameScreen gameLink={gameLink} currentGame={currentGame}/>
            </div>
            <div className="row">
                <GameControl/>
            </div>
            <div className="row">
                <GameInfo gameTitle={currentGame.Title}/>
            </div>

            <div className="row">
                <GameAbout gameDes={currentGame.Description} gameCreatedAt={currentGame.createdAt}/>
                <GameDemo gameDemoUrl={currentGame.DemoUrl}/>
            </div>
            
            <div className="row">
                <GameComment user={user} gameId={gameId}/>
                <GameTag/>
                <GameDiff/>
                <GameSame/>
            </div>
            
        </div>
    ): (
        <div style={{'min-height': '1000px'}}/>
    );
}

export default GameDetail