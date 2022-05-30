import React, { useState } from 'react';
import Logo from "../ASSETS/Logo.png";

function Navbar() {

    const [isActive, setStatus] = useState(false);
    


    function handleMenuIconClick() {
        setStatus((prevValue) => {return !prevValue;});       

    }

    const hidden_menu = <div id="menu" className="hidden-menu d-flex flex-column  my-5">
    <h5 className='mt-3 mx-2'>Wedding Cards</h5>
    <h5 className='mt-3 mx-2'>Birthday Cards</h5>
    <h5 className='mt-3 mx-2'>Feeling Cards</h5>
    <h5 className='mt-3 mx-2'>Anniversary Cards</h5>
    <h5 className='mt-3 mx-2'>Login | Signup</h5>
</div>



    return (
        
        <div className="d-flex flex-row nav-bar custom-shadow px-5 justify-content-between ">

        {/* The menu icon import from google fonts */}
            <span class="material-icons" onClick={handleMenuIconClick}>
                menu
            </span>
            
            {isActive ? hidden_menu : null}
                    
            <div className='custom-logo ms-4'><img src={Logo} alt="celebrare-logo" width="100" height="50" /></div>
            <div className="d-flex flex-row px-5 gap-5 custom-bar">
                <h5 className='mt-3 mx-2'>Wedding Cards</h5>
                <h5 className='mt-3 mx-2'>Birthday Cards</h5>
                <h5 className='mt-3 mx-2'>Feeling Cards</h5>
                <h5 className='mt-3 mx-2'>Anniversary Cards</h5>

            </div>
            <div className="login-signup"><h5 className='mt-3 me-4 '>Login | Signup</h5></div>

        </div>

    )

}

export default Navbar;