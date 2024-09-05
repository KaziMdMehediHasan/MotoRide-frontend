import { useParams } from "react-router-dom"
import { useGetSingleBikeQuery } from "../redux/features/bikes/bikeApi";
import Loader from "../components/ui/Loader";
import { TBike, TLoggedInUser } from "../utils/Types";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

export default function BikeDetails() {
    const { bikeId } = useParams();
    // modal opening or closing state
    const updateBikeValues: TBike = {
        name: '',
        description: '',
        pricePerHour: 0,
        isAvailable: false,
        cc: 0,
        model: '',
        brand: '',
        year: 0
    }
    const [updateBike, setUpdateBike] = useState(updateBikeValues);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [imgPath, setImgPath] = useState('');
    const { data: bikeDetail, isLoading } = useGetSingleBikeQuery(bikeId as string, {});
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role;
    let name, description, brand, isAvailable, model, pricePerHour, year, cc;

    if (user !== null) {
        role = user?.role as string;
        // userEmail = user?.userEmail as string;
    }

    if (isLoading) {
        return <Loader />
    }

    if (bikeDetail && bikeDetail.data) {
        ({ name, description, brand, isAvailable, model, pricePerHour, year, cc } = bikeDetail.data);
    }

    // handling image select function
    const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        // type guard to avoid type error
        if (!e.target.files || e.target.files.length === 0) {
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
            return;
        }
        const file = e.target.files[0]
        // const imgBase64 = await convertImgToBase64(file);

        if (file && file.type.startsWith('image/')) {
            console.log('compatible file');
            setImgPath(URL.createObjectURL(e.target.files[0]));
            setError('');
            // setUploadImg({ ...uploadImg, profileImg: imgBase64 as string });
            // setUpdateUser({ ...updateUser, profileImg: imgBase64 as string });
            // setUploadImg({ ...uploadImg, profileImg: '' });
        } else {
            setImgPath('');
            setError('Please select a compatible image file (.jpg, .png or .jpeg).');
        }

    }

    // update data submit to the server
    const handleUpdateDataSubmit = async () => {
        let bikeInfo: TBike = {};
        // formatting the data to send to the server
        for (const key in updateBike) {
            // console.log(updateUser[key]);
            if (updateBike[key as keyof TBike]) {
                bikeInfo = { ...bikeInfo, [key]: updateBike[key as keyof TBike] }
            }
        }
        console.log(bikeInfo);
        // checking email
        // if (userInfo.email) {
        //     if (validateEmail(userInfo.email)) {
        //         await updateUserDetails(userInfo);
        //     } else {
        //         // return <Warning message={ErrorMessage} />;
        //         return (toast('Invalid email'));
        //     };
        // }

        // try {
        //     await updateUserDetails(userInfo);
        //     console.log('User updated successfully')
        // } catch (err) {
        //     console.log("Failed to update user:", err)
        // }
        // console.log(bikeInfo);
    }
    // getting the user role 

    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                {/* Breadcrumbs */}
                {/* <nav className="text-gray-600 text-sm">
                    <ol className="list-reset flex">
                        <li>
                            <a href="#" className="text-blue-600">Bike Models</a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600">Yamaha</a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>{name}</li>
                    </ol>
                </nav> */}
                {
                    role === 'admin' &&
                    (
                        <button
                            onClick={() => setIsModalOpen(!isModalOpen)}
                            className="mt-6 bg-teal-500 text-sm text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                            Update Bike
                        </button>
                    )
                }
                {/* Main section */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <img
                            src="https://via.placeholder.com/400" // Placeholder for the bike image
                            alt={name}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Details section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-600">{name}</h2>
                        <p className="text-sm text-gray-500 mt-2">{brand} - {model}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-xl font-semibold text-gray-600">€{pricePerHour}/hour</span>
                            {isAvailable ? (
                                <span className="ml-3 text-green-600 text-sm font-medium">(Available)</span>
                            ) : (
                                <span className="ml-3 text-red-600 text-sm font-medium">(Not Available)</span>
                            )}
                        </div>

                        <p className="mt-6 text-gray-600">{description}</p>

                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>
                                <strong>CC:</strong> {cc}
                            </li>
                            <li>
                                <strong>Model Year:</strong>{year || ' Not available'}
                            </li>
                        </ul>

                        <button className="mt-6 w-full bg-teal-500 text-white font-bold py-2 px-4 text-sm rounded-md hover:bg-teal-600 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            {/* modal */}
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
                                        <label className="block text-gray-700">Bike Name</label>
                                        <div className="flex items-center space-x-2">
                                            {/* conditionally rendering name input field */}
                                            <input
                                                type="text"
                                                placeholder={name}
                                                onChange={(e) => setUpdateBike({ ...updateBike, name: e.target.value })}
                                                className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                            />
                                            {/* conditionally rendering save buttons */}
                                        </div>
                                    </div>
                                    {/* name field div ends */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Description</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                name="email"
                                                id="email"
                                                pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
                                                type="email"
                                                placeholder={description}
                                                onChange={(e) => setUpdateBike({ ...updateBike, description: e.target.value })}
                                                className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                            />
                                        </div>
                                    </div>
                                    {/* brand field */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Brand</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="number"
                                                placeholder={brand}
                                                onChange={(e) => setUpdateBike({ ...updateBike, brand: (e.target.value) })}
                                                className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">CC</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="number"
                                                placeholder={`${cc}`}
                                                onChange={(e) => setUpdateBike({ ...updateBike, cc: Number(e.target.value) })}
                                                className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                            />
                                        </div>
                                    </div>
                                    {/* model field */}
                                    <div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Model</label>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="text"
                                                    placeholder={model}
                                                    onChange={(e) => setUpdateBike({ ...updateBike, model: e.target.value })}
                                                    className=" border p-2 rounded-md w-full focus:outline-teal-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* availability radio */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                onClick={(e) => {
                                                    console.log(e.currentTarget.checked);
                                                    if (e.currentTarget.checked) {
                                                        setUpdateBike({ ...updateBike, isAvailable: true })
                                                    }
                                                    // setUpdateBike({ ...updateBike, isAvailable: e.currentTarget.checked })
                                                }}
                                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
                                            <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Available</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                onClick={(e) => {
                                                    console.log(e.currentTarget.checked);
                                                    if (e.currentTarget.checked) {
                                                        setUpdateBike({ ...updateBike, isAvailable: false });
                                                    }
                                                }}
                                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500" />
                                            <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-700">Not Available</label>
                                        </div>
                                    </div>
                                    {/* availability radio end */}
                                    {/* view the selected image */}
                                    <div className='w-full h-64 '>
                                        <img
                                            className='w-full rounded-lg h-64 object-cover'
                                        // src={imgPath}
                                        />
                                    </div>
                                    {/* image upload field */}
                                    <div>
                                        <input
                                            required
                                            accept='.png, .jpg, .jpeg'
                                            className="mt-4 w-full file:cursor-pointer text-sm text-slate-500 file:mr-8 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-200 file:text-teal-700 hover:file:bg-teal-300"
                                            type="file"
                                        // onChange={handleImageSelect}
                                        />
                                    </div>
                                    {
                                        error && (
                                            <div className="mt-4 bg-red-200 text-red-600 rounded-md shadow-lg py-2 px-4">
                                                {error}
                                            </div>
                                        )
                                    }
                                    {/* form buttons */}
                                    <div className="space-x-2 mt-4">
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(false);
                                                handleUpdateDataSubmit();
                                            }}
                                            type='button'
                                            className="bg-teal-500 hover:bg-teal-600 text-sm text-white px-4 py-2 rounded-md"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(!isModalOpen);
                                                // setUpdateUser(updateUserValues);
                                            }}
                                            className="bg-gray-300 px-4 text-sm py-2 rounded-md"
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
    )
}
