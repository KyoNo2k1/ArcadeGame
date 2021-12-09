import React from 'react';
import './login.css';
import useForm from './useForm'
import Validator from "./validator";
export default function Login() {
  const {handleSubmit, handleChange, values} = useForm("Login",Validator)
  if(document.getElementById("EmailAdmin")!=null)  values.Email=document.getElementById("EmailAdmin").value;
  else values.Email="";
  if(document.getElementById("PasswordAdmin")!=null)  values.Password=document.getElementById("PasswordAdmin").value;
  else values.Password="";
  
  return(
    <div class="login-box">
        <h2>Login</h2>
            <form autoComplete="off">
                <div class="user-box">
                    <input type="text" name="" required="" id="EmailAdmin" placeholder="Username"  className="text-box" autoComplete="off"
                    onChange={handleChange}/>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" placeholder="Password" id="PasswordAdmin" className="text-box" autoComplete="new-password"
                    onChange={handleChange}/>
                    <i class="fa fa-eye showpwd" onClick="showPwd('passwd', this)">   </i>
                </div>
                <a id="btn-submit" onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
    </div>
  )
}
