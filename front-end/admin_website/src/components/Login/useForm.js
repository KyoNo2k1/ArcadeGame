import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const useForm = (FormType, validator) => {
    const default_values = useCallback(() => {
        if (FormType === "Login"){
            return {
                Email: "",
                Password: ""
            }
        }
    }, [FormType])
    var errors = {};
    const [values, setValues] = useState(default_values)

    const handleChange = e => {
        let { name, value } = e.target
        if (name === "Gender") value = Number(value);
        setValues({
            ...values,
            [name]: value
        })
    }

    const [isSubmitted, setIsSubmitted] = useState(false)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        errors=validator(FormType, values)
        if(errors.Email==undefined && errors.Password==undefined){
            setIsSubmitted(true);
            await sleep(2000);
            window.location.reload();
        }
        else alert(errors.Email + "\n" + errors.Password);
    }

    useEffect(() => {
        if (isSubmitted){
            if (FormType === "Login"){
                axios.post('admin/login', values).then(
                    res => {
                        if (res.data.message === 'Authentication successful!'){
                            localStorage.setItem('token', res.data.token)
                            axios.defaults.headers.common['Authorization'] = res.data.token;
                        }
                    }
                ).catch(
                    err => {
                        if (err.message === "Request failed with status code 401"){
                            alert("Invalid email or password")
                        }else if (err.message === "Request failed with status code 500"){
                            alert("Internal server error")
                        }
                        else {
                            alert("Unknown error")
                        }
                    }
                )  
            }
            setValues(default_values);
            setIsSubmitted(false);
        }
    }, [ FormType, default_values, isSubmitted, validator, values])
    return { handleSubmit, handleChange, values }
}

export default useForm;