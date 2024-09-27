import Navbar from '../components/ui/Navbar';
import { Link } from 'react-router-dom';
import homepageCover from '../assets/homepage-cover.jpg';
import { useGetBikesQuery } from '../redux/features/bikes/bikeApi';
import Loader from '../components/ui/Loader';
import { TBike } from '../utils/Types';
import TestimonialCard from '../components/TestimonialCard';
import { services, testimonials } from '../utils/data';
import WhyChooseUsCard from '../components/WhyChooseUsCard';
import Coupon from '../components/ui/Coupon';
import ContactUs from '../components/ui/ContactUs';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
    const { data: bikeData, isLoading } = useGetBikesQuery({});
    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <Navbar />
            {/* // hero section starts */}
            <div className="font-pop bg-gray-200">
                <section className="relative bg-cover bg-center h-screen flex items-center justify-center shadow-xl" style={{ backgroundImage: `url(${homepageCover})` }}>
                    <div className="bg-slate-100 opacity-15 w-full h-full absolute top-0 left-0"></div>
                    <div className="text-center text-white p-10 lg:p-20 bg-dark backdrop-blur-md rounded-lg bg-opacity-40">
                        <h1 className="text-4xl font-bold mb-4">Best Bikes for You</h1>
                        <p className="text-xl mb-8">Find your perfect ride from our wide selection of top brands.</p>
                        <input
                            type="text"
                            placeholder="Search for bikes..."
                            className="p-2 rounded-md text-gray-800 w-72 focus:outline-none border-0 focus:shadow-2xl transition-all duration-500"
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
                            <ProductCard
                                _id={bike?._id}
                                name={bike?.name}
                                pricePerHour={bike?.pricePerHour}
                                img={bike?.img}
                                isHomePage={true}
                            />
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
                <section className="container px-8 mt-12 mx-auto">
                    <h1 className="text-3xl font-bold text-gray-600 text-center mb-6">Customer Testimonials</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </section>
                {/* testimonials section ends */}
                {/* why choose us section starts */}
                <section className="container px-8 py-12 mx-auto">
                    <h2 className=" text-3xl font-bold text-gray-600 text-center mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6">
                        {
                            services.map(service => (
                                <WhyChooseUsCard
                                    icon={<service.icon className='text-primary' size={50} />}
                                    title={service.title}
                                    description={service.description}
                                />))
                        }
                    </div>
                </section>
                {/* why choose us section ends */}
                {/* Coupons and discounts starts */}
                <section className="text-white">
                    <Coupon />
                </section>
                {/* Coupons and discounts ends */}
                {/* contact us section starts */}
                <section className="bg-gray-200">
                    <ContactUs />
                </section>
                {/* contact us section ends */}
            </div>

        </>
    );
};

