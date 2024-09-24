import couponImg from '../../assets/for-coupon-section.webp'

const Coupon = () => {
    return (
        <div className="relative h-96 w-full bg-cover bg-center" style={{ backgroundImage: `url(${couponImg})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                    <p className="text-4xl text-gray-50">Enjoy <span className='font-bold'>20%</span> Off With Every Ride!</p>
                    <p className="mt-2">Use the code <span className='font-bold text-orange-500'>BIKE20</span> at the checkout.</p>
                </div>
            </div>
        </div>
    );
};

export default Coupon;
