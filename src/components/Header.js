import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
                <span>Khana Peena</span>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;