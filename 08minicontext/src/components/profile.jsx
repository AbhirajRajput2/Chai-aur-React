import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile(){

    const {user}=useContext(UserContext)

    if (!user) return <div>Please login</div>

    else return <div>Welcome: {user.username}</div>
}

export default Profile;