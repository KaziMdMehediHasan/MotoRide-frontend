import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import motorent from '../../assets/motorent.jpeg';
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { TLoggedInUser } from "../../utils/Types";
import { useAppSelector } from "../../redux/hooks";
import Welcome from "../Welcome";

export default function Dashboard() {
    const activeLink = "block py-2.5 px-4 rounded transition duration-200 bg-teal-100";
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role: string = '';
    if (user !== null) {
        role = user?.role as string;
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen font-pop">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex justify-between p-4">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-emerald-400 focus:outline-none">
                    <FaBars />
                </button>
                <div className="lg:block flex items-center space-x-2">
                    <img src={motorent} alt="Logo" className="w-10 h-10 rounded-full shadow-xl" />
                </div>
            </div>
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? "block" : "hidden"} lg:block bg-gray-100 sm:min-w-screen lg:w-64 min-h-screen p-4`}>
                {/* Logo */}
                <div className="hidden px-4 lg:block items-center space-x-2 ">
                    <img src={motorent} alt="Logo" className="w-32 h-32 rounded-full shadow-xl" />
                </div>
                {/* Navigation */}
                <h1 className="py-2.5 mt-6 px-4 text-2xl">Dashboard</h1>
                <nav className="mt-6">
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    // onClick={() => setIsSidebarOpen(!isSidebarOpen)}

                    >
                        Profile
                    </NavLink>
                    <NavLink to="/dashboard/bikes"
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        Bikes
                    </NavLink>
                    {
                        role === 'admin' && (
                            <NavLink to="/dashboard/manage-bikes"
                                className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                            // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                Manage Bikes
                            </NavLink>
                        )
                    }
                    {
                        role === 'admin' && (
                            <>
                                <NavLink to="/dashboard/manage-users"
                                    className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    Manage Users
                                </NavLink>
                                <NavLink to="/dashboard/rentalManagement"
                                    className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    Rental Management
                                </NavLink>
                            </>


                        )
                    }


                    {role === 'user' && (<NavLink to="/dashboard/myrentals"
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        My Rentals
                    </NavLink>)

                    }

                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    >Home</NavLink>
                </nav>
            </div>

            {/* Main Content */}
            {!isSidebarOpen && <div className="flex-1 p-6 bg-gray-50">
                <header className="flex justify-between items-center">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden lg:block w-full max-w-xs py-2 px-4 rounded-lg border border-gray-300 focus:outline-none"
                    />
                    {/* User Profile */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="relative text-gray-700 hover:text-gray-900 focus:outline-none">
                            <span className="absolute top-0 right-0 block h-2 w-2 transform -translate-y-1 translate-x-1 bg-red-600 rounded-full"></span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405 1.405A2.032 2.032 0 0118.6 19H5.4a2.032 2.032 0 01-1.414-.586L3 17h12z"></path>
                            </svg>
                        </button>
                        <div className="relative">
                            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                                <img
                                    src="path-to-avatar"
                                    alt="User avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="hidden md:block font-medium">Tom Cook</span>
                            </button>
                        </div>
                    </div>
                </header>
                {/* Content */}
                <div className="mt-6 bg-white border border-dashed border-gray-300 p-6 rounded-lg flex items-center justify-center">
                    {/* <span className="text-gray-400">Dashboard content goes here...</span> */}
                    {location.pathname === '/dashboard' ? <Welcome /> : <Outlet />}
                </div>
            </div>}
        </div>
    );
}
