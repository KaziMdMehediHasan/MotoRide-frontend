import { useParams } from "react-router-dom"

export default function BikeDetails() {
    const { bikeId } = useParams();
    const bike = {
        _id: "666eb0da289e4911f17b812f",
        name: "Mountain Bike",
        description: "A durable mountain bike for rough terrains.",
        pricePerHour: 15,
        isAvailable: false,
        cc: 250,
        model: "X1",
        brand: "Yamaha",
        year: 2021,
    }
    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                {/* Breadcrumbs */}
                <nav className="text-gray-600 text-sm">
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
                        <li>{bike.name}</li>
                    </ol>
                </nav>

                {/* Main section */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <img
                            src="https://via.placeholder.com/400" // Placeholder for the bike image
                            alt={bike.name}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Details section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{bike.name}</h2>
                        <p className="text-sm text-gray-500 mt-2">{bike.brand} - {bike.model}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-xl font-semibold text-gray-800">€{bike.pricePerHour}/hour</span>
                            {bike.isAvailable ? (
                                <span className="ml-3 text-green-600 text-sm font-medium">(Available)</span>
                            ) : (
                                <span className="ml-3 text-red-600 text-sm font-medium">(Not Available)</span>
                            )}
                        </div>

                        <p className="mt-6 text-gray-700">{bike.description}</p>

                        <ul className="mt-6 space-y-2">
                            <li>
                                <strong>CC:</strong> {bike.cc}
                            </li>
                            <li>
                                <strong>Model Year:</strong> {bike.year}
                            </li>
                        </ul>

                        <button className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
