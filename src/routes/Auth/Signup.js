import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.scss"
import {signUp} from '../../utils/actions/authActions';
import { UserContext } from '../../context/user.context';
import registrationBackground from "../../assets/registration_page_img.png";
import { toast } from 'react-toastify';


function Signup() {
    const [userData,setUserData] = useState({
        name:'',
        email:'',
        password:'',
    })
    const navigate = useNavigate();

    const [error,setError] = useState('');

    const {setCurrentUser} = useContext(UserContext);

    const handleOnSignUp =async ()=>{
        try{
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
        if(response.status){
            setCurrentUser({
                name:response?.response?.name,
                email:response?.response?.email,
                token:response?.response?.token,
                id:response?.response?._id,
                isLoggedIn:true,
                height:response?.response?.height,
                weight:response?.response?.weight,
            });
            toast.success("User login successful");
            navigate("/user-dashboard")
        }else{
            toast.error("Something went wrong while registering the user.Please try again later.")
        }
        }
        catch(err){
            console.log('error',err)
            toast.error(err?.response?.data?.message || "Something went wrong");
            return;
        }
        
    }

    const handleUserInfoChange = (e)=>{
        setUserData({...userData , [e.target.name] : e.target.value})
    }

    return (
        <>
        <div style={{display:'flex',backgroundColor:'red',height:'100vh'}} className="signUpDiv">
            <div className='div-left'>
                <h1>No Pain , No Gain</h1>
                <img src={registrationBackground} className='signup-img'/>
                <h1>Begin you journey now</h1>
               
            </div>
            <div className='div-right'>
            <div className="container-signup">
                <h1 className='signup-heading'>Register</h1>
                <p className='signup-heading'>Please fill in this form to create an account.</p>
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

                <button type="submit" className="registerbtn" onClick={handleOnSignUp}>Register</button>
           
                <div className="">
                    <p>Already have an account? <Link to="/login" className='button-link'>Sign in</Link>.</p>
                    {error?
                        <h4 style={{color:'red',marginTop:'20px'}}>{error}</h4>:null
                    }
                </div>

            </div>

            
            </div>
        </div>
            
        </>
    );
}

  export default Signup
