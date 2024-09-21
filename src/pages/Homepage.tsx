import Navbar from '../components/ui/Navbar';
import { Link } from 'react-router-dom';
import homepageCover from '../assets/homepage-cover.jpg';
import { useGetBikesQuery } from '../redux/features/bikes/bikeApi';
import Loader from '../components/ui/Loader';
import { TBike } from '../utils/Types';

export default function HomePage() {
    const { data: bikeData, isLoading } = useGetBikesQuery({});
    if (isLoading) {
        return <Loader />
    }
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
            <div className="font-pop bg-gray-200">
                <section className="relative bg-cover bg-center h-screen flex items-center justify-center shadow-xl" style={{ backgroundImage: `url(${homepageCover})` }}>
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
                <section className="container mx-auto px-8 mt-12 flex flex-col items-center gap-8">
                    <h1 className="text-3xl font-bold text-gray-600 text-center mb-6">Ride The Hottest Bikes Now</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {isLoading && (<Loader />)}
                        {bikeData?.data.slice(0, 4).map((bike: TBike) => (
                            <div key={bike._id} className="border border-teal-400 rounded-lg p-4 relative bg-gray-50 shadow-xl">
                                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">Discount</span>
                                <img
                                    src={bike.img as string || ''}
                                    alt={bike.name}
                                    className="w-full h-40 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mb-2 text-gray-600">{bike.name}</h3>
                                <p className="text-sm line-through text-gray-400">${Number(bike.pricePerHour) + 10}</p>
                                <p className="text-xl font-semibold text-gray-600">${bike.pricePerHour}</p>
                                <Link to={`bikes/bike/${bike._id}`}>
                                    <p className="text-sm mt-2 font-semibold text-teal-500 hover:text-teal-600">See Details</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link to='/bikes'>
                            <button className='px-4 py-2 text-sm text-white rounded-lg shadow-xl bg-teal-500 hover:bg-teal-600'>See All</button>
                        </Link>
                    </div>

                </section>
                {/* // featured section ends */}
                {/* testimonials section starts */}
                <section className="px-8 mt-12">
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

