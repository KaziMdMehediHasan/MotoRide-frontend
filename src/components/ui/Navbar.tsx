import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="text-emerald-600 font-bold text-xl">
                <a>MyLogo</a>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-8">
                <a className="text-gray-700 hover:text-emerald-600">Home</a>
                <a className="text-gray-700 hover:text-emerald-600">About Us</a>
                {/* Add conditional menu items based on user role here */}
            </div>

            {/* Authentication Links */}
            <div className="hidden md:flex space-x-4">
                <a className="text-gray-700 hover:text-emerald-600">Login</a>
                <a className="bg-emerald-600 text-white px-4 py-2 rounded">Sign Up</a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
                <button className="text-gray-700 focus:outline-none">
                    {/* Icon for mobile menu */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
