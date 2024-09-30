import { useState } from "react";
import Loader from "../components/ui/Loader";
import { useGetRentalsQuery } from "../redux/features/rent/rentApi";
import { TBikeReturnData, TRent } from "../utils/Types";
import Payment from "./Payment";
import { convertDateToBDTimeZone } from "../utils/convertDate";


export default function MyRentals() {
    const { data, isLoading } = useGetRentalsQuery({});
    const [paidRentalData, setPaidRentalData] = useState<TRent[]>([])
    const [unpaidRentalData, setUnpaidRentalData] = useState<TRent[]>([])
    // const [revealId, setRevealId] = useState(false);
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
    let rentals = data?.data;
    // console.log(rentals);
    const paidRentals = rentals.filter((rent: TRent) => rent.finalPaymentId !== '');
    const unpaidRentals = rentals.filter((rent: TRent) => rent.finalPaymentId === '');

    if (paidRentalData.length !== 0) rentals = [...paidRentals];
    if (unpaidRentalData.length !== 0) rentals = [...unpaidRentals];

    console.log('newly set data', rentals);
    return (
        <>
            <div className="container mx-auto p-4">
                {/* Header section */}
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-xl font-semibold text-gray-600">User Rental Management</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <button
                            onClick={() => {
                                setPaidRentalData([...paidRentals]);
                                setUnpaidRentalData([]);
                            }}
                            className="px-2 py-2 w-16 mr-4 my-2 text-sm bg-secondary hover:bg-dark text-white rounded-md">
                            Paid
                        </button>
                        <button
                            onClick={() => {
                                setUnpaidRentalData([...unpaidRentals]);
                                setPaidRentalData([]);
                            }}
                            className="px-2 py-2 w-16 text-sm bg-pink-400 hover:bg-pink-500 text-white rounded-md">
                            Unpaid
                        </button>
                    </div>

                </div>

                {/* Table section */}
                <div className="overflow-x-auto">
                    {/* {isLoading && (<Loader />)} */}
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Bike Name</th>
                                <th className="py-3 px-6 text-center">Returned</th>
                                <th className="py-3 px-6 text-center">Start Time</th>
                                <th className="py-3 px-6 text-center">Return Time</th>
                                <th className="py-3 px-6 text-center">Payable</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {isLoading && <Loader />}
                            {
                                rentals?.map((bike: TRent) => (
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

                                        <td className="py-3 px-6 text-center">{`${bike.startTime.slice(0, 10)} at ${bike.startTime.slice(11, 16)}`}</td>
                                        <td className="py-3 px-6 text-center">{bike.returnTime ? `${bike.returnTime.slice(0, 10)} at ${bike.startTime.slice(11, 16)}` : 'Not Returned Yet'}</td>
                                        <td className="py-3 px-6 text-center">{bike.returnTime ? `${bike.totalCost}` : 'Yet to calculate'}</td>
                                        <td className="py-3 px-6 text-center">
                                            <button
                                                onClick={() => {
                                                    setIsPaymentModalOpen(!isPaymentModalOpen);
                                                    const startDateMilliSeconds = Date.parse(bike.startTime); //getting the time in milliseconds
                                                    const currentTimeString = convertDateToBDTimeZone();
                                                    const returnDateMilliSeconds = Date.parse(currentTimeString);
                                                    // console.log(returnDateMilliSeconds - startDateMilliSeconds);

                                                    const elapsedTime = ((returnDateMilliSeconds - startDateMilliSeconds) / (1000 * 60 * 60)).toFixed(2); //elapsed time in hours

                                                    let totalCost = Number(elapsedTime) * Number(bike?.bikeId?.pricePerHour);

                                                    if (totalCost < Number(bike?.bikeId?.pricePerHour)) {
                                                        totalCost = Number(bike?.bikeId?.pricePerHour);
                                                    }

                                                    // console.log('bike id:', bike.bikeId._id);
                                                    setReturnData({ ...returnData, returnTime: currentTimeString, totalCost: Number(totalCost.toFixed(2)), rentalId: bike._id as string, pricePerHour: Number(bike.bikeId.pricePerHour) });
                                                    // setIsModalOpen(true);
                                                    // setSingleBikeData(bike);
                                                }}
                                                disabled={bike.isReturned}
                                                className={`${bike.isReturned ? 'cursor-not-allowed bg-gray-300 hover:bg-gray-400' : 'cursor-pointer'} bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600 mx-1`}>
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
            {/* showing the nested routes */}
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
