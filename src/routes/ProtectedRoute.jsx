import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import Footer from '../comp/Footer/Footer';

const PrivateRoute = () => {
    const isLoggedIn =  localStorage.getItem('isLoggedIn');
    const token =  localStorage.getItem('token');

    const location = useLocation();
    let auth;

    if((token == null || token == '') && (isLoggedIn == null || isLoggedIn == '' || isLoggedIn==false)) {
        auth = false;
    }
    else if(isLoggedIn && token !== null){
        let decode = jwt_decode(token);
        if(!decode){
            auth = false;
        }
        else{
            auth = true;
        }
    }
    else if(isLoggedIn && (token == null || token == '')){
        auth = false;
    }
    else{
        auth = false
    }


    return auth ? <span className='wrapper'>
                    <Outlet />
                    <Footer/>
                </span> 
                : <Navigate to="/login" replace={true} state={{pathAfterLogin:location}}/>;
}

export default PrivateRoute;