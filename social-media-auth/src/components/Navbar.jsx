import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiPlusSquare, FiUser } from 'react-icons/fi';

const Navbar = () => {
    const linkClasses = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2
        rounded-md transition-colors duration-200
        ${isActive ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'}`;

    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="shrink-0 flex items-center">
                        <h1 className="text-xl font-bold text-gray-800 tracking-tight cursor-pointer">
                            Logo
                        </h1>
                    </div>

                    <div className="flex space-x-4">
                        <NavLink to="/" className={linkClasses}>
                            <FiHome size={20} />
                            <span>Home</span>
                        </NavLink>

                        <NavLink to="/add-post" className={linkClasses}>
                            <FiPlusSquare size={20} />
                            <span>Add Post</span>
                        </NavLink>

                        <NavLink to="/profile" className={linkClasses}>
                            <FiUser size={20} />
                            <span>Profile</span>
                        </NavLink>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;