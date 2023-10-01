import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-5xl">Loading...</div>;
  if (!user?.email) return <Navigate to={"/"} />;
  return children;
};

export default PrivateRoute;
