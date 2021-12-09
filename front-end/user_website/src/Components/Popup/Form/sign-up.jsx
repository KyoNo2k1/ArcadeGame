import React from "react";
import './form.css'
import useForm from './useForm'
import validator from './validator'

export const SignUp = ({showSignUp, setShowSignUp, setShowLogin, formRef, setDialogState}) => {
    const {handleSubmit, handleClose, handleChange, values, errors} = useForm("SignUp", formRef, setShowSignUp, validator, null, setDialogState)

    return (showSignUp) ? (
        <form onSubmit={handleSubmit} className="popup-form fixed-top"
            ref={formRef} onClick={handleClose}>
            <div className="auth-inner">
                <div 
                    className="close-btn" 
                    onClick={handleClose}
                >&times;</div>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="form-label">Full Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name"
                        name="Full_name"
                        value={values.Full_name}
                        onChange={handleChange}/>
                    {errors.Full_name && <p className="validator">{errors.Full_name}</p>}
                </div>

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
                    <label className="form-radio-label">
                        Male
                        <input 
                            type="radio" 
                            className="form-radio-btn"
                            name="Gender"
                            checked={values.Gender === 1} 
                            value={1}
                            onChange={handleChange}/>
                    </label>
                    <label className="form-radio-label">
                        Female
                        <input 
                            type="radio" 
                            className="form-radio-btn"
                            name="Gender"
                            checked={values.Gender === 0}
                            value={0}
                            onChange={handleChange}/>
                    </label>
                </div>
                
                <div className="form-group">
                    <button 
                        className="btn btn-primary btn-block form-btn"
                        >Sign Up
                    </button>
                </div>

                <p className="form-para">
                    Already have account?
                    <label 
                        className="form-link form-para-link"
                        onClick={() => {
                            setShowLogin(true)
                            setShowSignUp(false)
                        }}
                    >Login now
                    </label>
                </p>     
            </div>
        </form>
    ) : null;
}
 
export default SignUp;