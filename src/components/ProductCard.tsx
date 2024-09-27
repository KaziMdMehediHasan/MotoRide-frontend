import { Link } from "react-router-dom";
import { TBike } from "../utils/Types";

export const ProductCard = ({ name, description, _id, pricePerHour, img, isHomePage, isAvailable }: TBike) => {
    return (
        <>
            <div key={_id} className="border border-teal-400 w-80 rounded-lg p-4 relative bg-gray-50 shadow-xl justify-self-center hover:scale-105 hover:shadow-2xl cursor-pointer transition-all duration-300">
                {
                    isHomePage && (<span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">Discount</span>)
                }
                {
                    !isHomePage && (<span className={`absolute top-2 left-2 ${isAvailable ? 'bg-secondary' : 'bg-pink-500'}  text-white text-xs px-2 py-1 rounded`}>{isAvailable ? 'Available' : 'Not Available'}</span>)
                }
                <img
                    src={img as string || ''}
                    alt={name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-600">{name}</h3>
                {!isHomePage && (<p className="text-sm text-gray-600">{description?.slice(0, 50)}...</p>)}

                <p className="text-sm line-through text-gray-400">${Number(pricePerHour) + 10}</p>
                <p className="text-xl font-semibold text-gray-600">${pricePerHour}</p>
                <Link to={isHomePage ? `bikes/bike/${_id}` : `bike/${_id}`}>
                    <p className="text-sm mt-2 font-semibold text-teal-500 hover:text-teal-600">See Details</p>
                </Link>
            </div>
        </>
    )
}
export default ProductCard;
