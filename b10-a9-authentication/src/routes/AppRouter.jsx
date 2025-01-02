import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Profile from "../pages/Profile/Profile";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthProvider from "../context/AuthContext";
import NotFound from "../pages/NotFound/NotFound";
import Resources from "../pages/Resources/Resources"; // Import Resources

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
        element: <ProtectedRoute />, 
        children: [
          {
            path: "",
            element: <ServiceDetails />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "profile",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          }
        ],
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "resources",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Resources />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />, // Catch-all route for 404 Not Found page
      }
    ]
  },
]);

export default router;
