import React from 'react';
import "./logout.css"
import logoutPic from "../../../assets/logout.jpg"

const Logout = props => {

    return(

        <div>
            <img src={logoutPic} alt="power button" id="logout" class="logout"/>
        </div>
    )
}

 export default Logout
