import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div className="navbarMain">
            <div className="navleft">
                <h2>FINSCAN</h2>
            </div>
            <div className="navright">
                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/invest">Invest</Link>
                    <Link to="/list">List</Link>
                    <Link to="/trade">Trade</Link>
                    <Link to="/regulation">Regulation</Link>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;