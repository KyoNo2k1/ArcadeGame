import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Games from "./pages/Games";
import Users from "./pages/Users";
import Notification from "./pages/Notification";
import Info from "./pages/Info";
import Developers from "./pages/Developers";
import Login from './components/Login/login';
import axios from 'axios';

function App() {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('token') != null){
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      axios.get('admin/get-current-admin', config).then(result => {
        setAdmin(result.data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [localStorage.getItem('token')]);
  if(!localStorage.getItem('token')) {
    return <Login />
  }
  return (
    <>
    <Router>
        <Navbar admin={admin}/>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/games' component={Games} />
          <Route path='/users' component={Users} />
          <Route path='/notification' component={Notification} />
          <Route path='/developers' component={Developers} />
          <Route path='/info' component={Info} />
        </Switch>
    </Router>
    </>
  );
}

export default App;