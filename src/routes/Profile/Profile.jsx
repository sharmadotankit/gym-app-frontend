import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user.context';
import './Profile.scss';
import {updateUserInformation} from '../../utils/actions/allActions';
import { toast } from 'react-toastify';

function Profile() {
    const {currentUser,setCurrentUser} = useContext(UserContext);
    const [isEditable,setIsEditable] = useState(false);
    let token = localStorage.getItem('Token');

    const handleEditInformation = async() =>{
        if(isEditable){
            const response = await updateUserInformation(token,currentUser);
            console.log("response",response)
            if(response.data.status){
                toast.success(response.data.message);
                setCurrentUser({
                    name:response?.data?.data?.name,
                    email:response?.data?.data?.email,
                    token:response?.data?.data?.token,
                    id:response?.data?.data?._id,
                    isLoggedIn:true,
                    height:response?.data?.data?.height,
                    weight:response?.data?.data?.weight,
                });
            }
        }else{
            setIsEditable(true);
        }
    }


    return (
        <div className='profile-main-container'>
            <h1>Welcome {currentUser.name}!</h1>
            <div className='profile-card'>
                <label htmlFor='name'>Name:</label><br/>
                <input 
                    type="text" 
                    value={currentUser.name} 
                    disabled={!isEditable} 
                    onChange={(e)=> setCurrentUser({...currentUser,name:e.target.value}) }
                />
                <br/>

                <label htmlFor='email'>Email:</label><br/>
                <input type="text" value={currentUser.email} disabled />
                <br/>


                <label htmlFor='height'>Height:</label><br/>
                <input 
                    type="number" 
                    value={currentUser.height} 
                    disabled={!isEditable} 
                    onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                    onChange={(e)=> setCurrentUser({...currentUser,height:e.target.value}) }
                    placeholder='Enter height in CM'
                />
                <br/>


                <label htmlFor='weight'>Weight:</label><br/>
                <input 
                    type="number" 
                    value={currentUser.weight} 
                    disabled={!isEditable} 
                    onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                    onChange={(e)=> setCurrentUser({...currentUser,weight:e.target.value}) }
                    placeholder='Enter weight in KG'
                /> 
                <br/>
                <button className='primay-button' onClick={handleEditInformation}> {isEditable?'Update':'Edit'}</button>
            </div>
        </div>
    );
}

export default Profile;