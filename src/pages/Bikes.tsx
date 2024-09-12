import ProductCard from "../components/ProductCard";
import { useGetBikesQuery } from "../redux/features/bikes/bikeApi";
import Loader from "../components/ui/Loader";
import { TBike } from "../utils/Types";

export default function Bikes() {

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
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 font-pop gap-4 2xl:gap-6 items-center'>
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
                        />
                    ))
                }
            </div>
        </>
    )
}
