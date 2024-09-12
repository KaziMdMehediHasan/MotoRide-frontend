import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import register from '../assets/register.jpeg'
import { useSignupMutation } from '../redux/features/auth/authApi';
import Loader from '../components/ui/Loader';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
    // State for form fields and validation errors
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    // password watching states
    const [inputType, setInputType] = useState('password');
    const [visibility, setVisibility] = useState(false);
    const navigate = useNavigate();
    // signup mutation function 
    const [signup, { isLoading, isSuccess }] = useSignupMutation();

    // Handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    };

    //handle password watching toggle
    const handlePasswordToggle = () => {
        if (inputType === 'password') {
            setInputType('text');
            setVisibility(true);
        } else if (inputType === 'text') {
            setInputType('password');
            setVisibility(false);
        }
    }
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = { ...errors };
        // Basic validation rules
        if (!registrationData.name) validationErrors.name = 'Name is required';
        if (!registrationData.email) validationErrors.email = 'Email is required';
        if (!registrationData.password)
            //  || formData.password.length < 8
            validationErrors.password = 'You must provide a password';
        if (!registrationData.phone) validationErrors.phone = 'Phone number is required';
        if (!registrationData.address) validationErrors.address = 'Address is required';

        setErrors(validationErrors);

        // Checking if there are no errors before submission
        const isValid = Object.values(validationErrors).every(
            (error) => error === ''
        );

        if (isValid) {
            console.log('Form data:', registrationData);
            // Submit form or handle submission logic here
            await signup(registrationData);
            navigate('/login');
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen font-pop bg-gray-200">
            {/* Left side - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-teal-500">Sign up</h2>
                    <p className="text-gray-600">Start your 30-day free trial.</p>
                </div>
                {
                    isLoading && (
                        <Loader />
                    )
                }
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your name'
                            value={registrationData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } focus: outline-teal-500`}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={registrationData.email}
                            placeholder='Enter your email'
                            onChange={handleChange}
                            className={`mt-1 w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } focus: outline-teal-500`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password*
                        </label>
                        <div className='flex relative items-center'>
                            <input
                                type={inputType}
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                value={registrationData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                className={`mt-1 w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    } focus: outline-teal-500`}
                            />
                            <span
                                onClick={handlePasswordToggle}
                                className='absolute right-5 cursor-pointer'>
                                {
                                    visibility === true ? (<FaEye size={25} />) : (<FaEyeSlash size={25} />)
                                }
                            </span>
                        </div>


                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className=" text-sm font-medium text-gray-700">
                            Phone*
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder='Enter your phone number'
                            value={registrationData.phone}
                            onChange={handleChange}
                            className={`mt-1  w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                } focus: outline-teal-500`}
                        />
                        {errors.phone && (
                            <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address*
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={registrationData.address}
                            placeholder='Enter your address'
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'
                                } focus: outline-teal-500`}
                        />
                        {errors.address && (
                            <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 transition-colors"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-teal-600 hover:text-teal-700">
                            Log in
                        </Link>
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <h1>Back to <Link to='/'><span className="text-teal-500 hover:text-teal-600 cursor-pointer">Homepage</span></Link></h1>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
                <img
                    src={register}
                    alt="create new account"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
        </div>
    );
};

