import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import {UserContext} from "../context/user.context";

const PrivateRoute = () => {
    const {currentUser} = useContext(UserContext);

    const location = useLocation();
    let auth;

    if((currentUser?.token == null || currentUser?.token == '') && (currentUser?.isLoggedIn == null || currentUser?.isLoggedIn == '' || currentUser?.isLoggedIn==false)) {
        auth = false;
    }
    else if(currentUser?.isLoggedIn && currentUser?.token !== null){
        let decode = jwt_decode(currentUser?.token);
        console.log("decode",decode)
        if(!decode){
            auth = false;
        }
        else{
            auth = true;
        }
    }
    else if(currentUser?.isLoggedIn && (currentUser?.token == null || currentUser?.token == '')){
        auth = false;
    }
    else{
        auth = false
    }


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" replace={true} state={{pathAfterLogin:location}}/>;
}

export default PrivateRoute;