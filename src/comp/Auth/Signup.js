import React from 'react'
import "../Auth/Signup.css"

function Signup() {
    return (

        <form className='signup-form custom-signup '>
            <div className="div-space">
                <label htmlFor="name" className="name">Name</label>
                <input type="text" className="name" id="name" />
            </div>
            <div className="div-space">
                <label htmlFor="email" className="email">Email address</label>
                <input type="email" className="email" id="email" aria-describedby="email" />
                <div id="email" className="email-desc">We'll never share your email with anyone else.</div>
            </div>
            <div className="div-space">
                <label htmlFor="password" className="password">Password</label>
                <input type="password" className="password" id="password" />
            </div>

            <button type="submit" className="signup-btn ">Submit</button>
        </form>

    )
}

export default Signup
