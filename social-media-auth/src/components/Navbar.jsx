import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiPlusSquare,
    FiUser,
    FiLogOut,
    FiMenu,
    FiX,
} from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const desktopLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 font-medium
        ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"}`;

    const mobileMenuClasses = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 font-medium
        ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"}`;

    const bottomBarClasses = ({ isActive }) =>
        `flex flex-col items-center justify-center w-full h-full space-y-1
        ${isActive ? "text-blue-600" : "text-gray-500"}`;

    return (
        <>
            <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 h-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Hello!</h1>
                        </div>

                        <div className="hidden md:flex space-x-4">
                            <NavLink to="/" className={desktopLinkClasses}>
                                <FiHome size={20} /> <span>Home</span>
                            </NavLink>
                            <NavLink to="/add-post" className={desktopLinkClasses}>
                                <FiPlusSquare size={20} /> <span>Add Post</span>
                            </NavLink>
                            <NavLink to="/profile" className={desktopLinkClasses}>
                                <FiUser size={20} /> <span>Profile</span>
                            </NavLink>
                            <NavLink to="/logout" className={desktopLinkClasses}>
                                <FiLogOut size={20} /> <span>Logout</span>
                            </NavLink>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 hover:text-blue-600 p-2"
                            >
                                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40">
                        <div className="p-4 space-y-2">
                            <NavLink to="/" onClick={closeMenu} className={mobileMenuClasses}>
                                <FiHome size={20} /> Home
                            </NavLink>
                            <NavLink
                                to="/profile"
                                onClick={closeMenu}
                                className={mobileMenuClasses}
                            >
                                <FiUser size={20} /> Profile
                            </NavLink>
                            <div className="border-t border-gray-100 my-2"></div>
                            <NavLink
                                to="/logout"
                                onClick={closeMenu}
                                className={mobileMenuClasses}
                            >
                                <FiLogOut size={20} /> Logout
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>

            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-center items-center h-12 z-50 pb-safe shadow-lg">
                <NavLink to="/add-post" className={bottomBarClasses}>
                    <FiPlusSquare size={28} />
                    {/* <span className="text-xs font-medium">Add Post</span> */}
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
