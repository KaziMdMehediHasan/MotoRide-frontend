import { useState } from "react";
import Loader from "../components/ui/Loader";
import { useGetRentalsQuery } from "../redux/features/rent/rentApi";
import { TRent } from "../utils/Types";

export default function MyRentals() {
    const { data, isLoading } = useGetRentalsQuery({});
    const [revealId, setRevealId] = useState(false);
    if (isLoading) {
        return <Loader />
    }
    const bikes = data?.data;

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
                                                    // setIsModalOpen(true);
                                                    // setSingleBikeData(bike);
                                                }}
                                                className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 mx-1">
                                                {/* <LuClipboardEdit size={18} /> */}
                                                Return Bike
                                            </button>
                                            {/* {
                                            !bikeDeleteLoader && (<button
                                                onClick={() => deleteBike(bike._id)}
                                                className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mx-1">
                                                <FaRegTrashCan size={18} />
                                            </button>)
                                        }
                                        {
                                            bikeDeleteLoader && (
                                                <Loader />
                                            )
                                        } */}

                                            {/* <button
                                            onClick={() => {
                                                setIsDetailModalOpen(true);
                                                setSingleBikeData(bike);
                                            }}
                                            className="bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600 mx-1">
                                            <MdOpenInBrowser size={18} />
                                        </button> */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
