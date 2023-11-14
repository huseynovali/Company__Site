import { Navigate, Outlet } from "react-router";

function AuthRoutes() {
  const isTrue = true;
  const loading = false;
  if (loading) {
    return <p>Loading...</p>;
  }

  if (isTrue) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default AuthRoutes;
