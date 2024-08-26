import React from 'react';
import Navbar from '../components/ui/Navbar';

const AboutUs: React.FC = () => {
    return (
        <>
            <div className="bg-white text-gray-800 font-pop">
                {/* Mission Statement Section */}
                <section className="py-12 bg-emerald-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Our Mission</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            To revolutionize the way people explore and experience biking, by providing a platform that offers a wide selection of bikes, top-notch customer service, and a seamless rental experience.
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
                                    {/* Replace with dynamic image */}
                                    <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-gray-600">CEO & Founder</p>
                                <p className="mt-2">John is a passionate biker and entrepreneur with over 10 years of experience in the industry.</p>
                            </div>
                            {/* Repeat for other team members */}
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
                                    {/* Replace with dynamic image */}
                                    <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <h3 className="text-xl font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">COO</p>
                                <p className="mt-2">Jane brings a wealth of operational expertise and a love for biking to the team.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4">
                                    {/* Replace with dynamic image */}
                                    <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">CTO</p>
                                <p className="mt-2">Mike leads our technology development with a passion for innovation in the biking industry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History & Milestones Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center">Our Journey</h2>
                        <div className="mt-8">
                            <div className="timeline relative border-l-4 border-emerald-600 pl-8">
                                {/* Milestone 1 */}
                                <div className="mb-8">
                                    <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-emerald-600"></div>
                                    <h3 className="text-xl font-semibold">2010 - The Beginning</h3>
                                    <p className="mt-2 text-gray-600">Our founders identified a gap in the market for quality bike rentals and began their journey with a small store.</p>
                                </div>
                                {/* Milestone 2 */}
                                <div className="mb-8">
                                    <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-emerald-600"></div>
                                    <h3 className="text-xl font-semibold">2015 - Expansion</h3>
                                    <p className="mt-2 text-gray-600">We expanded our operations to multiple cities, offering a wider range of bikes and services.</p>
                                </div>
                                {/* Milestone 3 */}
                                <div className="mb-8">
                                    <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-emerald-600"></div>
                                    <h3 className="text-xl font-semibold">2020 - Digital Transformation</h3>
                                    <p className="mt-2 text-gray-600">We launched our online platform, making it easier for customers to find and rent bikes anytime, anywhere.</p>
                                </div>
                                {/* Add more milestones as necessary */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Office Address</h3>
                                <p className="mt-2">123 Bike Lane, Biker City, BK 12345</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Phone Number</h3>
                                <p className="mt-2">+1 (123) 456-7890</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p className="mt-2">contact@bikerental.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
