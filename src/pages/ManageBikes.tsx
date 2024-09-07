import Loader from "../components/ui/Loader";
import { useGetBikesQuery } from "../redux/features/bikes/bikeApi";
import { TBike } from "../utils/Types";

const ManageBikes = () => {

    const { data: bikes, isLoading } = useGetBikesQuery({});
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="container mx-auto p-4">
            {/* Header section */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Manage Bikes</h1>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm transition-all">
                    Create New Bike
                </button>
            </div>

            {/* Table section */}
            <div className="overflow-x-auto">
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
                        {bikes.data.map((bike: TBike) => (
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
                                    <button className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 mx-1">
                                        Update
                                    </button>
                                    <button className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBikes;
