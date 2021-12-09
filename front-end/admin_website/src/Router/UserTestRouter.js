import React from "react";
import axios from "axios";
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import "../styles/icon.css";

export default class UserRoute extends React.Component {
    state = {
        users: [],
        count: 0,
    };
    componentDidMount() {
        axios.get('/user/').then(res => {
            this.setState({
                users: res.data,
            });
        });
    }
    render(){
    
        return (
            this.state.users.map(user => 
                <tr>
                    <td key={user.id}>{user.id}</td>
                    <td key={user.id}><img src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" width="30px" height="30px" id="ava1" className="ava"/><a className="name">{user.Full_name}</a></td>
                    <td key={user.id}>{user.Email}</td>
                    <td key={user.id}>2001-10-03</td>
                    <td><FiEdit className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/><BsInfoCircle size="20px" className="iconfont2"/></td>
                </tr>
            ));
        
    }
}