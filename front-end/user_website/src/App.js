import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './Styles/App.css';
import './Styles/grid.css';
import './Assets/Font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';
import './Assets/css/nucleo-icons.css'

import bgImg from './Assets/Images/App/app-background.png'
import DialogBox from './Components/Popup/DialogBox/dialog-box'
import NavBar from './Components/PageLayout/Header/nav-bar';
import HomePage from './Pages/HomePage/home-page';
import GameDetail from './Pages/GameDetail/game-detail';
import UserAccount from './Pages/UserAccount/user-account';
import Login from './Components/Popup/Form/login';
import SignUp from './Components/Popup/Form/sign-up';
import ForgotPassword from './Components/Popup/Form/forgot-password';
import ChangePassword from './Components/Popup/Form/change-password';
import AboutUs from './Components/PageLayout/Footer/about-us';
import axios from 'axios';

function App() {
  const [dialogState, setDialogState] = useState({
    title: "",
    message: "",
    show: false
  })

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const [user, setUser] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    if (localStorage.getItem('token') != null){
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };

      axios.get('user/get-current-user', config).then(result => {
        setUser(result.data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [localStorage.getItem('token')]);

  return (
    <BrowserRouter>
      <div className="App" style= {{backgroundImage: `url(${bgImg})`,backgroundSize: '1024px 300px'}}>
        <NavBar 
          setShowLogin={setShowLogin} 
          setShowSignUp={setShowSignUp} 
          user={user} 
          setUser={setUser}
        />
        
        <Switch>
          <Route exact path="/" component={() => <HomePage user={user}/>} />
          <Route path='/game-detail' component={() => <GameDetail user={user} key={uuid()}/>} />
          <Route path="/user-account" component={() => <UserAccount user={user} setShowChangePassword={setShowChangePassword} key={uuid()}/>} />
        </Switch>

        <div className="App-footer">
          <AboutUs/>
        </div>

        <DialogBox 
          dialogState={dialogState}
          setDialogState={setDialogState}
        />
          
        <Login 
          showLogin={showLogin} 
          setShowLogin={setShowLogin} 
          setShowForgotPassword={setShowForgotPassword} 
          setShowSignUp={setShowSignUp}
          formRef={formRef}
          setUser={setUser}
          setDialogState={setDialogState}
        />

        <SignUp 
          showSignUp={showSignUp} 
          setShowSignUp={setShowSignUp}
          setShowLogin={setShowLogin}
          formRef={formRef}
          setDialogState={setDialogState}
        />
        
        <ForgotPassword 
          showForgotPassword={showForgotPassword} 
          setShowForgotPassword={setShowForgotPassword}
          formRef={formRef}
          setDialogState={setDialogState}
        />

        <ChangePassword
          showChangePassword={showChangePassword}
          setShowChangePassword={setShowChangePassword}
          formRef={formRef}
          setDialogState={setDialogState}
          user={user}
        />
      </div> 
    </BrowserRouter>
  );
}

export default App;