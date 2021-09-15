import React from "react";
import FooterLogo from "../../assets/img/footer-logo.svg";


const Footer = () => {
    return (
        <footer id="about" className="footer">
        <p>2020 © All rights reserved.</p>
        <img src={FooterLogo} alt="logo 25watts"/>
    </footer>
    );
}

export default Footer