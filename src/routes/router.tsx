import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import Bikes from "../pages/Bikes";
import RentBike from "../pages/RentBike";
import MyRentals from "../pages/MyRentals";
import BikeDetails from "../pages/BikeDetails";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";
import ManageBikes from "../pages/ManageBikes";
import ManageUsers from "../pages/ManageUsers";
import RentalManagement from "../pages/RentalManagement";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import Faq from "../pages/Faq";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";


const isFromDashboard = true;

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/bikes',
        element: <Bikes />
    },
    {
        path: '/bikes/bike/:bikeId',
        element: <BikeDetails />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoutes>
                <Dashboard />
            </ProtectedRoutes>
        ),
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: '/dashboard/bikes',
                element: <Bikes isFromDashboard={isFromDashboard} />
            },
            {
                path: '/dashboard/bikes/bike/:bikeId',
                element: <BikeDetails isFromDashboard={isFromDashboard} />
            },
            // {
            //     path: '/dashboard/bikes/bike/:bikeId',
            //     element: <FormSubmission />
            // },
            {
                path: '/dashboard/manage-bikes',
                element: <ManageBikes />
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers />
            },
            {
                path: '/dashboard/rent',
                element: <RentBike />
            },
            {
                path: '/dashboard/myrentals',
                element: <MyRentals />,
            },
            {
                path: '/dashboard/rentalManagement',
                element: <RentalManagement />,
            },

        ]
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
    },
    {
        path: '/faq',
        element: <Faq />
    },
    {
        path: '/terms',
        element: <Terms />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;