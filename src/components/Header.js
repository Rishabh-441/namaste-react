import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/customHooks/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <img src={LOGO_URL} alt="Logo" className="w-16 h-16 mr-2" />
                <span className="text-lg font-bold">Khana Peena</span>
            </div>
            <div className="navItems">
                <ul className="flex items-center space-x-6">
                    <li className="text-sm">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-400">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-gray-400">Grocery</Link>
                    </li>
                    <li className="text-sm cursor-pointer">
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i> ({cartItems.length}) {console.log(cartItems)}
                        </Link>
                    </li>
                    <li>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                            onClick={() => {
                                setBtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                    <li>
                            <span className="max-w-32 overflow-hidden">{loggedInUser}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;