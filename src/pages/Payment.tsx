import { useState } from "react";
import { useBikeReturnMutation, useCreateRentMutation } from "../redux/features/rent/rentApi";
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCreatePaymentMutation } from "../redux/features/payment/paymentApi";
import Loader from "../components/ui/Loader";
import { TBikeReturnData } from "../utils/Types";

interface props {
    setIsPaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    pricePerHour?: number;
    finalDateTime?: string;
    bikeId?: string; //this one comes from the bike details page when trying to rent a bike
    isReturning?: boolean; //comes from the return page
    returnData?: TBikeReturnData //comes from the return page
}
const Payment = ({ setIsPaymentModalOpen, pricePerHour, finalDateTime, isReturning, returnData, bikeId }: props) => {
    // create rent request send through redux toolkit
    console.log('coming from bike return page:', isReturning);
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState('');
    // const [advancePaymentId, setAdvancedPaymentId] = useState('');
    let advancePaymentId: string;
    let finalPaymentId: string;
    const stripe = useStripe(); //hook provided by stripe
    const elements = useElements(); //elements hook
    // redux functions
    const [createRent, { isLoading, isSuccess, }] = useCreateRentMutation();
    const [createPayment, { data: clientSecret, isLoading: paymentLoader, isError: isPaymentError, isSuccess: isPaymentSuccess, error: paymentError }] = useCreatePaymentMutation();

    const [bikeReturn, { isLoading: bikeReturnLoader, isSuccess: bikeLoaderSuccess }] = useBikeReturnMutation();

    // card form validation state
    const [isCardComplete, setIsCardComplete] = useState({
        cardNumber: false,
        cardExpiry: false,
        cardCvc: false
    });

    // Updating card completion state when input fields change
    const handleChange = (event: any, type: string) => {
        setIsCardComplete((prev) => ({
            ...prev,
            [type]: event.complete
        }));
    };

    // card form validation function
    const isFormValid = () => {
        return Object.values(isCardComplete).every(Boolean);
    };

    const rentBike = async () => {
        // console.log('captured time from the modal:', pickedDateAndTime);
        const rentInfo = {
            bikeId: bikeId,
            startTime: finalDateTime,
            advancePaymentId: advancePaymentId,
        }
        console.log('from rentBike function:', rentInfo);
        try {
            await createRent(rentInfo).unwrap();
        } catch (error) {
            // const errorMessage = error.error.data.message
            console.log(error);
        }

    }

    const returnBike = async () => {
        const returnInfo = {
            rentalId: returnData?.rentalId,
            totalCost: returnData?.totalCost,
            returnTime: returnData?.returnTime,
            isReturned: true,
            finalPaymentId: finalPaymentId,
        }
        console.log('from returnBike function:', returnInfo);
        try {
            await bikeReturn(returnInfo);
        } catch (error) {
            console.log(error);
        }
    }
    console.log('Created payment intent:', clientSecret);


    // const testSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await returnBike();
    // }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // handle the form submission
        // ensures whether stripe is loaded properly
        if (!stripe || !elements) return 'Stripe is not loaded';

        // checking whether user filled up the form correctly
        if (!isFormValid()) {
            setMessage("Please complete all card details.");
            return;
        }

        setIsProcessing(true);
        try {
            // step1: create a payment intent by calling the create payment redux function
            let paymentCreationResult;
            // checking whether user is returning or booking a bike
            if (isReturning) {
                paymentCreationResult = await createPayment({ amount: Number(returnData?.totalCost) - 10 }).unwrap();
            } else {
                paymentCreationResult = await createPayment({ amount: 10 }).unwrap();
            }
            console.log(paymentCreationResult);

            const clientSecretKey = paymentCreationResult?.clientSecret;

            console.log(clientSecretKey);

            // checking whether it's the final payment or the advance payment
            if (isReturning) {
                finalPaymentId = paymentCreationResult?.paymentId;
            } else {
                advancePaymentId = paymentCreationResult?.paymentId;
            }

            console.log('from the submit function:', finalPaymentId);
            if (!clientSecretKey) {
                setMessage('Client Secret not received');
                setIsProcessing(false);
                return;
            }

            // step2: confirm payment with card details using stripe.js
            const cardElement = elements.getElement(CardNumberElement);
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecretKey, {
                payment_method: {
                    card: cardElement!,
                }
            });

            if (error) {
                setMessage(error?.message || 'Payment error');
                setIsProcessing(false);
            } else if (paymentIntent && paymentIntent.status === 'succeeded') {
                setMessage('Payment successful!');
                setIsProcessing(false);
            }

            if (isReturning) {
                await returnBike();
            } else {
                await rentBike();
            }

        } catch (error) {
            setMessage("Payment creation failed. Please try again.");
            console.error("Error during payment creation:", error);
            setIsProcessing(false);
        }

    };

    return (
        <>
            {
                !isSuccess && (<div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0 p-6 bg-gray-100 bg-opacity-50 rounded-lg w-[50%] relative">
                    <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
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
                            {/* cardElement input starts*/}
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Card Number*
                                </label>
                                <CardNumberElement
                                    onChange={(event) => handleChange(event, 'cardNumber')}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Card Expiry*
                                </label>
                                <CardExpiryElement
                                    onChange={(event) => handleChange(event, 'cardExpiry')}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Card CVC*
                                </label>
                                <CardCvcElement
                                    onChange={(event) => handleChange(event, 'cardCvc')}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-teal-500" />
                            </div>
                            {/* cardElement input ends*/}
                            <button
                                disabled={isProcessing || !stripe}
                                type="submit"
                                className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition-colors"
                            >
                                {isProcessing ? 'Processing...' : 'Pay Now'}
                            </button>
                            {/* showing the error message */}
                            {message && <p className="mt-4 text-red-500">{message}</p>}
                        </form>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
                        <ul className="mb-4 space-y-2">
                            <li className="flex justify-between">
                                <span className="text-gray-700">{isReturning ? 'Final Payment' : 'Advance Payment'}</span>
                                <span className="text-green-500">${returnData?.totalCost || 10}</span>
                            </li>
                            {isReturning && (
                                <li className="flex justify-between">
                                    <span className="text-gray-700">Advance Payment</span>
                                    <span className="text-red-500">-${10}</span>
                                </li>
                            )}

                            <li className="flex justify-between">
                                <span className="text-gray-700">Hourly Rate</span>
                                <span className="text-gray-700">${returnData?.pricePerHour || pricePerHour}</span>
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
                        <div className="flex justify-between text-gray-600 text-lg font-bold">
                            <span>Total</span>
                            <span className=''>${Number(returnData?.totalCost) - 10}</span>
                        </div>
                    </div>
                </div>)
            }

            {
                isLoading && <Loader />
            }
            {
                isSuccess && <>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0 p-6 bg-gray-100 bg-opacity-50 rounded-lg w-[50%] relative">
                        <span
                            className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                            onClick={() => {
                                setIsPaymentModalOpen(false);
                            }}
                        >
                            X
                        </span>
                        <h1 className="text-3xl text-green-500">Bike booking confirmed!</h1>
                    </div>
                </>
            }
        </>
    )
}

export default Payment