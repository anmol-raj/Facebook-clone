import { useSelector, shallowEqual } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedRoutes() {
  const user = useSelector((state) => ({ ...state }), shallowEqual);
  return user ? <Navigate to={"/"} /> : <Outlet />;
}
