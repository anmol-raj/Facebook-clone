import { shallowEqual, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

const LoggedInRoutes = () => {
  const user = useSelector((state) => ({ ...state }), shallowEqual);
  return user ? <Outlet /> : <Login />;
};

export default LoggedInRoutes;
