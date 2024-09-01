// <>
//     <div className="grid grid-cols-12">
//         {/* sidebar div */}
//         <div className="col-span-2 items-center h-[100vh]">
//             {/* menus */}
//             <div className="ml-10 my-10 flex flex-col items-start gap-6">
//                 <li>Profile</li>
//                 <li>Bikes</li>
//                 <li>Rent a Bike</li>
//                 <li>My Rentals</li>
//             </div>
//         </div>
//         {/* sidebar div ends */}
//         {/* main content  */}
//         <div className="col-span-10 h-[100vh]">
//             main content
//         </div>
//         {/* main content ends */}
//     </div>

{/* Teams */ }
{/* <div className="mt-8">
    <h3 className="text-xs uppercase text-gray-500 font-semibold">Your Teams</h3>
    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-700">
        Heroicons
    </a>
    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-700">
        Tailwind Labs
    </a>
    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-700">
        Workcation
    </a>
</div> */}

// </>
{/* profile picture */ }
<div className="w-1/3 mx-auto flex flex-col justify-center items-center m-6">
    <div className="flex flex-col items-center justify-center space-y-3">
        <img className='w-60 h-60 rounded-full shadow-lg' src={loginImg} alt="profile_picture" />
        <button
            className="px-4 py-2 bg-teal-500 text-white rounded-md shadow-lg">Edit Photo
        </button>
    </div>
</div>

{/* update info modal starts*/ }
{
    isModalOpen && (
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
                                    placeholder={name}
                                    onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
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
                                    name="email"
                                    id="email"
                                    pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
                                    type="email"
                                    placeholder={email}
                                    onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
                                    className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    placeholder={phone}
                                    onChange={(e) => setUpdateUser({ ...updateUser, phone: (e.target.value).toString() })}
                                    className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700">Location</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder={address}
                                    onChange={(e) => setUpdateUser({ ...updateUser, address: e.target.value })}
                                    className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                />
                            </div>
                        </div>
                        {/* form buttons */}
                        <div className="space-x-2 mt-4">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    handleSubmit();
                                }}
                                type='button'
                                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen(!isModalOpen);
                                    setUpdateUser(updateUserValues);
                                }}
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
{/* update info modal ends */ }