import { useState } from "react";

export default function Profile() {
    const [fullName, setFullName] = useState('Dominik Tyka');
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isEmailEditing, setIsEmailEditing] = useState(false);

    // input field object 
    const inputFields = [
        { name: 'name', type: 'text', value: '' },
        { name: 'email', type: 'text', value: '' },
        { name: 'password', type: 'text', value: '' },
        { name: 'password', type: 'text', value: '' },

    ]
    //editing functions
    const handleNameEditClick = () => {
        setIsNameEditing(true);
    };
    const handleEmailEditClick = () => {
        setIsEmailEditing(true);
    };

    // save functions
    const handleNameSaveClick = () => {
        setIsNameEditing(false);
    };
    const handleEmailSaveClick = () => {
        setIsEmailEditing(false);
    };

    // cancel functions
    const handleNameCancelClick = () => {
        setIsNameEditing(false);
        // Optionally reset to previous value
        setFullName('Dominik Tyka');
    };
    const handleEmailCancelClick = () => {
        setIsEmailEditing(false);
        // Optionally reset to previous value
        setFullName('Dominik Tyka');
    };

    return (
        <div className="p-4 md:p-6 w-full shadow-lg border rounded-lg mx-auto">
            <h2 className="text-xl text-center font-semibold mb-4">My profile</h2>
            <p className="text-gray-500 text-center mb-6">Manage your profile details.</p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                {/* name field div */}
                <div className="mb-4">
                    <label className="block text-gray-700">Full name</label>
                    <div className="flex items-center space-x-2">
                        {/* conditionally rendering name input field */}
                        {isNameEditing ? (
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border p-2 rounded-md w-full focus:outline-teal-500"
                            />
                        ) : (
                            <span>{fullName}</span>
                        )}
                        {/* conditionally rendering save buttons */}
                        {isNameEditing ? (
                            <>
                                <button
                                    onClick={handleNameSaveClick}
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleNameCancelClick}
                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleNameEditClick}
                                className="text-teal-600"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                {/* name field div ends */}
                <div className="mb-4">
                    <label className="block text-gray-700">Email address</label>
                    <div className="flex items-center space-x-2">
                        {
                            isEmailEditing ? (
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="border p-2 rounded-md w-full focus:outline-teal-500"
                                />
                            ) : <span>dom@designme.agency</span>
                        }

                        {/* conditionally rendering save buttons */}
                        {isEmailEditing ? (
                            <>
                                <button
                                    onClick={handleEmailSaveClick}
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleEmailCancelClick}
                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEmailEditClick}
                                className="text-teal-600"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Position</label>
                    <div className="flex items-center space-x-2">
                        <span>Product Designer</span>
                        <button className="text-blue-600">Edit</button>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700">Location</label>
                    <div className="flex items-center space-x-2">
                        <span>Cracow, Poland</span>
                        <button className="text-blue-600">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
