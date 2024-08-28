import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/Login.jpeg';
import { TLoginData } from '../utils/Types';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

export default function Login() {
    // State for form fields and validation errors
    const navigate = useNavigate();
    const loginState: TLoginData = {
        email: '',
        password: ''
    }
    const [loginData, setLoginData] = useState(loginState);
    const [login, { data, error }] = useLoginMutation();

    // redux states
    const dispatch = useAppDispatch();
    // console.log(loggedInUser);

    // form error handling state
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userInfo = {
            email: loginData?.email,
            password: loginData?.password
        }
        // error handling
        if (!loginData.email) {
            setErrors({ ...errors, email: 'Email is required!' })
        } else if (!loginData.password) {
            setErrors({ ...errors, password: 'Password is required!' })
        } else {
            console.log(loginData);
            // sending credentials via redux auth api
            const res = await login(userInfo);
            // console.log(res);
            const user = verifyToken(res.data.token);
            console.log(user);
            dispatch(setUser({ user, token: res.data.token }))
            navigate('/');
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen font-pop bg-gray-200">
                {/* Left side - Form starts*/}
                <div className="w-full md:w-1/2  p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-teal-500">Log in</h2>
                        <p className="text-gray-600">Access your account.</p>
                    </div>
                    {/* input form starts */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email field*/}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={loginData.email}
                                onChange={(e) => {
                                    setLoginData({ ...loginData, email: e.target.value });
                                    setErrors({ ...errors, email: '' })
                                }}
                                className={`mt-1 w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus: outline-teal-500`}
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Password field*/}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password*
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginData.password}
                                onChange={(e) => {
                                    setLoginData({ ...loginData, password: e.target.value });
                                    setErrors({ ...errors, password: '' })
                                }}
                                className={
                                    `mt-1 w-full p-3 border rounded-md 
                                    ${errors.password ? 'border-red-500' : 'border-gray-300'} 
                                    focus: outline-teal-500`}
                            />
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 transition-colors"
                        >
                            Log in
                        </button>
                    </form>
                    {/* input form ends */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-teal-500 hover:text-teal-600">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <h1>Back to <Link to='/'><span className="text-teal-500 hover:text-teal-600 cursor-pointer">Homepage</span></Link></h1>
                    </div>
                </div>
                {/* Left side - Form ends*/}
                {/* Right side - Image */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
                    <img src={loginImg}
                        alt="person-riding-bike"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* image overlay div */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
            </div>
        </>
    );
};

