import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavLink,
} from "reactstrap";

import './nav-bar.css'
import logo from '../../../Assets/Images/App/app-logo.png';
import vietnam_icon from '../../../Assets/Images/Icons/vietnam.png'
import bell_icon from '../../../Assets/Images/Icons/bell.png'
import axios from "axios";

function NavBar({setShowLogin, setShowSignUp, user, setUser}) { 

    //search 

    const [inputSearch, setInputSearch] = useState('')
    const elementGame = document.querySelectorAll('.all-games')
    function unSearch(e){
        if (e.target.value === ''){
            Array.from(elementGame).forEach(function(element){
                element.style.display = 'block';
            })
        }
        else
        {
            setInputSearch(e.target.value.toLowerCase())
        }
    }
    function searchItem(){      

        Array.from(elementGame).forEach(function(element){
            let nameItem = element.querySelector('.game-cell__name').textContent;
            if (nameItem.toLowerCase().indexOf(inputSearch) !== -1)
            {
                element.style.display = 'block';
            }
            else
            {
                element.style.display = 'none';
            }
        })
        // checkEmpty(elementGame);
    }
        // function checkEmpty(element){
        //     let count = 0;
        //     for(let i = 0; i < element.length; i++){
        //         if (element[i].style.display === 'block')
        //         count++;
        //     }

        //     if (count === 0){
        //         document.querySelector('#no__product').textContent = 'Can\'t find';
        //     }
        //     else{
        //         document.querySelector('#no__product').textContent = ''; 
        //     }
        // }
    



    const [collapseOpen] = useState(false);

    let buttons;

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    }

    if (user){
        const avatarURL = axios.defaults.baseURL + 'uploads/images/users/' + user.Avatar;
        buttons = (
            <div className="nav-right-side collapse navbar-collapse">
                <Collapse navbar isOpen={collapseOpen}>
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={bell_icon} className="navbar-dropdown-mailbox" alt="Mailbox" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                    
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}>
                            <div class="navbar-dropdown">
                                <img className="navbar-dropdown-avatar" alt="" src={avatarURL} />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <Link to={'/user-account/user-profile/' + user.id}>
                                    <DropdownItem className="nav-item">Profile</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/played-games/' + user.id}>
                                    <DropdownItem className="nav-item">Played games</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/friends-list/' + user.id}>
                                    <DropdownItem className="nav-item">Friends</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/records/' + user.id}>
                                    <DropdownItem className="nav-item">Records</DropdownItem>
                                </Link>
                            </NavLink>
                            <DropdownItem divider tag="li" />
                            <NavLink tag="li">
                                <Link to={'/'} onClick = {handleLogout}>
                                    <DropdownItem 
                                        className="nav-item"
                                    >Log out</DropdownItem>
                                </Link>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }
    else {
        buttons = (
            <div className="nav-right-side collapse navbar-collapse ">
                <Collapse navbar isOpen={collapseOpen}>
                    <button 
                        className="navbar-btn" 
                        name="showLogin"
                        id="btnLogIn"
                        onClick={() => setShowLogin(true)}
                        >Login
                    </button>

                    <button 
                        className="navbar-btn" 
                        name="showSignUp"
                        id="btnSignUp"
                        onClick={() => setShowSignUp(true)}
                        >Sign up
                    </button>
                    
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }

    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="nav-left-side">
                <Link to={'/'}>
                    <img src={logo} className="navbar-logo" alt="logo" />
                </Link>
                <div className="navbar-search">
                    <input type="text" class="navbar-search-input" id='navbar-search-input' onChange={(e) => unSearch(e)} placeholder="Search game..." />
                    <button class="navbar-search-btn" onClick={() =>searchItem()} >
                        <i class="fas fa-search navbar-search-btn-icon" id='navbar-search-btn-icon' alt="search" />
                    </button>
                </div>
            </div>
            {buttons}
        </nav>
    );
}

export default NavBar;