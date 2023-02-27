import React,{useContext} from 'react';
import './Sidebar.scss'
import {Link} from "react-router-dom";
import {UserContext} from "../../context/user.context";

const Sidebar = () => {

    const {currentUser,setCurrentUser} = useContext(UserContext);

    const handleLogout = () =>{
        setCurrentUser({
            name:null,
            email:null,
            token:null,
            id:null,
            isLoggedIn:false,
        })
    }
    return (
    <div className='sidebar'>
        <div className='profile-picture'>
            <img src='https://robohash.org/ff' alt={'profile-pic'} />
            <h1>{currentUser?.name}</h1>
        </div>
        <div className='list-options'>
            <Link to='/exercise'>
                <li>Start Exercise</li>
            </Link>
            <Link to='/user-dashboard/profile'>
                <li>Edit profile</li>
            </Link>
            <Link to='/user-dashboard/favourite'>
                <li>Favourites</li>
            </Link>
            <Link to='/user-dashboard/saved'>
                <li>Saved </li>
            </Link>
            <Link to='/' onClick={handleLogout}>
                <li>Logout</li>
            </Link>
        </div>
    </div>
    )
}
export default Sidebar;