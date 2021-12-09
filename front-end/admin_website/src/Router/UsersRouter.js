import {React} from 'react'
import {FiEdit} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import axios from 'axios';

const UsersRouter = ({users, loading, modalInfo, modalEdit, dataUser, deleteOK}) => {
    const deleteUser = (id) => {
        if(window.confirm(`Are you sure you want to delete userID ${id}?`)){
            deleteOK(id);
        }
        else return;
    }
    if(loading) {
        return <h2>Loading...</h2>
    }
    if(users.length === 0) {
        return <h2>No users found</h2>
    }
    return (users.map(user => 
        <tr>
        <td key={user.id}>{user.id}</td>
        <td><img src={axios.defaults.baseURL+"uploads/images/users/"+user.Avatar} width="35px" height="35px" id="ava1" className="ava"/><a className="name">{user.Full_name}</a></td>
        <td>{user.Email}</td>
        <td>{user.DayOfBirth != null ? user.DayOfBirth.substring(0, 10): '2001-01-01'}</td>
        <td><FiEdit onClick={function(event){modalEdit(true);dataUser(user.id)}} className="iconfont1" size="20px"/><RiDeleteBin6Line onClick={function(event){deleteUser(user.id)}} className="iconfont" size="20px"/><BsInfoCircle onClick={function(event){modalInfo(true);dataUser(user.id)}} size="20px" className="iconfont2"/></td>
   </tr>
     )
    );
};
export default UsersRouter;
