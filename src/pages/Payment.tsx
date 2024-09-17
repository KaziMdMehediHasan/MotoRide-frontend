import { useState } from "react";

interface PaymentFormData {
    fullName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
}
interface props {
    setIsPaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    pricePerHour: number;

}
const Payment = ({ setIsPaymentModalOpen, pricePerHour }: props) => {
    const [formData, setFormData] = useState<PaymentFormData>({
        fullName: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle the form submission
        console.log('Form Data: ', formData);
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0 p-6 bg-gray-100 bg-opacity-50 rounded-lg relative">
                <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full ">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-6">Payment</h2>
                        {/* modal close button */}
                        <span
                            className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                            onClick={() => {
                                setIsPaymentModalOpen(false);
                            }}
                        >
                            X
                        </span>
                        {/* modal close button ends*/}
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700 " htmlFor="fullName">
                                Full name (as displayed on card)*
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500"
                                placeholder="Bonnie Green"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="cardNumber">
                                Card number*
                            </label>
                            <input
                                id="cardNumber"
                                name="cardNumber"
                                type="text"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="expiration">
                                    Card expiration*
                                </label>
                                <input
                                    id="expiration"
                                    name="expiration"
                                    type="date"
                                    value={formData.expiration}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500"
                                    placeholder="12/23"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="cvv">
                                    CVV*
                                </label>
                                <input
                                    id="cvv"
                                    name="cvv"
                                    type="text"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500"
                                    placeholder="•••"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition-colors"
                        >
                            Pay now
                        </button>
                    </form>
                </div>

                {/* Payment Summary */}
                <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
                    <ul className="mb-4 space-y-2">
                        <li className="flex justify-between">
                            <span className="text-gray-700">Advance Payment</span>
                            <span className="text-green-500">${10}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">Hourly Rate</span>
                            <span className="text-gray-700">${pricePerHour}</span>
                        </li>
                        {/* <li className="flex justify-between">
                            <span className="text-gray-700">Store Pickup</span>
                            <span>$99</span>
                        </li> */}
                        {/* <li className="flex justify-between">
                            <span className="text-gray-700">Tax</span>
                            <span>$799</span>
                        </li> */}
                    </ul>
                    <hr className="mb-4" />
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${10}</span>
                    </div>
                </div>
            </div>
            ;
        </>
    )
}

export default Payment