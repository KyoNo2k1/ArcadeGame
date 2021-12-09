import React,{useState,useEffect} from "react";
import axios from 'axios';
import './sidebar.css'

import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {
  BackgroundColorContext
} from "../BackgroundColorContext";

function SideBar({routes,user}) {
  var avatarURL;
  avatarURL = axios.defaults.baseURL + 'uploads/images/users/' + user.Avatar;
  
  const [selectedFile,setFile] = useState(null);
  useEffect(() =>  { 
    if (selectedFile != null ){
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      const img = new FormData()
      img.append('user-image', selectedFile, selectedFile.name)
      axios.post('images/upload/user',img,config).then(res => {
        console.log(res)
      })
    }
  }, [selectedFile])
    
    var showAva = function(event) {
      var avaEdit = document.getElementById('output');
      try {
        avaEdit.src = URL.createObjectURL(event.target.files[0]);
        setFile(event.target.files[0]);
      } catch (error) {
         avaEdit.src = {avatarURL}
      }
    };
  return(user)?(
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper"  > 
              <div className="logo">
                <form runat="server">
                  <img className="avatar-img" src={avatarURL} alt='' id="output"  width="200px" height="200px" />            
                  <input accept="image/*" className="inputImg" type='file' onChange={showAva}/>
                </form>
                <p className='username'>{user.Full_name}</p>
              </div>
            <Nav>
              {routes.map((prop) => {
                return (
                  <li 
                  >
                    <NavLink
                      to={prop.layout + prop.path + '/'+ user.id}
                      className="nav-link"
                      activeClassName="active"
                      onClick={routes.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  ):null;
}
export default SideBar;
