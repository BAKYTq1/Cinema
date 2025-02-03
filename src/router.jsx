import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import SigneUp from "./components/SigneUp.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./components/sign in/SignIn.jsx";
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