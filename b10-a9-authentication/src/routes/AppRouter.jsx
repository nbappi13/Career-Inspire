import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "service-details/:id",
          element: <ServiceDetails></ServiceDetails>,  
        }
    ]
  },
]);

export default router;
