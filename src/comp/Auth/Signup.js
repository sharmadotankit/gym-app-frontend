import React from 'react'
import { Link } from 'react-router-dom'
import "../Auth/Signup.css"


function Signup() {
    return (

        <form action="action_page.php">
            <div className="container-signup">
                <h1 className='signup-heading'>Register</h1>
                <p className='signup-heading'>Please fill in this form to create an account.</p>
                <hr/>


                <label for="psw"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="psw" id="psw" required/>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                        

                            <label for="psw-repeat"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw-repeat" id="psw-repeat" required/>
                                <hr/>

                                    <p>By creating an account you agree to our <Link to="/" className='button-link'>Terms & Privacy</Link>.</p>
                                    <button type="submit" className="registerbtn">Register</button>
                                </div>

                                <div className="container signin">
                                    <p>Already have an account? <Link to="/" className='button-link'>Sign in</Link>.</p>
                                </div>
                            </form>

                            )
}

  export default Signup
