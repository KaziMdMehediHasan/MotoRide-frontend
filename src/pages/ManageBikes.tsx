import Loader from "../components/ui/Loader";
import { useGetBikesQuery } from "../redux/features/bikes/bikeApi";
import { TUpdateBike } from "../utils/Types";
import { LuClipboardEdit } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOpenInBrowser } from "react-icons/md";
import { useState } from "react";
import FormSubmission from "./FormSubmission";
import BikeDetails from "./BikeDetails";
import ConfirmationModal from "../components/ui/ConfirmationModal";

const ManageBikes = () => {

    const { data: bikes, isLoading } = useGetBikesQuery({});
    const [openConfirmationModal, setOpenConfirmationModal] = useState<boolean>(false);
    const [bikeId, setBikeId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [singleBikeData, setSingleBikeData] = useState<TUpdateBike>({});
    const isFromDashboard = true;

    // const [deleteBike, { isLoading: bikeDeleteLoader }] = useDeleteBikeMutation();
    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <div className="container mx-auto p-4">
                {/* Header section */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Manage Bikes</h1>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm transition-all">
                        Create New Bike
                    </button>
                </div>

                {/* Table section */}
                <div className="overflow-x-auto">
                    {isLoading && (<Loader />)}
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Bike Name</th>
                                <th className="py-3 px-6 text-center">Availability</th>
                                <th className="py-3 px-6 text-center">Model</th>
                                <th className="py-3 px-6 text-center">Brand</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {bikes.data.map((bike: TUpdateBike) => (
                                <tr
                                    key={bike._id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <span className="font-medium">{bike.name}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight rounded-full ${bike.isAvailable ? 'bg-green-200 text-green-700' : 'bg-pink-200 text-pink-700'
                                                }`}
                                        >
                                            {bike.isAvailable ? 'Available' : 'Unavailable'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">{bike.model}</td>
                                    <td className="py-3 px-6 text-center">{bike.brand}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(true);
                                                setSingleBikeData(bike);
                                            }}
                                            className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 mx-1">
                                            <LuClipboardEdit size={18} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                // deleteBike(bike._id);
                                                setBikeId(bike._id as string);
                                                setOpenConfirmationModal(true);
                                            }}
                                            className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mx-1">
                                            <FaRegTrashCan size={18} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsDetailModalOpen(true);
                                                setSingleBikeData(bike);
                                            }}
                                            className="bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600 mx-1">
                                            <MdOpenInBrowser size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* create bike modal starts */}
            {
                isCreateModalOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        ></div>
                        <FormSubmission setIsCreateModalOpen={setIsCreateModalOpen} isCreateBike={true} />
                    </>
                )
            }
            {/* create bike modal ends */}
            {/* update modal */}
            {
                isModalOpen && (
                    <>
                        {/* background layout */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                        ></div>
                        <FormSubmission bikeData={singleBikeData} setIsModalOpen={setIsModalOpen} fromBikeManage={true} />
                    </>
                )
            }
            {/* product detail modal */}
            {
                isDetailModalOpen && (
                    // background layout
                    <>
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                        ></div>
                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className='p-4 md:p-6 w-1/2 mx-auto bg-gray-100 absolute shadow-lg border rounded-lg transform transition-all duration-300 ease-out scale-100'>
                                <BikeDetails
                                    bikeData={singleBikeData}
                                    isDetailModalOpen={isDetailModalOpen}
                                    isFromDashboard={isFromDashboard}
                                    setIsDetailModalOpen={setIsDetailModalOpen}
                                />
                            </div>
                        </div>
                    </>
                )
            }
            {/* delete modal */}
            {
                openConfirmationModal && (
                    <>
                        {/* background layout */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setOpenConfirmationModal(false)}
                        ></div>
                        <ConfirmationModal setOpenConfirmationModal={setOpenConfirmationModal} bikeId={bikeId} />
                    </>
                )
            }
        </>

    );
};

export default ManageBikes;
