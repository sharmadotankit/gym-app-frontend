import React, {useState,useContext} from 'react'
import {Link,useNavigate,useLocation} from "react-router-dom";
import {login} from "../../utils/actions/authActions";
import {UserContext} from "../../context/user.context";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })
    const {setCurrentUser} = useContext(UserContext);
    let {state} = useLocation();



    let pathAfterLogin = state?.pathAfterLogin;
    if(pathAfterLogin){
        localStorage.setItem('pathAfterLogin',JSON.stringify(pathAfterLogin));
    }




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
            if(response.status){
                setCurrentUser({
                    name:response.data.name,
                    email:response.data.email,
                    token:response.data.token,
                    id : response.data._id,
                    isLoggedIn:true,

                })
                let pathToRedirect = JSON.parse(localStorage.getItem('pathAfterLogin'))
                if(pathAfterLogin){
                    let pathName = pathToRedirect.pathname;
                    navigate(pathName);
                    return;
                }
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
