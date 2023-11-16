import { useRoutes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PriovateRoutes";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login";
import Profile from "../page/Profile";
import Home from "../page/Home";

function MainRoutes() {
  const Routes = useRoutes([
    {
      element: <MainLayout />,
      path: "/",
      children: [
        {
         index:true,
         element:<Home/>
        },
        {
          element: <AuthRoutes />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
            },
          ],
        },
      ],
    },
  ]);

  return Routes;
}

export default MainRoutes;
