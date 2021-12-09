import React from 'react';
import UserRoute from '../Router/UserTestRouter';
import GameRouter from '../Router/GameTestRoute';
import "../styles/table.css";

function Logout() {
  return (
    <div>
      <table></table>
      <table></table>
    <table>
        <tbody><tr>
          <th>ID</th>
            <th>Name</th> 
            <th>Email</th>
            <th>DayOfBirth</th>
            <th>Actions</th>
          </tr>
          <UserRoute/>
        </tbody></table>
        <table>
      <tbody><tr>
        <th>ID</th>
          <th>GameTitle</th>
          <th>Category</th>
          <th>Total of players</th>
          <th>Actions</th>
        </tr>
        <GameRouter/>
      </tbody></table>
        
      </div>
  );
}

export default Logout;
