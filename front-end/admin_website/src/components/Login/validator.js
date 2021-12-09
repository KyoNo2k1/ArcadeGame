export default function Validator(FormType, values){
    let errors = {}
    
    if (FormType === "Login" && values === "Wrong email or password!"){
        errors.Email = "Wrong email or password!"
    }
    else{
        if (FormType === "Login"){
            // Email
            if (!values.Email.trim()){
                errors.Email = "Email is required!"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
                errors.Email = "Email is not valid!"
            }
    
            // Password
            if (!values.Password){
                errors.Password = "Password is required!"
            }
        }
    }
    return errors;
}