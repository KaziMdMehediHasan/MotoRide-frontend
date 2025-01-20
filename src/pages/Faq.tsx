import { useState } from 'react';
import { faqItems } from '../utils/data';
import Navbar from '../components/ui/Navbar';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 font-pop">
                <div className="w-full px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600">
                                Find answers to common questions about our bike rental service
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                                >
                                    <button
                                        className="w-full text-left px-4 py-4 sm:px-6 sm:py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-sm sm:text-base font-medium text-gray-600 pr-4">
                                            {item.question}
                                        </span>
                                        <span className="flex-shrink-0 text-gray-500">
                                            {openIndex === index ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                                            <p className="text-sm sm:text-base text-gray-600">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <div className="mt-8 sm:mt-12 text-center bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                                Still have questions?
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 mb-4">
                                We're here to help. Contact our support team for assistance.
                            </p>
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-150 ease-in-out">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Faq;