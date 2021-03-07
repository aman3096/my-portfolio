import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './Navbar.css';
export default function Navbar(){
    return (
    <nav>
        <Router>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
    
        </Router>


    </nav>
    );
}