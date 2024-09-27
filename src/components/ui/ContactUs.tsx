import executive from '../../assets/executive.png';
import { GrSend } from "react-icons/gr";

const ContactUs = () => {
    return (
        <>
            <div className='flex flex-col gap-4 lg:flex-row justify-center bg-gradient-to-l from-gray-300 to transparent items-center'>
                {/* image div */}
                <div className='w-auto lg:w-[30%] justify-items-center'>
                    <img src={executive} alt="contact-image" className='object-contain lg:h-[50rem] w-full' />
                </div>
                {/* headings div */}
                <div className='w-auto lg:w-[30%]'>
                    <h1 className="text-4xl font-bold text-gray-600 mb-6 text-center lg:text-start">Contact Us</h1>
                    <p className='text-center lg:text-start'>Share Your Thoughts Or File Your Complaint!</p>
                </div>
                {/* form div */}
                <div className='w-full lg:w-[50%] xl:me-32'>
                    <form className="w-full mx-auto bg-transparent p-6">
                        <div className="mb-4">
                            <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 border rounded-md focus:outline-none focus:shadow-2xl transition-all duration-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border rounded-md focus:outline-none focus:shadow-2xl transition-all duration-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-4 border rounded-md focus:outline-none focus:shadow-2xl transition-all duration-500"
                                placeholder="Your Message"
                            />
                        </div>
                        <div className='justify-self-center'>

                            <button type="submit" className="flex justify-between items-center gap-2 text-sm p-2 bg-secondary hover:bg-dark rounded-md text-white transition-all duration-300">
                                <GrSend /> Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div >
        </>
    )
}

export default ContactUs