const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700 py-8 font-pop">
            <div className="container mx-auto px-6">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">MotoRent</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu eleifend lectus, non varius tortor.
                        </p>
                    </div>

                    {/* Hot Links Section */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Hot links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">Home</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">Show</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">Blog</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">More info</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">How it works</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">About us</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-teal-500">Sustainability</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Customer Care Section */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Customer care</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-teal-500">FAQ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-teal-500">Terms of use</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-teal-500">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-teal-500">Discount system</a></li>
                        </ul>
                    </div>

                    {/* Terms & Conditions Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-teal-500">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-600">
                        © Kazi Mehedi Hasan All Rights Reserved 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;