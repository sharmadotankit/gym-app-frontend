import React from 'react'

function Login() {
    return (
        <div>
            <form action="action_page.php" className='background'>
                <div className="container-signup">
                    <h1 className='signup-heading'>Register</h1>
                    <p className='signup-heading'>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw-repeat"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw-repeat" id="psw-repeat" required />
                    <hr />

                    <button type="submit" className="signin-button">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Login
