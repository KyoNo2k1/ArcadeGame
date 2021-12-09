import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import {GiConsoleController} from 'react-icons/gi'
import "./Navbar.css";
import {SidebarData} from '../sidebar/SlidebarData'
import {IconContext} from 'react-icons'
import avatar1 from "../../assets/bell.png";
import '../../styles/modal.css';
import AdminInfo from '../../Router/AdminInfo';
import EditAdmin from '../../Router/EditAdmin';
import axios from 'axios';

function Navbar({admin}) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  
  const [detail, setStateE] = useState(false)
  const showInfo = () =>{
    setStateE(!detail);
  }
  const [editform, setEdit] = useState(false)
  const showEdit = () => {
    setStateE(!detail);
    setEdit(!editform)};
  const handleLogout = (value) => {
    if(value == "Log out"){
      if(window.confirm("Are you sure you want to log out?")){
        localStorage.removeItem('token');
        window.location.href = "/";
      }
      else return;
    }
  }
  const updateAdmin = async (id,value) => {
    console.log(value)
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    await axios.patch(`/admin/${id}`,value,config);
    window.location.reload();
    alert("Edit successfully!");
  }
  const closeEdit = () => {
    setEdit(!editform)
  }
  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
      <div className="menu_bars">
          <Link to='#'>
              <AiOutlineBars size={35}  onClick={showSidebar} />
          </Link>
        </div>
        <div className="sidebar__img">
        <Link to='/'><GiConsoleController size={45}/></Link>
              <h1 className="text" >ARCADE GAME</h1>
            </div>
        <div className="navbar__right">
        <div className="dropdown">
             <a className="btn btn-secondary dropdown-toggle" >
                <div className="dropdown">
                     <img className="dropbtn" width="20" src={avatar1} alt="avatar1" style={{float: 'right'}} />
                 <div className="dropdown-content">
                    <a href="/notification">Notification 1</a>
                    <a href="/notification">Notification 2</a>
                    <a href="/notification">Notification 3</a>
                 </div>
                 </div>
        </a>
        </div>
        <a onClick={showInfo} className="ava1">
          <img width="40" height="40" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" id="avaAdmin"/>
        </a>
      </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path} onClick={function(event){handleLogout(item.title)}}>
                              {item.icon}
                              <span >{item.title}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </nav>
    <AdminInfo detail={detail} showInfo={showInfo} showEdit={showEdit} adminData={admin}/>
    <EditAdmin editform={editform} showEdit={showEdit} adminData={admin} setData={updateAdmin} closeEdit={closeEdit}/>
      </IconContext.Provider>
      </>
  )
}
export default Navbar;