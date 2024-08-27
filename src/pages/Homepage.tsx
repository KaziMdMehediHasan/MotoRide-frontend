import React from 'react';
import Navbar from '../components/ui/Navbar';
import { Link } from 'react-router-dom';
import homepageCover from '../assets/homepage-cover.jpg';

const HomePage: React.FC = () => {
    const bikes = [
        { id: 1, brand: 'Bike Brand A', image: '/path/to/image1.jpg' },
        { id: 2, brand: 'Bike Brand B', image: '/path/to/image2.jpg' },
        { id: 3, brand: 'Bike Brand C', image: '/path/to/image3.jpg' },
        // Add more bike details as needed
    ];
    const testimonials = [
        { id: 1, name: 'John Doe', review: 'Great service and amazing bikes!' },
        { id: 2, name: 'Jane Smith', review: 'I love my new bike!' },
        { id: 3, name: 'William Hannah', review: 'I love MotoRent service!' },
        // Add more testimonials as needed
    ];
    const benefits = [
        { id: 1, title: 'Best Prices', description: 'We offer competitive pricing.' },
        { id: 2, title: 'Wide Selection', description: 'Choose from a variety of brands and models.' },
        { id: 3, title: 'Excellent Service', description: 'Our customer support is top-notch.' },
    ];
    return (
        <>
            <Navbar />
            {/* // hero section starts */}
            <div className="font-pop">
                <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${homepageCover})` }}>
                    <div className="bg-slate-100 opacity-15 w-full h-full absolute top-0 left-0"></div>
                    <div className="text-center text-white p-20 bg-teal-800 backdrop-blur-md rounded-lg bg-opacity-40">
                        <h1 className="text-4xl font-bold mb-4">Best Bikes for You</h1>
                        <p className="text-xl mb-8">Find your perfect ride from our wide selection of top brands.</p>
                        <input
                            type="text"
                            placeholder="Search for bikes..."
                            className="p-2 rounded-md text-gray-800 w-72 focus:outline-teal-500 border-0"
                        />
                        <button className="lg:ml-2 mt-4 lg:mt-0 p-2 bg-teal-500 hover:bg-teal-600 rounded-md text-white">Search</button>
                    </div>
                </section>
                {/* // hero section ends */}
                {/* // featured section starts */}
                <section className="p-6 bg-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-6">Available Bikes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {bikes.map(bike => (
                            <div key={bike.id} className="border p-4 rounded-md text-center">
                                <img src={bike.image} alt={bike.brand} className="mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold">{bike.brand}</h3>
                                <Link to={`/bikes/${bike.id}`}>
                                    <button className="mt-4 p-2 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white">View Detail</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                {/* // featured section ends */}
                {/* testimonials section starts */}
                <section className="p-6 bg-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="border p-4 rounded-md bg-white">
                                <p className="italic">"{testimonial.review}"</p>
                                <p className="mt-4 font-semibold">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* testimonials section ends */}
                {/* why choose us section starts */}
                <section className="p-6 bg-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {benefits.map(benefit => (
                            <div key={benefit.id} className="border p-4 rounded-md text-center bg-gray-100">
                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                <p className="mt-2">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* why choose us section ends */}
                {/* Coupons and discounts starts */}
                <section className="p-6 bg-emerald-600 text-white">
                    <h2 className="text-3xl font-bold text-center mb-6">Coupons & Discounts</h2>
                    <div className="text-center">
                        <p className="text-xl">Use code <strong>BIKE20</strong> for 20% off!</p>
                        <p className="mt-2">Apply this code at checkout to get your discount.</p>
                    </div>
                </section>
                {/* Coupons and discounts ends */}
                {/* contact us section starts */}
                <section className="p-6 bg-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form className="max-w-lg mx-auto bg-white p-6 rounded-md">
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border rounded-md"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-2 border rounded-md"
                                placeholder="Your Message"
                            />
                        </div>
                        <button type="submit" className="w-full p-2 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white">
                            Send Message
                        </button>
                    </form>
                </section>
                {/* contact us section ends */}
            </div>

        </>
    );
};

export default HomePage;
