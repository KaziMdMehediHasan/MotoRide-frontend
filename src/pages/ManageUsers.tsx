import Loader from "../components/ui/Loader";
import { TUserInfo } from "../utils/Types";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useState } from "react";
import { useGetAllUsersQuery, useMakeAdminMutation } from "../redux/features/auth/authApi";
import ConfirmationModal from "../components/ui/ConfirmationModal";

const ManageUsers = () => {
    const [openConfirmationModal, setOpenConfirmationModal] = useState<boolean>(false);
    const { data: allUserData, isLoading: userLoader } = useGetAllUsersQuery({});
    const [makeAdmin, { isLoading: adminLoader }] = useMakeAdminMutation();
    const [userId, setUserId] = useState('');
    const [successMessage, showSuccessMessage] = useState(false);

    if (userLoader) {
        return <Loader />
    }

    // custom alert function
    const triggerMessage = () => {
        showSuccessMessage(true);
        setTimeout(() => {
            showSuccessMessage(false);
        }, 3000)
    }

    return (
        <>
            <div className="container mx-auto p-4">
                {/* Header section */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Manage Bikes</h1>
                </div>

                {/* Table section */}
                <div className="overflow-x-auto">
                    {userLoader && (<Loader />)}
                    {successMessage && (
                        <div className="my-4 p-2 bg-green-100 text-green-700 border border-green-500 rounded">
                            Promoted to admin successfully!
                        </div>
                    )}
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">User Name</th>
                                <th className="py-3 px-6 text-center">Email</th>
                                <th className="py-3 px-6 text-center">Role</th>
                                <th className="py-3 px-6 text-center">Phone</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {allUserData.data.map((user: TUserInfo) => (
                                <tr
                                    key={user._id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <span className="font-medium">{user.name}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">{user.email}</td>
                                    <td className="py-3 px-6 text-center">{user.role}</td>
                                    <td className="py-3 px-6 text-center">{user.phone}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            onClick={async () => {
                                                await makeAdmin(user._id as string);
                                                await triggerMessage();
                                                // setOpenConfirmationModal(true);
                                                // setSingleBikeData(bike);
                                            }}
                                            className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 mx-1">
                                            <MdOutlineAdminPanelSettings size={18} />
                                        </button>
                                        {/* {
                                            !userDeleteLoader && ()
                                        } */}
                                        <button
                                            onClick={() => {
                                                setUserId(user._id as string);
                                                // deleteBike
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
            </div>
            {/* update modal */}
            {
                openConfirmationModal && (
                    <>
                        {/* background layout */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setOpenConfirmationModal(false)}
                        ></div>
                        <ConfirmationModal setOpenConfirmationModal={setOpenConfirmationModal} userId={userId} />
                    </>
                )
            }
        </>

    );
};

export default ManageUsers;
