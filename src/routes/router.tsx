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


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/bikes/:bikeId',
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
                element: <Bikes />
            },
            {
                path: '/dashboard/bikes/bike/:bikeId',
                element: <BikeDetails />
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
                path: '/dashboard/rent',
                element: <RentBike />
            },
            {
                path: '/dashboard/myrentals',
                element: <MyRentals />
            },

        ]
    }
])

export default router;