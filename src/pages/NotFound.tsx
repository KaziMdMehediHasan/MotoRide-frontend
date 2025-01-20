import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="font-pop min-h-screen flex flex-col items-center justify-center gap-10">
            <div>
                <h1 className="text-4xl font-bold text-gray-600">He he boi! This page does not exists.</h1>
            </div>
            <div>
                <Link to='/' className="text-decoration-none text-teal-500 hover:text-gray-600">Go To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;