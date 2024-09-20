import { Link, NavLink } from 'react-router-dom';
import { FaMotorcycle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { TLoggedInUser } from '../../utils/Types';

export default function Navbar() {
    const dispatch = useAppDispatch();
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role: string = '';
    let userEmail: string = '';

    console.log(user);

    if (user !== null) {
        role = user?.role as string;
        userEmail = user?.userEmail as string;
    }

    return (
        <nav className="bg-gray-200 px-20 flex justify-between items-center font-pop shadow-xl sticky top-0 z-50">
            {/* Logo */}
            <div className="font-bold text-xl text-teal-500">
                <Link to="/">
                    <div className='flex justify-center items-center gap-2'>
                        {/* <img className='w-10 h-10 shadow-xl rounded-full' src={motorent} alt="motorent logo" /> */}
                        <h1 className="text-2xl bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">MotoRent</h1>
                        <FaMotorcycle size={70} />
                    </div>
                </Link>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-8">
                <NavLink to='/' className="text-gray-700 hover:text-teal-500 text-sm">Home</NavLink>
                <NavLink to='/about' className="text-gray-700 hover:text-teal-500 text-sm">About Us</NavLink>
                <NavLink to='/dashboard' className="text-gray-700 hover:text-teal-500 text-sm">Dashboard</NavLink>
                <NavLink to='/bikes' className="text-gray-700 hover:text-teal-500 text-sm">Bikes</NavLink>
                {/* Add conditional menu items based on user role here */}
            </div>

            {/* Authentication Links */}
            {!role && <div className="hidden md:flex justify-center items-center space-x-4">
                <Link to='/login' className="text-gray-700 border border-teal-500 rounded px-4 py-2 hover:text-white hover:bg-teal-500 text-sm">Login</Link>
                <Link to='/register' className="bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 hover:border-teal-500 hover:border text-sm">Sign Up</Link>
            </div>}

            {role && <div className="hidden md:flex justify-center items-center space-x-4">
                <button
                    onClick={() => dispatch(logout())}
                    className="bg-teal-500 border border-teal-500 text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-gray-700 hover:border-teal-500 hover:border text-sm">
                    Logout
                </button>
            </div>}

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

