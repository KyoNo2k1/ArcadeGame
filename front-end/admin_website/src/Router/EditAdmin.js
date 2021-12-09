import React from 'react'

const EditAdmin = ({editform, showEdit,adminData, setData, closeEdit}) => {
  var id, name, gmail, gender, dayOfBirth = "", dayOfBirthValue;
  var getName, getGender, getBirthday;
  var data;
  var element1 = document.getElementById('nameInput');
  var element2 = document.getElementById('manCheck');
  var element3 = document.getElementById('sinhnhat');
  if (element1 != null) getName = element1.value;
  else getName = name;
  if (element2 != null) element2.checked ? getGender = 1 : getGender = 0;
  else getGender = gender;
  if (element3 != null) getBirthday = element3.value;
  else getBirthday = "2001-01-01";
  id = adminData.id;
  name = adminData.Full_name;
  gmail = adminData.Email;
  gender = adminData.Gender;
  dayOfBirthValue = adminData.DayOfBirth;
  if(dayOfBirthValue != null) for(let i = 0; i < 10; i++) dayOfBirth += dayOfBirthValue[i];
  else dayOfBirth = null;
  if(editform){
    document.getElementById('nameInput').value = '';
    gender == 1 ? document.getElementById("manCheck").checked = true : document.getElementById("womanCheck").checked = true;
    dayOfBirth != null ? document.getElementById("sinhnhat").value = dayOfBirth : document.getElementById("sinhnhat").value = '2001-01-01';
  }
  const getData = () => {
    getName = document.getElementById('nameInput').value;
    if(document.getElementById('manCheck').checked) getGender = 1;
    else if(document.getElementById('womanCheck').checked) getGender = 0;
    getBirthday = document.getElementById('sinhnhat').value;
  }
  var getDataAdmin = () => {
    return data = {
      Email: gmail,
      Full_name: getName == "" ? name : getName,
      Gender: getGender,
      DayOfBirth: getBirthday
    }
  }
  return (
    <div className="bg-modal" style={{display: editform ? 'flex' : 'none' }}>
      <div className="modal-editAdmin" >
        <div className="close" onClick={function(event){showEdit()}}>+</div>
          <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" height="100px" id="avaInfo"/>
          <form action>
          <div className="table_content">
            <tbody>
              <tr>
                <td className="no_border">Id</td>
                <td className="no_border">{id}</td>
              </tr>
              <tr>
              <td className="no_border">Name</td>
                <td className="no_border"><input type="text" id="nameInput" name="name" required placeholder={name} className="inputE"
            size="30"/></td>
              </tr>
              <tr>
              <td className="no_border">Gmail</td>
                <td className="no_border">{gmail}</td>
              </tr>
              <tr>
                <td className="no_border">Gender</td>
                <td className="no_border"><input type="radio" id="manCheck" name="drone" value="man"
            /><label> Man </label> <input type="radio" id="womanCheck" name="drone" value="woman"
            /><label> Woman </label></td>
              </tr>
              <tr>
              <td className="no_border">DayOfBirth</td>
                <td className="no_border"><input type="date" id="sinhnhat" name="trip-start" size = "35"
          min="1950-01-01" max="2005-12-31"></input></td>
              </tr>
            </tbody></div>
          </form>
        <a className="button1" onClick={function(event){getData();getDataAdmin();setData(id,data);closeEdit()}} >Save</a>
    </div>
  </div>
    )
}
export default EditAdmin