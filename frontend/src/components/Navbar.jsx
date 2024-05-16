import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Context as AuthContext } from '../main'; // Assuming AuthContext is exported from '../main'
import { GiHamburgerMenu}  from "react-icons/gi"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
                withCredentials: true,
            });
            toast.success("Logout successful");
            setIsAuthenticated(false);
        } catch (error) {
            toast.error("An error occurred while logging out");
        }
    };

    const gotoLogin = () => {
        navigateTo("/login");
    };

    return (
        <nav className='container'>
            <div className='logo'> <img src="/d.png" alt="logo" className='logo-img' />
</div>
            <div className={show ? "navlinks showmenu" : "navlinks"}>
                <div className='links'>
                    <Link to={"/"}>HOME</Link>
                    <Link to="/appointment">APPOINTMENT</Link>
                    <Link to="/about">ABOUT US</Link>
                </div>
                {isAuthenticated ? (
                    <button className='logoutBtn btn' onClick={handleLogout}>
                        LOGOUT
                    </button>
                ) : (
                    <button className="loginBtn" onClick={gotoLogin}>
                        LOGIN
                    </button>
                )}
            </div>
            <div className='hamburger' onClick={()=> setShow(!show)} > </div>
            <GiHamburgerMenu />
        </nav>
    );
};

export default Navbar;
