import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Register/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import Jobs from "../pages/Jobs/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
