import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import SigneUp from "./components/SigneUp";

import Profile from "./pages/Profile";

import SignIn from "./components/sign in/SignIn";



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

        }
    ]
    }
])