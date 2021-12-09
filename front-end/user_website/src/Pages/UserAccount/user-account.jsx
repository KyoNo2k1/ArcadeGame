import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/sidebar";
import routes from "./user-account-routes";

import { BackgroundColorContext } from "./BackgroundColorContext";
import UserProfile from "./UserProfile/user-profile";
import ListFriend from "./FriendList/list-friend";
import Records from "./PersonalRecord/personal-record";
import PlayedGames from "./PlayedGames/played-games";


function UserAccount({user, setShowChangePassword})  {
  window.scrollTo(0, 0);
  const mainPanelRef = React.useRef(null);
 
  return (user) ? (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <React.Fragment>
          <div className="wrapper">
            <SideBar
              routes={routes}
              user={user}
            />
            <div className="main-panel" ref={mainPanelRef} data={color} >
          
            <Switch>
          <Route path={'/user-account/user-profile/' + user.id} component={() => <UserProfile user={user} setShowChangePassword={setShowChangePassword}/>} icon="tim-icons icon-single-02" name= "User Profile"  />
          <Route path={'/user-account/records/' + user.id} component={() => <Records user={user}  />} icon="tim-icons icon-puzzle-10" name= "Records games"  />
          <Route path={'/user-account/friends-list/' + user.id} component={() => <ListFriend user={user}  />} icon="tim-icons icon-align-center" name= "Friends list"  />
          <Route path={'/user-account/played-games/' + user.id} component={() => <PlayedGames user={user}  />} icon="tim-icons icon-atom" name= "Played games"  />
          </Switch>
              
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>

  ): (
    <div style={{'min-height': '1000px'}}/>
  );;
}

export default UserAccount;
