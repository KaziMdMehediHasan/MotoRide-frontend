import ProductCard from "../components/ProductCard";
import { useGetBikesQuery } from "../redux/features/bikes/bikeApi";
import Loader from "../components/ui/Loader";
import { TBike } from "../utils/Types";
import Navbar from "../components/ui/Navbar";

interface props {
    isFromDashboard?: boolean;
}
export default function Bikes({ isFromDashboard }: props) {

    let bikeData: TBike[] = [];

    const { data, isLoading } = useGetBikesQuery({});
    // loader placed if data is still not fetched properly
    if (isLoading) {
        return <Loader />
    }

    // using the type guard
    if (data && data.data) {
        bikeData = [...data.data];
    }
    console.log(bikeData);
    return (
        <>
            {
                !isFromDashboard && (<Navbar />)
            }
            <div className={`grid grid-cols-1 ${isFromDashboard ? 'w-full' : 'w-[70%] mx-auto mt-8'} md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 font-pop gap-4 2xl:gap-6 items-center`}>
                {
                    bikeData.map((item) => (
                        <ProductCard
                            key={item?._id}
                            name={item?.name}
                            description={item?.description}
                            cc={item?.cc}
                            _id={item?._id}
                            pricePerHour={item?.pricePerHour}
                            img={item?.img}
                            isAvailable={item?.isAvailable}
                        />
                    ))
                }
            </div>
        </>
    )
}
