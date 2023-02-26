import React, {useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import {login} from "../../utils/actions/authActions";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })

    const [error,setError] = useState('');
    const handleUserInfoChange = (e)=>{
        setUserData({...userData , [e.target.name] : e.target.value})
    }


    const handleOnLogin =async ()=>{
        setError('')
        const {email,password} = userData;
        if(!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            setError("Enter a valid email");
            return;
        }

        if(!password){
            setError("Enter a valid password");
            return;
        }

        try{
            let response = await login(userData);
            console.log("Response from login",response);
            if(response.status){
                toast.success("User login successful");
                navigate("/user-dashboard")
            }
        }catch(err){
            toast.error("Wrong Credentials")
        }

    }


    return (
        <>
            <div className="container-signup">
                <h1 className='signup-heading'>Login</h1>
                <p className='signup-heading'>Please fill in this form to login to your account.</p>
                <hr/>
                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" id="email" onChange={ handleUserInfoChange}/>

                <label htmlFor="psw-repeat"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="psw-repeat" onChange={handleUserInfoChange}/>
                <hr/>
                <button type="submit" className="registerbtn" onClick={handleOnLogin}>Login</button>
            </div>

            <div className="container signin">
                <p>Do not have an account? <Link to="/login" className='button-link'>Register</Link>.</p>
                {error?
                    <h4 style={{color:'red',marginTop:'20px'}}>{error}</h4>:null
                }
            </div>
        </>
    )
}

export default Login
