import Navbar from "../components/ui/Navbar";
import { terms } from "../utils/data";

const Terms = () => {

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 font-pop">
                <div className="w-full px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-4">
                                Terms of Use
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500">
                                Last updated: January 20, 2025
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <p className="text-sm sm:text-base text-gray-700">
                                Please read these Terms of Use carefully before using our bike rental service. These terms contain important information about your legal rights, remedies, and obligations.
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-6">
                            {terms.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm p-6"
                                >
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">
                                        {section.title}
                                    </h2>
                                    {Array.isArray(section.content) ? (
                                        <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                                            {section.content.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="text-sm sm:text-base text-gray-400"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm sm:text-base text-gray-400">
                                            {section.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Terms;