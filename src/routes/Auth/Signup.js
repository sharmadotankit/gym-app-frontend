import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
import {signUp} from '../../utils/actions/authActions';


function Signup() {
    const [userData,setUserData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const [error,setError] = useState('');

    const handleOnSignUp =async ()=>{
        setError('')
        const {name,email,password} = userData;
        if(!name){
            setError("Enter a valid name");
            return;
        }
        if(!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            setError("Enter a valid email");
            return;
        }
        if(!password || !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
            setError("Enter a valid password");
            return;
        }

        let response = await signUp(userData);
    }

    const handleUserInfoChange = (e)=>{
        setUserData({...userData , [e.target.name] : e.target.value})
    }

    return (
        <>
            <div className="container-signup">
                <h1 className='signup-heading'>Register</h1>
                <p className='signup-heading'>Please fill in this form to create an account.</p>
                <hr/>
                <label htmlFor="psw"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="psw" onChange={handleUserInfoChange} />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" id="email" onChange={ handleUserInfoChange}/>

                <label htmlFor="psw-repeat"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="psw-repeat" onChange={handleUserInfoChange}/>
                {
                    error && error==='Enter a valid password'?
                        <div style={{color:"red",fontSize:'14px'}}>
                            <p>Password must be :  </p>
                            <li>at least 8 character long</li>
                            <li>at least 1 symbol</li>
                            <li>at least 1 lower case</li>
                            <li>at least 1 upper case</li>
                        </div>
                        :
                        null
                }

                <hr/>

                <p>By creating an account you agree to our <Link to="/" className='button-link'>Terms & Privacy</Link>.</p>
                <button type="submit" className="registerbtn" onClick={handleOnSignUp}>Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <Link to="/login" className='button-link'>Sign in</Link>.</p>
                {error?
                    <h4 style={{color:'red',marginTop:'20px'}}>{error}</h4>:null
                }
            </div>
        </>
    );
}

  export default Signup
