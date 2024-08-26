import React from 'react';
import { Link } from 'react-router-dom';
import motorent from '../../assets/motorent.jpeg'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-teal-500 shadow-md py-4 px-6 flex justify-between items-center font-pop">
            {/* Logo */}
            <div className="text-teal-500 font-bold text-xl">
                <Link to="/">
                    <div className='flex justify-center items-center gap-2'>
                        <h1 className="text-2xl text-white">Mot</h1>
                        <img className='w-10 h-10 shadow-xl shadow-teal-300 rounded-full' src={motorent} alt="motorent logo" />
                        <h1 className="text-2xl text-white">Rent</h1>
                    </div>
                </Link>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-8">
                <Link to='/' className="text-gray-700 hover:text-teal-500">Home</Link>
                <Link to='/about' className="text-gray-700 hover:text-teal-500">About Us</Link>
                <Link to='/dashboard' className="text-gray-700 hover:text-teal-500">Dashboard</Link>
                {/* Add conditional menu items based on user role here */}
            </div>

            {/* Authentication Links */}
            <div className="hidden md:flex justify-center items-center space-x-4">
                <Link to='/login' className="text-gray-700 border border-teal-500 rounded px-4 py-2 hover:text-emerald-600">Login</Link>
                <Link to='/register' className="bg-teal-500 text-white px-4 py-2 rounded">Sign Up</Link>
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
