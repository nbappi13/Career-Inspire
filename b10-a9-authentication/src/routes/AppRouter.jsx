import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Authentication/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthProvider from "../context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><MainLayout /></AuthProvider>,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "service-details/:id",
          element: <ServiceDetails />,  
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "protected",
          element: <ProtectedRoute />,
          children: [
            //protected routes
          ],
        },
    ]
  },
]);

export default router;
