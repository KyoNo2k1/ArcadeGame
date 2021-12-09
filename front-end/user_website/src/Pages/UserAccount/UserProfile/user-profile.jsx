import React,{useState} from "react";
import axios from 'axios';
import './user-profile.css'

import dateFormat from "dateformat";

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function UserProfile({user, setShowChangePassword}){
  const[name,setName] = useState(user.Full_name);
  const[date,setDate] = useState(dateFormat(user.DayOfBirth, "yyyy-mm-dd"));
  const[gender, setGender] = useState(user.Gender);

  const onSubmit = () => {
    if (!name.trim()){
      alert("Please enter your name!")
      return;
    }

    let now = dateFormat(new Date(), "yyyy-mm-dd");
    if (date > now){
      alert("Invalid day of birth!")
      return;
    }

    const obj = {
      Full_name : name,
      Gender : Number(user.Gender),
      DayOfBirth : date,
      Role : Number(user.Role)
    };
    
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    axios.patch('/user/'+ user.id , obj,config)
        .then(res => {
          alert("Update profile successful!");
        })
        .catch(error => {
          console.log(error)
        })
    }

    return(user)? (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h1 className="title">Profile</h1>
                </CardHeader>
                  <div className="row Card-space" >
                  
                  <div className="col-md-3 " key = {user.id}  >
                    <h5>Full Name:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input 
                        type="text" 
                        name="fullname" 
                        className="o" 
                        value={name} 
                        onChange={(event) => {setName(event.target.value)}} /> 
                    </form>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Sex:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <label className="radio-label">
                      <input 
                      type="radio" 
                      name="gender" 
                      className="a" 
                      id='gender_Male'
                      checked={gender}
                      onClick={() => {setGender(true)}}/> Male 
                    </label>
                    <label  className="radio-label">
                      <input 
                        type="radio" 
                        name="gender" 
                        className="a" 
                        id='gender_Female'
                        checked={!gender}
                        onClick={() => {setGender(false)}}/> Female
                    </label>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Date of birth:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input 
                      type="date" 
                      name="bday" 
                      className="o" 
                      id="birthday"
                      value={date}
                      onChange={(event)=>{setDate(event.target.value)}} />
                      <div></div>
                  </div>
                  </div>
                  <hr />
                  <div className="row ">
                  <div className="col-md-3">
                    <h5>Email:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input type="text" name="email" className="o"  value={user.Email}/>
                    </form>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Password:</h5>
                  </div>
                  <input 
                    className="col-md-3 text-secondary" 
                    type="password"
                    value={user.Password}/>
                </div>
            
                <CardFooter>
                  <Button className="btn btn-fill"
                  onClick={onSubmit}
                  >
                    Save
                  </Button>
                  <Button 
                    className="btn btn-fill"
                    onClick={() => setShowChangePassword(true)}
                  >
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    ):null;
}

export default UserProfile;
