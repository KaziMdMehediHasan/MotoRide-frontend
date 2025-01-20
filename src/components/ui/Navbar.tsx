import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaMotorcycle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { TLoggedInUser } from '../../utils/Types';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
    const dispatch = useAppDispatch();
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let role: string = '';

    console.log(user);

    if (user !== null) {
        role = user?.role as string;
    }

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="bg-gray-200 px-6 md:px-20 flex justify-between items-center font-pop shadow-xl sticky top-0 z-50">
            {/* logo section*/}
            <div className="font-bold text-xl text-primary">
                <Link to="/" onClick={closeMenu}>
                    <div className="flex justify-center items-center gap-2">
                        <h1 className="text-2xl bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">MotoRent</h1>
                        <FaMotorcycle size={60} />
                    </div>
                </Link>
            </div>

            {/* main menu items */}
            <div className={`fixed md:static top-0 left-0 h-full w-2/3 bg-gray-200 shadow-lg md:shadow-none md:bg-transparent transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 px-6 md:px-0 pt-16 md:pt-0 md:justify-center`}>
                <button
                    className="absolute top-4 right-4 md:hidden text-gray-700"
                    onClick={closeMenu}>
                    <RxCross1 />
                </button>
                <NavLink to="/" className="text-gray-700 hover:text-teal-500 text-sm" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/about" className="text-gray-700 hover:text-teal-500 text-sm" onClick={closeMenu}>About Us</NavLink>
                <NavLink to="/dashboard" className="text-gray-700 hover:text-teal-500 text-sm" onClick={closeMenu}>Dashboard</NavLink>
                <NavLink to="/bikes" className="text-gray-700 hover:text-teal-500 text-sm" onClick={closeMenu}>Bikes</NavLink>
                {role && (
                    <button
                        onClick={() => {
                            dispatch(logout());
                            closeMenu();
                        }}
                        className="bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 text-sm md:hidden">
                        Logout
                    </button>
                )}
                {
                    !role && (
                        <>
                            <Link to="/login" className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 text-sm`}>
                                Login
                            </Link>
                            <Link to="/register" className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 text-sm`}>
                                Sing Up
                            </Link>
                        </>
                    )
                }


            </div>

            {/* authentication links for large devices */}
            <div className="hidden md:flex items-center space-x-4">
                {!role ? (
                    <>
                        <Link to="/login" className="text-gray-700 border border-teal-500 rounded px-4 py-2 hover:text-white hover:bg-teal-500 text-sm">Login</Link>
                        <Link to="/register" className="bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 text-sm">Sign Up</Link>
                    </>
                ) : (
                    <button
                        onClick={() => dispatch(logout())}
                        className="bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 text-sm">
                        Logout
                    </button>
                )}
            </div>

            {/* mobile menu icon */}
            <div className="md:hidden flex items-center">
                <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>
        </nav>
    );
};
