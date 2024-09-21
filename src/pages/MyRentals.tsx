import { useState } from "react";
import Loader from "../components/ui/Loader";
import { useGetRentalsQuery } from "../redux/features/rent/rentApi";
import { TBikeReturnData, TRent } from "../utils/Types";
import Payment from "./Payment";
import { convertDateToBDTimeZone } from "../utils/convertDate";

export default function MyRentals() {
    const { data, isLoading } = useGetRentalsQuery({});
    const [revealId, setRevealId] = useState(false);
    const [returnData, setReturnData] = useState<TBikeReturnData>({
        returnTime: '',
        totalCost: 0,
        rentalId: '',
        pricePerHour: 0,
    });
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    if (isLoading) {
        return <Loader />
    }
    const bikes = data?.data;
    console.log(returnData);
    return (
        <>
            <div className="container mx-auto p-4">
                {/* Header section */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Manage Bikes</h1>
                </div>

                {/* Table section */}
                <div className="overflow-x-auto">
                    {/* {isLoading && (<Loader />)} */}
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Bike Name</th>
                                <th className="py-3 px-6 text-center">Returned</th>
                                <th className="py-3 px-6 text-center">Adv. Payment ID</th>
                                <th className="py-3 px-6 text-center">Final Payment ID</th>
                                <th className="py-3 px-6 text-center">Start Time</th>
                                <th className="py-3 px-6 text-center">Return Time</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {isLoading && <Loader />}
                            {
                                bikes?.map((bike: TRent) => (
                                    <tr
                                        key={bike._id}
                                        className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <span className="font-medium">{bike.bikeId.name}</span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span
                                                className={`px-2 py-1 font-semibold leading-tight rounded-full ${bike.isReturned ? 'bg-green-200 text-green-700' : 'bg-pink-200 text-pink-700'
                                                    }`}
                                            >
                                                {bike.isReturned ? 'Yes' : 'No'}
                                            </span>
                                        </td>
                                        <td
                                            onClick={() => setRevealId(!revealId)}
                                            className="py-3 px-6 text-center cursor-pointer">{revealId ? `${bike.advancePaymentId}` : `${bike.advancePaymentId.slice(0, 5)}...`}
                                        </td>
                                        <td
                                            onClick={() => setRevealId(!revealId)}
                                            className="py-3 px-6 text-center">{revealId ? `${bike.finalPaymentId}` : `${bike.finalPaymentId.slice(0, 5)}...`}
                                        </td>
                                        <td className="py-3 px-6 text-center">{`${bike.startTime.slice(0, 10)} at ${bike.startTime.slice(11, 16)}`}</td>
                                        <td className="py-3 px-6 text-center">{bike.returnTime ? bike.returnTime : 'Not Returned Yet'}</td>
                                        <td className="py-3 px-6 text-center">
                                            <button
                                                onClick={() => {
                                                    setIsPaymentModalOpen(!isPaymentModalOpen);
                                                    const startDateMilliSeconds = Date.parse(bike.startTime); //getting the time in milliseconds
                                                    const currentTimeString = convertDateToBDTimeZone();
                                                    const returnDateMilliSeconds = Date.parse(currentTimeString);
                                                    // console.log(returnDateMilliSeconds - startDateMilliSeconds);

                                                    const elapsedTime = ((returnDateMilliSeconds - startDateMilliSeconds) / (1000 * 60 * 60)).toFixed(2); //elapsed time in hours

                                                    const totalCost = Number(elapsedTime) * Number(bike?.bikeId?.pricePerHour);

                                                    // console.log('bike id:', bike.bikeId._id);
                                                    setReturnData({ ...returnData, returnTime: currentTimeString, totalCost: Number(totalCost.toFixed(2)), rentalId: bike._id as string, pricePerHour: Number(bike.bikeId.pricePerHour) });
                                                    // setIsModalOpen(true);
                                                    // setSingleBikeData(bike);
                                                }}
                                                disabled={bike.isReturned}
                                                className={`${bike.isReturned ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-400' : 'cursor-pointer '} bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600 mx-1`}>
                                                {/* <LuClipboardEdit size={18} /> */}
                                                Return Bike
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                isPaymentModalOpen && (
                    <>
                        {/* background overlay */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        <div className="fixed inert inset-0 flex items-center justify-center">
                            <Payment setIsPaymentModalOpen={setIsPaymentModalOpen} returnData={returnData} isReturning={true} />
                        </div>
                    </>
                )
            }
        </>
    )
}
