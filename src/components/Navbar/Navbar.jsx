import "./navbar.scss";
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navh1">Jason Mueller</h1>
                <ul className="navlist">
                    <li>
                        <Link to="/"> <li> About</li></Link>
                    </li>
                    <li>
                        <Link to="/Portfolio"> <li>Portfolio</li></Link>
                    </li>
                    <li>
                        <Link to="/Contact"> <li>Contact</li></Link>
                    </li>
                    <li>
                        <Link to="/Resume"> <li>Resume</li></Link>
                    </li>
                </ul>
        </div>
    )
};
