import { Navigate, Outlet } from "react-router";

function PrivateRoutes() {
    const isTrue = true;
    const loading = false;
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (isTrue) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoutes;
