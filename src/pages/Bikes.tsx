import ProductCard from "../components/ProductCard";

export default function Bikes() {
    const iterator = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 font-pop gap-4 2xl:gap-6 items-center'>
                {
                    iterator.map(item => <ProductCard key={item} />)
                }
            </div>
        </>
    )
}
