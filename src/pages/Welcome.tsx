import Loader from "../components/ui/Loader";
import { useGetUserDetailsQuery } from "../redux/features/auth/authApi";

const Welcome = () => {
    // fetching user data with the help of redux
    const { data, isLoading } = useGetUserDetailsQuery({});
    let name;
    if (isLoading) {
        return <Loader />;
    }
    // using the type guard
    if (data && data.data) {
        ({ name } = data.data);
    }

    return (
        <div className="h-[80vh] flex justify-center items-center text-center">
            {/* Main Content */}
            <div className="bg-white rounded-lg">
                <h2 className="text-3xl font-bold text-gray-600 mb-4">{`Welcome Back ${name}!`}</h2>
                <p className="text-gray-600 mb-6">
                    You're all set to manage Bikes, Rentals, and Users. Explore the left pane menus to start.
                </p>
            </div>
        </div>
    );
};

export default Welcome;