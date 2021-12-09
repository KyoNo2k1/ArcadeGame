import React from "react";
import axios from "axios";
import "../styles/icon.css";
import {FiPlay} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrPause,GrBarChart} from 'react-icons/gr'

export default class GameRouter extends React.Component {
    state = {
        games: [],
        count: 0,
    };
    componentDidMount() {
        axios.get('/game/').then((response) => {
            this.setState({ games: response.data });
            this.setState({ count: response.data.length });
            console.log(this.state.count);
        });
    }
    render() {
        return (
            this.state.games.map((game) =>
                <tr>
                    <td key={game.id}>{game.id}</td>
                    <td key={game.id}><img width="30px" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" height="30px" className="ava" id="avaGame1"/><a className="name">{game.Title}</a></td>
                    <td key={game.id}>{game.Category.replace(" ",", ")}</td>
                    <td key={game.id}>{game.Played}</td>
                    <td><FiPlay className="iconfont0" size="20px"/><GrPause className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><GrBarChart className="iconfont1" size="20px"/><BsInfoCircle size="20px" className="iconfont2"/></td>
                </tr>  
            )
        );
    }
}