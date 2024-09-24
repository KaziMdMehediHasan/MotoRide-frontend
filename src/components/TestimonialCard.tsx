interface TestimonialProps {
    avatar: string;
    quote: string;
    name: string;
    location: string;
    date: string;
}

const TestimonialCard = ({ avatar, quote, name, location, date }: TestimonialProps) => {
    return (
        <div className="w-80 xl:w-96 rounded-xl overflow-hidden shadow-xl border-2 border-primary bg-gray-50 p-6 m-4">
            <img className="w-40 h-40 object-cover shadow-lg shadow-teal-100 rounded-full mx-auto" src={avatar} alt={`${name}'s avatar`} />
            <div className="text-center space-y-4">
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6 mx-auto text-blue-500">
                    {/* SVG path for quote icon */}
                </svg>
                <p className="font-normal">{quote.slice(0, 98)}</p>
                <div className="border-b border-gray-200 my-3"></div>
                <p className="text-center">{name}</p>
                <p className="text-gray-600">{location}</p>
                <p className="text-gray-400">{date}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;