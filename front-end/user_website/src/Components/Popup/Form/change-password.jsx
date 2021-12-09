import React from "react";

import './form.css'

import useForm from "./useForm";
import validator from "./validator";

function ChangePassword({showChangePassword, setShowChangePassword, formRef, setDialogState, user}) {
    const {handleSubmit, handleClose, handleChange, values, errors} = useForm("ChangePassword", formRef, setShowChangePassword, validator, user, setDialogState)
    
    return (showChangePassword) ? (
        <form onSubmit={handleSubmit} className="popup-form fixed-top"
            ref={formRef} onClick={handleClose}>
            <div className="auth-inner">
                <div 
                    className="close-btn" 
                    onClick={handleClose} 
                >&times;</div>

                <h3>Reset Password</h3>

                <div className="form-group">
                    <label className="form-label">Current Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Curent password"
                        name="Old_password"
                        value={values.Old_password}
                        onChange={handleChange}/>
                    {errors.Old_password && <p className="validator">{errors.Old_password}</p>}
                </div>
                
                <div className="form-group">
                    <label className="form-label">New Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="New password"
                        name="New_password"
                        value={values.New_password}
                        onChange={handleChange}/>
                    {errors.New_password && <p className="validator">{errors.New_password}</p>}
                </div>

                <div className="form-group">
                    <label className="form-label">Confirm Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password"
                        name="Confirm_password"
                        value={values.Confirm_password}
                        onChange={handleChange}/>
                    {errors.Confirm_password && <p className="validator">{errors.Confirm_password}</p>}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary form-btn">Reset Password</button>
                </div>
            </div>
        </form>
    ):null;
}
 
export default ChangePassword;