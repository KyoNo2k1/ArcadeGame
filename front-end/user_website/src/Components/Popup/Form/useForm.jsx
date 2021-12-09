import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const useForm = (FormType, formRef, setShowForm, validator, user, setDialogState) => {
    const default_values = useCallback(() => {
        if (FormType === "Login"){
            return {
                Email: "",
                Password: ""
            }
        }
        if (FormType === "SignUp"){
            return {
                Full_name: "",
                Email: "",
                Password: "",
                Confirm_password: "",
                Gender: 1
            }
        }

        if (FormType === "ForgotPassword"){
            return {
                Email: ""
            }
        }

        if (FormType === "ChangePassword"){
            return {
                Old_password: "",
                New_password: "",
                Confirm_password: ""
            }
        }
    }, [FormType])

    const [values, setValues] = useState(default_values)

    const handleChange = e => {
        let { name, value } = e.target
        if (name === "Gender") value = Number(value);
        setValues({
            ...values,
            [name]: value
        })
    }

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        
        setErrors({});
        setErrors(validator(FormType, values));

        setIsSubmitted(true);
    }

    useEffect(() => {
        if (isSubmitted && Object.keys(errors).length === 0){
            if (FormType === "Login"){
                axios.post('user/login', values).then(
                    res => {
                        if (res.data.message === 'Authentication successful!'){
                            localStorage.setItem('token', res.data.token);
                            axios.defaults.headers.common['Authorization'] = res.data.token;
                            setShowForm(false)
                        }
                    }
                ).catch(
                    err => {
                        if (err.message === "Request failed with status code 401"){
                            setErrors(validator(FormType, 'Wrong email or password!'))
                        }
                        else{
                            setDialogState({
                                title: "Error!",
                                message: err.message,
                                show: true
                            })
                        }
                    }
                )  
            }
            if (FormType === "SignUp"){
                axios.post('user/sign-up', values).then(
                    res => {
                        setDialogState({
                            title: "Notify!",
                            message: res.data.message,
                            show: true
                        });
                        setShowForm(false);
                    }
                ).catch(
                    err => {
                        setDialogState({
                            title: "Error!",
                            message: err.message,
                            show: true
                        })
                    }
                )
            }
    
            if (FormType === "ForgotPassword"){
                axios.post('user/forgot-password', values).then(
                    res => {
                        setDialogState({
                            title: "Notify!",
                            message: "Your password have been reset successfully! Please check your email for new password! (Make sure to check spam too)",
                            show: true
                        })
                        setShowForm(false)
                    }
                ).catch(
                    err => {
                        setDialogState({
                            title: "Error!",
                            message: err.message,
                            show: true
                        })
                    }
                )
            }

            if (FormType === "ChangePassword"){
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                };
                
                axios.post("user/change-password/" + user.id, values, config).then(res => {
                    setDialogState({
                        title: "Notify!",
                        message: "An email has just been sended to " + values.Email + ". Please check your email to confirm reset!",
                        show: true
                    })
                    setShowForm(false)
                }).catch(
                    err => {
                        setDialogState({
                            title: "Error!",
                            message: err.message,
                            show: true
                        })
                    }
                )
            }

            setValues(default_values);
            setIsSubmitted(false);
        }
    }, [errors, FormType, default_values, isSubmitted, setDialogState, setShowForm, validator, values, user])

    const handleClose = (e) => {
        if (formRef.current === e.target || e.target.className === "close-btn"){
            setIsSubmitted(false)
            setValues(default_values)
            setErrors({})
            setShowForm(false)
        }
    }

    return { handleSubmit, handleClose, handleChange, values , errors }
}

export default useForm;