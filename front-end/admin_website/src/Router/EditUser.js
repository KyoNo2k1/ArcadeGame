import React from 'react'
import '../styles/modal.css'
import '../styles/table.css'
import axios from 'axios'

const EditUser = ({editform, showEdit, setImg, userData, updateUser}) => {
    var id, name, gmail, gender, dayOfBirth = "", dayOfBirthValue;
    var getName, getGender, getBirthday, getAva="";
    var data;
    var element1 = document.getElementById('fullnameInput');
    var element2 = document.getElementById('manRadioCheck');
    var element3 = document.getElementById('ngaySinhNhat');
    if (element1 != null) getName = element1.value;
    else getName = name;
    if (element2 != null) element2.checked ? getGender = 1 : getGender = 0;
    else getGender = gender;
    if (element3 != null) getBirthday = element3.value;
    else getBirthday = "2001-01-01";
    id = userData.id;
    name = userData.Full_name;
    gmail = userData.Email;
    gender = userData.Gender;
    dayOfBirthValue = userData.DayOfBirth;
    if(dayOfBirthValue != null) for(let i = 0; i < 10; i++) dayOfBirth += dayOfBirthValue[i];
    else dayOfBirth = null;
    if(editform){
        getAva += userData.Avatar;    
        document.getElementById('out1').src = axios.defaults.baseURL+"uploads/images/users/"+getAva;
        document.getElementById('fullnameInput').value = '';
        gender == 1 ? document.getElementById("manRadioCheck").checked = true : document.getElementById("womanRadioCheck").checked = true;
        dayOfBirth != null ? document.getElementById("ngaySinhNhat").value = dayOfBirth : document.getElementById("ngaySinhNhat").value = '2001-01-01';
    }
    const getData = () => {
        getName = document.getElementById('fullnameInput').value;
        if(document.getElementById('manRadioCheck').checked) getGender = 1;
        else if(document.getElementById('womanRadioCheck').checked) getGender = 0;
        getBirthday = document.getElementById('ngaySinhNhat').value;
    }
    var getDataUser = () => {
      console.log(getName)
      return data = {
        Full_name: getName == "" ? name : getName,
        Role: 0,
        Gender: getGender,
        DayOfBirth: getBirthday
     }
  }
    return (
        <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
    <div className="modal-editUser" >
      <div className="close" onClick={function(event){showEdit(false);}}>+</div>
      <img width="130px" height="130px" id="out1" />
      <form action>
      <div className="table_content">
        <tbody>
          <tr>
            <td className="no_border">UserId</td>
            <td className="no_border">{id}</td>
          </tr>
          <tr>
          <td className="no_border">FullName</td>
            <td className="no_border"><input type="text" id="fullnameInput" name="name" required placeholder={name} className="inputE" onChange={getData}
          size="32"/></td>
          </tr>
          <tr>
          <td className="no_border">Gmail</td>
            <td className="no_border"><a>{gmail}</a></td>
          </tr>
          <tr>
            <td className="no_border">Gender</td>
            <td className="no_border"><input type="radio" id="manRadioCheck" name="drone" onClick={getData}
         /><label> Man </label> <input type="radio" id="womanRadioCheck" name="drone" onClick={getData}
         /><label> Woman </label></td>
          </tr>
          <tr>
          <td className="no_border">DayOfBirth</td>
            <td className="no_border"><input type="date" id="ngaySinhNhat" name="trip-start" size = "35" onChange={getData}
           min="1950-01-01" max="2010-12-31"></input></td>
          </tr>
        </tbody></div>
      </form>
      <a className="button1" onClick={function(event){setImg(false);getDataUser();updateUser(id,data);}} >Save</a>
    </div>
  </div>
    )
}
export default EditUser
