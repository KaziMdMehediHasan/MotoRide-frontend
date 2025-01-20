import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import motorent from '../../assets/motorent.jpeg';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { TLoggedInUser } from "../../utils/Types";
import { useAppSelector } from "../../redux/hooks";
import Welcome from "../Welcome";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import Loader from "../../components/ui/Loader";
import { RxCross1 } from "react-icons/rx";

export default function Dashboard() {
    const activeLink = "block py-2.5 px-4 rounded transition duration-200 bg-teal-100";
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // fetching user data with the help of redux
    const { data: profileData, isLoading: profileLoader } = useGetUserDetailsQuery({});
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role: string = '';
    let name, profileImg;
    if (profileLoader) {
        <Loader />;
    }
    if (user !== null) {
        role = user?.role as string;
    }
    // using the type guard
    if (profileData && profileData.data) {
        ({ name, profileImg } = profileData.data);
    }

    const closeMenu = () => setIsSidebarOpen(false);
    // const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen font-pop">
            {/* mobile menu toggle */}
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
                    <NavLink

                        to="/dashboard/bikes"
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        Bikes
                    </NavLink>
                    {
                        role === 'admin' && (
                            <NavLink

                                to="/dashboard/manage-bikes"
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
                                <NavLink

                                    to="/dashboard/manage-users"
                                    className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    Manage Users
                                </NavLink>
                                <NavLink

                                    to="/dashboard/rentalManagement"
                                    className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    Rental Management
                                </NavLink>
                            </>


                        )
                    }


                    {role === 'user' && (
                        <NavLink
                            // onClick={() => toggleMenu()}
                            to="/dashboard/myrentals"
                            className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                        // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            My Rentals
                        </NavLink>
                    )

                    }

                    <NavLink
                        // onClick={() => toggleMenu()}
                        to='/'
                        className={({ isActive }) => isActive ? activeLink : "block py-2.5 px-4 rounded hover:bg-gray-300"}
                    >Home</NavLink>
                    {
                        isSidebarOpen && (<>
                            <button className="px-4 py-1 border-none ml-4 rounded-md mt-1 bg-red-400 hover:bg-red-600"
                                onClick={closeMenu}>
                                <RxCross1 color="white" />
                            </button>
                        </>
                        )
                    }

                </nav>
            </div>

            {/* main content */}
            {!isSidebarOpen && <div className="flex-1 p-6 bg-gray-50">
                <header className="flex justify-between items-center">
                    <div className="w-[80%]">
                    </div>
                    {/* User Profile */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                            <img
                                src={profileImg || ''}
                                alt="User avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="hidden md:block font-medium">{name?.slice(0, 5)}</span>
                        </div>
                    </div>
                </header>
                {/* content */}
                <div className="mt-6 bg-white border border-dashed border-gray-300 p-6 rounded-lg flex items-start justify-center min-h-screen">
                    {/* <span className="text-gray-400">Dashboard content goes here...</span> */}
                    {location.pathname === '/dashboard' ? <Welcome /> : <Outlet />}
                </div>
            </div>}
        </div>
    );
}
