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
import PassForget from "../pages/ForgetPass/PassForget";
import FavoriteJobs from "../pages/Favorite/FavoriteJobs";
import PrivateRoute from "./PrivetRouter";
import CreatePost from "../pages/CreatePost/CreatePost";
import DetailsPage from "../pages/Details/DetailsPage";
import User from "../pages/UserPage/User";
import UserProvider from "../context/UserContext";
import LogOut from "../components/Logout/LogOut";
import EditPage from "../pages/EditPage/EditPage";
import AuthorPost from "../pages/AuthorPost/AuthorPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <MainLayout />
      </UserProvider>
    ),
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
        path: "/jobs/:id",
        element: <DetailsPage />,
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
        path: "/createpost",
        element: <CreatePost />,
      },
      {
        path: "/post/users/:id",
        element: <EditPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/user/:id",
        element: <AuthorPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgetpassword",
        element: <PassForget />,
      },
    ],
  },
]);
export default router;
