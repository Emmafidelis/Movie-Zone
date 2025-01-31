import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutButton from "./components/LogoutButton";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LogoutButton />,
      },
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <ProtectedRoute><HomePage /></ProtectedRoute>,
          },
          {
            path: "tv/:series_id",
            element: <DetailPage />,
          },
          {
            path: "movie/:movie_id",
            element: <DetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;