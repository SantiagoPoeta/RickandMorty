import { useState } from "react";
import validate from "./validaton";

import style from "../LoginForm/LoginForm.module.css";

function LoginForm ({login}) {

    const[errors,setErrors]=useState({email:"", password:"",});

    const [user,setUser] = useState({email:"", password:"",});

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

        setErrors(validate({
            ...user,
            [e.target.name]:e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!errors.email && !errors.password){
            login(user)
        } else{
            alert("Incorrect Data");
        }
    }



    return(
            <div className={style.formContainer}>
                <div className={style.formTitle}>
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={style.credentials}>
                        <label>Username</label>
                        <input type="text" placeholder="" name="email" value={user.email} onChange={handleChange}/>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className={style.credentials}>
                        <label>Password</label>
                        <input type="password" name= "password" value={user.password} onChange={handleChange}/>
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                        <button type="submit" className={style.submitBtn}>Login</button>
                </form>
            </div>
    )
}

export default LoginForm;