import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import SigneUp from "./components/SigneUp";


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
        }
    ]
    }
])