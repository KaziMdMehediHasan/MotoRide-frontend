import { useParams } from "react-router-dom"
import { useGetSingleBikeQuery } from "../redux/features/bikes/bikeApi";
import Loader from "../components/ui/Loader";
import { TLoggedInUser, TUpdateBike } from "../utils/Types";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";
import FormSubmission from "./FormSubmission";
import DateTimePicker from "../components/ui/DateTimePicker";
import Payment from "./Payment";
import Navbar from "../components/ui/Navbar";

interface props {
    setIsDetailModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    bikeData?: TUpdateBike,
    isDetailModalOpen?: true | false
    isFromDashboard?: boolean;
}

export default function BikeDetails({ setIsDetailModalOpen, bikeData, isDetailModalOpen, isFromDashboard }: props) {
    // codes for opening the component as a modal on manage bikes page
    let idFromManagePage: string = '';
    if (isDetailModalOpen) {
        idFromManagePage = bikeData?._id as string;
    }
    console.log('from bike details page:', bikeData);
    // codes for opening the component as a regular page
    const { bikeId } = useParams();
    // form modal opening or closing state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    // to get the date inside the payment page we need the following date state
    const [finalDateTime, setFinalDateTime] = useState('');
    const { data: bikeDetail, isLoading } = useGetSingleBikeQuery(isDetailModalOpen ? (idFromManagePage) : (bikeId as string), {});

    // getting user role for customised buttons and layout
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role;
    let _id, name, description, brand, isAvailable, model, pricePerHour, year, cc, img;

    if (user !== null) {
        role = user?.role as string;
        // userEmail = user?.userEmail as string;
    }

    // loader for fetching Bike data from server
    if (isLoading) {
        return <Loader />
    }

    // destructuring bike information 
    if (bikeDetail && bikeDetail.data) {
        ({ _id, name, description, brand, isAvailable, model, pricePerHour, year, cc, img } = bikeDetail.data);
    }
    // getting the user role 

    return (
        <>
            {!isFromDashboard && (<Navbar />)}
            <div className="max-w-4xl mx-auto p-6">
                {/* modal close button section starts*/}
                {
                    isDetailModalOpen && (
                        <span
                            className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                            onClick={() => {
                                if (setIsDetailModalOpen) setIsDetailModalOpen(false);
                            }}
                        >
                            X
                        </span>
                    )
                }
                {/* modal close button section ends*/}
                {
                    (!isDetailModalOpen && role === 'admin') &&
                    (
                        <button
                            onClick={() => setIsModalOpen(!isModalOpen)}
                            className="mt-6 bg-teal-500 text-sm text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                            Update Bike
                        </button>
                    )
                }
                {/* Main section */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <img
                            src={img} // Placeholder for the bike image
                            alt={name}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Details section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-600">{name}</h2>
                        <p className="text-sm text-gray-500 mt-2">{brand} - {model}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-xl font-semibold text-gray-600">€{pricePerHour}/hour</span>
                            {isAvailable ? (
                                <span className="ml-3 text-green-600 text-sm font-medium">(Available)</span>
                            ) : (
                                <span className="ml-3 text-red-600 text-sm font-medium">(Not Available)</span>
                            )}
                        </div>

                        <p className="mt-6 text-gray-600">{description}</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>
                                <strong>CC:</strong> {cc}
                            </li>
                            <li>
                                <strong>Model Year:</strong>{year || ' Not available'}
                            </li>
                        </ul>
                        <button
                            onClick={() => {
                                if (isAvailable) setIsBookingModalOpen(true);
                            }}
                            className={`${isAvailable === true ? 'mt-6 w-full bg-teal-500 text-white font-bold py-2 px-4 text-sm rounded-md hover:bg-teal-600 transition duration-300' : 'mt-6 w-full bg-teal-500 text-white font-bold py-2 px-4 text-sm rounded-md opacity-50 cursor-not-allowed'} `}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            {/* modal */}
            {
                isModalOpen && (
                    <>
                        {/* background overlay effect */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        {/* main modal content */}
                        <FormSubmission setIsModalOpen={setIsModalOpen} bikeData={bikeDetail?.data} />
                    </>
                )
            }
            {/* booking modal */}
            {
                isBookingModalOpen && (
                    <>
                        {/* background overlay effect */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        <div className="fixed inset-0 flex items-center justify-center">
                            <DateTimePicker
                                setFinalDateTime={setFinalDateTime}
                                setIsBookingModalOpen={setIsBookingModalOpen}
                                setIsPaymentModalOpen={setIsPaymentModalOpen}
                                isPaymentModalOpen={isPaymentModalOpen} />
                        </div>
                    </>
                )
            }

            {/* payment modal */}
            {
                isPaymentModalOpen && (
                    <>
                        {/* background overlay effect */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        <div className="fixed inert inset-0 flex items-center justify-center">
                            <Payment setIsPaymentModalOpen={setIsPaymentModalOpen} pricePerHour={pricePerHour} finalDateTime={finalDateTime} bikeId={_id as string} />
                        </div>
                    </>
                )
            }
        </>
    )
}