import { useRef, useState } from 'react';
import executive from '../../assets/executive.png';
import { GrSend } from "react-icons/gr";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
    // const;
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, form.current, {
                    publicKey: `${import.meta.env.VITE_STRIPE_PUBLIC_KEY}`,
                })
                .then(
                    () => {
                        setIsMessageSent(true);
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log(error);
                        console.log('FAILED...', error.text);
                    },
                );
        }
        (e.target as HTMLFormElement).reset();
    };
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
                {!isMessageSent ? (
                    <div className='w-full lg:w-[50%] xl:me-32'>
                        <form className="w-full mx-auto bg-transparent p-6" ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="user_name">Your Name</label>
                                <input
                                    name="user_name"
                                    type="text"
                                    id="user_name"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:shadow-2xl transition-all duration-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="user_email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:shadow-2xl transition-all duration-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xl font-light mb-2 text-gray-600" htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
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
                ) : (
                    <div className='w-full lg:w-[50%] xl:me-32 flex flex-col justify-center items-center'>
                        <h1 className="text-4xl font-bold text-gray-600 mb-6 text-center lg:text-start">Message Received!</h1>
                        <div>
                            <button
                                onClick={() => setIsMessageSent(false)}
                                className="flex justify-between items-center gap-2 text-sm p-2 bg-secondary hover:bg-dark rounded-md text-white transition-all duration-300">
                                <GrSend /> Send Another Message
                            </button>
                        </div>
                    </div>
                )

                }

            </div >
        </>
    );
};

export default ContactUs;