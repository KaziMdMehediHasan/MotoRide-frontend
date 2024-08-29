import { useState } from "react";

export default function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen);

    return (
        <>
            <div className="p-4 md:p-6 w-full shadow-lg border rounded-lg mx-auto">
                <h2 className="text-xl text-center font-semibold mb-4">My profile</h2>
                <p className="text-gray-500 text-center mb-6">Manage your profile details.</p>
                {/* profile information */}
                <div className="bg-gray-100 flex justify-between p-6 rounded-lg shadow-md">
                    {/* infos */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Full name</label>
                            <span>Dominik Tyka</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email address</label>
                            <span>dom@designme.agency</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Position</label>
                            <span>Product Designer</span>
                        </div>
                        <div>
                            <label className="block text-gray-700">Location</label>
                            <span>Cracow, Poland</span>
                        </div>
                    </div>
                    {/* update button to open modal */}
                    <div>
                        <button
                            onClick={() => setIsModalOpen(!isModalOpen)}
                            className="px-4 py-2 bg-teal-500 text-white rounded-md shadow-lg transition-transform transform hover:scale-105">Update Information
                        </button>
                    </div>
                </div>
            </div>
            {/* modal */}
            {isModalOpen && (
                <>
                    {/* background overlay effect */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    {/* main modal content */}
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className='p-4 md:p-6 w-1/2 mx-auto bg-gray-100 absolute shadow-lg border rounded-lg transform transition-all duration-300 ease-out scale-100'>
                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Full name</label>
                                    <div className="flex items-center space-x-2">
                                        {/* conditionally rendering name input field */}
                                        <input
                                            type="text"
                                            value=''
                                            onChange={() => console.log()}
                                            className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                        />
                                        {/* conditionally rendering save buttons */}
                                    </div>
                                </div>
                                {/* name field div ends */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email address</label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value=''
                                            onChange={() => console.log()}
                                            className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Position</label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value=''
                                            onChange={() => console.log()}
                                            className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700">Location</label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value=''
                                            onChange={() => console.log()}
                                            className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                        />
                                    </div>
                                </div>
                                {/* form buttons */}
                                <div className="space-x-2 mt-4">
                                    <button
                                        onClick={() => console.log()}
                                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(!isModalOpen)}
                                        className="bg-gray-300 px-4 py-2 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    );
}
