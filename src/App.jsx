import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MahasiswaDashboard from "./Pages/admin/MahasiswaDashboard";

function App() {
  const RouteList = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/mahasiswa-dashboard",
      element: <MahasiswaDashboard />,
    },
  ]);

  return (
    <RouterProvider router={RouteList} />
  );
}

export default App;
