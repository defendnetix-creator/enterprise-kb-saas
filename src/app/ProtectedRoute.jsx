import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {
  const { user } = useAuth();

  // If no user logged in → redirect to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If role doesn't match → redirect to login
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
