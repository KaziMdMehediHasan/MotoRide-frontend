import { useParams } from "react-router-dom"
import { useGetSingleBikeQuery } from "../redux/features/bikes/bikeApi";
import Loader from "../components/ui/Loader";
import { TLoggedInUser } from "../utils/Types";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";
import FormSubmission from "./FormSubmission";

export default function BikeDetails() {
    const { bikeId } = useParams();
    // modal opening or closing state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: bikeDetail, isLoading } = useGetSingleBikeQuery(bikeId as string, {});

    // new code ends here
    const user: TLoggedInUser | null = useAppSelector((state) => state.auth.user);
    let role;
    let name, description, brand, isAvailable, model, pricePerHour, year, cc, img;

    if (user !== null) {
        role = user?.role as string;
        // userEmail = user?.userEmail as string;
    }

    if (isLoading) {
        return <Loader />
    }

    if (bikeDetail && bikeDetail.data) {
        ({ name, description, brand, isAvailable, model, pricePerHour, year, cc, img } = bikeDetail.data);
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
                            src={img} // Placeholder for the bike image
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
                        <FormSubmission setIsModalOpen={setIsModalOpen} bikeData={bikeDetail?.data} />
                    </>
                )
            }
        </>
    )
}
