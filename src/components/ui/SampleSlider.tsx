import '../../css/slide.css';

interface props {
    data: {
        image: string;
        title: string;
        role: string;
    }[]
}
export function ImageCard({ data }: props) {
    return (
        <div
            className="images"
        >
            {data.map((item, index) => (
                <div className="relative" key={index}>
                    <div className="w-[22rem] h-[500px] bg-white rounded-lg shadow-md">
                        <img className="w-full h-full object-cover mb-4 rounded-lg" src={item.image} alt="Card" />
                    </div>
                    <div className='absolute px-4 py-2 bottom-8 backdrop-blur-md bg-primary bg-opacity-40 rounded-r-xl text-white'>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-gray-200">{item.role}</p>
                    </div>
                </div>

            ))}

        </div>
    )
}


const TeamSlider = ({ data }: props) => {
    return (
        <div className="wrapper flex space-x-4 overflow-x-hidden mx-auto rounded-lg">
            <div className="banner-wrapper">
                <div className="wrapper">
                    <ImageCard data={data} />
                    <ImageCard data={data} />
                </div>
            </div>
        </div>
    );
}

export default TeamSlider