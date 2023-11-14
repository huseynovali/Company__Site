import { useRoutes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PriovateRoutes";

function MainRoutes() {
  const Routes = useRoutes([
    {
      element: <p>Layout</p>,
      path: "/",
    },
    {
      element: <AuthRoutes />,
      children: [
        {
          path: "/login",
          element: <p>Login</p>,
        },
      ],
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/profile",
          element: <p>Profile</p>,
        },
      ],
    },
  ]);

  return Routes;
}

export default MainRoutes;
