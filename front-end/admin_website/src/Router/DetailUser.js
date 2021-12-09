import React from 'react'
import '../styles/modal.css'
import axios from 'axios';

const DetailUser = ({detail, modalCloseInfo, userData}) => {
    var id, name, gmail, gender, dayOfBirth = "", dayOfBirthValue;
    id = userData.id;
    name = userData.Full_name;
    gmail = userData.Email;
    gender = userData.Gender;
    dayOfBirthValue = userData.DayOfBirth;
    if(dayOfBirthValue != null) for(let i = 0; i < 10; i++) dayOfBirth += dayOfBirthValue[i];
    else dayOfBirth = null;
    if(detail) document.getElementById("avaInfo1").src=axios.defaults.baseURL+"uploads/images/users/"+userData.Avatar;
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-user" >
      <div className="close" onClick={function(event){modalCloseInfo(false);}}>+</div>
      <img width="100px" height="100px" id="avaInfo1"/>
      <form action>
      <table>
        <tbody>
        <tr>
            <td>Id</td>
            <td>{id}</td>
          </tr>
          <tr>
          <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
          <td>Gmail</td>
            <td>{gmail}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender == 0 ? 'Woman' : 'Man'}</td>
          </tr>
          <tr>
          <td>DayOfBirth</td>
            <td>{dayOfBirth != null ? dayOfBirth: '2001-01-01'}</td>
          </tr>
        </tbody></table>
      </form>
    </div>
  </div>
    )
}
export default DetailUser;