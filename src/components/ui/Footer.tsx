import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa'

export const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-emerald-600 text-white py-6">
                <div className="container mx-auto px-4">
                    {/* Footer Grid */}
                    <div className="flex flex-wrap justify-between">
                        {/* Social Media Icons */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-800 transition-colors"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-800 transition-colors"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-800 transition-colors"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-800 transition-colors"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        {/* Website Links */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-emerald-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-emerald-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-emerald-300">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center mt-6">
                        <p className="text-sm">&copy; 2024 YourCompany. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )


}
