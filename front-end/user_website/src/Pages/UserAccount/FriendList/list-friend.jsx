
import React, {useState,useEffect} from "react";
import './friend-list.css'
//import AddFriend from './add-friend.jsx'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";


function ListFriend({user}){
  const openForm = ()=> {
    document.getElementById('friend-list-add').style.display = 'none';
    document.getElementById('friend-list-form').style.display = 'flex';
  }
  const [listFriend, setListFriend] = useState([]);

  useEffect(() => {
    if(user!=null)
    getFriend()
  },[user])
  
  const getFriend = () => {
    axios.get('friend/get-by-user-id/' + user.id )
        .then(res => {
            setListFriend(res.data.post)
        })
        .catch(err => {
            console.log(err);
        })
      }

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
    
  const addmail = document.getElementById('add-email');

  const AddFriend = () => {
    
    if(addmail.value != null)
    {
      if(user.Email !== addmail.value)
      {
          axios.post('/friend', {
              UserID : user.id,
              FriendEmail : addmail.value
              }, config)
              .then(response => {
                  getFriend()
              })
              .catch(err => {
                  alert('Friend exists or cant find')
          })
      }
      else alert('Can not add your self')
    }
  }
 
  
    return  (user) ? (
    <>
    <div className="content">
    
      <Row>
        <Col className="12">
          <Card>
          <CardHeader>
            <h1 className="title">List friend</h1>
            
            <button 
              id="friend-list-add"
              className="btnAddFr"
              onClick={openForm}
            >      
            <i className="fas fa-user-plus"></i>
            </button>
            <div className="friend-list__add-email" id="friend-list-form">
              <input type="text" className="form-control" name='' id="add-email" placeholder="Friend Email"/>
              <button type="submit" className="btn btn-primary" onClick={AddFriend}>Add</button>
            </div>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
            <thead className="text-primary">
                      <tr>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>Full name</th>
                        <th>Sex</th>
                        <th>Day of birth</th>
                      </tr>
            </thead>
                <tbody>
                  {
                    listFriend ? listFriend.map((friend) => (
                      <tr key={friend.id}>
                      <td><img className="friend-list__title-img" src={axios.defaults.baseURL + 'uploads/images/users/' + friend.FriendAvatar} alt="" /></td>
                      <td>{friend.FriendEmail}</td>
                      <td>{friend.FriendFullName}</td>
                      <td>{Number(friend.FriendGender) === 1 ? 'Male' : 'Female'}</td>
                      <td>{friend.FriendDayOfBirth != null ? friend.FriendDayOfBirth.substring(0, 10): '0000-00-00'}</td>
                    </tr>
                    )) : null
                  }
                </tbody>
            </Table>
          </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  ) : null;
}

export default ListFriend;
