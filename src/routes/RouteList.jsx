import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/auth/Register";
import AdminLayout from "../Layouts/Admin";
import Login from "../Pages/auth/Login";
import Dashboard from "../pages/admin/AdminDashboard";
import Mahasiswa from "../Pages/admin/MahasiswaDashboard";

const RouteList = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "mahasiswa",
        element: <Mahasiswa />,
      },
    ],
  },
]);

export default RouteList;