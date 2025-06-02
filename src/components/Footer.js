import React from "react";
import './Footer.css';
function Footer(){
    return(
        <footer>
            <p>© {new Date().getFullYear()}Virtual ChatbotBody. All rights are reserved.</p>
            <div>Just adding a line in the footer</div>
            <p>Contact: harshach2099@gmail.com</p>
            <a href="mailto:harshacherukuri2@gmail.com">Contact us</a>
        </footer>
    );
}
export default Footer;