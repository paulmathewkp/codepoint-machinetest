import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import MasterForm from "../Pages/MasterForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MasterForm />
            },
        ]
    }
])

export default router;