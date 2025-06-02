import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';
function Header(){
    return(
        <header>
            <h1>My Awesome virtual chatbot</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to= "/profile">Profile</Link></li>
                    <li><Link to="/chat-history">ChatHistory</Link></li>
                </ul>
            </nav>
            <button onClick={()=>alert("Hello from Header")}>Click me</button>
        </header>
    );
}
export default Header;