import React,{useState} from 'react'
import Categories from './Categories'
import '../styles/modal.css'
import '../styles/table.css'
import axios from 'axios'

const EditGame = ({editform, showEdit, setImg, dataGame, updateGame, categoriesData}) => {
    var title="", desc="", category="", demo="", link="", categories=[],id, gameplayImages="";
    var gameData, rate, played, getTitle, getDesc, getCategory1="", getCategory2="", getCategory3="", getDemo, getLink, getCategories=[], getCategory="";
    id = dataGame.id;
    title = dataGame.Title;
    desc = dataGame.Description;
    category += dataGame.Category;
    demo = dataGame.DemoUrl;
    link = dataGame.Url;
    rate = dataGame.Rate;
    played = dataGame.Played;
    categories = category.split(" ");
    var gameplayImgs=new FormData();
    const [selectedFile,setFile] = useState(null);
    const [selectedFiles,setFiles] = useState([]);
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const fileUploadHandeler = () => {
      const img = new FormData()
      img.append('game-avatar', selectedFile, selectedFile.name)
      axios.post('/images/upload/games/avatar/'+dataGame.id,img,config).then(res => {
        console.log(res)
      })
    }
    const checkImg = () => {
      if(selectedFile!=null){ 
        fileUploadHandeler();
      }
    }
    const gameFiles = async() => {
      await axios.post('/images/upload/games/game-play-image/'+dataGame.id,gameplayImgs,config).then(res => {
        console.log(res)
      })
    }
    const checkImgs = () => {
      for(let i = 0; i<=6; i++){
        if(selectedFiles[i]!=null){ 
          gameplayImages += selectedFiles[i].name + " ";
          gameplayImgs.append('game-play-image', selectedFiles[i],selectedFiles[i].name)
        }
        else {
          gameFiles();
          return;
        }
      }
    }
    const getStartData = () => {
        getTitle = document.getElementById("titleGame").placeholder;
        getDesc = document.getElementById("description").placeholder ;
        getCategory1 = document.getElementById("category1").placeholder;
        getCategory2 = document.getElementById("category2").placeholder;
        getCategory3 = document.getElementById("category3").placeholder;
        getDemo = document.getElementById("demoURL").placeholder;
        getLink = document.getElementById("linkHTML").placeholder;
    }
    if(editform){
      document.getElementById("titleGame").value = "";
      document.getElementById("description").value = "";
      document.getElementById("category1").value = "";
      document.getElementById("category2").value = "";
      document.getElementById("category3").value = "";
      document.getElementById("demoURL").value = "";
      document.getElementById("linkHTML").value = "";
      getStartData();
    }
    var showAva = function(event) {
        var avaEdit = document.getElementById('avaEdit');
        try {
          avaEdit.src = URL.createObjectURL(event.target.files[0]);
          setFile(event.target.files[0]);
        } catch (error) {
           avaEdit.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
    };
    const loadData = () => {
        getTitle = document.getElementById("titleGame").value;
        getDesc = document.getElementById("description").value ;
        getCategory1 = document.getElementById("category1").value;
        getCategory2 = document.getElementById("category2").value;
        getCategory3 = document.getElementById("category3").value;
        getDemo = document.getElementById("demoURL").value;
        getLink = document.getElementById("linkHTML").value;
        getTitle == "" ? getTitle = document.getElementById("titleGame").placeholder : getTitle = document.getElementById("titleGame").value;
        getDesc == "" ? getDesc = document.getElementById("description").placeholder : getDesc = document.getElementById("description").value;
        getCategory1 == "" ? getCategory1 = document.getElementById("category1").placeholder : getCategory1 = document.getElementById("category1").value;
        getCategory2 == "" ? getCategory2 = document.getElementById("category2").placeholder : getCategory2 = document.getElementById("category2").value;
        getCategory3 == "" ? getCategory3 = document.getElementById("category3").placeholder : getCategory3 = document.getElementById("category3").value;
        getDemo == "" ? getDemo = document.getElementById("demoURL").placeholder : getDemo = document.getElementById("demoURL").value;
        getLink == "" ? getLink = document.getElementById("linkHTML").placeholder : getLink = document.getElementById("linkHTML").value;
        getCategories += getCategory1 != "" ? getCategory2 != "" ? getCategory3 != "" ? getCategory1 + " " + getCategory2 + " " + getCategory3 : getCategory1 + " " + getCategory2 : getCategory1 + " " + getCategory3 : getCategory1 + " " + getCategory2 + " " + getCategory3;
        if(getCategory1.localeCompare(getCategory2) == 0 && getCategory1.localeCompare(getCategory3) == 0) getCategory = getCategory1;
        else if(getCategory1.localeCompare(getCategory2) == 0) getCategory += getCategory1 + " " + getCategory3;
        else if(getCategory1.localeCompare(getCategory3) == 0) getCategory += getCategory1 + " " + getCategory2;
        else if(getCategory3.localeCompare(getCategory2) == 0) getCategory += getCategory1 + " " + getCategory3;
        else getCategory += getCategory1 + " " + getCategory2 + " " + getCategory3;
    }
    var getDataGame = () =>{
        return gameData = {
            DevID: 1,
            Url: getLink,
            DemoUrl: getDemo,
            Title: getTitle,
            Avatar: dataGame.Avatar,
            Category: getCategory.trim(),
            GamePlayImage: gameplayImages != ""? gameplayImages.trim():dataGame.GamePlayImage,
            Description: getDesc,
            Played: played,
            Rate: rate
        }
    }
    const clearImg = () => {
        document.getElementById("avaEdit").src = axios.defaults.baseURL+"uploads/images/games/avatar/"+dataGame.Avatar;
    }
    var showImg = function(event) {
        var output1 = document.getElementById('output1');
        var output2 = document.getElementById('output2');
        var output3 = document.getElementById('output3');
        var output4 = document.getElementById('output4');
        var output5 = document.getElementById('output5');
        var output6 = document.getElementById('output6');
        try {
          selectedFiles[0] = event.target.files[0];
          output1.src = URL.createObjectURL(event.target.files[0]);
        } catch (error) {
           output1.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
        try {
          selectedFiles[1] = event.target.files[1];
          output2.src = URL.createObjectURL(event.target.files[1]);
        } catch (error) {
           output2.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
        try {
          selectedFiles[2] = event.target.files[2];
          output3.src = URL.createObjectURL(event.target.files[2]);
        } catch (error) {
           output3.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
        try {
          selectedFiles[3] = event.target.files[3];
          output4.src = URL.createObjectURL(event.target.files[3]);
        } catch (error) {
           output4.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
        try {
          selectedFiles[4] = event.target.files[4];
          output5.src = URL.createObjectURL(event.target.files[4]);
        } catch (error) {
           output5.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
        try {
          selectedFiles[5] = event.target.files[5];
          output6.src = URL.createObjectURL(event.target.files[5]);
        } catch (error) {
           output6.src = "https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj";
        }
      };
    return (
        <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
        <div className="modal-edit" >
          <div className="close" onClick={function(event){showEdit();clearImg()}}>+</div>
          <form runat="server">
                  <img id="output1"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <img id="output2"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <img id="output3"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <img id="output4"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <img id="output5"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <img id="output6"  width="60px" height="60px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
                  <input accept=".png" type='file' onChange={showImg} multiple/>
          </form> 
          <form action>
          <div className="table_content">
            <tbody>
            <tr>
                <td className="no_border"> <img alt="No Ava" id="avaEdit"  width="40px" height="40px" className="imagee" src ={axios.defaults.baseURL+"uploads/images/games/avatar/"+dataGame.Avatar}/></td>
                <td className="no_border"><input accept=".jpg" type='file' onChange={showAva}/></td>
              </tr>
              <tr>
                <td className="no_border">GameTitle</td>
                <td className="no_border"><input type="text" id="titleGame" name="name" required placeholder={title} className="inputE"
           minlength="4" maxlength="20" size="33"/></td>
              </tr>
              <tr>
              <td className="no_border">Description</td>
                <td className="no_border"> <textarea rows="5" cols="32" wrap="soft" id="description" placeholder={desc} ></textarea></td>
              </tr>
              <tr>
              <td className="no_border">Category</td>
              <td className="no_border"><input id="category1" className="inputE" list="category" placeholder={categories[0]} 
                minlength="4" size="6"/> <input id="category2" className="inputE" list="category" placeholder={categories[1]} 
                minlength="4" size="6"/> <input id="category3" className="inputE" list="category" placeholder={categories[2] != null?categories[2]:""}
                minlength="4" size="6"/> <Categories categoriesData={categoriesData}/></td>
              </tr>
              <tr>
              <td className="no_border">DemoVideo</td>
                <td className="no_border"><input type="url" name="url" id="url" className="inputE" id="demoURL"
           pattern="https://.*" size="33"
           required placeholder={demo}/></td>
              </tr>
              <tr>
              <td className="no_border">LinkHTML</td>
                <td className="no_border"><input type="url" name="url" id="url" className="inputE" id="linkHTML"
           pattern="https://.*" size="33"
           required placeholder={link}/></td>
              </tr>
            </tbody></div>
          </form>
          <a className="button1" onClick={function(event){checkImgs();checkImg();loadData();setImg();getDataGame();updateGame(id,gameData)}}>Save</a>
        </div>
      </div>
    )
}
export default EditGame
