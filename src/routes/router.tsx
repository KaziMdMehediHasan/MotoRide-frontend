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

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
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
        element: <Dashboard />,
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