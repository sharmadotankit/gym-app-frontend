import React from 'react';
import './Sidebar.scss'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
    <div className='sidebar'>
        <div className='profile-picture'>
            <img src='https://robohash.org/ff' alt={'profile-pic'} />
            <h1>Ankit Sharma</h1>
        </div>
        <div className='list-options'>
            <Link to='/user-dashboard/profile'>
                <li>Edit profile</li>
            </Link>
            <Link to='/user-dashboard/favourite'>
                <li>Favourites</li>
            </Link>
            <Link to='/user-dashboard/saved'>
                <li>Saved </li>
            </Link>
            <Link to='/'>
                <li>Logout</li>
            </Link>
        </div>
    </div>
    )
}
export default Sidebar;