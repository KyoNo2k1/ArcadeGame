import React from "react";
import './form.css'
import useForm from './useForm.jsx'
import Validator from "./validator";

export const Login = ({showLogin, setShowLogin, setShowForgotPassword, setShowSignUp, formRef, setDialogState}) => {
    const {handleSubmit, handleClose, handleChange, values, errors} = useForm("Login", formRef, setShowLogin, Validator, null, setDialogState)

    return (showLogin) ? (
        <form onSubmit={handleSubmit} className="popup-form fixed-top"
            ref={formRef} onClick={handleClose}>
            <div className="auth-inner">
                <label 
                    className="close-btn"
                    onClick={handleClose}
                >&times;</label>

                <h3>Login</h3>

                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleChange}/>
                    {errors.Email && <p className="validator">{errors.Email}</p>}
                </div>

                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password"
                        name="Password"
                        value={values.Password}
                        onChange={handleChange}/>
                    {errors.Password && <p className="validator">{errors.Password}</p>}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block form-btn form-btn">Login</button>
                </div>
                
                <p className="form-para">
                    You don't have any account?
                    <label 
                        className="form-link form-para-link"
                        onClick={() => {
                            setShowLogin(false)
                            setShowSignUp(true)
                        }}
                    >Sign up now
                    </label>
                </p>    
                
                <p className="form-para">
                    <label 
                        className = "form-link text-center" 
                        onClick={() => {
                            setShowLogin(false);
                            setShowForgotPassword(true);
                        }}
                    >Forgot password?
                    </label>
                </p>
            </div>
        </form>
    ) : null;
}

export default Login;