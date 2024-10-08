import { useState } from "react";
import { useGetUserDetailsQuery, useUpdateUserDetailsMutation } from "../redux/features/auth/authApi";
import Loader from "../components/ui/Loader";
import { TUpdateUser, TUserInfo } from "../utils/Types";

export default function Profile() {

    const updateUserValues: TUpdateUser = {
        name: '',
        email: '',
        phone: '',
        address: '',
        profileImg: ''
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdatePhoto, setIsUpdatePhoto] = useState(false);
    // setting error for failed operations
    const [error, setError] = useState('');
    const [updateUser, setUpdateUser] = useState(updateUserValues);
    // file upload states
    const [imgPath, setImgPath] = useState('');
    const [uploadImg, setUploadImg] = useState({ profileImg: '' });
    // const ErrorMessage: string = 'Enter a valid email';
    // fetching user data with the help of redux
    const { data, isLoading } = useGetUserDetailsQuery({});
    console.log('user data fetching', data)
    // updating user data with the help of redux
    const [updateUserDetails, { data: userUpdateData, error: userUpdateError }] = useUpdateUserDetailsMutation();

    console.log(userUpdateData);

    let name, email, phone, address;
    if (isLoading) {
        return <Loader />;
    }
    // using the type guard
    if (data && data.data) {
        ({ name, email, phone, address } = data.data);
    }

    //update userInfo functions and states

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    // converting image file to base64 string
    const convertImgToBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file); //convert to base64
            fileReader.onload = () => {
                resolve(fileReader.result); //returns the successful result
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    // select image function
    const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        // type guard to avoid type error
        if (!e.target.files || e.target.files.length === 0) {
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
            return;
        }
        const file = e.target.files[0]
        const imgBase64 = await convertImgToBase64(file);

        if (file && file.type.startsWith('image/')) {
            console.log('compatible file');
            setImgPath(URL.createObjectURL(e.target.files[0]));
            setError('');
            setUploadImg({ ...uploadImg, profileImg: imgBase64 as string });
            setUpdateUser({ ...updateUser, profileImg: imgBase64 as string });
            // setUploadImg({ ...uploadImg, profileImg: '' });
        } else {
            setImgPath('');
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
        }

    }

    // user update function
    const handleUpdateDataSubmit = async () => {
        let userInfo: TUserInfo = {};
        // formatting the data to send to the server
        for (const key in updateUser) {
            // console.log(updateUser[key]);
            if (updateUser[key]) {
                userInfo = { ...userInfo, [key]: updateUser[key] }
            }
        }
        // checking email
        // if (userInfo.email) {
        //     if (validateEmail(userInfo.email)) {
        //         await updateUserDetails(userInfo);
        //     } else {
        //         // return <Warning message={ErrorMessage} />;
        //         return (toast('Invalid email'));
        //     };
        // }

        try {
            await updateUserDetails(userInfo);
            console.log('User updated successfully')
        } catch (err) {
            console.log("Failed to update user:", err)
        }

        console.log(userInfo);

    }

    const handlePhotoUpload = () => {
        if (imgPath) {
            console.log('Uploading file:', imgPath);
            setIsUpdatePhoto(false);
            setImgPath('');
            handleUpdateDataSubmit();
        } else {
            setError('No file selected or incorrect file type');
        }
    }

    return (
        <>
            <div className="p-4 md:p-6 w-full bg-gray-100 shadow-lg border rounded-lg mx-auto">
                <h2 className="text-xl text-gray-700 text-center font-semibold mb-4">My profile</h2>
                <p className="text-gray-500 text-center mb-6">Manage your profile details.</p>
                {/* profile information */}
                {/* profile picture */}
                <div className="w-1/3 mx-auto flex flex-col justify-center items-center m-6">
                    <div className="flex flex-col relative group items-center justify-center">
                        <img className='w-60 h-60 object-cover overflow-hidden rounded-full shadow-lg' src={data?.data?.profileImg || ''} alt="profile_picture" />
                        <div className='bg-gray-700 w-60 h-60 rounded-full opacity-0 group-hover:opacity-50 absolute duration-300 flex justify-center items-center text-xl text-white font-semibold'>Overlay</div>
                        <button
                            onClick={() => setIsUpdatePhoto(!isUpdatePhoto)}
                            className="px-4 py-2 bg-teal-500 text-white text-sm rounded-md shadow-lg opacity-0 transition-opacity group-hover:opacity-100 absolute duration-300 flex justify-center items-center">Edit Photo
                        </button>
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col lg:flex-row justify-between p-6">
                    {/* infos */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Full name</label>
                            <span>{name}</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email address</label>
                            <span>{email}</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <span>{phone}</span>
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <span>{address}</span>
                        </div>
                    </div>
                    {/* update button to open modal */}
                    <div>
                        <button
                            onClick={() => {
                                setIsModalOpen(!isModalOpen);
                            }}
                            className="px-4 py-2 bg-teal-500 text-white text-sm rounded-md shadow-lg transition-transform transform hover:scale-105">Update Information
                        </button>
                    </div>
                </div>
            </div>
            {/* update info modal starts*/}
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
                                                handleUpdateDataSubmit();
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
            {/* update info modal ends */}
            {
                isUpdatePhoto && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsUpdatePhoto(false)}
                        ></div>
                        <div className='fixed inset-0 flex items-center justify-center'>
                            <div className="p-4 md:p-6 w-1/2 mx-auto bg-gray-200 absolute shadow-lg border rounded-lg transform transition-all duration-300 ease-out scale-100">
                                {/* modal close icon starts*/}
                                <span
                                    className='absolute top-2 right-4 cursor-pointer text-xl text-gray-600 bg-gray-300 py-1 px-3 rounded-md hover:bg-red-400 hover:text-white'
                                    onClick={() => {
                                        setIsUpdatePhoto(false);
                                        setError('');
                                        setImgPath('');
                                        setUploadImg({ ...uploadImg, profileImg: '' });
                                    }}
                                >
                                    X
                                </span>
                                {/* modal close icon ends*/}
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className="block font-semibold text-center text-xl text-gray-700 mb-4">Upload New Photo</h1>
                                    {/* view selected image */}
                                    <div className='w-64 h-64'>
                                        <img
                                            className='w-64 h-64 rounded-full object-cover object-center'
                                            src={imgPath}
                                        />
                                    </div>
                                    {/* choose image field */}
                                    <div>
                                        <input
                                            required
                                            accept='.png, .jpg, .jpeg'
                                            className="mt-4 w-full file:cursor-pointer text-sm text-slate-500 file:mr-8 file:ml-7 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-200 file:text-teal-700 hover:file:bg-teal-300"
                                            type="file"
                                            onChange={handleImageSelect} />
                                    </div>
                                    {
                                        error && (
                                            <div className="mt-4 bg-red-200 text-red-600 rounded-md shadow-lg py-2 px-4">
                                                {error}
                                            </div>
                                        )
                                    }
                                    <div className="mt-4">
                                        <button
                                            onClick={handlePhotoUpload}
                                            type="button"
                                            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm rounded-md shadow-lg transition-transform transform hover:scale-105">
                                            Upload
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
