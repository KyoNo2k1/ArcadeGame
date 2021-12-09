import React from 'react'
import '../styles/modal.css'
import axios from 'axios';

 const DetailGame = ({detail, showInfo, showEdit, dataGame}) => {
    var title="", desc="", category="", players, rate, imgGame=[], gameImgs=[], gameImgsData="";
    title = dataGame.Title;
    desc = dataGame.Description;
    category += dataGame.Category;
    players = dataGame.Played;
    gameImgsData += dataGame.GamePlayImage;
    rate = dataGame.Rate;
    gameImgs = gameImgsData.split(" ");
    const checkImg = (link) => {
        if(link!="no"){
            for(let i=0; i<=5; i++){
                try{
                    var img = new Image();
                    img.src = link+`/${gameImgs[i]}`;
                    img.onload = function() {
                        imgGame[i] = link+`/${gameImgs[i]}`;
                        document.getElementById(`img${i+1}`).src = imgGame[i];
                        return;
                    };
                    img.onerror = function() {
                        imgGame[i] = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
                        document.getElementById(`img${i+1}`).src = imgGame[i];
                        return;
                    };
                }catch(err){
                    return err;
                }
            }
        }
    }
    const clearImg = () => {dataGame.id=""}
    if(detail) {document.getElementById("avaInfo1").src = axios.defaults.baseURL+"uploads/images/games/avatar/"+dataGame.Avatar;checkImg(dataGame.id != "" ?axios.defaults.baseURL+"uploads/images/games/game-play-image/"+dataGame.id:"no");}
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
        <div className="modal-game" >
          <div className="close" onClick={function(event){showInfo();clearImg()}}>+</div>
          <img width="90px" value="No Ava" height="90px" id="avaInfo1"/>
          <form action>
          <table>
            <tbody>
            <tr>
                <td>ImagesOfGame</td>
                <td><img width="30px" height="30px" className="imagee" id="img1" />
                <img width="30px" height="30px" className="imagee" id="img2"/>
                <img width="30px" height="30px" className="imagee" id="img3"/>
                <img width="30px" height="30px" className="imagee" id="img4"/>
                <img width="30px" height="30px" className="imagee" id="img5"/>
                <img width="30px" height="30px" className="imagee" id="img6"/></td>
            </tr>
            <tr>
                <td>Title</td>
                <td>{title}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td><textarea rows="5" cols="30" wrap="soft" id="myText" value={desc}></textarea></td>
            </tr>
            <tr>
                <td>Category</td>
                <td>{category.replaceAll(" "," | ")}</td>
            </tr>
            <tr>
                <td>Total players</td>
                <td>{players}</td>
            </tr>
            <tr>
                <td>Rate</td>
                <td><a>{Math.round(rate)}</a></td>
            </tr>
            </tbody></table>
          </form>
          <a className="button1" onClick={function(event){showEdit()}}>Edit</a>
        </div>
      </div>
    )
}
export default DetailGame
