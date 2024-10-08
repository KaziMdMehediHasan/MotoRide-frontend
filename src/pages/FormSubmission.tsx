import React, { useState } from 'react';
import { useCreateBikeMutation, useUpdateBikeDataMutation } from '../redux/features/bikes/bikeApi';
import { TUpdateBike } from '../utils/Types';
import Loader from '../components/ui/Loader';

const initialUpdateData = {
    _id: '',
    name: '',
    description: '',
    pricePerHour: 0,
    isAvailable: '',
    cc: 0,
    model: '',
    brand: '',
    year: 0,
}

interface props {
    setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCreateModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    bikeData?: TUpdateBike,
    fromBikeManage?: true | false,
    isCreateBike?: true | false,
}

const FormSubmission = ({ setIsModalOpen, setIsCreateModalOpen, bikeData, fromBikeManage, isCreateBike }: props) => {
    const bikeId = bikeData?._id;
    const [createBike, { isLoading: bikeCreationLoading, error: bikeCreationError }] = useCreateBikeMutation();
    // update bike rtk query mutation function
    const [updateBikeData, { data: updatedBikeData, isLoading, isSuccess, error: bikeUpdateError }] = useUpdateBikeDataMutation();
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Make the type explicit
    const [updateData, setUpdateData] = useState<TUpdateBike>(initialUpdateData);
    const [error, setError] = useState('');
    const [imgPath, setImgPath] = useState('');

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        // type guard to avoid type error
        if (!e.target.files || e.target.files.length === 0) {
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
            return;
        }
        const file = e.target.files[0]

        if (file && file.type.startsWith('image/')) {
            console.log('compatible file');
            setSelectedFile(file);
            setImgPath(URL.createObjectURL(e.target.files[0]));
            setError('');
        } else {
            setImgPath('');
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
        }
        // watch which file is selected
        console.log('selected image:', selectedFile);
    }

    // Function to handle form submission
    const uploadFile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        const bikeInfo = new FormData();

        // Dynamically append image file FormData
        if (selectedFile) {
            bikeInfo.append('img', selectedFile); // Adding the image file to FormData
        }

        // dynamically creating a form data for input fields
        for (const key in updateData) {
            const formValue = updateData[key as keyof TUpdateBike];
            if (formValue) {
                bikeInfo.append(key, formValue.toString());
            }
        }

        // Check if data is being properly appended to form
        console.log('Form Data from client:', [...bikeInfo.entries()]); // Log the form data entries to check if it's correct
        // Pass form data and bikeId to the mutation
        if (isCreateBike) {
            console.log('Enters create mode');
            await createBike(bikeInfo);
        } else {
            await updateBikeData({ bikeInfo, bikeId });
        }
        // clearing all the states
        setUpdateData(initialUpdateData);
        setError('');
        setImgPath('');
        setSelectedFile(null);
        if (setIsModalOpen) setIsModalOpen(false);
        if (setIsCreateModalOpen) setIsCreateModalOpen(false);
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className='p-4 md:p-6 w-1/2 mx-auto bg-gray-100 absolute shadow-lg border rounded-lg transform transition-all duration-300 ease-out scale-100'>
                    {
                        isLoading && (
                            <Loader />
                        )
                    }
                    {
                        bikeCreationLoading && (
                            <Loader />
                        )
                    }
                    {/* modal close icon starts*/}
                    <span
                        className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                        onClick={() => {
                            setError('');
                            setImgPath('');
                            setUpdateData(initialUpdateData);
                            setSelectedFile(null);
                            if (setIsModalOpen) setIsModalOpen(false);
                            if (setIsCreateModalOpen) setIsCreateModalOpen(false);
                        }}
                    >
                        X
                    </span>
                    {/* modal close icon ends*/}
                    <form encType="multipart/form-data" onSubmit={uploadFile}>
                        {/* name field starts */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Bike Name</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="text"
                                id="name"
                                name="name"
                                placeholder={bikeData?.name || 'Enter bike name'}
                                value={updateData.name || ''}
                                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} // Update state
                            />
                        </div>
                        {/* name field ends */}
                        {/* description field starts */}
                        <div>
                            <label htmlFor="description" className="block text-gray-700">Description</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="text"
                                id="description"
                                name="description"
                                placeholder={bikeData?.description || 'Describe your bike'}
                                value={updateData.description || ''}
                                onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })} // Update state
                            />
                        </div>
                        {/* description field starts */}
                        {/* brand field starts */}
                        <div>
                            <label htmlFor="brand" className="block text-gray-700">Brand</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="text"
                                id="brand"
                                name="brand"
                                placeholder={bikeData?.brand || 'Enter a brand'}
                                value={updateData.brand || ''}
                                onChange={(e) => setUpdateData({ ...updateData, brand: e.target.value })} // Update state
                            />
                        </div>
                        {/* brand field ends */}
                        {/* model field starts */}
                        <div>
                            <label htmlFor="model" className="block text-gray-700">Model</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="text"
                                id="model"
                                name="model"
                                placeholder={bikeData?.model || 'Enter a model'}
                                value={updateData.model || ''}
                                onChange={(e) => setUpdateData({ ...updateData, model: e.target.value })} // Update state
                            />
                        </div>
                        {/* model field ends */}
                        {/* year field starts */}
                        <div>
                            <label htmlFor="year" className="block text-gray-700">Year</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="number"
                                id="year"
                                name="year"
                                placeholder={bikeData?.year !== undefined ? `${bikeData?.year}` : 'Enter a year'}
                                value={updateData.year || ''}
                                onChange={(e) => setUpdateData({ ...updateData, year: Number(e.target.value) })} // Update state
                            />
                        </div>
                        {/* year field ends */}
                        {/* cc field starts */}
                        <div>
                            <label htmlFor="cc" className="block text-gray-700">CC</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="number"
                                id="cc"
                                name="cc"
                                placeholder={bikeData?.cc ? `${bikeData?.cc}` : 'Enter CC value'}
                                value={updateData.cc || ''}
                                onChange={(e) => setUpdateData({ ...updateData, cc: Number(e.target.value) })} // Update state
                            />
                        </div>
                        {/* cc field ends */}
                        {/* price per hour field starts */}
                        <div>
                            <label htmlFor="cc" className="block text-gray-700">Price Per Hour</label>
                            <input
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                                type="number"
                                id="cc"
                                name="cc"
                                placeholder={bikeData?.pricePerHour ? `${bikeData?.pricePerHour}` : 'Enter price per hour value'}
                                value={updateData.pricePerHour || ''}
                                onChange={(e) => setUpdateData({ ...updateData, pricePerHour: Number(e.target.value) })} // Update state
                            />
                        </div>
                        {/* price per hour field ends */}
                        {/* availability field starts */}
                        {/* availability checkbox */}
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    onClick={(e) => {
                                        console.log(e.currentTarget.checked);
                                        if (e.currentTarget.checked) {
                                            setUpdateData({ ...updateData, isAvailable: 'true' })
                                        }
                                    }}
                                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
                                <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Available</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    onClick={(e) => {
                                        if (e.currentTarget.checked) {
                                            setUpdateData({ ...updateData, isAvailable: 'false' });
                                        }
                                    }}
                                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
                                <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Not Available</label>
                            </div>
                        </div>
                        {/* availability checkbox end */}
                        {/* availability field ends */}
                        {/* view uploaded image starts */}
                        <div className='w-full h-64 '>
                            <img
                                className='w-full rounded-lg h-64 object-cover'
                                src={imgPath}
                            />
                        </div>
                        {/* view uploaded image ends */}
                        {/* image upload input field starts */}
                        <div>
                            <input
                                className="mt-4 w-full file:cursor-pointer text-sm text-slate-500 file:mr-8 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-200 file:text-teal-700 hover:file:bg-teal-300"
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleImageSelect} // Handle file input
                            />
                        </div>
                        {
                            error && (
                                <div className="mt-4 bg-red-200 text-red-600 rounded-md shadow-lg py-2 px-4">
                                    {error}
                                </div>
                            )
                        }
                        {/* image upload input field ends */}
                        <button
                            type="submit"
                            className="mt-4 bg-teal-500 hover:bg-teal-600 text-sm text-white px-4 py-2 rounded-md">
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormSubmission;
