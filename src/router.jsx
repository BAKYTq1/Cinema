import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import SigneUp from "./components/Sign up/SigneUp";
import Profile from "./pages/Profile";
import SignIn from "./components/sign in/SignIn";
import MovieDetails from "./pages/MovieDetails";
import FilterComedy from "./components/FilterPages/FilterComedy";
import FilterDrama from "./components/FilterPages/FilterDrama";
import FilterHorror from "./components/FilterPages/FilterHorror";
import SearchPage from "./components/Search/SearchPage";


export const myRouter = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/signup",
            element: <SigneUp />
        },
        {

            path: "/profile",
            element: <Profile />
        },
        {
            path: "/signin",
            element: <SignIn />

        },
        {
            path: "/movie/:id",
            element: <MovieDetails />
        },
        {
            path: "/filter/comedy",
            element: <FilterComedy />
        },
        {
            path: "/filter/drama",
            element: <FilterDrama />
        },
        {
            path: "/filter/horror",
            element: <FilterHorror />
        },
        {
            path: "/search",
            element: <SearchPage />
        }
    ]
    }
])