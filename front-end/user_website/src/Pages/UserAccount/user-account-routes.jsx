import PlayedGames from "./PlayedGames/played-games";
import Records from "./PersonalRecord/personal-record";
import UserProfile from "./UserProfile/user-profile";
import ListFriend from "./FriendList/list-friend";

var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/user-account",
  },
  {
    path: "/records",
    name: "Record games",
    icon: "tim-icons icon-puzzle-10",
    component: Records,
    layout: "/user-account",
  },
  {
    path: "/friends-list",
    name: "Friends list",
    icon: "tim-icons icon-align-center",
    component: ListFriend,
    layout: "/user-account",
  },
  {
    path: "/played-games",
    name: "Played games",
    icon: "tim-icons icon-atom",
    component: PlayedGames,
    layout: "/user-account",
  },
  
];

export default routes;
