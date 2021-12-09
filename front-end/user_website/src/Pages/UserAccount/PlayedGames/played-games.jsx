import  { React,useState,useEffect } from "react";
import axios from "axios";
import './played-games.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";


function PlayedGames() {
    const [listGame,setListGame] = useState([]);
    
    useEffect(() => {
    axios.get('game/').then(result => {
      setListGame(result.data)
      
    }).catch(err => {
      console.log(err)
    })
  }, [])  

    const listGameRender = () => listGame.map(game => {
        const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Avatar;
        return (
        <div className="game-list show-game" data-item={game.Category}>
            <Link className="game-list-link" to={'/game-detail/' + game.id + "/" + game.Url}>
                <img className="game-list-img" src={gameAvaUrl} alt="Cannot get" />
                <div className="game-list-name">{game.Title}</div>
            </Link>
        </div>
        );
    })
    return (
        <>
            <div className="content">
                <Row>
                <Col className="12">
                    <Card>
                    <CardHeader>
                    <h1 className="title">Game Played</h1>
                    </CardHeader>
                    <CardBody>
                    {
                        listGameRender()
                    }
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </div>
        </>
    )
}

export default PlayedGames;
