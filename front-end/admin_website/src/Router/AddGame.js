
import React,{useState} from 'react'
import Categories from './Categories'
import '../styles/modal.css'
import '../styles/table.css'

const AddGame = ({addGameModal, closeAdd, saveGame, categories}) => {
    var url="", demoUrl="", title="", category1="", category2="", category3="", desc="", category="";
    var img,gameplayImgs = new FormData();
    var gameplayImages ="";
    const getData = () => {
      url = document.getElementById('urlHTML').value;
      demoUrl = document.getElementById('demoUrl').value;
      title = document.getElementById('title').value;
      category1 = document.getElementById('Cate1').value;
      category2 = document.getElementById('Cate2').value;
      category3 = document.getElementById('Cate3').value;
      desc = document.getElementById('desc').value;
    }
    var dataGame;
    const [selectedFile,setFile] = useState(null);
    const [selectedFiles,setFiles] = useState([]);
    const fileUploadHandeler = () => {
      img = new FormData();
      img.append('game-avatar', selectedFile, selectedFile.name)
    }
    const checkImgs = () => {
      for(let i = 0; i<=6; i++){
        if(selectedFiles[i]!=null){ 
          gameplayImages += `img${i+1}.png` + " ";
          gameplayImgs.append('game-play-image', selectedFiles[i],selectedFiles[i].name)
        }
        else {
          return;
        }
      }
    }
    if(addGameModal){
      document.getElementById('urlHTML').value = "";
      document.getElementById('demoUrl').value = "";
      document.getElementById('title').value = "";
      document.getElementById('Cate1').value = "";
      document.getElementById('Cate2').value = "";
      document.getElementById('Cate3').value = "";
      document.getElementById('desc').value = "";
      document.getElementById('fileImg').value = "";
    }
    const checkData = () => {
      if(url == '' || demoUrl == '' || title == '' || (category1 == '' && category2 == '' && category3 == '') || desc == '' || selectedFile == null || selectedFiles[0]==null){
        alert('Empty Value');
        return false;
      }
      else {
        checkImgs();
        fileUploadHandeler();
        saveGame(dataGame,img,gameplayImgs,gameplayImages.trim());
        closeAdd(false);
      }
    }
    const setDataFiles = (e) => {
      selectedFiles[0] = e.target.files[0];
      selectedFiles[1] = e.target.files[1];
      selectedFiles[2] = e.target.files[2];
      selectedFiles[3] = e.target.files[3];
      selectedFiles[4] = e.target.files[4];
      selectedFiles[5] = e.target.files[5];
    }
    const clearImg = () => {
        document.getElementById("avaAddGame").src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj"
    }
    const getDataGame = () => {
        if(category1.localeCompare(category2) == 0 && category1.localeCompare(category3) == 0) category = category1;
        else if(category1.localeCompare(category2) == 0) category += category1 + " " + category3;
        else if(category1.localeCompare(category3) == 0) category += category1 + " " + category2;
        else if(category3.localeCompare(category2) == 0) category += category1 + " " + category3;
        else category += category1 + " " + category2 + " " + category3;
        return dataGame = {
            DevID: 1, 
            Url: url,
            DemoUrl: demoUrl,
            Title: title,
            Avatar: "default.jpg",
            Category: category.trim(),
            Description: desc,
            Played: 0,
            Rate: 0
        }
    }
    var showAvaAdd = function(event) {
        setFile(event.target.files[0]);
        document.getElementById('avaAddGame').src = URL.createObjectURL(event.target.files[0]);
      }
    return (
        <div className="bg-modal" style={{display: addGameModal ? 'flex' : 'none' }}>
    <div className="modal-addGame" >
      <div className="close" onClick={function(event){closeAdd(false);clearImg()}}>+</div>
      <form runat="server">
          <img alt="AvaGame" width="90px" height="90px" className="imagee" id="avaAddGame" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj"/>
          <input accept=".jpg" onChange={showAvaAdd} id="fileImg" type='file'/>
      </form> 
      <form action>
      <div className="table_content">
        <tbody>
        <tr>
            <td className="no_border">ImagesOfGame</td>
            <td className="no_border"><input accept=".png" type='file' onChange={setDataFiles} multiple/></td>
          </tr>
          <tr>
            <td className="no_border">GameTitle</td>
            <td className="no_border"><input type="text" id="title" name="name" required className="inputE" onChange={getData}
             minlength="4" maxlength="20" size="33"/></td>
          </tr>
          <tr>
          <td className="no_border">Description</td>
            <td className="no_border"> <textarea rows="5" cols="32" wrap="soft" id="desc" onChange={getData} className="inputE"></textarea></td>
          </tr>
          <tr>
          <td className="no_border">Category</td>
            <td className="no_border"><input id="Cate1" className="inputE" list="category" onChange={getData}
            minlength="4" size="6"/> <input id="Cate2" className="inputE" list="category" onChange={getData}
            minlength="4" size="6"/> <input id="Cate3" className="inputE" list="category" onChange={getData}
            minlength="4" size="6"/> <Categories categoriesData={categories}/></td>
          </tr>
          <tr>
            <td className="no_border">DemoVideo</td>
              <td className="no_border"><input type="url" className="inputE" id="demoUrl" onChange={getData}
              pattern="https://.*" size="33" required/></td>
          </tr>
          <tr>
            <td className="no_border">LinkHTML</td>
              <td className="no_border"><input type="url" id="urlHTML" className="inputE" onChange={getData} 
              pattern="https://.*" size="33" required/></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){getDataGame();checkData()}}>Save</a>
    </div>
  </div>
    )
}
export default AddGame
