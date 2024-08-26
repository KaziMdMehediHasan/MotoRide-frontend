import React, { useState } from 'react';

const Register: React.FC = () => {
    // State for form fields and validation errors
    const [formData, setFormData] = useState({
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

    // Handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let validationErrors = { ...errors };
        // Basic validation rules
        if (!formData.name) validationErrors.name = 'Name is required';
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.password || formData.password.length < 8)
            validationErrors.password = 'Password must be at least 8 characters';
        if (!formData.phone) validationErrors.phone = 'Phone number is required';
        if (!formData.address) validationErrors.address = 'Address is required';

        setErrors(validationErrors);

        // Check if there are no errors before submission
        const isValid = Object.values(validationErrors).every(
            (error) => error === ''
        );

        if (isValid) {
            console.log('Form data:', formData);
            // Submit form or handle submission logic here
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
                            value={formData.name}
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
                            value={formData.email}
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
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } focus: outline-teal-500`}
                        />
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
                            value={formData.phone}
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
                            value={formData.address}
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
                        <a href="#" className="text-teal-600 hover:text-teal-700">
                            Log in
                        </a>
                    </p>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
                <img
                    src="/path-to-your-image.jpg"
                    alt="Astronaut"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
        </div>
    );
};

export default Register;
