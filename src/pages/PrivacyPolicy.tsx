import Navbar from "../components/ui/Navbar";
import { privacyPolicy } from "../utils/data";

export const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 font-pop">
                {/* Main container with responsive padding */}
                <div className="w-full px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12">
                    {/* Content width container */}
                    <div className="max-w-[90rem] mx-auto">
                        {/* Header section */}
                        <div className="text-center mb-4 sm:mb-6 md:mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-2">
                                Privacy Policy
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600">
                                Last updated: January 20, 2025
                            </p>
                        </div>

                        {/* Main content */}
                        <div className="bg-white rounded-lg shadow-lg">
                            <div className="divide-y divide-gray-200">
                                {privacyPolicy.map((section, index) => (
                                    <div
                                        key={index}
                                        className="py-4 sm:py-5 md:py-6 first:pt-2 sm:first:pt-3 md:first:pt-4 last:pb-2 sm:last:pb-3 md:last:pb-4 px-4 sm:px-6 md:px-8"
                                    >
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-2 sm:mb-3 md:mb-4">
                                            {section.title}
                                        </h2>
                                        {Array.isArray(section.content) ? (
                                            <ul className="list-disc pl-4 sm:pl-5 md:pl-6 space-y-1 sm:space-y-2">
                                                {section.content.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="text-sm sm:text-base text-gray-600 break-words"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm sm:text-base text-gray-600 break-words">
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer note */}
                        <div className="mt-4 sm:mt-6 md:mt-8 text-center text-xs sm:text-sm text-gray-500">
                            This privacy policy is subject to change. We will notify users of any material changes.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
