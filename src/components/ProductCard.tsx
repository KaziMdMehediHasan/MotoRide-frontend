import { Link } from "react-router-dom";
import { TBike } from "../utils/Types";

export default function ProductCard({ name, description, cc, _id, pricePerHour, img }: TBike) {
    return (
        <>
            <div className="max-w-sm md:max-w-md lg:w-80 xl:w-72 2xl:w-[23rem] mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                    <img
                        src={img as string || ''}
                        alt="Product"
                        className="w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-black text-white text-sm font-bold rounded-full p-2 mt-2 ml-2">
                        ${pricePerHour}
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-600">
                        {name?.slice(0, 20)}
                    </h2>
                    <p className="mt-2 text-gray-600 text-sm">
                        {description?.slice(0, 30)}
                    </p>
                    <p className="mt-2 text-gray-400 font-semibold text-lg">
                        {cc} CC
                    </p>
                    <Link to={`bike/${_id}`}>
                        <button className="mt-4 w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition-all">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </>
    )
}
