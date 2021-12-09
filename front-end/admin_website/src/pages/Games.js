import {React,useState,useEffect} from 'react';
import "../styles/Search.css";
import "../styles/pagination.css";
import "../styles/icon.css";
import "../styles/table.css";
import "../styles/modal.css";
import GamesRouter from '../Router/GamesRouter';
import  PaginationTest from "../components/PaginationTest"
import LBGame from '../Router/LBGame';
import AddGame from '../Router/AddGame';
import DetailGame from '../Router/DetailGame';
import EditGame from '../Router/EditGame';
import Categories from '../Router/Categories';
import axios from 'axios';

function Games() {
  const [game, getGame] = useState([]);
  const [games,setPosts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [lbData,setLeaderboard] = useState([]);
  const [gameFilter,setDataGame] = useState([]);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gameFilter.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  var input, filter;
  const searchDone = () => setSearch(false);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('/game/');
      setPosts(res.data);
      setDataGame(res.data);
      setLoading(false);
    }
    fetchData();
  },[]);
  const fetchGameInfo = async (id) => {
    const res = await axios.get(`/game/${id}`);
    if(id==="") setPosts(res.data);
    getGame(res.data);
  }
  const getDataGame = (data,img,gameImgs,gameplayImages) => {
    AddNewGame(data,img,gameImgs,gameplayImages);
  }
  const AddNewGame = async (data,img,gameImgs,gameplayImages) => {
    var id = 0;
    await axios.post('/game/',data,config);
    const res = await axios.get('/game/');
    var games = [];
    games = res.data;
    games.map((game) => {
        id = game.id
    })
    const dataGame = {
      DevID: 1, 
      Url: data.Url,
      DemoUrl: data.DemoUrl,
      Title: data.Title,
      Avatar: `${id}`+".jpg",
      Category: data.Category,
      Description: data.Description,
      Played: 0,
      Rate: 0
    }
    await axios.post('/images/upload/games/avatar/'+id,img,config)
    await axios.post('/images/upload/games/game-play-image/'+id,gameImgs,config)
    await axios.patch(`/game/${id}`,dataGame,config); 
    window.location.reload();
    window.alert("Game added successfully!");
  }
  const getUpdateGameData = (id,data) => updateGame(id,data);
  const updateGame = async (id,data) => {
    await axios.patch(`/game/${id}`,data,config); 
    window.location.reload();
    window.alert("Game updated successfully!");
  }
  const deleteGame = (id) => {
    axios.delete(`/game/${id}`,config);
    window.location.reload();
    alert("Delete successfully!");
  }
  const getHref = (link) => {
    window.location.href = link;
  }
  var src1="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src2="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src3="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src4="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src5="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  var src6="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" ;
  const [detail, setState] = useState(false)
  const showInfo = () =>{ 
    setState(!detail);
    document.getElementById("myText").readOnly = true;
  }
  const openModal = (value) => setState(value);
  const [addGame, setGame] = useState(false)
  const showAdd = () => setGame(!addGame)
  const closeAdd = (value) => setGame(value)
  const [leaderboard, setLB] = useState(false)
  const compare =( a, b ) => {
    if ( a.HighScore > b.HighScore ){
      return -1;
    }
    if ( a.HighScore < b.HighScore ){
      return 1;
    }
    return 0;
  }
  const openLB = (id) => {
    axios.get(`/user-record/get-by-game-id/${id}`).then(res => {
      setLeaderboard(res.data);
    })
    setLB(!leaderboard);
  }
  const closeLB = () => setLB(!leaderboard)
  
  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    document.getElementById('output1').src = document.getElementById('img1').src;
    document.getElementById('output2').src = document.getElementById('img2').src;
    document.getElementById('output3').src = document.getElementById('img3').src;
    document.getElementById('output4').src = document.getElementById('img4').src;
    document.getElementById('output5').src = document.getElementById('img5').src;
    document.getElementById('output6').src = document.getElementById('img6').src;
    setState(!detail);setEdit(!editform);
  };
  const setImg = () => {
    document.getElementById('img1').src = src1;
    document.getElementById('img2').src = src2;
    document.getElementById('img3').src = src3;
    document.getElementById('img4').src = src4;
    document.getElementById('img5').src = src5;
    document.getElementById('img6').src = src6;
    setEdit(!editform);
  };
  const _handlerClickEnter =(e) => {
    if(e.key === 'Enter'){
      input = document.getElementById("myInput");
      if(input.value==="") {setDataGame(games); setSearch(true);  setCurrentPage(1);}
      else{
        setDataGame(games);
        filter = input.value.toUpperCase();
        var newArray = games.filter(function (el) {
          return el.Title.toUpperCase().indexOf(filter) > -1;
        });
      setSearch(true);
      setCurrentPage(1);
      setDataGame(newArray);
      }
      document.getElementById("myInput").value = "";
    }
  }
  const getCategories = () => {
    var category = document.getElementById("mySort").value;
    if(category==="") {setDataGame(games);setSearch(true);setCurrentPage(1);}
    else{
      setDataGame(games);
      filter = category.toUpperCase();
      var newArray = games.filter(function (el) {
        return el.Category.toUpperCase().indexOf(filter) > -1;
      });
      setSearch(true);
      setCurrentPage(1);
      setDataGame(newArray);
    }
  }
  useEffect(() => {
    const categoriesData = () => {
      axios.get('/category/').then(res => {
        setCategories(res.data);
      })
    }
    categoriesData();
  },[]);
  return (
    <div>
      <input list="category" id="mySort" name="ice-cream-choice"  onChange={getCategories}  placeholder="  Category"/>
          <Categories categoriesData={categories}/>
      <input type="text" id="myInput" onKeyDown={_handlerClickEnter} placeholder="   Search for gameTitle..." />
        <button className="btn1" onClick={showAdd}>Add Game</button>
      <table id ="myTable">
        <tbody><tr>
          <th>ID</th>
            <th>GameTitle</th>
            <th>Category</th>
            <th>Total of players</th>
            <th>Actions</th>
          </tr>
          <GamesRouter games={currentPosts} loading={loading} modalInfo={openModal} playHREF={getHref} deleteOK={deleteGame} modalLB={openLB} dataGame={fetchGameInfo}/>
        </tbody></table>
      <div>
        <DetailGame detail={detail} showInfo={showInfo} showEdit={showEdit} dataGame={game}/>
        <EditGame editform={editform} showEdit={showEdit} setImg={setImg} dataGame={game} updateGame={getUpdateGameData} categoriesData={categories}/>
        <AddGame addGameModal={addGame} closeAdd={closeAdd} saveGame={getDataGame} categories={categories}/>
        <LBGame leaderboard={leaderboard} closeLB={closeLB} leaderboardData={lbData.sort(compare).slice(0,10)}/>
        <PaginationTest postsPerPage={postsPerPage} totalPosts={gameFilter.length} paginate={paginate} search={search} searchDone={searchDone}/>
      </div>
    </div>
  );
}

export default Games;
