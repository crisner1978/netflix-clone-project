import React from 'react';
import "./Profile.css";
import Navbar from "../../components/navbar/Navbar"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase';
import Plans from '../plansScreen/Plans';

const Profile = () => {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile_avatar" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                                <Plans />
                            <button onClick={() => auth.signOut()} className="signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Profile
