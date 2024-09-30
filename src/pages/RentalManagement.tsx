
import Loader from "../components/ui/Loader";
import { useGetAllRentalsQuery } from "../redux/features/rent/rentApi"
import { TRent } from "../utils/Types";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import { GiReturnArrow } from "react-icons/gi";
import ReturnModal from "../components/ui/ReturnModal";


const RentalManagement = () => {
    const { data: rentals, isLoading } = useGetAllRentalsQuery({});
    const [openConfirmationModal, setOpenConfirmationModal] = useState<boolean>(false);
    const [openReturnModal, setOpenReturnModal] = useState<boolean>(false);
    const [selectedRent, setSelectedRent] = useState({ rentId: '', startTime: '', pricePerHour: 0 });
    const [rentalId, setRentalId] = useState('');
    if (isLoading) {
        return <Loader />
    }
    console.log(rentals?.data);
    return (
        <>
            <div className="container mx-auto p-4">
                {/* Header section */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Rental Management</h1>
                </div>

                {/* Table section */}
                <div className="overflow-x-auto">
                    {isLoading && (<Loader />)}
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">User Email</th>
                                <th className="py-3 px-6 text-center">Bike Name</th>
                                <th className="py-3 px-6 text-center">Start Time</th>
                                <th className="py-3 px-6 text-center">Return Time</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {rentals.data.map((rent: TRent) => (
                                <tr
                                    key={rent._id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <span className="font-medium">{rent?.userId?.email}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">{rent?.bikeId?.name}</td>
                                    <td className="py-3 px-6 text-center">{rent?.startTime}</td>
                                    <td className="py-3 px-6 text-center">{rent?.returnTime}</td>
                                    <td className="py-3 px-6 text-center">
                                        <div className='relative inline-block'>
                                            <button
                                                onClick={() => {
                                                    setOpenReturnModal(true);
                                                    setSelectedRent((prevRent) => ({ ...prevRent, rentId: rent?._id, startTime: rent?.startTime, pricePerHour: rent?.bikeId?.pricePerHour as number }));
                                                    // setSingleBikeData(bike);
                                                }}
                                                className="bg-secondary text-white px-2 py-1 rounded-md hover:bg-dark mx-1"
                                                data-tooltip-id="top-tooltip"
                                            >
                                                <GiReturnArrow size={18} />
                                            </button>
                                            {/* tooltip div */}
                                            {/* tooltip div end*/}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setRentalId(rent._id as string);
                                                setOpenConfirmationModal(true);
                                            }}
                                            className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mx-1">
                                            <FaRegTrashCan size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
            {/* delete modal */}
            {
                openConfirmationModal && (
                    <>
                        {/* background layout */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setOpenConfirmationModal(false)}
                        ></div>
                        <ConfirmationModal setOpenConfirmationModal={setOpenConfirmationModal} rentalId={rentalId} />
                    </>
                )
            }

            {/* bike return modal starts */}
            {
                openReturnModal && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        <div className="fixed inert inset-0 flex items-center justify-center">
                            <ReturnModal setOpenReturnModal={setOpenReturnModal} selectedRent={selectedRent} />
                        </div>
                    </>

                )

            }
            {/* bike return modal ends */}
        </>

    )
}

export default RentalManagement