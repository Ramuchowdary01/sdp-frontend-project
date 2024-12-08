import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css'; // Assuming you want to add custom styles

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1>Online Assignment and Grading System</h1>
            </div>
            <div className="navbar-right">
                <Link to="/" className="navbar-logout">Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;