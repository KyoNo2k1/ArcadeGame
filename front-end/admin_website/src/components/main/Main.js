import {React,useState,useEffect} from 'react';
import "./Main.css";
import axios from 'axios';
import Chart from "../charts/Chart";
import Chart1 from "../charts/Chart1";

const Main = () => {
  const [lowest, setLowest] = useState(Number.POSITIVE_INFINITY);
  const [highest, setHighest] = useState(Number.NEGATIVE_INFINITY);
  const [lowestGame, setLowestGame] = useState("");
  const [highestGame, setHighestGame] = useState("");
  const [games,setPosts] = useState([]);
  const [users,setUsers] = useState([]);
  const [totalUser,setTotal] = useState(0);
  const [avgUser,setAvg] = useState(0);
  const [maxValue,setMax] = useState(0);
  const [minValue,setMin] = useState(0);
  const [maxDay, setMaxDay] = useState("");
  const [minDay, setMinDay] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/game/');
      setPosts(res.data);
    }
    fetchData();
  },[]);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const fetchUserData = async () => {
      const res = await axios.get('/user/',config);
      setUsers(res.data);
    }
    fetchUserData();
  },[]);
  useEffect(() => {
    var h = highest, hGame = highestGame;
    var l = lowest, lGame = lowestGame;
    var tmp,nameGame;
    for (var i=games.length-1; i>=0; i--) {
        nameGame = games[i].Title;
        tmp = games[i].Played;
        if (tmp < l) {l = tmp; lGame = nameGame;}
        if (tmp > h) {h = tmp; hGame = nameGame;}
    }
    setLowestGame(lGame);
    setHighestGame(hGame);
    setHighest(h);
    setLowest(l);
  },[games]);
  let total = games.reduce((r, c) => r + c.Played, 0);
  let avg = total / games.length;
  const compare =( a, b ) => {
    if ( a.Played > b.Played ){
      return -1;
    }
    if ( a.Played < b.Played ){
      return 1;
    }
    return 0;
  }
  const getDataUser = (total,avg,max,min,maxInx,minInx) => {
      setTotal(total);
      setAvg(avg);
      setMax(max);
      setMin(min);
      setMaxDay(maxInx);
      setMinDay(minInx);
  }
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
            <div className="card1">
              <h2 className="text_white">{users.length}</h2>
              <p className="text_white">Total Users</p>
            </div>

            <div className="card2">
            <h2 className="text_white">{games.length}</h2>
              <p className="text_white">Total Games</p>
            </div>

            <div className="card3">
             <h2 className="text_white">0</h2>
              <p className="text_white">Number of Developer</p>
            </div>

            <div className="card4">
            <h2 className="text_white">0</h2>
              <p className="text_white">Games of Developer</p>
            </div>
          </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Weekly New Users</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart users={users} getData={getDataUser}/>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1 className="text_white">Max</h1>
                <p className="text_white">{maxValue}</p>
                <p className="text_white">{"Date:   " +maxDay}</p>
              </div>

              <div className="card2">
                <h1 className="text_white">Min</h1>
                <p className="text_white">{minValue}</p>
                <p className="text_white">{"Data:   " +minDay}</p>
              </div>

              <div className="card3">
                <h1 className="text_white">Average</h1>
                <p className="text_white">{avgUser.toFixed(3)}</p>
              </div>

              <div className="card4">
                <h1 className="text_white">Total</h1>
                <p className="text_white">{totalUser}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Top 5 Game Favorite</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart1 games={games.sort(compare).slice(0,5)}/>
            </div>
            <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1 className="text_white">Max</h1>
                <p className="text_white">{highest}</p>
                <p className="text_white">{"Game:   " +highestGame}</p>
              </div>

              <div className="card2">
                <h1 className="text_white">Min</h1>
                <p className="text_white">{lowest}</p>
                <p className="text_white">{"Game:   " +lowestGame}</p>
              </div>

              <div className="card3">
                <h1 className="text_white">Average</h1>
                <p className="text_white">{avg.toFixed(3)}</p>
              </div>

              <div className="card4">
                <h1 className="text_white">Total</h1>
                <p className="text_white">{total}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
    </main>
  );
};

export default Main;