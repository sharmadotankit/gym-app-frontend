import React from "react";
import './Dashboard.scss'
import Sidebar from "../../comp/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const Dashboard = () =>{
    return(
        <>
            <div className="main-container">
                    <Sidebar/>
                    <Outlet/>
            </div>
        </>
    );

}


export default  Dashboard;