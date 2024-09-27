import React from 'react';
import { useDeleteUserMutation } from '../../redux/features/auth/authApi';
import Loader from './Loader';
import { useDeleteBikeMutation } from '../../redux/features/bikes/bikeApi';

interface ConfirmationModalProps {
    setOpenConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
    userId?: string;
    bikeId?: string;
}

const ConfirmationModal = ({ setOpenConfirmationModal, userId, bikeId }: ConfirmationModalProps) => {
    // if (!isOpen) return null;
    const [deleteUser, { isLoading: userDeleteLoader, isSuccess: userDeleteSuccess }] = useDeleteUserMutation();
    console.log(userId);
    const [deleteBike, { isLoading: bikeDeleteLoader }] = useDeleteBikeMutation();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-800">Confirm Delete</h2>
                <p className="mt-4 text-gray-600">
                    Are you sure you want to delete <span className="font-bold">{userId || bikeId}</span>? This action cannot be undone.
                </p>
                {
                    (userDeleteLoader || bikeDeleteLoader) && (<Loader />)
                }
                <div className="mt-6 flex justify-end space-x-3">
                    <button
                        onClick={() => {
                            setOpenConfirmationModal(false);
                        }
                        }
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={async () => {
                            if (userId !== '') await deleteUser(userId);
                            if (bikeId !== '') await deleteBike(bikeId);
                            await setOpenConfirmationModal(false);
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                    {userDeleteSuccess}
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
